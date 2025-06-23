import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Cryptographic Calculator";
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
          background: "#fcf6f3",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem",
          fontFamily: "'Inter', sans-serif",
          color: "#422913",
          gap: "1rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Icon container */}
        <img
          src="https://ciphertoolbox.com/icon.svg"
          width={120}
          height={120}
          alt="Cipher Toolbox"
        />
        {/* Title */}
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: 600,
            margin: 0,
            textAlign: "center",
            color: "#b88771",
            zIndex: 1,
            lineHeight: 1.1,
          }}
        >
          Cipher Toolbox
        </h1>
        {/* Tagline */}
        <p
          style={{
            fontSize: "1.6rem",
            color: "#705248",
            margin: 0,
            textAlign: "center",
            maxWidth: "75%",
            zIndex: 1,
            lineHeight: 1.4,
          }}
        >
          Free Online Encryption &amp; Encoding Tools
        </p>

        {/* Decorative gradients */}
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #A86E25 0%, transparent 70%)",
            top: "-175px",
            right: "-125px",
            opacity: 0.28,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "270px",
            height: "270px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #8C5E36 0%, transparent 70%)",
            bottom: "-135px",
            left: "-110px",
            opacity: 0.2,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
