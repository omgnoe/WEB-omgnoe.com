"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CommandPalette from "@/components/CommandPalette";
import FlagIcon from "@/components/FlagIcon";
import {
  aboutPath,
  contactPath,
  homePath,
  locales,
  pathFor,
  servicesPath,
  workPath,
  LOCALE_LABEL,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { dict } from "@/lib/ui";

/**
 * The header is the instrument, not a nav strip.
 *
 * It absorbed the old status rail, so one bar now does three jobs: it says the
 * system is live, it tells you where in the page you currently are, and it
 * shows how far through it you have read. Sections announce themselves with a
 * `data-sec` attribute; the readout falls back to the page name elsewhere.
 */
export default function SiteHeader({
  locale,
  pageKey,
  /** Shown in the readout when no section is in view. */
  pageLabel,
}: {
  locale: Locale;
  pageKey: PageKey;
  pageLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState<string | null>(null);
  const [section, setSection] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const t = dict(locale);

  // Luxembourg clock, mounted-only so server and client never disagree.
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat(locale === "en" ? "en-GB" : locale, {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Luxembourg",
          hour12: false,
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [locale]);

  // Which labelled section is currently under the header.
  useEffect(() => {
    const marked = Array.from(document.querySelectorAll<HTMLElement>("[data-sec]"));
    if (!marked.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setSection((hit.target as HTMLElement).dataset.sec ?? null);
      },
      // A band just under the header: whatever crosses it is "where you are".
      { rootMargin: "-18% 0px -72% 0px", threshold: 0 },
    );
    marked.forEach((m) => io.observe(m));
    return () => io.disconnect();
  }, []);

  // Read-progress hairline. Width is written straight to the node so the bar
  // never triggers a React render on scroll.
  useEffect(() => {
    let raf = 0;
    const paint = () => {
      raf = 0;
      const el = barRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const nav = [
    { href: workPath(locale), label: t.nav.work },
    { href: servicesPath(locale), label: t.nav.services },
    { href: aboutPath(locale), label: t.nav.about },
  ];
  const others = locales.filter((l) => l !== locale);
  const readout = section ?? pageLabel ?? null;

  return (
    <header className="sticky top-0 z-50 rule-b bg-void/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-5 px-4 sm:px-8">
        <Link
          href={homePath(locale)}
          aria-label={t.menu.home}
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center"
        >
          <Image src="/omgnoe-logo.png" alt="omgnoe" width={144} height={34} priority className="h-4 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="mono group inline-flex items-center gap-1 text-dim transition-colors hover:text-chalk"
            >
              <span className="text-faint opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                [
              </span>
              {n.label}
              <span className="text-faint opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                ]
              </span>
            </Link>
          ))}
        </nav>

        {/* Live readout: the old status rail, folded into the bar it belonged in. */}
        <p className="mono ml-auto hidden min-w-0 items-center gap-2.5 text-faint lg:flex">
          <span className="dot dot-live shrink-0" aria-hidden />
          {readout && <span className="truncate text-dim">{readout}</span>}
          <span className="tnum shrink-0" suppressHydrationWarning>
            {time ?? ""}
          </span>
        </p>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <CommandPalette locale={locale} label={t.menu.jump} />

          <div className="flex items-center gap-2.5" aria-label={t.menu.language}>
            <span className="flex items-center rounded-[2px] ring-1 ring-ember" title={LOCALE_LABEL[locale]}>
              <FlagIcon locale={locale} />
              <span className="sr-only">{LOCALE_LABEL[locale]}</span>
            </span>
            {others.map((l) => (
              <Link
                key={l}
                href={pathFor(l, pageKey)}
                hrefLang={l}
                lang={l}
                title={LOCALE_LABEL[l]}
                className="flex items-center rounded-[2px] opacity-45 ring-1 ring-line transition-opacity hover:opacity-100"
              >
                <FlagIcon locale={l} />
                <span className="sr-only">{LOCALE_LABEL[l]}</span>
              </Link>
            ))}
          </div>

          <div className="hidden sm:block">
            <Link href={contactPath(locale)} className="btn btn-ember !py-2.5">
              {t.nav.hire}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? t.menu.close : t.menu.open}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center border border-line text-chalk md:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden>
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Read progress. Transform-only, so scrolling never costs a layout. */}
      <div
        ref={barRef}
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-ember"
        style={{ transform: "scaleX(0)" }}
      />

      {open && (
        <nav className="rule-t bg-void md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rule-soft-b flex items-center justify-between px-4 py-4 text-chalk"
            >
              <span className="font-display d-md">{n.label}</span>
              <span className="mono text-faint" aria-hidden>
                →
              </span>
            </Link>
          ))}
          <div className="px-4 py-4">
            <Link href={contactPath(locale)} onClick={() => setOpen(false)} className="btn btn-ember w-full">
              {t.nav.hire}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
