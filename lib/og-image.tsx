import { ImageResponse } from "next/og";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";

export const ogAlt = "Noe Nei | Websites, apps & IT from Luxembourg";
export const imageSize = { width: 1200, height: 630 };
export const imageContentType = "image/png";

export function renderOgImage(locale: Locale) {
  const t = dict(locale).home;
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
            <span>{t.h1a}</span>
            <span style={{ display: "flex" }}>
              <span
                style={{
                  borderBottom: "10px solid #ff5a1f",
                  paddingBottom: 2,
                }}
              >
                {t.h1b}
              </span>
            </span>
          </div>
          <div style={{ marginTop: 30, fontSize: 30, color: "#716c61" }}>
            {t.kicker}
          </div>
        </div>
      </div>
    ),
    { ...imageSize },
  );
}
