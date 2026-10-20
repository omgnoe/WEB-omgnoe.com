"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { MOIEN_UNITS, type MoienUnit } from "@/lib/moien-words";

type RecState = "idle" | "recording" | "review" | "sending";

// How many recordings per word we consider "enough" (drives the colour hint).
const TARGET_PER_ITEM = 3;
// Hard cap: once a word reaches this many recordings it is closed — removed
// from the recording list and rejected server-side. Keep in sync with the
// MAX_PER_ITEM in lib/moien-store.ts.
const MAX_PER_ITEM = 5;

function itemKey(unitId: string, itemIndex: number): string {
  return `${unitId}#${itemIndex}`;
}

// Order item indices so the least-recorded words come first. This is the
// "suggestion" mechanism: contributors are steered to the gaps, so we stop
// collecting the same early words over and over.
function buildOrder(u: MoienUnit, counts: Record<string, number>): number[] {
  return u.items
    .map((_, i) => i)
    .filter((i) => (counts[itemKey(u.id, i)] || 0) < MAX_PER_ITEM)
    .sort((a, b) => {
      const ca = counts[itemKey(u.id, a)] || 0;
      const cb = counts[itemKey(u.id, b)] || 0;
      if (ca !== cb) return ca - cb;
      return a - b;
    });
}

function pickMime(): string {
  if (typeof MediaRecorder === "undefined") return "";
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/aac",
    "audio/ogg;codecs=opus",
  ];
  for (const c of candidates) {
    try {
      if (MediaRecorder.isTypeSupported(c)) return c;
    } catch {
      /* ignore */
    }
  }
  return "";
}

