"use client";

import { useCallback, useEffect, useState } from "react";

type Sub = {
  id: string;
  unitId: string;
  unitTitle: string;
  itemIndex: number;
  text: string;
  contributor: string;
  ext: string;
  mime: string;
  bytes: number;
  createdAt: string;
};
type UnitStat = { id: string; titleLb: string; totalItems: number; recordings: number; coveredItems: number };
type Data = {
  stats: { totalRecordings: number; contributors: number; coveredItems: number; totalItems: number };
  perUnit: UnitStat[];
  submissions: Sub[];
};

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [data, setData] = useState<Data | null>(null);
  const [unitFilter, setUnitFilter] = useState<string>("");

  const load = useCallback(async () => {
    const res = await fetch("/api/moien/admin/submissions");
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    if (res.ok) {
      setData(await res.json());
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoginError(null);
    const res = await fetch("/api/moien/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setPassword("");
      load();
    } else {
      setLoginError("Falscht Passwuert.");
    }
  }

  async function logout() {
    await fetch("/api/moien/admin/logout", { method: "POST" });
    setAuthed(false);
    setData(null);
  }

  if (authed === null) {
    return <main className="m-section" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}><p style={{ fontWeight: 700, color: "var(--m-muted)" }}>Lueden…</p></main>;
  }

  if (!authed) {
    return (
      <main className="m-section" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <form onSubmit={login} className="m-card" style={{ padding: "1.6rem", width: "min(92vw, 380px)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/moien/appicon.png" alt="" width={48} height={48} style={{ borderRadius: 12, margin: "0 auto", display: "block" }} />
          <h1 style={{ fontWeight: 800, fontSize: "1.4rem", textAlign: "center", marginTop: "0.8rem" }}>Moien Admin</h1>
          <p style={{ color: "var(--m-muted)", fontWeight: 600, textAlign: "center", fontSize: "0.9rem", marginTop: "0.2rem" }}>Audio-Beiträg verwalten</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Passwuert"
            style={inputStyle}
            autoFocus
          />
          {loginError && <p style={{ color: "var(--m-red-deep)", fontWeight: 700, fontSize: "0.85rem", marginTop: "0.5rem" }}>{loginError}</p>}
          <button type="submit" className="m-btn m-btn-blue m-btn-block" style={{ marginTop: "1rem" }}>Aloggen</button>
        </form>
      </main>
    );
  }

  if (!data) return null;

  const subs = unitFilter ? data.submissions.filter((s) => s.unitId === unitFilter) : data.submissions;
  const pct = data.stats.totalItems ? Math.round((data.stats.coveredItems / data.stats.totalItems) * 100) : 0;

  return (
    <main className="m-section">
      <div className="m-wrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.6rem" }}>
          <h1 style={{ fontWeight: 800, fontSize: "1.6rem" }}>Moien Admin</h1>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <a className="m-btn m-btn-green" href={`/api/moien/admin/download${unitFilter ? `?unit=${unitFilter}` : ""}`}>
              ⬇︎ {unitFilter ? "Unit" : "Alles"} als ZIP
            </a>
            <button className="m-btn m-btn-ghost" onClick={logout}>Ausloggen</button>
          </div>
        </div>

        {/* stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.8rem", marginTop: "1.4rem" }}>
          <Stat n={data.stats.totalRecordings} l="Opnamen" />
          <Stat n={data.stats.contributors} l="Bäidréiwer" />
          <Stat n={`${data.stats.coveredItems}/${data.stats.totalItems}`} l={`Ofgedeckt (${pct}%)`} />
        </div>

        {/* unit filter */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
          <Chip active={unitFilter === ""} onClick={() => setUnitFilter("")}>All Units</Chip>
          {data.perUnit.map((u) => (
            <Chip key={u.id} active={unitFilter === u.id} onClick={() => setUnitFilter(u.id)}>
              {u.titleLb} · {u.recordings}
            </Chip>
          ))}
        </div>

        {/* submissions */}
        <div style={{ marginTop: "1.4rem", display: "grid", gap: "0.6rem" }}>
          {subs.length === 0 && <p style={{ color: "var(--m-muted)", fontWeight: 700 }}>Nach keng Opnamen.</p>}
          {subs.map((s) => (
            <div key={s.id} className="m-card" style={{ padding: "0.9rem 1rem", display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "0.6rem", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>{s.text}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--m-muted)", fontWeight: 700 }}>
                    {s.unitTitle} · #{s.itemIndex + 1} · {s.contributor} · {new Date(s.createdAt).toLocaleString("de-DE")} · {(s.bytes / 1024).toFixed(0)} KB
                  </div>
                </div>
                <a className="m-btn m-btn-ghost" href={`/api/moien/admin/audio/${s.id}`} download style={{ padding: "0.45rem 0.8rem", fontSize: "0.82rem" }}>⬇︎</a>
              </div>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <audio controls preload="none" src={`/api/moien/admin/audio/${s.id}`} style={{ width: "100%", height: 36 }} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function Stat({ n, l }: { n: number | string; l: string }) {
  return (
    <div className="m-card" style={{ padding: "1rem", textAlign: "center" }}>
      <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--m-blue-deep)" }}>{n}</div>
      <div style={{ fontSize: "0.8rem", color: "var(--m-muted)", fontWeight: 700 }}>{l}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="m-pill"
      style={{
        cursor: "pointer",
        background: active ? "var(--m-blue)" : "#fff",
        color: active ? "#fff" : "var(--m-ink)",
        borderColor: active ? "var(--m-blue)" : "var(--m-line)",
      }}
    >
      {children}
    </button>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "1rem",
  padding: "0.8rem 1rem",
  borderRadius: 14,
  border: "2px solid var(--m-line)",
  fontSize: "1rem",
  fontWeight: 700,
  outline: "none",
};
