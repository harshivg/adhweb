import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sen } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const sen = Sen({
  variable: "--font-sen",
  weight: "variable",
  subsets: ["latin"],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// FIX METADATA
export const metadata: Metadata = {
  title: "Adhyayan",
  description: "The future of learning is here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sen.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
