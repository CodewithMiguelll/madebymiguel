"use client";

import { IconBrandX, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Github, X, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-32 py-8 border-t border-white/10 bg-white/5 backdrop-blur-xl relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Left side – Branding */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-white font-medium tracking-wide text-sm flex items-center gap-2">
            © {new Date().getFullYear()}{" "}
            <span className="text-pink-500/50">•</span> Chikaima Miguel Uwakwe
          </h3>
          <p className="text-xs text-gray-400 mt-2 font-mono">
            Engineered with Next.js • Designed with Intent • Penned with Purpose
          </p>
        </div>

        {/* Right side – Socials */}
        <div className="flex items-center gap-4">
          <SocialLink
            href="https://github.com/CodeWithMiguelll"
            icon={<Github size={18} />}
          />
          <SocialLink
            href="https://x.com/Chikaimaaa"
            icon={<IconBrandX size={18} />}
          />
          <SocialLink
            href="mailto:chikaimauwakwe@gmail.com"
            icon={<Mail size={18} />}
          />
        </div>
      </motion.div>
    </footer>
  );
}

// Reusable Glass Social Button Component
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative group flex items-center justify-center w-10 h-10 
        rounded-full bg-white/5 border border-white/10 backdrop-blur-md
        text-gray-400 transition-all duration-300 ease-out
        hover:text-white hover:bg-white/10 hover:white/30 hover:scale-110
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
        hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_0_15px_rgba(255,44,85,0.3)]
      "
    >
      {/* Icon */}
      <span className="relative z-10">{icon}</span>

      {/* Subtle hover sheen */}
      <div className="absolute inset-0 rounded-full bg-linear-to-tr from-pink-500/0 to-cyan-500/0 group-hover:from-[#4B2E83]/10 group-hover:to-blue-500/10 transition-colors duration-500 pointer-events-none" />
    </Link>
  );
}
