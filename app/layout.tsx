import type { Metadata } from "next";
import { Inter, PT_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });
const pt = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Akhil's portfolio",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={` bg-slate-900 ${pt.className}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
