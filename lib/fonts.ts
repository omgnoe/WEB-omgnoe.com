import { Bricolage_Grotesque, Instrument_Sans, Geist_Mono } from "next/font/google";

export const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fontVars = `${bricolage.variable} ${instrument.variable} ${geistMono.variable}`;
