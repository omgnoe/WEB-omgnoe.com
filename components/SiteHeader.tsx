"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  aboutPath,
  contactPath,
  homePath,
  locales,
  pathFor,
  servicesPath,
  workPath,
  LOCALE_LABEL,
  LOCALE_SHORT,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { dict } from "@/lib/ui";

/**
 * No floating pill. The header is a hairline band welded to the top of the page,
 * because the whole layout is drawn from rules and this one should read the same.
 */
export default function SiteHeader({
  locale,
  pageKey,
}: {
  locale: Locale;
  /** Lets the language switcher point at the same page in the other language. */
  pageKey: PageKey;
}) {
  const [open, setOpen] = useState(false);
  const t = dict(locale);

  // A phone that rotates to landscape while the sheet is open should not be
  // left with a locked body scroll.
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

  return (
    <header className="sticky top-0 z-50 rule-b bg-void/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center gap-6 px-4 sm:px-8">
        <Link
          href={homePath(locale)}
          aria-label={t.menu.home}
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/omgnoe-logo.png"
            alt="omgnoe"
            width={144}
            height={34}
            priority
            className="h-4 w-auto"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-8 sm:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="mono text-dim transition-colors hover:text-chalk">
              {n.label}
            </Link>
          ))}
        </nav>

        <div
          className="ml-auto flex items-center gap-1 sm:ml-0 sm:border-l sm:border-line sm:pl-6"
          aria-label={t.menu.language}
        >
          <span className="mono px-1 text-chalk">{LOCALE_SHORT[locale]}</span>
          {others.map((l) => (
            <Link
              key={l}
              href={pathFor(l, pageKey)}
              hrefLang={l}
              lang={l}
              title={LOCALE_LABEL[l]}
              className="mono px-1 text-faint transition-colors hover:text-chalk"
            >
              {LOCALE_SHORT[l]}
            </Link>
          ))}
        </div>

        {/* `.btn` carries display:inline-flex outside Tailwind's layers, so a
            bare `hidden` on the Link would lose the cascade. Wrap it instead. */}
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
          className="grid h-9 w-9 place-items-center border border-line text-chalk sm:hidden"
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

      {open && (
        <nav className="rule-t bg-void sm:hidden">
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
            <Link
              href={contactPath(locale)}
              onClick={() => setOpen(false)}
              className="btn btn-ember w-full"
            >
              {t.nav.hire}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
