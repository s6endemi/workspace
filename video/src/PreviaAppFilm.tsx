import React from "react";
import {
  AbsoluteFill,
  Easing,
  Series,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const W = 1080;
const H = 1080;
const C = {
  bg: "#0a0e15",
  ink: "#f3f2ee",
  muted: "#89929f",
  line: "rgba(243,242,238,.16)",
  soft: "rgba(243,242,238,.055)",
  accent: "#ff5a36",
};
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const clamp = (frame: number, a: number, b: number, from: number, to: number, easing = ease) =>
  interpolate(frame, [a, b], [from, to], { easing, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
const appear = (frame: number, fps: number, delay = 0) =>
  spring({ frame: frame - delay, fps, config: { damping: 190, stiffness: 115 } });

const Header: React.FC<{ chapter: string; progress: number }> = ({ chapter, progress }) => (
  <>
    <div style={{ position: "absolute", left: 62, top: 46, color: C.ink, fontSize: 20, fontWeight: 700, letterSpacing: 2.8 }}>
      PREVIA <span style={{ color: C.muted, fontWeight: 500 }}>/ MOVEMENT INTELLIGENCE</span>
    </div>
    <div style={{ position: "absolute", right: 62, top: 49, color: C.muted, fontSize: 17, fontWeight: 700, letterSpacing: 2.4 }}>{chapter}</div>
    <div style={{ position: "absolute", bottom: 49, left: 62, right: 62, height: 2, background: C.line }}>
      <div style={{ height: 2, width: `${progress}%`, background: C.accent }} />
    </div>
  </>
);

const AtmosphericField: React.FC = () => {
  const frame = useCurrentFrame();
  return <>
    <div style={{ position: "absolute", width: 770, height: 770, left: -380 + Math.sin(frame / 90) * 25, top: 244, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,90,54,.14), rgba(255,90,54,0) 67%)" }} />
    <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
      {Array.from({ length: 11 }, (_, i) => <line key={`v${i}`} x1={i * 108} y1="125" x2={i * 108} y2="972" stroke="rgba(243,242,238,.045)" />)}
      {Array.from({ length: 10 }, (_, i) => <line key={`h${i}`} x1="0" y1={140 + i * 92} x2={W} y2={140 + i * 92} stroke="rgba(243,242,238,.045)" />)}
    </svg>
  </>;
};

const Phone: React.FC<{ children: React.ReactNode; scale: number; x: number; y: number; rotate?: number; opacity?: number }> = ({ children, scale, x, y, rotate = 0, opacity = 1 }) => (
  <div style={{ position: "absolute", width: 426, height: 780, left: x, top: y, opacity, transform: `scale(${scale}) rotate(${rotate}deg)`, transformOrigin: "center", borderRadius: 62, background: "#121923", boxShadow: "0 42px 90px rgba(0,0,0,.52), inset 0 0 0 2px rgba(255,255,255,.13)", padding: 13 }}>
    <div style={{ height: "100%", borderRadius: 52, overflow: "hidden", background: "#0c1119", position: "relative" }}>{children}</div>
    <div style={{ position: "absolute", width: 116, height: 27, left: 155, top: 20, borderRadius: 16, background: "#05070a" }} />
  </div>
);

const CameraSkeleton: React.FC<{ reveal: number }> = ({ reveal }) => {
  const frame = useCurrentFrame();
  const hip = { x: 212, y: 440 };
  const lean = clamp(frame, 35, 95, 0, 27);
  const rad = (lean * Math.PI) / 180;
  const shoulder = { x: hip.x + Math.sin(rad) * 124, y: hip.y - Math.cos(rad) * 124 };
  const head = { x: shoulder.x + Math.sin(rad) * 46, y: shoulder.y - Math.cos(rad) * 46 };
  const leg = { x: 348, y: 436 };
  const opacity = appear(frame, 30, 8);
  return <svg viewBox="0 0 400 730" width="100%" height="100%" style={{ opacity }}>
    <defs><filter id="sGlow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <rect x="0" y="0" width="400" height="730" fill="#0b121a" />
    {Array.from({ length: 9 }, (_, i) => <line key={i} x1="0" y1={135 + i * 64} x2="400" y2={135 + i * 64} stroke="rgba(243,242,238,.06)" />)}
    <line x1={hip.x} y1={hip.y} x2={hip.x} y2="660" stroke="rgba(243,242,238,.32)" strokeWidth="4" strokeDasharray="9 10" />
    <line x1={hip.x} y1={hip.y} x2={leg.x} y2={leg.y} stroke={C.ink} strokeWidth="19" strokeLinecap="round" />
    <line x1={hip.x} y1={hip.y} x2={shoulder.x} y2={shoulder.y} stroke={C.ink} strokeWidth="23" strokeLinecap="round" />
    <circle cx={head.x} cy={head.y} r="38" fill="none" stroke={C.ink} strokeWidth="13" />
    <line x1={shoulder.x - 18} y1={shoulder.y + 12} x2={shoulder.x + 72} y2={shoulder.y + 54} stroke="rgba(243,242,238,.8)" strokeWidth="15" strokeLinecap="round" />
    <circle cx={hip.x} cy={hip.y} r="17" fill={C.accent} filter="url(#sGlow)" />
    <circle cx={leg.x} cy={leg.y} r="12" fill={C.ink} />
    <path d={`M ${hip.x} ${hip.y - 95} A 95 95 0 0 1 ${hip.x + 95} ${hip.y}`} fill="none" stroke="rgba(243,242,238,.44)" strokeWidth="4" strokeDasharray="7 8" />
    <text x="286" y="337" fill={C.ink} fontSize="28" fontWeight="700">80°</text>
    <g opacity={reveal}>
      <path d={`M ${hip.x} ${hip.y - 65} A 65 65 0 0 1 ${hip.x + Math.sin(rad) * 65} ${hip.y - Math.cos(rad) * 65}`} fill="none" stroke={C.accent} strokeWidth="7" strokeLinecap="round" />
      <text x="226" y="362" fill={C.accent} fontSize="28" fontWeight="800">27°</text>
      <line x1={hip.x} y1={hip.y} x2={shoulder.x} y2={shoulder.y} stroke={C.accent} strokeWidth="3" strokeDasharray="7 8" />
    </g>
    <rect x="22" y="30" width="153" height="31" rx="15" fill="rgba(243,242,238,.12)" />
    <text x="38" y="52" fill={C.ink} fontSize="15" fontWeight="700" letterSpacing="1.5">LIVE CAPTURE</text>
    <circle cx="354" cy="45" r="7" fill={C.accent} />
  </svg>;
};

const Intro: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const p = appear(frame, fps, 3);
  return <AbsoluteFill>
    <Header chapter="01 / CAPTURE" progress={22} />
    <div style={{ position: "absolute", left: 68, top: 205, width: 528, opacity: p, transform: `translateY(${(1 - p) * 38}px)` }}>
      <div style={{ color: C.accent, fontSize: 23, letterSpacing: 3.2, fontWeight: 800 }}>A SCORE SEES THE RANGE.</div>
      <div style={{ marginTop: 24, fontSize: 82, lineHeight: .9, letterSpacing: -5.4, fontWeight: 800 }}>MOVEMENT<br />HAS MORE<br />TO SAY.</div>
      <div style={{ marginTop: 42, color: C.muted, width: 410, fontSize: 28, lineHeight: 1.25, fontWeight: 500 }}>A camera-based assessment should capture both.</div>
    </div>
    <Phone x={620} y={152} scale={.78} rotate={5} opacity={clamp(frame, 0, 26, 0, 1)}><CameraSkeleton reveal={0} /></Phone>
  </AbsoluteFill>;
};

const Capture: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const p = appear(frame, fps, 3); const reveal = clamp(frame, 50, 88, 0, 1);
  return <AbsoluteFill>
    <Header chapter="02 / INSPECT" progress={48} />
    <div style={{ position: "absolute", left: 68, top: 185, opacity: p }}>
      <div style={{ color: C.muted, fontSize: 22, letterSpacing: 3, fontWeight: 700 }}>SINGLE LEG RAISE</div>
      <div style={{ marginTop: 18, width: 430, fontSize: 66, lineHeight: .9, letterSpacing: -4.2, fontWeight: 800 }}>80°<br />OBSERVED<br />RANGE.</div>
      <div style={{ marginTop: 34, opacity: reveal, color: C.accent, fontSize: 39, lineHeight: 1.02, letterSpacing: -1.5, fontWeight: 750 }}>But 27° came<br />from the torso.</div>
    </div>
    <Phone x={570} y={114} scale={.94} opacity={p}><CameraSkeleton reveal={reveal} /></Phone>
    <div style={{ position: "absolute", left: 68, top: 730, width: 405, borderTop: `1px solid ${C.line}`, paddingTop: 19, color: C.muted, fontSize: 22, lineHeight: 1.3, opacity: clamp(frame, 66, 92, 0, 1) }}>The range is real. The workaround is too.</div>
  </AbsoluteFill>;
};

const Result: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const p = appear(frame, fps, 0); const final = Math.round(clamp(frame, 60, 125, 80, 53));
  return <AbsoluteFill>
    <Header chapter="03 / REFRAME" progress={74} />
    <div style={{ position: "absolute", left: 68, top: 168, color: C.muted, fontSize: 22, letterSpacing: 3, fontWeight: 700, opacity: p }}>WHAT THE APP REVEALS</div>
    <div style={{ position: "absolute", left: 68, top: 236, opacity: p }}>
      <div style={{ marginTop: 18, width: 440, fontSize: 70, lineHeight: .9, letterSpacing: -4.7, fontWeight: 800 }}>RANGE<br />ISN'T<br />MOBILITY.</div>
    </div>
    <Phone x={574} y={135} scale={.93} opacity={p}>
      <div style={{ padding: "88px 32px 30px" }}>
        <div style={{ color: C.muted, fontSize: 16, fontWeight: 700, letterSpacing: 1.7 }}>LEG RAISE / ANALYSIS</div>
        <div style={{ marginTop: 68, color: C.muted, fontSize: 16, fontWeight: 700 }}>OBSERVED RANGE</div>
        <div style={{ marginTop: 8, color: C.ink, fontSize: 73, letterSpacing: -5, fontWeight: 800 }}>80°</div>
        <div style={{ marginTop: 40, borderTop: `1px solid ${C.line}`, paddingTop: 27, color: C.accent, fontSize: 16, fontWeight: 700 }}>TORSO COMPENSATION</div>
        <div style={{ marginTop: 8, color: C.accent, fontSize: 65, letterSpacing: -4, fontWeight: 800 }}>−27°</div>
        <div style={{ position: "absolute", left: 30, right: 30, bottom: 43, padding: "22px 22px 24px", background: C.soft, border: `1px solid ${C.line}`, borderRadius: 20 }}>
          <div style={{ color: C.muted, fontSize: 13, letterSpacing: 1.3, fontWeight: 700 }}>ACTUAL HIP MOBILITY</div>
          <div style={{ color: C.ink, fontSize: 76, letterSpacing: -5, lineHeight: .92, fontWeight: 800 }}>{final}°</div>
        </div>
      </div>
    </Phone>
    <div style={{ position: "absolute", left: 68, bottom: 124, width: 410, opacity: clamp(frame, 58, 88, 0, 1), color: C.muted, fontSize: 25, lineHeight: 1.25 }}>The score changed because the movement became visible.</div>
  </AbsoluteFill>;
};

