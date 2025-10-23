import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import { Providers } from "../components/providers";
import { Sidebar } from "../components/sidebar";
import { Topbar } from "../components/topbar";
import { Toaster } from "sonner";
import { Guard } from "../components/guard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LedgerPay Console",
  description: "Internal console for LedgerPay microservices",
};

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Providers>
          <Guard>
            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[16rem_1fr]">
              <Sidebar />
              <div className="flex flex-col min-h-screen">
                <Topbar />
                <main className="flex-1 p-4 md:p-6">{children}</main>
              </div>
            </div>
          </Guard>
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
