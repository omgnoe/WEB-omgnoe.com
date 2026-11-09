import type { Locale } from "@/lib/i18n";

/**
 * Flags for the language switcher.
 *
 * Flags are a shaky proxy for languages, so the name stays in the accessible
 * tree: every switch keeps a visible-to-screen-readers label and a title. The
 * flag is the quick visual, never the only signal.
 *
 * Drawn as inline SVG rather than emoji: Noe's rule is SVG icons everywhere,
 * and flag emoji do not render at all on Windows Chrome.
 */
export default function FlagIcon({
  locale,
  className = "h-3.5 w-5",
}: {
  locale: Locale;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 20 14",
    className,
    "aria-hidden": true as const,
    role: "presentation" as const,
  };

  if (locale === "fr") {
    return (
      <svg {...common}>
        <rect width="20" height="14" fill="#fff" />
        <rect width="6.67" height="14" fill="#002395" />
        <rect x="13.33" width="6.67" height="14" fill="#ED2939" />
      </svg>
    );
  }

  if (locale === "de") {
    return (
      <svg {...common}>
        <rect width="20" height="4.67" y="0" fill="#000" />
        <rect width="20" height="4.67" y="4.67" fill="#DD0000" />
        <rect width="20" height="4.66" y="9.34" fill="#FFCE00" />
      </svg>
    );
  }

  // English: the Union Flag, the convention users expect on a switcher.
  return (
    <svg {...common}>
      <rect width="20" height="14" fill="#012169" />
      <path d="M0 0l20 14M20 0L0 14" stroke="#fff" strokeWidth="2.8" />
      <path d="M0 0l20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M10 0v14M0 7h20" stroke="#fff" strokeWidth="4.6" />
      <path d="M10 0v14M0 7h20" stroke="#C8102E" strokeWidth="2.8" />
    </svg>
  );
}
