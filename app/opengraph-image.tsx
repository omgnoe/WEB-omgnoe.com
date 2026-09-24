import { ImageResponse } from "next/og";

export const alt = "Noe Nei | Apps, websites & IT from Luxembourg";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2efe8",
          backgroundImage:
            "radial-gradient(60% 60% at 85% 0%, rgba(255,90,31,0.16), transparent 70%), radial-gradient(rgba(23,20,16,0.07) 2px, transparent 2px)",
          backgroundSize: "100% 100%, 34px 34px",
          padding: 80,
          color: "#171410",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#171410",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            n
          </div>
          <div style={{ fontSize: 28, color: "#716c61" }}>omgnoe.com</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 74,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            <span>Apps, websites and the</span>
            <span style={{ display: "flex" }}>
              systems that&nbsp;
              <span
                style={{
                  borderBottom: "10px solid #ff5a1f",
                  paddingBottom: 2,
                }}
              >
                keep them running.
              </span>
            </span>
          </div>
          <div style={{ marginTop: 30, fontSize: 30, color: "#716c61" }}>
            Noe Nei · Full-stack developer & founder · Luxembourg
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
