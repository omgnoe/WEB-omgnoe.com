import "../globals.css";
import { fontVars } from "@/lib/fonts";

/**
 * Root layout for the Moien microsite (moien.omgnoe.com). Separate from the
 * omgnoe locale layouts only because each root layout owns its own <html>,
 * and Moien is Luxembourgish. The nested moien/layout.tsx still carries the
 * microsite's own fonts, CSS and metadata, unchanged.
 */
export default function MoienRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lb" className={`${fontVars} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
