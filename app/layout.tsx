import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";

// Soft, rounded serif for headings and a friendly rounded sans for body text.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kataruna · Projects",
  description:
    "Desktop tools for Windows and macOS, Unity editor packages, and Android apps by Kataruna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
