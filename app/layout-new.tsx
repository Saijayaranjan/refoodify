import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <main className="min-h-[calc(100svh)]">{children}</main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Refoodify - Make Money with Waste",
  description: "AI-powered food waste management system that transforms leftovers into valuable resources through smart reuse ideas, nutritional insights, and composting tips.",
  generator: "Team Git Happens",
};
