"use client";
import { motion } from "framer-motion";
import { Github, X, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-32 py-10 border-t border-green-600/20 backdrop-blur-sm relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Left side – Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-green-400 font-semibold tracking-wide text-sm">
            © {new Date().getFullYear()} • Chikaima Miguel Uwakwe
          </h3>
          <p className="text-xs text-green-300/60 mt-1">
            Built with Next.js • Styled with Tailwind • Inspired by The Matrix
          </p>
        </div>

        {/* Right side – Socials */}
        <div className="flex gap-6 text-green-400 text-sm">

          <Link
            href="https://github.com/CodeWithMiguelll"
            className="hover:text-green-300 transition-all duration-200"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://x.com/thebigmigz_"
            className="hover:text-green-300 transition-all duration-200"
          >
            <X size={20} />
          </Link>
          <Link
            href="mailto:chikaimauwakwe@gmail.com"
            className="hover:text-green-300 transition-all duration-200"
          >
            <Mail size={20} />
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
