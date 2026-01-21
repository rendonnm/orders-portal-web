import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppGrid } from "./components/AppGrid";
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
  title: "Orders Portal",
  description: `A responsive Next.js dashboard app for managing orders, 
    viewing order details, tracking status and metrics, and administering users and products.
    Built with the App Router and modular React components for performance and maintainability.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen w-screen overflow-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppGrid>{children}</AppGrid>
      </body>
    </html>
  );
}
