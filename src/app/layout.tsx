import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import MatrixRain from "@/components/matrix-rain";

export const metadata: Metadata = {
  title: {
    default: "Chikaima Uwakwe | Portfolio Website",
    template: "Chikaima Uwakwe | %s",
  },
  description:
    "Portfolio website of Chikaima Miguel Uwakwe, a frontend developer specializing in building modern web applications, and product design.",
  icons: {
    icon: [
      { url: "/assets/favicon.ico" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  openGraph: {
    title: "Chikaima Uwakwe | Portfolio Website",
    description:
      "Portfolio website of Chikaima Miguel Uwakwe, a software developer specializing in building modern web applications, and product design.",
    url: "https://kaimaaa.vercel.app",
    siteName: "Chikaima Uwakwe",
    images: [
      {
        url: "/assets/chikaima-portfolio-og-image.png",
        width: 1200,
        height: 630,
        alt: "Chikaima Uwakwe | Portfolio Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#141414] cursor-none relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CustomCursor />
        <MatrixRain />
      </body>
    </html>
  );
}
