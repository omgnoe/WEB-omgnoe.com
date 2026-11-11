"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Item = { href: string; label: string; group: string };
type Payload = { groups: { label: string; items: { href: string; label: string }[] }[] };

/**
 * Keyboard jump for the whole site. Cmd/Ctrl+K, or "/" when you are not
 * already typing into something.
 *
 * The index is fetched on first open rather than bundled: it is every service
 * and every case study in the current language, which has no business sitting
 * in the client bundle of every page just in case somebody presses a key.
 */
export default function CommandPalette({
  locale,
  label,
}: {
  locale: Locale;
  /** Accessible name, translated by the caller. */
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Item[] | null>(null);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Global shortcut.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const typing =
        el instanceof HTMLElement &&
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "/" && !typing && !open) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Load the index once, the first time it is actually needed.
  useEffect(() => {
    if (!open || items) return;
    let cancelled = false;
    fetch(`/api/nav?locale=${locale}`)
      .then((r) => r.json() as Promise<Payload>)
      .then((d) => {
        if (cancelled) return;
        setItems(
          d.groups.flatMap((g) => g.items.map((i) => ({ ...i, group: g.label }))),
        );
      })
      .catch(() => setItems([]));
    return () => {
      cancelled = true;
    };
  }, [open, items, locale]);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
      return () => {
        document.body.style.overflow = prev;
      };
    }
    setQ("");
    setActive(0);
  }, [open]);

  const results = useMemo(() => {
    if (!items) return [];
    const needle = q.trim().toLowerCase();
    if (!needle) return items.slice(0, 12);
    return items
      .filter((i) => i.label.toLowerCase().includes(needle) || i.group.toLowerCase().includes(needle))
      .slice(0, 12);
  }, [items, q]);

  useEffect(() => setActive(0), [q]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={label}
        className="mono hidden items-center gap-2 border border-line px-2.5 py-1.5 text-faint transition-colors hover:border-line-strong hover:text-chalk lg:inline-flex"
      >
        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden>
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <kbd className="font-mono not-italic">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-void/80 backdrop-blur-sm"
          />
          <div className="panel relative w-full max-w-xl overflow-hidden bg-panel">
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <span className="mono text-ember">&gt;</span>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && results[active]) {
                    e.preventDefault();
                    listRef.current?.querySelectorAll<HTMLAnchorElement>("a")[active]?.click();
                  }
                }}
                placeholder={label}
                className="mono-flat w-full bg-transparent font-mono text-base text-chalk outline-none placeholder:text-faint"
              />
            </div>

            <div ref={listRef} className="max-h-[52vh] overflow-y-auto">
              {!items && <p className="mono px-4 py-6 text-faint">…</p>}
              {items && results.length === 0 && (
                <p className="mono px-4 py-6 text-faint">No match</p>
              )}
              {results.map((i, n) => (
                <Link
                  key={i.href + i.label}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setActive(n)}
                  className={`flex items-baseline justify-between gap-4 border-b border-line-soft px-4 py-3 last:border-b-0 ${
                    n === active ? "bg-panel-2 text-chalk" : "text-dim"
                  }`}
                >
                  <span className="truncate text-sm">{i.label}</span>
                  <span className="mono shrink-0 text-faint">{i.group}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
