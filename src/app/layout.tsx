import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arhbit — Build Habits That Stick",
  description:
    "Arhbit transforms habit tracking into a journey of nurturing growth. Every tap feeds a companion who believes in you. Build lasting habits with accountability partners, smart streaks, and a calming experience rooted in African wisdom.",
  metadataBase: new URL("https://arhbit.com"),
  keywords: [
    "habit tracker",
    "habit tracking app",
    "accountability partner",
    "build habits",
    "streak tracker",
    "daily habits",
    "habit companion",
    "iOS habit app",
    "Android habit app",
  ],
  openGraph: {
    title: "Arhbit — Build Habits That Stick",
    description:
      "Transform habit tracking into a journey of nurturing growth. Accountability partners, smart streaks, and a companion who grows with you.",
    url: "https://arhbit.com",
    siteName: "Arhbit",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://arhbit.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arhbit — Build Habits That Stick",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arhbit — Build Habits That Stick",
    description:
      "Transform habit tracking into a journey of nurturing growth. Accountability partners, smart streaks, and a companion who grows with you.",
    images: ["https://arhbit.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
