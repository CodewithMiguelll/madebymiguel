"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Share_Tech_Mono, Press_Start_2P } from "next/font/google";

 const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });
 const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });


const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full bg-white/5 shadow-sm sticky top-0 left-0 z-50 backdrop-blur-2xl cursor-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">
        {/* Brand */}
        <div className={`${pressStart.className} text-3xl font-bold text-green-500`}>
          <Link className="cursor-none" href="/">
            C
          </Link>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-8 font-medium ${shareTechMono.className}`}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-all cursor-none text-green-500 ${
                  isActive
                    ? "text-green-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-green-500 after:rounded-full"
                    : "hover:border-b-green-500 hover:border-b"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-green-500 hover:text-green-600 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="cursor-none" size={26} /> : <Menu className="cursor-none" size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/5 shadow-md border-t border-green-400">
          <div className="flex flex-col items-start p-4 space-y-4 text-green-500 font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full px-2 py-2 rounded-md transition ${
                    isActive
                      ? "text-green-500"
                      : "hover:border-b-green-500 hover:text-green-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
