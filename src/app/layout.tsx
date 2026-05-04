import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import HeaderHideOnTop from "@/components/HeaderHideOnTop";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brigends = localFont({
  src: "../../public/fonts/brigends/Brigends Expanded.otf",
  variable: "--font-brigends",
  weight: "400",
  display: "swap",
});

const mangsi = localFont({
  src: "../../public/fonts/supremely-luxurious.ttf",
  variable: "--font-mangsi",
  weight: "400",
  display: "swap",
});

// Hasweny display font (user-provided in public/fonts)
const hasweny = localFont({
  src: "../../public/fonts/Hasweny.otf",
  variable: "--font-hasweny",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CHUAN",
  description: "Portfolio of CHUAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brigends.variable} ${mangsi.variable} ${hasweny.variable} antialiased bg-white text-black md:cursor-none`}
      >
        <HeaderHideOnTop />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
