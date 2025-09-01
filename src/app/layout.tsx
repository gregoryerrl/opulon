import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Opulon | Premium Automotive Gallery",
  description: "Experience luxury vehicles through stunning imagery and seamless test drive booking. Your gateway to automotive excellence.",
  keywords: "luxury cars, premium vehicles, test drive, automotive gallery, car booking",
  authors: [{ name: "Opulon" }],
  openGraph: {
    title: "Opulon | Premium Automotive Gallery",
    description: "Experience luxury vehicles through stunning imagery and seamless test drive booking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
