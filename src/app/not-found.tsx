"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Premium Glass Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-8 py-16 md:px-20 text-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
      >
        {/* Subtle internal ambient glow */}
        <div className="absolute inset-0 bg-linear-to-b from-pink-500/5 to-transparent opacity-50 pointer-events-none" />

        {/* Massive Gradient 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[6rem] md:text-[10rem] font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/10 leading-none tracking-wider drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mt-6 mb-12 max-w-md font-medium"
        >
          Not sure how you got here, but there's nothing to see. <br/> Let's get you back on track.
        </motion.p>

       {/* Glass Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/">
            <button
              className="
                group relative
                px-8 py-4 rounded-2xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.4)]
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:scale-105
                hover:border-pink-500/30
                hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),0_0_40px_rgba(255,44,85,0.4)]
                active:scale-95
                overflow-hidden
              "
            >
              <span className="relative z-10 text-white font-semibold tracking-wide drop-shadow-md">
                Take Me Home
              </span>

              {/* Button Sheen Animation */}
              <div
                className="
                  absolute inset-0 w-full h-full 
                  bg-linear-to-r from-transparent via-white/10 to-transparent 
                  -translate-x-full group-hover:translate-x-full 
                  transition-transform duration-700 ease-in-out
                "
              />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
