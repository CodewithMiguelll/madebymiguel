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
    <>
      <main className="mt-24 min-h-screen flex flex-col p-24 justify-center items-center">
        {/* HERO SECTION */}
        <section className="text-center">
          <DecryptedText
            text="Welcome, my name is Miguel!"
            parentClassName={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-center`}
            encryptedClassName="text-2xl md:text-4xl font-bold mb-6 text-center"
            animateOn="view"
            sequential
            speed={85}
            revealDirection="start"
            className="font-extrabold"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center max-w-2xl text-[#d4d4d4] mb-10"
          >
            <div className="flex flex-row gap-2 justify-center font-extrabold">
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
        </section>
      </main>
    </>
  );
}
