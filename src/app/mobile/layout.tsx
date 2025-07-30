import type { Metadata } from "next";
import "@/app/font-icon.css";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Bazarekan",
  description: "Real Market with Real people",
};

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header isMobile={true} />
      {children}
    </>
  );
}
