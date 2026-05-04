"use client";

import React from "react";

type CardTiltProps = {
  children: React.ReactNode;
  maxTilt?: number; // degrees
  className?: string;
  disabled?: boolean;
};

export default function CardTilt({ children, maxTilt = 12, className = "", disabled = false }: CardTiltProps) {
  const tiltRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const glareRef = React.useRef<HTMLDivElement | null>(null);
  const targetRx = React.useRef(0);
  const targetRy = React.useRef(0);
  const curRx = React.useRef(0);
  const curRy = React.useRef(0);
  const bob = React.useRef(0);
  const hover = React.useRef(false);
  const rafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    // If disabled: ensure neutral styles and skip effects
    if (disabled) {
      const content = contentRef.current;
      const glare = glareRef.current;
      if (content) {
        content.style.transform = "none";
        content.style.boxShadow = "0 6px 26px rgba(0,0,0,0.18)";
      }
      if (glare) glare.style.opacity = "0";
      return; // do not attach listeners or start loop
    }
    const el = tiltRef.current;
    if (!el) return;
    let rect = el.getBoundingClientRect();

    const handlePointer = (clientX: number, clientY: number) => {
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const px = x / rect.width - 0.5; // -0.5..0.5
      const py = y / rect.height - 0.5;
      const rx = +(py * -2 * maxTilt).toFixed(2);
      const ry = +(px * 2 * maxTilt).toFixed(2);
      targetRx.current = rx;
      targetRy.current = ry;
      const content = contentRef.current;
      if (content) {
        const sx = +(ry * 1.2).toFixed(1); // parallax shadow X
        const sy = +(-rx * 1.2).toFixed(1); // parallax shadow Y
        content.style.boxShadow = `${sx}px ${sy}px 32px rgba(0,0,0,0.25), 0 4px 24px rgba(0,0,0,0.12)`;
      }
      const glare = glareRef.current;
      if (glare) {
        const cx = ((px + 0.5) * 100).toFixed(1);
        const cy = ((py + 0.5) * 100).toFixed(1);
        glare.style.opacity = "0.55";
        glare.style.background = `radial-gradient(circle at ${cx}% ${cy}%, rgba(255,255,255,0.65), rgba(255,255,255,0.15) 30%, transparent 55%)`;
      }
    };
    const onMove = (e: MouseEvent) => {
      hover.current = true;
      handlePointer(e.clientX, e.clientY);
    };
    const onLeave = () => {
      targetRx.current = 0;
      targetRy.current = 0;
      hover.current = false;
      if (contentRef.current) {
        contentRef.current.style.boxShadow = "0 6px 26px rgba(0,0,0,0.18)";
      }
      if (glareRef.current) glareRef.current.style.opacity = "0";
    };
    const onResize = () => {
      rect = el.getBoundingClientRect();
    };
    const onTouchStart = (e: TouchEvent) => {
      hover.current = true;
      if (e.touches && e.touches[0]) handlePointer(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) handlePointer(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchEnd = () => onLeave();
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onTouchStart, { passive: true } as any);
    el.addEventListener("touchmove", onTouchMove, { passive: true } as any);
    el.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", onResize, { passive: true });

    // animation loop for idle float + smoothing
    const loop = () => {
      const t = performance.now() / 1000;
      // gentle idle when not hovering
      const idleX = hover.current ? 0 : Math.sin(t * 0.6) * 2;
      const idleY = hover.current ? 0 : Math.cos(t * 0.4) * 2;
      const bobVal = hover.current ? 0 : Math.sin(t * 0.8) * 3;
      bob.current = bobVal;
      // damp toward target
      const k = 0.15;
      curRx.current += (targetRx.current + idleX - curRx.current) * k;
      curRy.current += (targetRy.current + idleY - curRy.current) * k;
      const content = contentRef.current;
      if (content) {
        content.style.transform = `translateY(${bob.current.toFixed(1)}px) rotateX(${curRx.current.toFixed(2)}deg) rotateY(${curRy.current.toFixed(2)}deg)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onTouchStart as any);
      el.removeEventListener("touchmove", onTouchMove as any);
      el.removeEventListener("touchend", onTouchEnd as any);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [maxTilt, disabled]);

  return (
    <div style={{ perspective: disabled ? undefined : "1200px", touchAction: 'pan-y' }} className={className}>
      <div
        ref={tiltRef}
        style={{ position: "relative", touchAction: 'pan-y' }}
      >
        {/* glare highlight */}
        <div ref={glareRef} style={{ position: "absolute", inset: 0, borderRadius: 26, opacity: 0, transition: "opacity 200ms ease", pointerEvents: "none" }} />
        <div
          ref={contentRef}
          style={{
            borderRadius: 26,
            transformStyle: disabled ? undefined : "preserve-3d",
            transition: disabled ? undefined : "transform 200ms ease",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
