import { ImageResponse } from "next/og";

export const alt = "Savia — online yoga";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#083700",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#84FA6C",
            }}
          />
          <div style={{ fontSize: 72, fontWeight: 700 }}>Savia</div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 44,
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          {isEs
            ? "Más fuerte cada día, más en calma cada momento."
            : "Stronger every day, calmer every moment."}
        </div>
        <div style={{ marginTop: 32, fontSize: 28, color: "#84FA6C" }}>
          savia-yoga.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
