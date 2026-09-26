import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudKey — Mechanical Keyboard",
  description: "A mechanical keyboard designed for cloud engineers."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}