import type { Metadata } from "next";
import "@/app/font-icon.css";

export const metadata: Metadata = {
  title: "Bazarekan",
  description: "Real Market with Real people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
