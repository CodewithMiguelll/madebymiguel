"use client";
import DecryptedText from "@/components/DecryptedText";
import TextType from "@/components/TextType";
import { motion } from "motion/react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const roles = [
    "Frontend Developer.",
    "UI/UX Designer.",
    "Product Designer.",
    "Writer.",
  ];

  return (
    <main className="w-full z-10 relative">
      {/* HERO SECTION */}
      <section
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
        id="/"
      >
        <DecryptedText
          text="Welcome, my name is Miguel!"
          parentClassName={`${orbitron.className} text-2xl md:text-4xl text-green-500 font-bold mb-6`}
          encryptedClassName="text-2xl md:text-4xl text-green-500 font-bold mb-6"
          animateOn="view"
          sequential
          speed={85}
          revealDirection="start"
          className="font-extrabold"
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-2xl text-[#d4d4d4] mb-10"
        >
          <div className="flex flex-row gap-2 justify-center font-bold text-green-500 text-xl">
            <p>I am a</p>
            <TextType
              text={roles}
              typingSpeed={50}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              cursorClassName="font-black"
              loop
            />
          </div>
        </motion.div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <button className="bg-[#e5e7e8] hover:bg-[#282828] text-[#282828] hover:text-[#e5e7e8] font-bold py-2 px-4 rounded cursor-none">
            <a
              href="/chikaima-miguel-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="chikaima-miguel-resume.pdf"
            >
              View My Resume
            </a>
          </button>

          <button className="bg-[#e5e7e8]/75 hover:bg-[#282828] text-[#282828] hover:text-[#e5e7e8] font-bold py-2 px-4 rounded cursor-none">
            <a
              href="https://cal.com/chikaima-uwakwe-004"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In Touch
            </a>
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        className="min-h-screen flex flex-col justify-center items-center px-6"
        id="about"
      >
        <h1
          className={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6`}
        >
          Who Is Miguel?
        </h1>
      </section>
    </main>
  );
}
