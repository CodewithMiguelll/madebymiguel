"use client";
import DecryptedText from "@/components/DecryptedText";
import TextType from "@/components/TextType";
import { Paintbrush, Sparkles, Figma, Github, Palette } from "lucide-react";
import { IconHtml, IconBrandReact, IconBrandCss3, IconBrandNextjs, IconBrandTypescript, IconBrandJavascript,  } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Orbitron, Dosis } from "next/font/google";
import { useState } from "react";

const orbitron = Orbitron({ subsets: ["latin"], weight: "400" });
const dosis = Dosis({ subsets: ["latin"], weight: "700" });

const techStack = [
  { name: "HTML5", icon: IconHtml },
  { name: "CSS3", icon: IconBrandCss3 },
  { name: "React", icon: IconBrandReact },
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "JavaScript", icon: IconBrandJavascript },
  { name: "TypeScript", icon: IconBrandTypescript },
  { name: "Tailwind CSS", icon: Paintbrush },
  { name: "Framer Motion", icon: Sparkles },
  { name: "Figma", icon: Figma },
  { name: "GitHub", icon: Github },
  { name: "Graphic Design", icon: Palette },
];

const projects = [
  {
    title: "Coffeely",
    description:
      "Designed and developed a modern e-commerce site for a coffee brand, featuring smooth navigation, product showcases, and a warm aesthetic that highlights their beverages.",
    image: "/images/coffeely-logo.png",
    link: "https://coffeely.vercel.app",
  },

  {
    title: "Irressentials",
    description:
      "Built a stylish online store blending multiple product categories into one platform, with a clean layout that makes browsing wines, shoes, and perfumes effortless and engaging.",
    image: "/images/Irressentials.png",
    link: "https://irressentials.vercel.app",
  },

  {
    title: "Flyte Airways",
    description:
      "A modern travel booking platform built with Next.js and Tailwind CSS. Users can search destinations, track active flights, manage bookings, and enjoy a smooth, mobile-first travel experience.",
    image: "/images/flyte-logo.png",
    link: "https://flyte-one.vercel.app",
  },

  {
    title: "Rise Of The Rejects Website",
    description:
      "Built with Next.js, TypeScript, and Framer Motion, this project extends my screenplay Rise of the Rejects beyond the page — into a cinematic, interactive world that fuses code, creativity, and conviction.",
    image: "/images/rotr-portfolio-logo.png",
    link: "https://riseoftherejects.vercel.app",
  },
  {
    title: "Patricia Essentials Logo Suite",
    description:
      "Designed a sleek and functional logo suite for Patricia Essentials, focusing on brand identity and visual appeal.",
    image: "/images/patricia-essentials.png",
    link: "https://www.canva.com/design/DAGJbq3tjWI/fVqwE7Lx_omyLgnGOISSyQ/view?utm_content=DAGJbq3tjWI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1d0f20707a",
  },

  {
    title: "Cariño Logo Suite & Branding",
    description:
      "Created a warm and inviting logo suite for Cariño, including mockups to demonstrate its application across various mediums.",
    image: "/images/carino-logo.png",
    link: "https://www.canva.com/design/DAGJRELQQtU/kQy34_gWYRSSpNW29Y4P5g/view?utm_content=DAGJRELQQtU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf0ca49221e",
  },
  {
    title: "African AI Network Branding",
    description:
      "Part of a social media branding campaign — designed a series of posters, onboarding banners, and birthday graphics to give the brand a consistent and engaging digital identity.",
    image: "/images/aan-poster.png",
    link: "https://www.canva.com/design/DAGeQ0ROiPE/GGF8tL0j84cabldhj1X9Ag/view?utm_content=DAGeQ0ROiPE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h98f5d6aabe",
  },
  {
    title: "Memorial Event Branding",
    description:
      "Part of a complete design package: poster, pamphlet, invitation, and VIP Access Card.",
    image: "/images/gmama-poster.png",
    link: "https://www.canva.com/design/DAGtbQ7HOuE/aIYJUlWfrnX1vDt0Mw7QkA/view?utm_content=DAGtbQ7HOuE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4de9fa66f7",
  },
  {
    title: "Kay's Kitchen Logo Suite & Branding",
    description:
      "Designed a modern, versatile logo for Kay's Kitchen, complete with mockups to showcase its real-world use.",
    image: "/images/KK-logo.png",
    link: "https://www.canva.com/design/DAGgxoe2WtI/b4UqeTCZNlFh1iy-5ClO5g/view?utm_content=DAGgxoe2WtI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he2d3123f19",
  },

  {
    title: "Coffeely",
    description:
      "Designed a full branding package for the Coffeely website, including logo, favicon, and variations that capture the warmth and richness of coffee culture.",
    image: "/images/Sub-Logo.png",
    link: "https://www.canva.com/design/DAGGV4J5Xsg/nmXQwbo_mrChzYVhTFRW5A/view?utm_content=DAGGV4J5Xsg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h568606db72",
  },
];

