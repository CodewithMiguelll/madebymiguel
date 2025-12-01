import type { Metadata } from "next";
import Navigation from "@/components/navbar";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import MatrixRain from "@/components/matrix-rain";


export const metadata: Metadata = {
  title: "Made By Miguel | Portfolio Website",
  description: "Miguel's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#141414] text-[#f5f5f5] cursor-none relative`}>
        <MatrixRain/>
        <Navigation />
        <main suppressHydrationWarning>{children}</main>
        <CustomCursor />
      </body>
    </html>
  );
}
