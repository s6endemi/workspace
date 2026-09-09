import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const ACCENT = "#ff6b4a";
const BG = "#0b0f14";

const clamp = (value: number, input: [number, number], output: [number, number]) =>
  interpolate(value, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const fade = (frame: number, start: number, end: number) =>
  clamp(frame, [start, end], [0, 1]);

const Counter = ({
  target,
  start,
  duration = 42,
  suffix = "%",
}: {
  target: number;
  start: number;
  duration?: number;
  suffix?: string;
}) => {
  const frame = useCurrentFrame();
  const value = Math.round(
    interpolate(frame, [start, start + duration], [0, target], {
      easing: Easing.out(Easing.cubic),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  return <>{value}{suffix}</>;
};

const ScanLine = ({ delay }: { delay: number }) => {
  const frame = useCurrentFrame();
  const y = interpolate((frame + delay) % 105, [0, 105], [-10, 1110]);
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: y,
        height: 2,
        background: "linear-gradient(90deg, transparent, rgba(255,107,74,.6), transparent)",
        opacity: 0.25,
      }}
    />
  );
};

const Metric = ({
  target,
  label,
  detail,
  from,
}: {
  target: number;
  label: string;
  detail: string;
  from: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrance = spring({
    frame: frame - from,
    fps,
    config: { damping: 200, stiffness: 130 },
  });
  const exit = fade(frame, from + 85, from + 100);
  const opacity = entrance * (1 - exit);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${(1 - entrance) * 40}px)`,
        display: "flex",
        alignItems: "center",
        gap: 34,
        height: 195,
        borderTop: "1px solid rgba(235,239,243,.18)",
      }}
    >
      <div style={{ color: ACCENT, fontSize: 126, fontWeight: 800, letterSpacing: -8, lineHeight: 1 }}>
        <Counter target={target} start={from + 4} />
      </div>
      <div style={{ paddingTop: 10 }}>
        <div style={{ fontSize: 37, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.2 }}>{label}</div>
        <div style={{ fontSize: 24, color: "#98a2ad", marginTop: 12, letterSpacing: 0.2 }}>{detail}</div>
      </div>
    </div>
  );
};

export const WeekendScreening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 200, stiffness: 150 } });
  const introExit = fade(frame, 100, 118);
  const metricsIn = fade(frame, 116, 132);
  const metricsExit = fade(frame, 310, 328);
  const closeIn = fade(frame, 325, 346);

  return (
    <AbsoluteFill
      style={{
        background: BG,
        color: "#f3f5f7",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
      }}
    >
      <ScanLine delay={0} />
      <ScanLine delay={52} />
      <div style={{ position: "absolute", width: 700, height: 700, right: -390, top: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,74,.14), transparent 66%)" }} />
      <div style={{ position: "absolute", left: 70, right: 70, top: 62, display: "flex", justifyContent: "space-between", color: "#98a2ad", fontSize: 20, fontWeight: 700, letterSpacing: 2.4 }}>
        <span>PREVIA / FIELD DATA</span><span>01</span>
      </div>

      <div style={{ opacity: intro * (1 - introExit), transform: `translateY(${(1 - intro) * 42}px)`, position: "absolute", left: 70, right: 70, top: 232 }}>
        <div style={{ color: ACCENT, fontSize: 26, fontWeight: 800, letterSpacing: 3.5, marginBottom: 28 }}>ONE WEEKEND</div>
        <div style={{ fontSize: 258, fontWeight: 800, letterSpacing: -17, lineHeight: 0.82 }}>250</div>
        <div style={{ fontSize: 62, fontWeight: 700, letterSpacing: -2.5, marginTop: 43 }}>people screened.</div>
        <div style={{ width: 90, height: 8, background: ACCENT, marginTop: 54 }} />
        <div style={{ fontSize: 30, color: "#aab2bc", marginTop: 22 }}>Movement patterns made visible.</div>
      </div>

      <div style={{ opacity: metricsIn * (1 - metricsExit), position: "absolute", left: 70, right: 70, top: 205 }}>
        <div style={{ color: "#98a2ad", fontSize: 23, fontWeight: 700, letterSpacing: 2.2, marginBottom: 24 }}>WHAT WE SAW</div>
        <Metric target={66} from={132} label="Forward head posture" detail="head carried forward" />
        <Metric target={50} from={190} label="Knee valgus" detail="knees collapsing inward" />
        <Metric target={80} from={248} label="No upright torso in squat" detail="torso compensation" />
      </div>

      <div style={{ opacity: closeIn, position: "absolute", left: 70, right: 70, top: 285 }}>
        <div style={{ color: ACCENT, fontSize: 25, fontWeight: 800, letterSpacing: 3 }}>THE PATTERN</div>
        <div style={{ fontSize: 85, fontWeight: 800, lineHeight: 0.96, letterSpacing: -4.5, marginTop: 25 }}>
          Most people<br />move older than<br />they are.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 74 }}>
          <div style={{ width: 56, height: 8, background: ACCENT }} />
          <div style={{ color: "#c8ced5", fontSize: 29, fontWeight: 700, letterSpacing: -0.6 }}>PREVIA — MOVEMENT INTELLIGENCE</div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 70, right: 70, bottom: 50, height: 3, background: "rgba(255,255,255,.14)" }}>
        <div style={{ width: `${clamp(frame, [0, 450], [0, 100])}%`, height: "100%", background: ACCENT }} />
      </div>
    </AbsoluteFill>
  );
};
