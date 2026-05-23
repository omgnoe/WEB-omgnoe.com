import { ImageResponse } from "next/og";

export const alt = "Noe Nei — Developer building digital products";
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
          background: "#060606",
          backgroundImage:
            "radial-gradient(60% 60% at 80% 0%, rgba(124,58,237,0.35), transparent 70%), radial-gradient(50% 50% at 0% 100%, rgba(34,211,238,0.18), transparent 70%)",
          padding: 80,
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#fff",
              color: "#060606",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            n
          </div>
          <div style={{ fontSize: 28, color: "#8a8a92" }}>omgnoe.com</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            <span>Building digital</span>
            <span>products that ship.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#8a8a92" }}>
            Noe Nei · Full-stack developer & founder · Luxembourg
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
