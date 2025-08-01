import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abeba Knit",
  description: "Premium textile manufacturing with Ethiopian cultural heritage and modern innovation",
  icons: {
    icon: "/kkjj.png",
    shortcut: "/kkjj.png",
    apple: "/kkjj.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/herosection.png" as="image" />
        <link rel="preload" href="/Cloth sample 1.png" as="image" />
        <link rel="preload" href="/Cloth sample 3.png" as="image" />
        <link rel="preload" href="/Cloth design 2.png" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
