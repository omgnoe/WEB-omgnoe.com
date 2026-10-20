import { ImageResponse } from "next/og";

export const imageSize = { width: 32, height: 32 };
export const imageContentType = "image/png";

export function renderIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#171410",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 800,
          borderRadius: 7,
        }}
      >
        n
      </div>
    ),
    { ...imageSize },
  );
}
