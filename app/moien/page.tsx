import Link from "next/link";
import { MOIEN_UNITS, MOIEN_TOTAL_ITEMS } from "@/lib/moien-words";

export const dynamic = "force-static";

const CAST: { img: string; name: string; role: string }[] = [
  { img: "leiw", name: "Léiw", role: "Däin Hauptguide duerch all Lektioun" },
  { img: "melusina", name: "Melusina", role: "Kultur, Mythen & Geschichten" },
  { img: "gelle_fra", name: "Gëlle Fra", role: "Sproochentest & Motivatioun" },
  { img: "juncker", name: "Juncker", role: "Politik, EU & formell Sprooch" },
  { img: "henri", name: "Grand-Duc Henri", role: "Etikett & héiflech Sprooch" },
  { img: "nana", name: "Nana", role: "Modern Konscht & Iwwerraschungen" },
];

const FEATURES: { icon: string; title: string; text: string }[] = [
  { icon: "ui_lightbulb", title: "7 Sektiounen, A1 bis B2", text: "E komplette Wee vun de éischte Wierder bis zum Sproochentest." },
  { icon: "streak", title: "Streaks & Liga", text: "Léier all Dag e bëssen — mat XP, Streaks an 10 Ligaen." },
  { icon: "culture_food", title: "Kultur agebaut", text: "Iessen, Mythen, Feste & Geschicht — Sprooch mat Séil." },
  { icon: "culture_music", title: "Echt Lëtzebuergesch Audio", text: "Wierder vun echte Lëtzebuerger Stëmmen — net Roboter-TTS." },
];

