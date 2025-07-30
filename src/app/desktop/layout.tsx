import type { Metadata } from "next";
import "@/app/font-icon.css";
import "./globals.css";
import Header from "@/components/header";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Bazarekan",
  description: "Real Market with Real people",
};

export default function DesktopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <div id="OverlayContent" className={styles.overlay}></div>
    </>
  );
}
