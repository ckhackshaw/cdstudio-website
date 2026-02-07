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

const brasley = localFont({
  src: [
    {
      path: "../public/fonts/Brasley-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Brasley-Semibold.otf",
      weight: "600",
    },
  ],
  variable: "--font-brasley",
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
      <body
        className={`${inter.variable} ${adieu.variable} ${brasley.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
