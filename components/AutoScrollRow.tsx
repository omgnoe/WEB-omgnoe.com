"use client";

import { useEffect, useRef } from "react";

/**
 * Horizontally scrollable strip that also drifts automatically.
 * Content must be rendered twice (two identical copies) so the
 * wrap-around at the halfway point is seamless. Auto-drift pauses
 * while the user swipes/drags/scrolls and resumes after a short idle.
 * Mouse users can click-and-drag to scroll.
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
    let down = false;
    let dragging = false;
    let startX = 0;
    let startLeft = 0;
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
      let target = el.scrollLeft;
      if (el.scrollLeft >= half) target = Math.max(1, el.scrollLeft - half);
      else if (el.scrollLeft < 1) target = Math.min(half - 1, el.scrollLeft + half);
      const delta = target - el.scrollLeft;
      if (delta !== 0) {
        el.scrollLeft += delta;
        // keep an active drag anchored across the seam
        if (dragging) startLeft += delta;
      }
    };

    const step = () => {
      if (!paused) {
        el.scrollLeft += speed;
        wrap();
      }
      raf = requestAnimationFrame(step);
    };

    const onPointerDown = (e: PointerEvent) => {
      pause();
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true;
      dragging = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!dragging && Math.abs(dx) > 4) {
        dragging = true;
        el.classList.add("drag-scrolling");
        try {
          el.setPointerCapture(e.pointerId);
        } catch {}
      }
      if (dragging) {
        pause();
        el.scrollLeft = startLeft - dx;
        e.preventDefault();
      }
    };
    const onPointerEnd = () => {
      down = false;
      if (dragging) {
        dragging = false;
        el.classList.remove("drag-scrolling");
        pause();
      }
    };
    const onDragStart = (e: Event) => e.preventDefault();

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerEnd);
    el.addEventListener("pointercancel", onPointerEnd);
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("scroll", wrap, { passive: true });
    el.addEventListener("dragstart", onDragStart);

    if (!reduced) raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerEnd);
      el.removeEventListener("pointercancel", onPointerEnd);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("scroll", wrap);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`no-scrollbar drag-scrollable flex overflow-x-auto ${className}`}>
      {children}
    </div>
  );
}
