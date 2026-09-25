"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryItem = { src: string; alt: string; kind?: "web" | "app" };

/**
 * Horizontal case-study gallery. Web shots render as mini browser
 * windows, app shots inside a dark phone shell. Scrolls by touch,
 * trackpad, mouse wheel, click-and-drag and arrow buttons; every
 * shot opens in a lightbox.
 */
export default function CaseGallery({
  items,
  accent,
  host,
}: {
  items: GalleryItem[];
  accent: string;
  host?: string | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const suppressClick = useRef(false);
  const [edges, setEdges] = useState({ left: false, right: false, frac: 0 });
  const [open, setOpen] = useState<number | null>(null);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({
      left: el.scrollLeft > 8,
      right: el.scrollLeft < max - 8,
      frac: max > 0 ? (el.scrollLeft + el.clientWidth) / el.scrollWidth : 1,
    });
  }, []);

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  // drag-to-scroll + wheel-to-horizontal
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let down = false;
    let dragging = false;
    let startX = 0;
    let startLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
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
        el.scrollLeft = startLeft - dx;
        e.preventDefault();
      }
    };
    const onPointerEnd = () => {
      down = false;
      if (dragging) {
        dragging = false;
        el.classList.remove("drag-scrolling");
        suppressClick.current = true;
        setTimeout(() => {
          suppressClick.current = false;
        }, 0);
      }
    };
    const onWheel = (e: WheelEvent) => {
      if (e.deltaX !== 0 || e.shiftKey) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      if ((e.deltaY > 0 && el.scrollLeft < max - 1) || (e.deltaY < 0 && el.scrollLeft > 1)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    const onDragStart = (e: Event) => e.preventDefault();

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerEnd);
    el.addEventListener("pointercancel", onPointerEnd);
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("dragstart", onDragStart);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerEnd);
      el.removeEventListener("pointercancel", onPointerEnd);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  // lightbox keyboard + scroll lock
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, items.length]);

  const nudge = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  };

  const fade = 40;
  const mask = `linear-gradient(to right, ${edges.left ? "transparent, black " + fade + "px" : "black, black"}, black calc(100% - ${
    edges.right ? fade : 0
  }px), ${edges.right ? "transparent" : "black"})`;

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={measure}
        className="no-scrollbar drag-scrollable -mx-5 mt-6 flex snap-x snap-proximity items-stretch gap-4 overflow-x-auto px-5 pb-2 sm:gap-5"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        {items.map((g, i) => {
          const app = g.kind === "app";
          return (
            <figure
              key={g.src}
              onClick={() => {
                if (!suppressClick.current) setOpen(i);
              }}
              className={`group relative h-72 shrink-0 cursor-zoom-in snap-start overflow-hidden transition-all duration-300 hover:-translate-y-1.5 sm:h-96 ${
                app
                  ? "rounded-[1.9rem] border border-ink/10 bg-[#15130f] p-1.5 shadow-card hover:shadow-pop"
                  : "flex w-[min(88vw,26rem)] flex-col rounded-2xl border border-line bg-card shadow-card hover:shadow-pop sm:w-[36rem]"
              }`}
            >
              {app ? (
                <div className="relative h-full overflow-hidden rounded-[1.55rem]" style={{ aspectRatio: "9 / 19.5" }}>
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 40vw, 200px" className="object-cover object-top" />
                </div>
              ) : (
                <>
                  <div className="browser-bar shrink-0">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    {host && <span className="ml-2 font-mono text-[0.68rem] text-muted">{host}</span>}
                  </div>
                  <div className="relative min-h-0 w-full flex-1">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 90vw, 600px" className="object-cover object-top" />
                  </div>
                </>
              )}
              <figcaption className="pointer-events-none absolute inset-x-2 bottom-2 hidden justify-start opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex">
                <span className="rounded-full bg-ink/85 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                  {g.alt}
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* desktop arrows */}
      <button
        type="button"
        aria-label="Scroll gallery left"
        onClick={() => nudge(-1)}
        disabled={!edges.left}
        className="absolute -left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-card/95 shadow-card backdrop-blur transition hover:bg-paper disabled:pointer-events-none disabled:opacity-0 md:grid"
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
          <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Scroll gallery right"
        onClick={() => nudge(1)}
        disabled={!edges.right}
        className="absolute -right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-card/95 shadow-card backdrop-blur transition hover:bg-paper disabled:pointer-events-none disabled:opacity-0 md:grid"
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
          <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* progress */}
      {(edges.left || edges.right) && (
        <div className="mt-4 flex items-center gap-4">
          <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-line/70">
            <div
              className="h-full rounded-full transition-[width] duration-150"
              style={{ width: `${Math.round(edges.frac * 100)}%`, background: accent }}
            />
          </div>
          <p className="shrink-0 text-xs text-muted sm:hidden">Swipe for more</p>
          <p className="hidden shrink-0 text-xs text-muted sm:block">Drag, scroll or click a shot</p>
        </div>
      )}

      {/* lightbox (portal: escapes transformed ancestors that would break position:fixed) */}
      {open !== null &&
        createPortal(
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 backdrop-blur-md sm:p-8"
          style={{ background: "rgba(18, 16, 12, 0.93)" }}
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={items[open].alt}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={items[open].src}
            alt={items[open].alt}
            className={`max-h-[80vh] max-w-[94vw] border border-white/10 object-contain shadow-2xl ${
              items[open].kind === "app" ? "rounded-[2rem]" : "rounded-xl"
            }`}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-5 max-w-xl text-center text-sm text-white/80">{items[open].alt}</p>
          <p className="mt-1 font-mono text-xs text-white/40">
            {open + 1} / {items.length}
          </p>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
              <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Previous shot"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + items.length) % items.length);
            }}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 sm:left-6"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next shot"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % items.length);
            }}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 sm:right-6"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
              <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>,
        document.body
      )}
    </div>
  );
}
