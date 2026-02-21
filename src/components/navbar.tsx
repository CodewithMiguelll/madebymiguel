"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Animation variants for the mobile menu container
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for individual mobile links
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="w-full bg-white/5 p-2.5 shadow-sm sticky top-0 left-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Brand */}
        <div className="text-4xl font-black hover:scale-105 transition-transform">
          <Link href="/" className="relative group block">
            {/* Cyan Offset */}
            <span className="absolute top-0 -left-0.5 text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:-left-[3px] transition-all mix-blend-screen">
              C
            </span>
            {/* Purple Offset */}
            <span className="absolute top-0 -right-0.5 text-[#4B2E83] opacity-70 group-hover:opacity-100 group-hover:-right-[3px] transition-all mix-blend-screen">
              C
            </span>
            {/* Main White Text */}
            <span className="relative z-10 text-white mix-blend-overlay ">
              C
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-colors duration-300 text-lg tracking-wide ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-pink-500 rounded-full shadow-[0_0_8px_rgba(255,44,85,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-[#141414]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col items-start p-6 space-y-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`block w-full px-4 py-3 rounded-xl transition-all font-medium ${
                        isActive
                          ? "bg-white/10 text-white border border-white/10"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
