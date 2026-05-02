"use client";

import React from "react";

export default function CustomCursor() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number | null>(null);
  const target = React.useRef({ x: 0, y: 0 });
  const pos = React.useRef({ x: 0, y: 0 });
  const vel = React.useRef({ x: 0, y: 0 });
  const [visible, setVisible] = React.useState(false);
  const [size, setSize] = React.useState(32); // ring size (px)
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
      if (rafRef.current == null) tick();
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Responsive size and DPR-aware tweak
  React.useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      let s = 28; // base
      if (w >= 1280) s = 40; // xl
      else if (w >= 768) s = 32; // md-lg
      const dpr = window.devicePixelRatio || 1;
      if (w < 1024 && dpr > 1.75) s += 2; // keep presence on high-DPR
      setSize(s);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Respect prefers-reduced-motion: stop orbit animation
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(!!mq.matches);
    apply();
    mq.addEventListener?.("change", apply as any);
    return () => mq.removeEventListener?.("change", apply as any);
  }, []);

  function tick() {
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      // lerp for smooth following
      const nx = pos.current.x + (target.current.x - pos.current.x) * 0.22;
      const ny = pos.current.y + (target.current.y - pos.current.y) * 0.22;
      vel.current.x = nx - pos.current.x;
      vel.current.y = ny - pos.current.y;
      pos.current.x = nx;
      pos.current.y = ny;
      ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      rafRef.current = null;
      // continue animating until close to target
      const dx = Math.abs(target.current.x - pos.current.x);
      const dy = Math.abs(target.current.y - pos.current.y);
      if (dx > 0.5 || dy > 0.5) tick();
    });
  }

  // Scale inner container on mousedown for feedback (avoid moving translated root)
  React.useEffect(() => {
    const down = () => {
      if (containerRef.current) containerRef.current.style.transform = "scale(0.92)";
    };
    const up = () => {
      if (containerRef.current) containerRef.current.style.transform = "scale(1)";
    };
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  // Hide on touch devices
  React.useEffect(() => {
    const touchStart = () => setVisible(false);
    window.addEventListener("touchstart", touchStart, { passive: true });
    return () => window.removeEventListener("touchstart", touchStart);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"
        }`}
      style={{
        // center the ring on the pointer
        translate: `${-size / 2}px ${-size / 2}px`,
        willChange: "transform",
        transformOrigin: "center center",
      }}
    >
      {/* Outer ring (responsive) */}
      <div
        ref={containerRef}
        className="relative select-none"
        style={{ width: size, height: size, transformOrigin: "center center" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-zinc-800/80" />
        {/* Orbit path (invisible, for reference) */}
        <div className={`absolute inset-0 rounded-full ${reducedMotion ? "" : "animate-[cursorOrbit_1.6s_linear_infinite]"}`}>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: `${-Math.max(10, Math.round(size * 0.33))}px 0` }}
          >
            <div
              className="rounded-full bg-zinc-800"
              style={{ width: Math.max(6, Math.round(size * 0.18)), height: Math.max(6, Math.round(size * 0.18)) }}
            />
          </div>
        </div>
        {/* Center dot */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/90"
          style={{ width: Math.max(4, Math.round(size * 0.12)), height: Math.max(4, Math.round(size * 0.12)) }}
        />
      </div>

    </div>
  );
}