export default function RecordPage() {
  const [name, setName] = useState("");
  const [nameLocked, setNameLocked] = useState(false);
  const [unit, setUnit] = useState<MoienUnit | null>(null);
  const [order, setOrder] = useState<number[]>([]);
  const [pos, setPos] = useState(0);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [sent, setSent] = useState<Set<number>>(new Set());
  const [recState, setRecState] = useState<RecState>("idle");
  const [seconds, setSeconds] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const streamRef = useRef<MediaStream | null>(null);
  const recRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const blobRef = useRef<Blob | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // restore name
  useEffect(() => {
    const n = localStorage.getItem("moien_contrib_name");
    if (n) {
      setName(n);
      setNameLocked(true);
    }
  }, []);

  // load how many recordings each word already has
  const loadCounts = useCallback(async () => {
    try {
      const res = await fetch("/api/moien/counts", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setCounts(data.counts || {});
      }
    } catch {
      /* coverage is best-effort; recording still works without it */
    }
  }, []);

  useEffect(() => {
    loadCounts();
  }, [loadCounts]);

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => () => {
    stopStream();
    if (timerRef.current) clearInterval(timerRef.current);
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  }, [stopStream, audioUrl]);

  const resetRec = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    blobRef.current = null;
    chunksRef.current = [];
    setSeconds(0);
    setRecState("idle");
  }, [audioUrl]);

  async function ensureStream(): Promise<MediaStream> {
    if (streamRef.current) return streamRef.current;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;
    return stream;
  }

  async function startRec() {
    setError(null);
    try {
      const stream = await ensureStream();
      const mime = pickMime();
      const rec = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: rec.mimeType || "audio/webm" });
        blobRef.current = blob;
        setAudioUrl(URL.createObjectURL(blob));
        setRecState("review");
      };
      recRef.current = rec;
      rec.start();
      setRecState("recording");
      setSeconds(0);
      timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } catch {
      setError("Mir kommen net un däi Mikro. Erlab de Mikro-Zougrëff a probéier nach eng Kéier.");
      setRecState("idle");
    }
  }

  function stopRec() {
    if (timerRef.current) clearInterval(timerRef.current);
    try {
      recRef.current?.stop();
    } catch {
      /* ignore */
    }
  }

  async function sendRec() {
    if (!blobRef.current || !unit) return;
    const itemIndex = order[pos];
    setRecState("sending");
    setError(null);
    try {
      const fd = new FormData();
      const ext = (blobRef.current.type.includes("mp4") || blobRef.current.type.includes("aac")) ? "m4a" : "webm";
      fd.append("audio", blobRef.current, `rec.${ext}`);
      fd.append("unitId", unit.id);
      fd.append("itemIndex", String(itemIndex));
      fd.append("text", unit.items[itemIndex]);
      fd.append("contributor", name || "Anonym");
      const res = await fetch("/api/moien/contribute", { method: "POST", body: fd });
      if (res.status === 409) {
        // word filled up (reached the cap) while recording — mark it closed
        // locally and move on without counting this as a sent recording
        setCounts((c) => ({ ...c, [itemKey(unit.id, itemIndex)]: MAX_PER_ITEM }));
        advance();
        return;
      }
      if (!res.ok) throw new Error("upload failed");
      const next = new Set(sent);
      next.add(itemIndex);
      setSent(next);
      // reflect the new recording locally so the badge updates immediately
      setCounts((c) => {
        const key = itemKey(unit.id, itemIndex);
        return { ...c, [key]: (c[key] || 0) + 1 };
      });
      advance();
    } catch {
      setError("Schécken huet net geklappt. Probéier nach eng Kéier.");
      setRecState("review");
    }
  }

  function advance() {
    resetRec();
    if (!unit) return;
    if (pos + 1 >= order.length) {
      setDone(true);
      stopStream();
    } else {
      setPos((p) => p + 1);
    }
  }

  function skip() {
    resetRec();
    advance();
  }

  function openUnit(u: MoienUnit) {
    if (!name.trim()) {
      setError("Gëff w.e.g. däin Numm (oder Spëtznumm) un.");
      return;
    }
    const ord = buildOrder(u, counts);
    if (ord.length === 0) {
      setError(`„${u.titleLb}“ ass scho komplett, all d'Wierder hunn ${MAX_PER_ITEM} Opnamen. Merci! Wiel eng aner Unit.`);
      return;
    }
    localStorage.setItem("moien_contrib_name", name.trim());
    setNameLocked(true);
    setUnit(u);
    setOrder(ord);
    setPos(0);
    setSent(new Set());
    setDone(false);
    resetRec();
    setError(null);
  }

  function leaveUnit() {
    stopStream();
    if (timerRef.current) clearInterval(timerRef.current);
    resetRec();
    setUnit(null);
    setDone(false);
  }

  // ───────────────────────────── UI ─────────────────────────────
  if (!unit) {
    return (
      <main className="m-section">
        <div className="m-wrap">
          <TopNav />
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <span className="m-chip">🎙️ Maach mat</span>
            <h1 className="m-h2" style={{ marginTop: "0.7rem" }}>Huel Lëtzebuergesch Wierder op</h1>
            <p className="m-lead" style={{ marginTop: "0.5rem", maxWidth: 560, marginInline: "auto" }}>
              Wiel eng Unit, lies d&apos;Wierder lo a sprich se kloer an däi Mikro. Merci datt s du der App hëllefs!
            </p>
          </div>

          <div className="m-card" style={{ padding: "1.1rem", margin: "1.6rem auto 0", maxWidth: 460 }}>
            <label style={{ fontWeight: 800, fontSize: "0.9rem" }}>Däin Numm oder Spëtznumm</label>
            <input
              value={name}
              onChange={(e) => { setName(e.target.value); setNameLocked(false); }}
              placeholder="z.B. Anne aus Esch"
              style={inputStyle}
            />
            {nameLocked && <p style={{ color: "var(--m-green-deep)", fontWeight: 700, fontSize: "0.82rem", marginTop: "0.4rem" }}>✓ Gespäichert, du kanns direkt lass leeën.</p>}
          </div>

          {error && <p style={errStyle}>{error}</p>}

          <h2 style={{ fontWeight: 800, fontSize: "1.2rem", marginTop: "2rem", marginBottom: "0.3rem" }}>Wiel eng Unit</h2>
          <p style={{ color: "var(--m-muted)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.8rem" }}>
            Units mat de meeschte feelende Wierder bréngen am meeschten. Mir weisen der ëmmer fir d&apos;Wierder un, déi nach Opnamen brauchen.
          </p>
          <div className="m-grid-units">
            {MOIEN_UNITS.map((u, i) => {
              const needed = u.items.filter((_, j) => (counts[itemKey(u.id, j)] || 0) < MAX_PER_ITEM).length;
              const complete = needed === 0;
              return (
                <button key={u.id} className="m-card" onClick={() => openUnit(u)} style={{ ...unitCardStyle, opacity: complete ? 0.6 : 1 }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--m-blue-deep)" }}>UNIT {i + 1}</span>
                  <span style={{ fontWeight: 800, fontSize: "1.02rem", lineHeight: 1.1, marginTop: "0.2rem" }}>{u.titleLb}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--m-muted)", fontWeight: 700, marginTop: "0.4rem" }}>{u.items.length} Wierder</span>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      marginTop: "0.35rem",
                      padding: "0.18rem 0.5rem",
                      borderRadius: 999,
                      background: complete ? "rgba(0,154,90,0.12)" : "rgba(0,107,224,0.1)",
                      color: complete ? "var(--m-green-deep)" : "var(--m-blue-deep)",
                    }}
                  >
                    {complete ? "✓ Komplett" : `${needed} brauchen nach Opnamen`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  if (done) {
    return (
      <main className="m-section" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <div className="m-narrow" style={{ textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="m-bob" src="/moien/mascots/gelle_fra.png" alt="" width={150} height={150} style={{ margin: "0 auto" }} />
          <h1 className="m-h2" style={{ marginTop: "1rem" }}>Villmools merci! 🎉</h1>
          <p className="m-lead" style={{ marginTop: "0.6rem" }}>
            Du hues <strong>{sent.size}</strong> {sent.size === 1 ? "Opnam" : "Opnamen"} fir „{unit.titleLb}“ geschéckt. Du hëllefs richteg matzeschaffen.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.6rem" }}>
            <button className="m-btn m-btn-green m-btn-lg" onClick={leaveUnit}>Eng aner Unit</button>
            <Link href="/moien" className="m-btn m-btn-ghost m-btn-lg">Heem</Link>
          </div>
        </div>
      </main>
    );
  }

  const total = order.length;
  const progress = Math.round((pos / total) * 100);
  const curIndex = order[pos] ?? 0;
  const current = unit.items[curIndex];
  const curCount = counts[itemKey(unit.id, curIndex)] || 0;

  return (
    <main className="m-section" style={{ minHeight: "100vh" }}>
      <div className="m-narrow">
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <button onClick={leaveUnit} className="m-btn m-btn-ghost" style={{ padding: "0.5rem 0.9rem", fontSize: "0.85rem" }}>✕</button>
          <div className="m-progressbar" style={{ flex: 1 }}><div style={{ width: `${progress}%` }} /></div>
          <span style={{ fontWeight: 800, fontSize: "0.85rem", color: "var(--m-muted)" }}>{pos + 1}/{total}</span>
        </div>

        <div style={{ textAlign: "center", marginTop: "0.6rem" }}>
          <span style={{ fontWeight: 800, fontSize: "0.8rem", color: "var(--m-blue-deep)" }}>{unit.titleLb}</span>
        </div>

        <div className="m-card" style={{ padding: "2rem 1.2rem", marginTop: "1.2rem", textAlign: "center" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--m-muted)" }}>Sprich dëst kloer:</span>
          <p style={{ fontSize: "clamp(1.6rem, 7vw, 2.4rem)", fontWeight: 800, lineHeight: 1.15, marginTop: "0.6rem", color: "var(--m-ink)" }}>
            {current}
          </p>
          <CountBadge count={curCount} />
        </div>

        {error && <p style={errStyle}>{error}</p>}

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          {recState === "idle" && (
            <>
              <RecordButton onClick={startRec} />
              <p style={{ color: "var(--m-muted)", fontWeight: 700, marginTop: "1rem" }}>Dréck fir opzehuelen</p>
            </>
          )}

          {recState === "recording" && (
            <>
              <button onClick={stopRec} className="m-recording" style={{ ...micButtonStyle, background: "var(--m-red)" }}>
                <StopIcon />
              </button>
              <p style={{ color: "var(--m-red-deep)", fontWeight: 800, marginTop: "1rem", fontSize: "1.2rem" }}>● {fmt(seconds)}</p>
              <p style={{ color: "var(--m-muted)", fontWeight: 700 }}>Dréck fir ze stoppen</p>
            </>
          )}

          {(recState === "review" || recState === "sending") && (
            <>
              {audioUrl && <audio controls src={audioUrl} style={{ width: "100%", maxWidth: 360 }} />}
              <div style={{ display: "flex", gap: "0.7rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.2rem" }}>
                <button className="m-btn m-btn-ghost" onClick={resetRec} disabled={recState === "sending"}>↺ Nochmol</button>
                <button className="m-btn m-btn-green m-btn-lg" onClick={sendRec} disabled={recState === "sending"}>
                  {recState === "sending" ? "Schécken…" : "Gutt, schéck of →"}
                </button>
              </div>
            </>
          )}

          {recState === "idle" && (
            <button onClick={skip} className="m-btn" style={{ background: "transparent", color: "var(--m-muted)", boxShadow: "none", marginTop: "1.2rem" }}>
              Iwwersprangen →
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${m}:${ss.toString().padStart(2, "0")}`;
}

function CountBadge({ count }: { count: number }) {
  let label: string;
  let bg: string;
  let color: string;
  if (count === 0) {
    label = `Nach keng Opnam, dëst Wuert gëtt gebraucht 🙌 (0/${MAX_PER_ITEM})`;
    bg = "rgba(227,6,19,0.08)";
    color = "var(--m-red-deep)";
  } else if (count < TARGET_PER_ITEM) {
    label = `${count}/${MAX_PER_ITEM} Opnamen · nach gebraucht`;
    bg = "rgba(0,107,224,0.1)";
    color = "var(--m-blue-deep)";
  } else {
    label = `✓ ${count}/${MAX_PER_ITEM} Opnamen · gär nach e puer`;
    bg = "rgba(0,154,90,0.12)";
    color = "var(--m-green-deep)";
  }
  return (
    <span
      style={{
        display: "inline-block",
        marginTop: "0.9rem",
        padding: "0.32rem 0.8rem",
        borderRadius: 999,
        fontWeight: 800,
        fontSize: "0.8rem",
        background: bg,
        color,
      }}
    >
      {label}
    </span>
  );
}

function TopNav() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link href="/moien" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "var(--m-ink)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/moien/appicon.png?v=2" alt="Moien" width={34} height={34} style={{ borderRadius: 9 }} />
        <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--m-blue-deep)" }}>Moien</span>
      </Link>
    </div>
  );
}

function RecordButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ ...micButtonStyle, background: "var(--m-red)" }} aria-label="Ophuelen">
      <MicIcon />
    </button>
  );
}

const micButtonStyle: React.CSSProperties = {
  width: 110,
  height: 110,
  borderRadius: 999,
  border: "none",
  color: "#fff",
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  boxShadow: "0 8px 0 var(--m-red-deep)",
  margin: "0 auto",
};

function MicIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function StopIcon() {
  return <svg width="40" height="40" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2.5" fill="currentColor" /></svg>;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "0.4rem",
  padding: "0.8rem 1rem",
  borderRadius: 14,
  border: "2px solid var(--m-line)",
  fontSize: "1rem",
  fontWeight: 700,
  outline: "none",
};

const unitCardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  padding: "1rem",
  cursor: "pointer",
  background: "#fff",
};

const errStyle: React.CSSProperties = {
  background: "rgba(227,6,19,0.08)",
  color: "var(--m-red-deep)",
  fontWeight: 700,
  padding: "0.7rem 1rem",
  borderRadius: 12,
  marginTop: "1rem",
  textAlign: "center",
};
