import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arhbit — Build Habits That Stick";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #F7F3EE 0%, #E8E4DF 40%, #C4B3E8 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(155, 126, 217, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(244, 168, 150, 0.15)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 24,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://arhbit.com/logo.png"
            alt=""
            width={100}
            height={100}
            style={{ borderRadius: 24 }}
          />
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#2D2D2D",
              letterSpacing: -2,
            }}
          >
            Arhbit
          </div>
        </div>

        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: -1,
            display: "flex",
            gap: 10,
          }}
        >
          <span style={{ color: "#2D2D2D" }}>Build habits</span>
          <span style={{ color: "#9B7ED9" }}>that actually stick</span>
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#7A7A7A",
            marginTop: 20,
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Accountability partners, smart streaks, and a companion who grows with you.
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 36,
          }}
        >
          {["Smart Streaks", "Accountability", "Heatmaps", "Widgets", "Companion"].map(
            (feature) => (
              <div
                key={feature}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(155, 126, 217, 0.2)",
                  borderRadius: 100,
                  padding: "8px 20px",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#7A5DC9",
                }}
              >
                {feature}
              </div>
            )
          )}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #9B7ED9, #F4A896, #7BC47F, #9B7ED9)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
