import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interactive AI",
  description: "OpenAI API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
