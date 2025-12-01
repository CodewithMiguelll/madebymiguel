"use client";
import DecryptedText from "@/components/DecryptedText";
import TextType from "@/components/TextType";
import { motion } from "motion/react";
import { Orbitron, Dosis, IBM_Plex_Sans } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });
const dosis = Dosis({ subsets: ["latin"], weight: "400" });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "Product Designer",
    "Writer",
  ];

  return (
    <main className="w-full z-10 relative">
      {/* HERO SECTION */}
      <section
        className="mt-56 flex flex-col justify-center items-center px-6 text-center"
        id="/"
      >
        <DecryptedText
          text="Welcome, my name is Miguel."
          parentClassName={`${orbitron.className} text-2xl md:text-4xl text-green-500 font-bold mb-6`}
          encryptedClassName="text-2xl md:text-4xl text-green-500 font-bold mb-6"
          animateOn="view"
          sequential
          speed={85}
          revealDirection="start"
          className="font-extrabold"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-2xl mb-10"
        >
          <div
            className={`${dosis.className} flex flex-row gap-2 justify-center font-bold text-green-500 text-xl`}
          >
            <p>I am a</p>
            <TextType
              text={roles}
              typingSpeed={50}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              cursorClassName="font-black"
              loop
            />
          </div>
        </motion.div>

        <div className="flex flex-row gap-3 items-center justify-center">
          <button
            className={`${dosis.className} bg-green-600 hover:bg-green-700 text-[#f9f9f9]/50 py-2 px-4 rounded cursor-none`}
          >
            <a
              href="/chikaima-miguel-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="chikaima-miguel-resume.pdf"
            >
              View My Resume
            </a>
          </button>

          <button
            className={`${dosis.className} bg-green-600 hover:bg-green-700 text-[#f9f9f9]/50 py-2 px-4 rounded cursor-none`}
          >
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
        className="mt-56 flex flex-col justify-center items-center px-6"
        id="about"
      >
        <h1
          className={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-green-500`}
        >
          <DecryptedText
            text="Who Is Miguel?"
            encryptedClassName="text-green-500"
            parentClassName={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-green-500`}
            animateOn="view"
            sequential
            speed={85}
            revealDirection="start"
          />
        </h1>

        <p
          className={`${dosis.className} max-w-3xl text-center text-green-500 text-lg md:text-xl leading-relaxed`}
        >
          I’m Miguel, a frontend developer and designer who loves turning ideas
          into smooth, functional digital experiences. I build with React,
          Next.js, and intuitive UX principles, always aiming for interfaces
          that feel clean, precise, and genuinely pleasant to use. When I’m not
          shaping pixels and writing logic, I’m usually immersed in stories —
          reading comics, watching films, writing, or getting lost in a good
          game. Fun detail: the data-rain background on this site is inspired by
          The Matrix, a nod to the worlds that first made me fall in love with
          tech.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section>
        
      </section>
    </main>
  );
}