export default function Home() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/xrbazwzb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    const data = await res.json();

    if (data.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

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
          text="Welcome, my name is Chikaima."
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
        className="mt-52 flex flex-col justify-center items-center px-6"
        id="about"
      >
        <h1
          className={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-green-500`}
        >
          <DecryptedText
            text="Who Is Chikaima?"
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
          I’m Chikaima, a frontend developer and designer who loves turning
          ideas into smooth, functional digital experiences. I build with React,
          Next.js, and intuitive UX principles, always aiming for interfaces
          that feel clean, precise, and genuinely pleasant to use. When I’m not
          shaping pixels and writing logic, I’m usually immersed in stories —
          reading comics, watching films, writing, or getting lost in a good
          game. Fun detail: the data-rain background on this site is inspired by
          The Matrix, a nod to the worlds that first made me fall in love with
          tech.
        </p>
        {/* TECH STACK */}

        <h1
          className={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-green-500 mt-16`}
        >
          <DecryptedText
            text="Tech Stack"
            encryptedClassName="text-green-500"
            parentClassName={`${orbitron.className} text-2xl md:text-3xl font-bold mb-6 text-green-500`}
            animateOn="view"
            sequential
            speed={85}
            revealDirection="start"
          />
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center rounded-xl border border-green-500/20 bg-black/40 p-4 transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]"
              >
                <Icon
                  size={36}
                  strokeWidth={1.5}
                  className="mb-3 text-green-400 opacity-80 group-hover:opacity-100 transition"
                />

                <span className="text-sm text-green-400 opacity-70 group-hover:opacity-100 transition">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="mt-52 px-8 flex flex-col justify-center items-center"
      >
        <h1
          className={`${orbitron.className} text-2xl md:text-4xl font-bold mb-3 text-green-500`}
        >
          <DecryptedText
            text="My Projects"
            encryptedClassName="text-green-500"
            parentClassName={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-green-500`}
            animateOn="view"
            sequential
            speed={85}
            revealDirection="start"
          />
        </h1>
        <p
          className={`${dosis.className} text-green-500 font-medium text-center mb-6 text-xl`}
        >
          Every project starts as a glitch in the code, an idea waiting to be
          solved. <br />
          Explore how I decode complex challenges and transform them into
          intuitive, real-world digital solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
          group
          border border-green-900
          p-6 rounded-xl
          hover:border-green-400
          transition-all duration-300
          bg-black/40 backdrop-blur-sm
          hover:bg-black/70
        "
            >
              {/* Title */}
              <h3
                className="
            text-green-500 text-xl font-bold mb-3
            group-hover:text-green-300
            transition
          "
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-green-200/70 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                className="
            text-green-300 text-sm font-semibold
            underline underline-offset-4
            hover:text-green-100
            transition
          "
              >
                Open Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="mt-28 flex flex-col justify-center items-center px-6"
      >
        <section
          id="contact"
          className="w-full flex flex-col items-center justify-center py-32 px-6 relative"
        >
          <h2
            className={`${orbitron.className} text-2xl md:text-4xl font-bold mb-3 text-green-500`}
          >
            <DecryptedText
              text="Let's Keep In Touch."
              encryptedClassName="text-green-500"
              parentClassName={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-green-500`}
              animateOn="view"
              sequential
              speed={85}
              revealDirection="start"
            />
          </h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-green-500 text-center max-w-xl mb-14 leading-relaxed font-bold"
          >
            <span className="font-bold">The Oracle has spoken,</span> and it
            seems we're meant to collaborate. For development missions,
            potential partnerships, or just to share a truly 'wild idea'—send
            the input. My channel is always active.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-lg flex flex-col gap-6"
          >
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-green-400 text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="bg-black/40 border border-green-700/40 focus:border-green-400 outline-none px-4 py-3 rounded-md text-white placeholder-gray-500 transition-all"
                placeholder="John Doe"
                type="text"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-green-400 text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                className="bg-black/40 border border-green-700/40 focus:border-green-400 outline-none px-4 py-3 rounded-md text-white placeholder-gray-500 transition-all"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-green-400 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="bg-black/40 border border-green-700/40 focus:border-green-400 outline-none px-4 py-3 rounded-md text-white placeholder-gray-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={status === "sending"}
              className="mt-4 px-8 py-3 rounded-md bg-green-500 hover:bg-green-600 text-black font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(0,255,0,0.3)] disabled:opacity-50"
            >
              {status === "sending" ? "Transmitting..." : "Initiate Contact"}
            </motion.button>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-400 text-sm mt-2 animate-pulse">
                Transmission received. I’ll get back to you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm mt-2">
                Transmission failed. Something interfered with the signal.
              </p>
            )}
          </motion.form>
        </section>
      </section>
    </main>
  );
}
