"use client"

import BlurText from "@/components/BlurText";
import TextType from "@/components/TextType";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconBrandCss3, IconBrandFirebase, IconBrandFramerMotion, IconBrandGithub, IconBrandJavascript, IconBrandNextjs, IconBrandReact, IconBrandSupabase, IconBrandTailwind, IconBrandTypescript, IconBrandX, IconHtml } from "@tabler/icons-react";
import { Figma, Palette, Book, Pencil } from "lucide-react";
import Projects from "@/components/projects-overview";
import Contact from "@/components/contact-form";

const roles =[
  "Frontend Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Writer",
]

const categorizedStack = [
  {
    category: "Engineering & Architecture",
    items: [
      { name: "HTML", icon: IconHtml },
      { name: "CSS", icon: IconBrandCss3 },
      { name: "JavaScript", icon: IconBrandJavascript },
      { name: "React", icon: IconBrandReact },
      { name: "Next.js", icon: IconBrandNextjs },
      { name: "TypeScript", icon: IconBrandTypescript },
      { name: "Tailwind CSS", icon: IconBrandTailwind },
      { name: "Supabase", icon: IconBrandSupabase },
      { name: "Firebase", icon: IconBrandFirebase },
      { name: "GitHub", icon: IconBrandGithub },
    ],
  },
  {
    category: "Design & UX",
    items: [
      { name: "Figma", icon: Figma },
      { name: "Framer Motion", icon: IconBrandFramerMotion },
      { name: "Graphic Design", icon: Palette },
      { name: "Pen & Paper", icon: Pencil },
    ],
  },
  {
    category: "Storytelling & Community",
    items: [
      { name: "WattPad", icon: Book },
      { name: "X (Twitter)", icon: IconBrandX },
    ],
  },
];


export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="mt-56 flex flex-col items-center justify-center px-5 text-gray-300"
      >
        <BlurText
          text="Hello, my name is Chikaima."
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-bold"
        />

        <div className="mt-8 text-lg md:text-2xl font-medium flex flex-row items-center justify-center text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1 }}
          >
            I am a
          </motion.p>
          <TextType
            text={roles}
            typingSpeed={50}
            deletingSpeed={50}
            initialDelay={10}
            className="ml-2"
          />
        </div>

        <div className="mt-6.5 flex flex-row items-center gap-4 justify-center w-full px-2">
          <Link
            href="https://cal.com/chikaima-uwakwe-004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="w-full md:w-auto relative px-6 py-3 font-semibold text-white transition-all duration-300 ease-out
        bg-white/10 backdrop-blur-lg rounded-xl
        border border-white/20
        whitespace-nowrap
        hover:bg-white/20 hover:border-white/40
        shadow-[0_4px_12px_rgba(0,0,0,0.1)]
        hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)]
        active:scale-95"
            >
              Get In Touch
            </button>
          </Link>

          <Link
            href="/chikaima-miguel-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button
              className="w-full md:w-auto relative px-6 py-3 font-semibold text-white transition-all duration-300 ease-out
        bg-white/10 backdrop-blur-lg rounded-xl
        border border-white/20
        whitespace-nowrap
        hover:bg-white/20 hover:border-white/40
        shadow-[0_4px_12px_rgba(0,0,0,0.1)]
        hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)]
        active:scale-95"
            >
              View My Resume
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="mt-60 flex flex-col items-center justify-center px-5 text-gray-300"
      >
        <BlurText
          text="Who Is Chikaima?"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-bold "
        />
      </section>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="mt-8 px-4.5 text-center text-lg md:text-xl text-gray-400"
      >
        I’m Chikaima, a frontend developer, product designer, and writer. I love
        harnessing my creativity to build seamless digital experiences that not
        only look incredible but also convert and engage. For me, a great
        product lives at the intersection of form and function. I build with
        React, Next.js, and intuitive UX principles, ensuring that beautiful
        interfaces are backed by accessible, high-performing logic. But my drive
        to build doesn't stop at the code editor. As a storyteller, I'm
        currently serializing my original sci-fi/fantasy project,
        <a
          href="https://www.wattpad.com/story/407399764-rise-of-the-rejects?utm_source=web&utm_medium=twitter&utm_content=share_myworks&wp_uname=Chikaimaaa_"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span className="relative z-10 hover:underline font-bold transition-colors duration-300">
            Rise Of The Rejects
          </span>
        </a>
        , on Wattpad. Whether I’m shaping pixels, writing application logic, or
        plotting character arcs, my goal is always the same: to craft immersive
        experiences that people genuinely want to get lost in.
      </motion.p>

      {/* TECH STACK */}
      <section className="mt-32 flex flex-col items-center justify-center px-5 text-gray-300">
        <BlurText
          text="Tools & Technologies"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-6xl font-bold "
        />

        <div className="flex flex-col gap-12 max-w-6xl mt-12 w-full">
          {categorizedStack.map((section) => (
            <div key={section.category} className="flex flex-col w-full">
              {/* Category Header */}
              <h3 className="text-xl font-bold text-gray-300 mb-6 border-b border-white/10 pb-2">
                {section.category}
              </h3>

              {/* The Grid of Tools */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                {section.items.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 flex flex-col items-center gap-8 justify-center p-4 sm:p-8 hover:border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,44,85,0.15)] transition-all duration-300 ease-out hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <item.icon size={40} />
                      <p className="text-xs sm:text-sm mt-3 font-medium text-center">
                        {item.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mt-28 flex flex-col items-center justify-center px-5 text-gray-300"
      >
        <Projects />
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="mt-28 flex flex-col items-center justify-center px-5"
      >
        <Contact />
      </section>
    </>
  );
}