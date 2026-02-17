import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Radio_Canada_Big,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerifPro = Source_Serif_4({
  variable: "--font-source-serif-pro",
  subsets: ["latin"],
});

const radioCanadaBig = Radio_Canada_Big({
  variable: "--font-radio-canada-big",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aetherfield",
  description:
    "Track impact, reduce emissions, and accelerate progress--with clarity and confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${radioCanadaBig.variable} ${sourceSerifPro.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
