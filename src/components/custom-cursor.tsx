"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    const moveHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const hoverables = document.querySelectorAll("a, button");
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", moveHandler);

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-14 h-14 rounded-full border border-white/50 mix-blend-difference
                   shadow-[0_0_20px_rgba(138, 180, 255,0.6),0_0_40px_rgba(138,180,255,0.4)]"
        animate={{
          x: pos.x - 28,
          y: pos.y - 28,
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 0.9 : 0.6,
          boxShadow: hovering
            ? "0 0 30px rgba(138,180,255,0.9), 0 0 60px rgba(138,180,255,0.6)"
            : "0 0 20px rgba(138,180,255,0.6), 0 0 40px rgba(138,180,255,0.4)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 w-4 h-4 rounded-full bg-gray-500 mix-blend-difference
                   shadow-[0_0_10px_rgba(138,180,255,0.8),0_0_20px_rgba(138,180,255,0.6)]"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: hovering ? 1.5 : 2,
          boxShadow: hovering
            ? "0 0 15px rgba(138,180,255,1),0 0 30px rgba(138,180,255,0.8)"
            : "0 0 10px rgba(138,180,255,0.8),0 0 20px rgba(138,180,255,0.6)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
    </>
  );
}
