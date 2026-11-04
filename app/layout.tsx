import type { Metadata } from "next";
import { Fraunces, Google_Sans, Google_Sans_Code, Nunito } from "next/font/google";
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

// The CookIEs illustration uses the app's own fonts.
const googleSans = Google_Sans({ variable: "--font-gsans", subsets: ["latin"] });
const googleSansCode = Google_Sans_Code({ variable: "--font-gcode", subsets: ["latin"] });

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
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} ${googleSans.variable} ${googleSansCode.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
