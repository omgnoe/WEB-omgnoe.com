/**
 * The Operator type system.
 *
 * Archivo carries the display voice: a grotesk with enough width range to go
 * very large and very tight without turning into a logo. Geist is the reading
 * face. Geist Mono does the machine work: indices, status, labels, metadata.
 * Three faces, one engineered family feel.
 */
import { Archivo, Geist, Geist_Mono } from "next/font/google";

export const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontVars = `${archivo.variable} ${geist.variable} ${geistMono.variable}`;
