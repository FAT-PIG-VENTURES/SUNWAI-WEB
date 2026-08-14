import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono, Noto_Serif_Devanagari } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const outfitFont = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const notoDevanagari = Noto_Serif_Devanagari({
  weight: "400",
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunwai | Premium Startup Evaluation",
  description: "Sunwai is a professional evaluation platform that gives every applicant a scored, written verdict.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfitFont.variable} ${interFont.variable} ${jetbrainsMono.variable} ${notoDevanagari.variable}`}>
      <body>
        <CustomCursor />
        <div className="layout-container">
          <div className="content-column">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
