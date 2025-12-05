import type { Metadata } from "next";
import Navigation from "@/components/navbar";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import MatrixRain from "@/components/matrix-rain";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Chikaima .U | Portfolio Website",
  description: "Chikaima's portfolio website",
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
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
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
