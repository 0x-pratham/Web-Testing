import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1714",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
          }}
        >
          COSMOLIX
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 30,
          }}
        >
          Intelligent Systems & Enterprise Software
        </div>
      </div>
    ),
    size
  );
}