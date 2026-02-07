import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const adieu = localFont({
  src: "../public/fonts/Adieu-Regular.ttf",
  variable: "--font-adieu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CD Studio",
  description: "Digital. Branding. Agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${adieu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
