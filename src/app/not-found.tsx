"use client";
import { Press_Start_2P, Dosis } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const dosis = Dosis({
  weight: "400",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dark overlay to separate text from Matrix rain */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* 404 Text */}
        <h1
          className={`${pressStart.className} glitch text-[8rem] font-bold text-green-500 tracking-widest`}
        >
          404
        </h1>

        {/* Subtext */}
        <p
          className={`${dosis.className} text-lg md:text-xl text-green-500 mb-8 max-w-md`}
        >
          This path isn’t mapped in the system. Rerouting your signal…
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition shadow-[0_0_10px_rgba(0,255,0,0.3)]"
          >
            Jack Back In
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