export default function MoienLanding() {
  const totalUnits = MOIEN_UNITS.length;
  return (
    <main>
      {/* Top bar */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,248,231,0.85)", backdropFilter: "blur(8px)", borderBottom: "2px solid var(--m-line)" }}>
        <div className="m-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/moien/appicon-mark.png" alt="Moien" width={38} height={38} style={{ borderRadius: 10 }} />
            <span style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--m-blue-deep)" }}>Moien</span>
          </div>
          <Link href="/moien/record" className="m-btn m-btn-green" style={{ padding: "0.6rem 1.1rem", fontSize: "0.95rem" }}>
            🎙️ Maach mat
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="m-sky" style={{ paddingTop: "2.5rem" }}>
        <div className="m-wrap m-section" style={{ paddingTop: "1rem", textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="m-bob" src="/moien/mascots/leiw.png" alt="Léiwchen" width={180} height={180} style={{ width: "min(46vw, 200px)", height: "auto", margin: "0 auto" }} />
          <h1 className="m-h1" style={{ marginTop: "0.5rem" }}>
            Léier <span style={{ color: "var(--m-blue-deep)" }}>Lëtzebuergesch</span><br />op déi schéinste Manéier
          </h1>
          <p className="m-lead" style={{ marginTop: "1rem", maxWidth: 540, marginInline: "auto" }}>
            Moien ass déi nei, spilleresch App fir Lëtzebuergesch ze léieren — mat Léiwchen a senge Frënn. A <strong>du</strong> kanns hëllefen, hir Stëmm ze ginn.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.6rem" }}>
            <Link href="/moien/record" className="m-btn m-btn-green m-btn-lg">🎙️ Huel Wierder op</Link>
            <a href="#app" className="m-btn m-btn-ghost m-btn-lg">D'App entdecken</a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="m-section" style={{ paddingBlock: "1.6rem" }}>
        <div className="m-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", textAlign: "center" }}>
          {[
            [`${MOIEN_TOTAL_ITEMS}+`, "Wierder & Sätz"],
            [`${totalUnits}`, "Units (A1.1)"],
            ["7", "Sektiounen"],
            ["8", "Sproochen"],
          ].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: "clamp(1.6rem, 6vw, 2.4rem)", fontWeight: 800, color: "var(--m-blue-deep)" }}>{n}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--m-muted)", fontWeight: 700 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* App showcase */}
      <section id="app" className="m-section">
        <div className="m-wrap">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="m-chip">📱 D'App</span>
            <h2 className="m-h2" style={{ marginTop: "0.8rem" }}>Léieren, dat sech wéi e Spill ufillt</h2>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>
            <div className="m-phone"> {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/moien/screens/welcome.png" alt="Moien Welcome" />
            </div>
            <div className="m-phone" style={{ marginTop: "1.4rem" }}> {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/moien/screens/learn.png" alt="Moien Léier-Pfad" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginTop: "2.4rem" }}>
            {FEATURES.map((f) => (
              <div key={f.title} className="m-card" style={{ padding: "1.2rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/moien/icons/${f.icon}.png`} alt="" width={44} height={44} />
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginTop: "0.6rem" }}>{f.title}</h3>
                <p style={{ color: "var(--m-muted)", fontWeight: 600, marginTop: "0.3rem", fontSize: "0.95rem" }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character cast */}
      <section className="m-section" style={{ background: "var(--m-soft)" }}>
        <div className="m-wrap">
          <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
            <span className="m-chip">🦁 D'Cast</span>
            <h2 className="m-h2" style={{ marginTop: "0.8rem" }}>Däi Léier-Team</h2>
            <p className="m-lead" style={{ marginTop: "0.5rem" }}>Sechs Charakteren mat Lëtzebuerger Séil begleeden dech.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
            {CAST.map((c) => (
              <div key={c.name} className="m-card" style={{ padding: "1rem", textAlign: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/moien/mascots/${c.img}.png`} alt={c.name} width={96} height={96} style={{ width: 96, height: 96, objectFit: "contain", margin: "0 auto" }} />
                <div style={{ fontWeight: 800, marginTop: "0.4rem" }}>{c.name}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--m-muted)", fontWeight: 600 }}>{c.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting / become a voice */}
      <section className="m-section">
        <div className="m-narrow" style={{ textAlign: "center" }}>
          <span className="m-chip" style={{ background: "rgba(227,6,19,0.1)", color: "var(--m-red-deep)" }}>❤️ Maach mat</span>
          <h2 className="m-h2" style={{ marginTop: "0.8rem" }}>Gëff der App deng Stëmm</h2>
          <p className="m-lead" style={{ marginTop: "0.8rem" }}>
            Eng Sproochapp brauch echt Stëmmen. Hëllef Moien, andeems du e puer Lëtzebuergesch Wierder oppwëlls — direkt hei am Browser, ouni eppes z&apos;installéieren. All Stëmm hëlleft, datt méi Leit Lëtzebuergesch léieren.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginTop: "1.8rem", textAlign: "left" }}>
            {[
              ["1", "Wiel eng Unit", "Sich der eng Lëscht aus — z.B. „Begréissungen“ oder „Zuelen“."],
              ["2", "Lies & huel op", "E Wuert gëtt gewisen, du dréckst op opniehmen a sees et."],
              ["3", "Schéck of", "Mat engem Klick gëtt et geschéckt. Merci! 🎉"],
            ].map(([n, t, d]) => (
              <div key={n} className="m-card" style={{ padding: "1.1rem" }}>
                <div style={{ width: 38, height: 38, borderRadius: 999, background: "var(--m-blue)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800, fontSize: "1.1rem" }}>{n}</div>
                <h3 style={{ fontWeight: 800, marginTop: "0.6rem" }}>{t}</h3>
                <p style={{ color: "var(--m-muted)", fontWeight: 600, fontSize: "0.92rem", marginTop: "0.2rem" }}>{d}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/moien/record" className="m-btn m-btn-green m-btn-lg m-btn-block" style={{ maxWidth: 360, marginInline: "auto" }}>
              🎙️ Lass — huel Wierder op
            </Link>
            <p style={{ color: "var(--m-muted)", fontWeight: 600, fontSize: "0.85rem", marginTop: "0.8rem" }}>
              Brauch e Mikro. Dauert sou laang wéi s du wëlls — och 2 Minutten hëllefen.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--m-ink)", color: "#fff", padding: "2rem 1.25rem", textAlign: "center" }}>
        <div className="m-wrap">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/moien/appicon-mark.png" alt="Moien" width={32} height={32} style={{ borderRadius: 8 }} />
            <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>Moien</span>
          </div>
          <p style={{ opacity: 0.7, fontWeight: 600, marginTop: "0.6rem", fontSize: "0.9rem" }}>
            Léier Lëtzebuergesch. Geschwënn am App Store & Play Store.
          </p>
          <p style={{ opacity: 0.5, fontWeight: 600, marginTop: "0.8rem", fontSize: "0.8rem" }}>
            Gebaut zu Lëtzebuerg · <a href="https://omgnoe.com" style={{ color: "var(--m-gold)" }}>omgnoe.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
