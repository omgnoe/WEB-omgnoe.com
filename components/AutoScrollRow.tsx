"use client";

import { useEffect, useRef } from "react";

/**
 * Horizontally scrollable strip that also drifts automatically.
 * Content must be rendered twice (two identical copies) so the
 * wrap-around at the halfway point is seamless. Auto-drift pauses
 * while the user swipes/scrolls and resumes after a short idle.
 */
export default function AutoScrollRow({
  children,
  speed = 0.5,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pause = () => {
      paused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, 2500);
    };

    const wrap = () => {
      const half = el.scrollWidth / 2;
      if (half <= 1) return;
      if (el.scrollLeft >= half) {
        el.scrollLeft = Math.max(1, el.scrollLeft - half);
      } else if (el.scrollLeft < 1) {
        el.scrollLeft = Math.min(half - 1, el.scrollLeft + half);
      }
    };

    const step = () => {
      if (!paused) {
        el.scrollLeft += speed;
        wrap();
      }
      raf = requestAnimationFrame(step);
    };

    el.addEventListener("pointerdown", pause);
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("scroll", wrap, { passive: true });

    if (!reduced) raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("scroll", wrap);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`no-scrollbar flex overflow-x-auto ${className}`}>
      {children}
    </div>
  );
}
