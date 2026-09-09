import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BG = "#070b12";
const INK = "#f5f7fb";
const MUTED = "#93a0b3";
const GRID = "rgba(163, 183, 209, .12)";
const ORANGE = "#ff5a36";
const TEAL = "#6ce8d1";

const clamp = (frame: number, input: [number, number], output: [number, number], easing?: (x: number) => number) =>
  interpolate(frame, input, output, {
    easing,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const fadeInOut = (frame: number, enter: number, leave: number, duration = 16) =>
  clamp(frame, [enter, enter + duration], [0, 1]) * (1 - clamp(frame, [leave, leave + duration], [0, 1]));

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const ParticleField: React.FC = () => {
  const frame = useCurrentFrame();
  const points = Array.from({ length: 64 }, (_, i) => {
    const x = (i * 167 + 43) % 1080;
    const y = (i * 89 + 19) % 1080;
    const r = 1 + (i % 3) * 0.7;
    const drift = Math.sin(frame / 44 + i) * 13;
    const alpha = 0.12 + ((i * 7) % 10) / 100;
    return <circle key={i} cx={x + drift} cy={y + Math.cos(frame / 57 + i) * 10} r={r} fill={`rgba(192, 211, 235, ${alpha})`} />;
  });
  return <svg width="1080" height="1080" style={{ position: "absolute", inset: 0 }}>{points}</svg>;
};

const Grid: React.FC<{ opacity?: number }> = ({ opacity = 1 }) => (
  <svg width="1080" height="1080" style={{ position: "absolute", inset: 0, opacity }}>
    <defs>
      <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="white" stopOpacity="0" />
        <stop offset="0.45" stopColor="white" stopOpacity="1" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
    {Array.from({ length: 14 }, (_, i) => <line key={`v-${i}`} x1={i * 84} y1="0" x2={i * 84} y2="1080" stroke={GRID} strokeWidth="1" />)}
    {Array.from({ length: 14 }, (_, i) => <line key={`h-${i}`} x1="0" y1={i * 84} x2="1080" y2={i * 84} stroke={GRID} strokeWidth="1" />)}
    <rect width="1080" height="1080" fill="url(#gridFade)" opacity=".5" />
  </svg>
);

const HUD: React.FC<{ scene: string; progress: number }> = ({ scene, progress }) => (
  <>
    <div style={{ position: "absolute", left: 62, right: 62, top: 52, display: "flex", alignItems: "center", justifyContent: "space-between", color: MUTED, fontSize: 18, letterSpacing: 2.8, fontWeight: 800 }}>
      <span>PREVIA / MOTION INTELLIGENCE</span>
      <span>{scene}</span>
    </div>
    <div style={{ position: "absolute", left: 62, right: 62, bottom: 44, height: 2, background: "rgba(255,255,255,.16)" }}>
      <div style={{ width: `${progress}%`, height: "100%", background: ORANGE, boxShadow: "0 0 16px rgba(255,90,54,.7)" }} />
    </div>
  </>
);

const ScanLine: React.FC = () => {
  const frame = useCurrentFrame();
  const y = ((frame * 5.3) % 1180) - 60;
  return <div style={{ position: "absolute", left: 0, right: 0, top: y, height: 2, background: "linear-gradient(90deg, transparent, rgba(108,232,209,.42), transparent)", filter: "blur(.2px)" }} />;
};

const AngleArc: React.FC<{ cx: number; cy: number; radius: number; start: number; end: number; color: string; opacity: number; label?: string }> = ({ cx, cy, radius, start, end, color, opacity, label }) => {
  const p = (angle: number) => [cx + Math.cos((angle * Math.PI) / 180) * radius, cy + Math.sin((angle * Math.PI) / 180) * radius];
  const [x1, y1] = p(start);
  const [x2, y2] = p(end);
  const large = Math.abs(end - start) > 180 ? 1 : 0;
  const mid = (start + end) / 2;
  const [tx, ty] = p(mid);
  return <g opacity={opacity}>
    <path d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" />
    {label && <text x={tx} y={ty + 8} fill={color} fontSize="35" textAnchor="middle" fontWeight="800">{label}</text>}
  </g>;
};

const BodyScene: React.FC<{ phase: "apparent" | "reveal"; opacity: number }> = ({ phase, opacity }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const leanTarget = phase === "apparent" ? 0 : 27;
  const lean = interpolate(frame, [166, 232], [0, leanTarget], { easing: ease, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const bodyIn = spring({ frame: frame - 88, fps, config: { damping: 190, stiffness: 120 } });
  const pointAlpha = phase === "reveal" ? clamp(frame, [178, 204], [0, 1]) : 0;
  const hipX = 475;
  const hipY = 697;
  const torsoEndX = hipX + Math.sin((lean * Math.PI) / 180) * 260;
  const torsoEndY = hipY - Math.cos((lean * Math.PI) / 180) * 260;
  const legEndX = hipX + 360;
  const legEndY = hipY - 8;
  const headX = torsoEndX + Math.sin((lean * Math.PI) / 180) * 78;
  const headY = torsoEndY - Math.cos((lean * Math.PI) / 180) * 78;
  return <div style={{ position: "absolute", inset: 0, opacity: opacity * bodyIn }}>
    <svg width="1080" height="1080">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="bodyStroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f4f7fb"/><stop offset="1" stopColor="#95a3b5"/></linearGradient>
      </defs>
      <line x1={hipX} y1={hipY} x2={hipX} y2="928" stroke="rgba(245,247,251,.34)" strokeWidth="5" strokeDasharray="12 15" />
      <line x1={hipX} y1={hipY} x2={legEndX} y2={legEndY} stroke={TEAL} strokeWidth="24" strokeLinecap="round" filter="url(#glow)" />
      <line x1={hipX} y1={hipY} x2={torsoEndX} y2={torsoEndY} stroke="url(#bodyStroke)" strokeWidth="32" strokeLinecap="round" />
      <circle cx={headX} cy={headY} r="53" fill="none" stroke="#f4f7fb" strokeWidth="18" />
      <line x1={torsoEndX - 25} y1={torsoEndY + 15} x2={torsoEndX + 135} y2={torsoEndY + 86} stroke="#aeb8c7" strokeWidth="20" strokeLinecap="round" />
      <circle cx={hipX} cy={hipY} r="23" fill={ORANGE} filter="url(#glow)" />
      <circle cx={legEndX} cy={legEndY} r="17" fill={TEAL} />
      <line x1={hipX} y1={hipY} x2={hipX + 355} y2={hipY} stroke="rgba(108,232,209,.55)" strokeWidth="3" strokeDasharray="9 11" />
      <line x1={hipX} y1={hipY} x2={torsoEndX} y2={torsoEndY} stroke="rgba(255,255,255,.45)" strokeWidth="3" strokeDasharray="9 11" />
      <AngleArc cx={hipX} cy={hipY} radius={150} start={-90} end={0} color={TEAL} opacity={1} label="80°" />
      <AngleArc cx={hipX} cy={hipY} radius={105} start={-90} end={-63} color={ORANGE} opacity={pointAlpha} label="27°" />
      {Array.from({ length: 12 }, (_, i) => {
        const x = hipX + ((i * 83) % 460) - 50;
        const y = 248 + ((i * 59) % 630);
        return <circle key={i} cx={x} cy={y} r="3.5" fill={phase === "reveal" ? ORANGE : TEAL} opacity={0.25 + (i % 4) * 0.1} />;
      })}
    </svg>
  </div>;
};

export const MobilityIllusion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = fadeInOut(frame, 0, 70);
  const body = fadeInOut(frame, 62, 260, 17);
  const reveal = fadeInOut(frame, 166, 328, 17);
  const equation = fadeInOut(frame, 277, 410, 18);
  const close = clamp(frame, [405, 432], [0, 1], ease);
  const big = spring({ frame: frame - 12, fps, config: { damping: 200, stiffness: 140 } });
  const count73 = Math.round(clamp(frame, [432, 490], [0, 73], Easing.out(Easing.cubic)));
  const scene = frame < 70 ? "01 / OBSERVATION" : frame < 166 ? "02 / APPARENT RANGE" : frame < 277 ? "03 / COMPENSATION" : frame < 410 ? "04 / REFRAME" : "05 / PATTERN";

  return <AbsoluteFill style={{ background: BG, color: INK, fontFamily: "Arial, Helvetica, sans-serif", overflow: "hidden" }}>
    <Grid opacity={0.75} />
    <ParticleField />
    <ScanLine />
    <div style={{ position: "absolute", width: 760, height: 760, right: -370, top: -260, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,90,54,.22), transparent 66%)", filter: "blur(8px)" }} />
    <HUD scene={scene} progress={clamp(frame, [0, 540], [0, 100])} />

    <div style={{ position: "absolute", left: 68, right: 68, top: 252, opacity: intro, transform: `translateY(${(1 - big) * 44}px)` }}>
      <div style={{ color: ORANGE, fontSize: 26, fontWeight: 800, letterSpacing: 4 }}>A CAMERA CAN SEE RANGE.</div>
      <div style={{ fontSize: 125, lineHeight: 0.9, letterSpacing: -8, fontWeight: 850, marginTop: 35 }}>IT CAN ALSO<br />SEE THE CHEAT.</div>
      <div style={{ marginTop: 55, display: "flex", alignItems: "center", gap: 20, color: MUTED, fontSize: 28, fontWeight: 650 }}><span style={{ width: 56, height: 5, background: TEAL, display: "inline-block" }} />THE BODY ALWAYS FINDS A WAY.</div>
    </div>

    <BodyScene phase="apparent" opacity={body * (1 - clamp(frame, [165, 183], [0, 1]))} />
    <BodyScene phase="reveal" opacity={reveal} />

    <div style={{ position: "absolute", left: 64, top: 176, opacity: body * (1 - clamp(frame, [165, 183], [0, 1])) }}>
      <div style={{ color: TEAL, fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>LEG RAISE</div>
      <div style={{ fontSize: 79, fontWeight: 820, letterSpacing: -4, marginTop: 12 }}>LOOKS GREAT.</div>
      <div style={{ color: MUTED, fontSize: 30, marginTop: 8 }}>80° on the screen.</div>
    </div>

    <div style={{ position: "absolute", left: 64, top: 176, opacity: reveal }}>
      <div style={{ color: ORANGE, fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>WHAT THE NUMBER MISSED</div>
      <div style={{ fontSize: 73, fontWeight: 820, letterSpacing: -4, marginTop: 12 }}>TORSO LEAN.</div>
      <div style={{ color: MUTED, fontSize: 30, marginTop: 8 }}>27° of compensation.</div>
    </div>

    <div style={{ position: "absolute", left: 68, right: 68, top: 255, opacity: equation, transform: `scale(${0.96 + equation * 0.04})` }}>
      <div style={{ color: MUTED, fontSize: 25, fontWeight: 800, letterSpacing: 3 }}>ACTUAL HIP MOBILITY</div>
      <div style={{ marginTop: 42, display: "flex", alignItems: "baseline", gap: 22, fontWeight: 850, letterSpacing: -8 }}>
        <span style={{ color: TEAL, fontSize: 156 }}>80°</span><span style={{ color: MUTED, fontSize: 88 }}>−</span><span style={{ color: ORANGE, fontSize: 156 }}>27°</span><span style={{ color: MUTED, fontSize: 88 }}>=</span>
      </div>
      <div style={{ color: INK, fontSize: 260, lineHeight: .82, fontWeight: 850, letterSpacing: -18, marginTop: 28 }}>53°</div>
      <div style={{ color: MUTED, fontSize: 37, fontWeight: 650, marginTop: 38 }}>The range was real. So was the workaround.</div>
    </div>

    <div style={{ position: "absolute", left: 68, right: 68, top: 210, opacity: close, transform: `translateY(${(1 - close) * 42}px)` }}>
      <div style={{ color: ORANGE, fontSize: 25, fontWeight: 800, letterSpacing: 3.8 }}>IN 250+ ANONYMIZED ASSESSMENTS</div>
      <div style={{ marginTop: 26, fontSize: 244, lineHeight: .82, fontWeight: 850, letterSpacing: -18 }}>{count73}%</div>
      <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -4, lineHeight: 1.02, marginTop: 36 }}>showed cross-body<br />compensation.</div>
      <div style={{ marginTop: 63, paddingTop: 25, borderTop: "1px solid rgba(255,255,255,.2)", color: MUTED, fontSize: 29, fontWeight: 650 }}>A score is a starting point. Movement tells the rest.</div>
      <div style={{ marginTop: 42, color: INK, fontSize: 24, letterSpacing: 2.4, fontWeight: 800 }}>PREVIA — MOVEMENT INTELLIGENCE</div>
    </div>
  </AbsoluteFill>;
};