const Close: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const p = appear(frame, fps, 5); const value = Math.round(clamp(frame, 22, 82, 0, 73, Easing.out(Easing.cubic)));
  return <AbsoluteFill>
    <Header chapter="04 / PATTERN" progress={100} />
    <div style={{ position: "absolute", left: 68, top: 190, opacity: p }}>
      <div style={{ color: C.accent, fontSize: 22, letterSpacing: 3, fontWeight: 800 }}>EARLY INTERNAL EVALUATION</div>
      <div style={{ marginTop: 22, fontSize: 236, lineHeight: .76, letterSpacing: -15, fontWeight: 800 }}>{value}%</div>
      <div style={{ marginTop: 44, fontSize: 70, lineHeight: .96, letterSpacing: -4.5, fontWeight: 800 }}>showed cross-body<br />compensation.</div>
      <div style={{ marginTop: 46, color: C.muted, fontSize: 26, lineHeight: 1.28, width: 610 }}>250+ anonymized assessments</div>
    </div>
    <div style={{ position: "absolute", left: 68, right: 68, bottom: 128, borderTop: `1px solid ${C.line}`, paddingTop: 25, opacity: clamp(frame, 83, 110, 0, 1) }}>
      <div style={{ fontSize: 43, letterSpacing: -2.4, fontWeight: 750 }}>Measure the movement.<br /><span style={{ color: C.muted }}>Not just the range.</span></div>
      <div style={{ marginTop: 28, color: C.ink, fontSize: 20, letterSpacing: 2.5, fontWeight: 700 }}>PREVIA / MOVEMENT INTELLIGENCE</div>
    </div>
  </AbsoluteFill>;
};

export const PreviaAppFilm: React.FC = () => (
  <AbsoluteFill style={{ background: C.bg, color: C.ink, fontFamily: "Arial, Helvetica, sans-serif", overflow: "hidden" }}>
    <AtmosphericField />
    <Series>
      <Series.Sequence durationInFrames={130}><Intro /></Series.Sequence>
      <Series.Sequence durationInFrames={160} offset={-18}><Capture /></Series.Sequence>
      <Series.Sequence durationInFrames={170} offset={-18}><Result /></Series.Sequence>
      <Series.Sequence durationInFrames={165} offset={-18}><Close /></Series.Sequence>
    </Series>
  </AbsoluteFill>
);
