import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BG = "#0d1117";
const ACCENT = "#ff5a36";
const MUTED = "#96a0ad";

const clamp = (frame: number, input: [number, number], output: [number, number]) =>
  interpolate(frame, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const MovementAgePulse: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const firstIn = spring({ frame: frame - 8, fps, config: { damping: 180, stiffness: 160 } });
  const firstOut = 1 - clamp(frame, [76, 88], [0, 1]);
  const secondIn = spring({ frame: frame - 80, fps, config: { damping: 180, stiffness: 155 } });
  const footerIn = clamp(frame, [120, 140], [0, 1]);
  const count = Math.round(clamp(frame, [14, 51], [0, 7]));
  const orbit = clamp(frame, [0, 150], [-92, 272]);

  return (
    <AbsoluteFill
      style={{
        background: BG,
        color: "#f5f7fa",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 720,
          height: 720,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "50%",
          right: -255,
          top: orbit,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          border: "2px solid rgba(255,90,54,0.32)",
          borderRadius: "50%",
          right: -170,
          top: orbit + 102,
        }}
      />
      <div style={{ position: "absolute", left: 72, top: 68, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 38, height: 5, background: ACCENT }} />
        <div style={{ color: MUTED, fontWeight: 800, fontSize: 24, letterSpacing: 3.2 }}>PREVIA / MOVEMENT AGE</div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 72,
          right: 72,
          top: 250,
          opacity: firstIn * firstOut,
          transform: `translateY(${(1 - firstIn) * 38}px)`,
        }}
      >
        <div style={{ fontSize: 240, lineHeight: 0.8, letterSpacing: -18, fontWeight: 800, color: ACCENT }}>
          {count} <span style={{ color: "#f5f7fa", fontSize: 130, letterSpacing: -9 }}>IN 10</span>
        </div>
        <div style={{ fontSize: 72, fontWeight: 750, letterSpacing: -3.5, lineHeight: 1.03, marginTop: 58 }}>
          moved older than<br />their actual age.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 72,
          right: 72,
          top: 273,
          opacity: secondIn,
          transform: `translateY(${(1 - secondIn) * 38}px)`,
        }}
      >
        <div style={{ color: ACCENT, fontSize: 27, fontWeight: 800, letterSpacing: 3.5 }}>THE AVERAGE GAP</div>
        <div style={{ fontSize: 270, fontWeight: 800, lineHeight: 0.85, letterSpacing: -19, marginTop: 26 }}>7</div>
        <div style={{ fontSize: 88, fontWeight: 750, letterSpacing: -4, marginTop: 22 }}>years older.</div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 72,
          right: 72,
          bottom: 92,
          opacity: footerIn,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: 25,
          color: MUTED,
          fontSize: 24,
          fontWeight: 650,
          letterSpacing: 0.1,
        }}
      >
        Early internal evaluation · 250+ anonymized assessments
      </div>
      <div style={{ position: "absolute", left: 72, right: 72, bottom: 52, height: 4, background: "rgba(255,255,255,0.13)" }}>
        <div style={{ height: "100%", width: `${clamp(frame, [0, 150], [0, 100])}%`, background: ACCENT }} />
      </div>
    </AbsoluteFill>
  );
};
