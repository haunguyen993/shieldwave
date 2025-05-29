'use client';
import { useMotionValue, useTransform, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from "react";

const BLIPS = [
  {
    id: "port-22",
    label: "Port 22 (SSH)",
    color: "#ffd600",
    r: 50,
    angle: 200, // degrees
  },
];

export default function Shield3DAnimation() {
  // Responsive size
  const [size, setSize] = useState(320);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setSize(Math.max(220, Math.min(w, 400)));
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sweep angle state
  const [sweepAngle, setSweepAngle] = useState(0);
  useEffect(() => {
    let frame: number;
    let last = performance.now();
    function animate(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      setSweepAngle((a) => (a + dt * 60) % 360); // 60 deg/sec
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Blip detection logic
  function isBlipActive(blip: typeof BLIPS[0]) {
    let diff = (sweepAngle - blip.angle + 360) % 360;
    return diff < 25 || diff > 335; // active when sweep is near blip
  }

  // Center
  const cx = size / 2;
  const cy = size / 2;
  const rings = [size * 0.45, size * 0.33, size * 0.21];

  // Refactor: đo chiều cao label cho từng blip
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [labelHeights, setLabelHeights] = useState<number[]>(BLIPS.map(() => 32));
  useLayoutEffect(() => {
    setLabelHeights(labelRefs.current.map(ref => ref ? ref.offsetHeight : 32));
  }, [sweepAngle, size]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[400px] aspect-square flex items-center justify-center select-none"
      style={{ minWidth: 220 }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="block"
        style={{
          filter: `drop-shadow(0 0 32px #00fff788) drop-shadow(0 0 16px #00fff7)`,
        }}
      >
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#00fff7cc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00fff700" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Minimal neon grid */}
        <circle cx={cx} cy={cy} r={rings[0]} stroke="#00fff7" strokeWidth={2} fill="none" opacity="0.13" />
        <circle cx={cx} cy={cy} r={rings[1]} stroke="#00fff7" strokeWidth={1.5} fill="none" opacity="0.10" />
        <circle cx={cx} cy={cy} r={rings[2]} stroke="#00fff7" strokeWidth={1} fill="none" opacity="0.08" />
        {/* Sweep arc */}
        <motion.path
          d={describeSweepArc(cx, cy, rings[0], sweepAngle, sweepAngle + 60)}
          fill="url(#radarGlow)"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        {/* Center pulse */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={size * 0.07}
          fill="#00fff7"
          opacity={0.18}
          animate={{ r: [size * 0.07, size * 0.11, size * 0.07], opacity: [0.18, 0.08, 0.18] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.circle
          cx={cx}
          cy={cy}
          r={size * 0.035}
          fill="#00fff7"
          animate={{ r: [size * 0.035, size * 0.07, size * 0.035], opacity: [0.7, 0.2, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        {/* Blips */}
        {BLIPS.map((blip, i) => {
          const rad = (blip.angle * Math.PI) / 180;
          const bx = cx + blip.r * Math.cos(rad);
          const by = cy - blip.r * Math.sin(rad);
          const active = isBlipActive(blip);
          return (
            <motion.circle
              key={blip.id}
              cx={bx}
              cy={by}
              r={active ? 13 : 8}
              fill={blip.color}
              initial={false}
              animate={{
                opacity: active ? 1 : 0.5,
                filter: active
                  ? `drop-shadow(0 0 16px ${blip.color}cc)`
                  : `drop-shadow(0 0 6px ${blip.color}66)`
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            />
          );
        })}
        {/* Glowing label and vertical line for the main dot (pill label bên phải dot) */}
        {BLIPS.map((blip, i) => {
          const rad = (blip.angle * Math.PI) / 180;
          const bx = cx + blip.r * Math.cos(rad);
          const by = cy - blip.r * Math.sin(rad);
          const active = isBlipActive(blip);
          // Label đẹp bên trái dot
          // Tách label: phần đầu và phần SSH nhỏ hơn
          const labelMain = blip.label.replace(/\s*\(.*\)/, ""); // 'Port 22'
          const labelSub = blip.label.match(/\((.*)\)/)?.[1] || ""; // 'SSH'
          const fontSize = 18;
          const fontSizeSub = 13;
          const paddingX = 18;
          const paddingY = 8;
          // Ước lượng width label
          const labelWidth = labelMain.length * fontSize * 0.6 + (labelSub ? (labelSub.length + 2) * fontSizeSub * 0.6 : 0) + paddingX * 2;
          const labelHeight = fontSize + paddingY * 2;
          // Vị trí label: bên trái dot, căn giữa theo dot
          let labelX = bx - labelWidth - 18; // 18px cách dot
          const labelY = by - labelHeight / 2;
          if (labelX < 0) labelX = 0;
          return (
            <g key={blip.id + '-pill-label'}>
              <motion.rect
                x={labelX}
                y={labelY}
                rx={labelHeight / 2}
                width={labelWidth}
                height={labelHeight}
                fill="#181924ee"
                stroke={blip.color}
                strokeWidth={2.5}
                filter={`drop-shadow(0 0 12px ${blip.color}99)`}
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.text
                x={labelX + labelWidth / 2 - (labelSub ? 12 : 0)}
                y={labelY + labelHeight / 2 + 2}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize={fontSize}
                fontWeight={700}
                fill={blip.color}
                stroke="#181924"
                strokeWidth={0.7}
                style={{
                  filter: `drop-shadow(0 0 8px ${blip.color}cc)`
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {labelMain}
                {labelSub && (
                  <tspan fontSize={fontSizeSub} fontWeight={500} dx={6} dy={2} fill={blip.color}>
                    ({labelSub})
                  </tspan>
                )}
              </motion.text>
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}

// Helper to describe a sweep arc path (SVG sector)
function describeSweepArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}
function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
} 