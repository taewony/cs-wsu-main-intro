// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "OpenKnights",
  description: "트렌디한 컴퓨터공학과 연구소 사이트",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-theme="dark">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}