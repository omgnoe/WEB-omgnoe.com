export default function ServiceIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  switch (name) {
    case "apple":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M17.05 12.54c-.03-2.62 2.14-3.88 2.24-3.94-1.22-1.79-3.12-2.03-3.8-2.06-1.61-.16-3.15.95-3.97.95-.82 0-2.08-.93-3.43-.9-1.76.03-3.39 1.02-4.29 2.6-1.83 3.18-.47 7.88 1.31 10.46.87 1.26 1.91 2.68 3.27 2.63 1.31-.05 1.81-.85 3.4-.85 1.58 0 2.03.85 3.42.82 1.42-.02 2.31-1.28 3.18-2.55 1-1.46 1.41-2.87 1.43-2.94-.03-.02-2.74-1.05-2.76-4.22ZM14.44 4.83c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.29.69-3.03 1.56-.66.77-1.25 2-1.09 3.18 1.15.09 2.33-.58 3.05-1.45Z" />
        </svg>
      );
    case "android":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M17.6 9.48l1.84-3.18c.1-.17.04-.4-.13-.5a.37.37 0 0 0-.51.13l-1.86 3.22a11.14 11.14 0 0 0-9.88 0L5.2 5.93a.37.37 0 0 0-.51-.13c-.17.1-.23.33-.13.5L6.4 9.48A10.6 10.6 0 0 0 1 18h22a10.6 10.6 0 0 0-5.4-8.52ZM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M12 15c-1.5-1.5-2-5 0-8.5C15 2 20 2 21 3c1 1 1 6-2.5 9-3.5 2-7 1.5-8.5 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 12l-4 1 3-4M12 15l-1 4 4-3M5 19c.5-1.5 1.5-2.5 3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="8" r="1.4" fill="currentColor" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M14.5 6.5a4 4 0 0 0-5.24 5.1L4 16.86 7.14 20l5.26-5.26a4 4 0 0 0 5.1-5.24l-2.62 2.62-2.5-.62-.62-2.5 2.74-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <rect x="3" y="13" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="7" cy="7.5" r="1" fill="currentColor" />
          <circle cx="7" cy="16.5" r="1" fill="currentColor" />
        </svg>
      );
    case "cube":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M12 2.5l8 4.5v10l-8 4.5-8-4.5V7l8-4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M12 12l8-5M12 12v9.5M12 12L4 7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path d="M3 13l18-7-7 18-2.5-7.5L3 13Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
  }
}
