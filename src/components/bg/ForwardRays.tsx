"use client";

import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type Props = {
  count?: number;
  origin?: { x: number; y: number };
  minLen?: number;
  maxLen?: number;
  dash?: number;
  gap?: number;
  stroke?: number;
  color?: string;
  opacity?: number;
  zoomScale?: number;
  zoomDuration?: number;
  holeRadius?: number;
};

export default function StarburstRaysZoom({
  count = 70,
  origin = { x: 0.5, y: 0.5 },
  minLen = 140,
  maxLen = 3000,
  dash = 86,
  gap = 46,
  stroke = 1.25,
  color = "rgba(255,255,255,0.35)", // light gray like your image
  opacity = 0.7,
  zoomScale = 1.16,
  zoomDuration = 3.2,
  holeRadius = 10,
}: Props) {
  // We use a square viewBox so we can scale uniformly.
  const SIZE = 120; // logical viewBox size (not pixels)
  const cx = SIZE * origin.x;
  const cy = SIZE * origin.y;

  const groupRef = useRef<SVGGElement | null>(null);
  const lineRefs = useRef<SVGLineElement[]>([]);

  /** Generate evenly spread rays with slight organic jitter */
  const rays = useMemo(() => {
    const arr: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      width: number;
      dashA: number;
      dashB: number;
      off: number;
    }[] = [];

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const ang = t * Math.PI * 2 + Math.sin(i * 1.7) * 0.04;

      const wave = 0.55 + 0.45 * Math.abs(Math.sin(i * 1.37));
      const len = minLen + (maxLen - minLen) * wave;

      const inner = 8;
      const x1 = cx + Math.cos(ang) * inner;
      const y1 = cy + Math.sin(ang) * inner;
      const x2 = cx + Math.cos(ang) * len;
      const y2 = cy + Math.sin(ang) * len;

      const width = stroke * (0.95 + (i % 3) * 0.06);
      const dashA = dash;
      const dashB = gap + (i % 7) * 1.2;
      const off = (i * 15) % (dashA + dashB);

      arr.push({ x1, y1, x2, y2, width, dashA, dashB, off });
    }
    return arr;
  }, [count, cx, cy, minLen, maxLen, dash, gap, stroke]);

  useEffect(() => {
    const DASH_LOOPS: gsap.core.Tween[] = [];

    if (groupRef.current) {
      gsap.killTweensOf(groupRef.current);
      gsap.set(groupRef.current, { transformOrigin: "50% 50%", scale: 1 });

      gsap.to(groupRef.current, {
        scale: zoomScale,
        duration: zoomDuration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    lineRefs.current.forEach((el, i) => {
      if (!el) return;
      const d = rays[i].dashA + rays[i].dashB;
      // flowing dash offset
      const tw = gsap.fromTo(
        el,
        { strokeDashoffset: rays[i].off },
        {
          strokeDashoffset: `-=${d}`,
          duration: 3.6 + (i % 5) * 0.2,
          ease: "none",
          repeat: -1,
          modifiers: {
            strokeDashoffset: (v) => {
              const n = parseFloat(v);
              return `${((n % d) + d) % d}`;
            },
          },
        }
      );
      DASH_LOOPS.push(tw);
    });

    return () => {
      DASH_LOOPS.forEach((tw) => tw.kill());
    };
  }, [rays, zoomScale, zoomDuration]);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <svg
        width="100%"
        height="125%"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Mask to carve out the center hole */}
        <defs>
          <mask id="hole-mask">
            <rect x="0" y="0" width={SIZE} height={SIZE} fill="white" />
            <circle
              cx={cx}
              cy={cy}
              r={holeRadius / (100 / SIZE)}
              fill="black"
            />
          </mask>
        </defs>

        <g ref={groupRef} opacity={opacity} mask="url(#hole-mask)">
          {rays.map((r, i) => (
            <line
              key={i}
              ref={(el) => {
                if (el) lineRefs.current[i] = el;
              }}
              x1={r.x1}
              y1={r.y1}
              x2={r.x2}
              y2={r.y2}
              stroke={color}
              strokeWidth={r.width}
              strokeLinecap="round"
              strokeDasharray={`${r.dashA} ${r.dashB}`}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
