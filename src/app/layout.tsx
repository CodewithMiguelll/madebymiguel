import type { Metadata } from "next";
import Navigation from "@/components/navbar";
import "./globals.css";


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
      <Navigation/>
      <body
        className={`antialiased bg-[#282828] text-[#f5f5f5]`}
      >
        {children}
      </body>
    </html>
  );
}
