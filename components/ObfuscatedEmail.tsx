"use client";

import { useEffect, useState } from "react";

/**
 * Email is never present as plain text or a mailto: in the static HTML.
 * The local-part and domain are stored base64-encoded and only assembled
 * in the browser after hydration — regex/HTML scrapers see nothing usable.
 */
const U = "YWN0aW9u"; // action
const D = "b21nbm9lLmNvbQ=="; // omgnoe.com

type Props = {
  className?: string;
  label?: string;
};

export default function ObfuscatedEmail({ className, label }: Props) {
  const [addr, setAddr] = useState<string | null>(null);

  useEffect(() => {
    try {
      setAddr(`${atob(U)}@${atob(D)}`);
    } catch {
      /* noop */
    }
  }, []);

  if (!addr) {
    // Pre-hydration / no-JS: human-readable but bot-hostile placeholder.
    return (
      <span className={className} aria-label="email address">
        {label ?? "action [at] omgnoe [dot] com"}
      </span>
    );
  }

  return (
    <a
      className={className}
      href={`mailto:${addr}`}
      rel="nofollow noopener"
    >
      {label ?? addr}
    </a>
  );
}
