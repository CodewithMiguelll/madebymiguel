"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

const projects = [
  {
    title: "EazyKash",
    image: "/images/eazykash-og-image.png",
    description:
      "A PWA fintech MVP for UK-to-Nigeria remittances. Architected with Next.js, Supabase for backend logic, and Paystack integration.",
    link: "https://eazykash.vercel.app",
    tag: "engineering",
    status: "Under Development",
  },
  {
    title: "Flyte Airways",
    image: "/images/flyte-logo.png",
    description:
      "A modern travel booking platform built with Next.js and Tailwind CSS. Users can search destinations, track active flights, manage bookings, and enjoy a smooth, mobile-first travel experience.",
    link: "https://flyte-one.vercel.app",
    tag: "engineering",
    status: "Live",
  },
  {
    title: "Rise Of The Rejects Website",
    image: "/images/rotr-og-image-default.png",
    description:
      "Built with Next.js, TypeScript, and Framer Motion, this project extends my story, Rise of the Rejects beyond the page — into a cinematic, interactive world that fuses code, creativity, and conviction.",
    link: "https://riseoftherejects.vercel.app",
    tag: "engineering",
    status: "Live",
  },
  {
    title: "Coffeely",
    image: "/images/coffeely-logo-primary.png",
    description:
      "Designed and developed a modern e-commerce site for a coffee brand, featuring smooth navigation, product showcases, and a warm aesthetic that highlights their beverages.",
    link: "https://coffeely.vercel.app",
    tag: "engineering",
    status: "Live",
  },
  {
    title: "Irressentials",
    image: "/images/Irressentials.png",
    description:
      "Built a stylish online store blending multiple product categories into one platform, with a clean layout that makes browsing wines, shoes, and perfumes effortless and engaging.",
    link: "https://irressentials.vercel.app",
    tag: "engineering",
    status: "Live",
  },
  {
    title: "Patricia Essentials Logo Suite",
    image: "/images/patricia-essentials.png",
    description:
      "Designed a sleek and functional logo suite for Patricia Essentials, focusing on brand identity and visual appeal.",
    link: "https://www.canva.com/design/DAGJbq3tjWI/fVqwE7Lx_omyLgnGOISSyQ/view",
    tag: "writing & design",
    status: "Live",
  },
  {
    title: "Cariño Logo Suite & Branding",
    image: "/images/carino-logo.png",
    description:
      "Created a warm and inviting logo suite for Cariño, including mockups to demonstrate its application across various mediums.",
    link: "https://www.canva.com/design/DAGJRELQQtU/kQy34_gWYRSSpNW29Y4P5g/view",
    tag: "writing & design",
    status: "Live",
  },
  {
    title: "African AI Network Branding",
    image: "/images/AAN-logo.png",
    description:
      "Part of a social media branding campaign — designed a series of posters, onboarding banners, and birthday graphics to give the brand a consistent and engaging digital identity.",
    link: "https://www.canva.com/design/DAGeQ0ROiPE/GGF8tL0j84cabldhj1X9Ag/view",
    tag: "writing & design",
    status: "Live",
  },
  {
    title: "Kay's Kitchen Logo Suite",
    image: "/images/kays-kitchen-logo.png",
    description:
      "Designed a modern, versatile logo for Kay's Kitchen, complete with mockups to showcase its real-world use.",
    link: "https://www.canva.com/design/DAGgxoe2WtI/b4UqeTCZNlFh1iy-5ClO5g/view",
    tag: "writing & design",
    status: "Live",
  },
  {
    title: "Coffeely Branding",
    image: "/images/coffeely-logo-secondary.png",
    description:
      "Designed a full branding package for the Coffeely website, including logo, favicon, and variations that capture the warmth and richness of coffee culture.",
    link: "https://www.canva.com/design/DAGGV4J5Xsg/nmXQwbo_mrChzYVhTFRW5A/view",
    tag: "writing & design",
    status: "Live",
  },
  {
    title: "Rise of the Rejects",
    image: "/images/rise-of-the-rejects-book-cover.png",
    description:
      "An ongoing saga serialized on Wattpad. Recently ranked #1 in the 'misfits' tag, this project is a deep dive into world-building, narrative design, and continuous character development.",
    link: "https://www.wattpad.com/story/407399764-rise-of-the-rejects",
    tag: "writing & design",
    status: "Ongoing",
  },
];

const TABS = ["All", "Engineering", "Writing & Design"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  // Filter logic handles the lowercase tags from your array vs Title Case tabs
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.tag === activeTab.toLowerCase());

  // Helper function for the status indicator colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]";
      case "Under Development":
        return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)] animate-pulse";
      case "Ongoing":
        return "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)] animate-pulse";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className=" py-24 px-4 sm:px-10 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Header & Copy */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What I've built
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Apps, interfaces, and ongoing sagas. An archive of the digital
            platforms I engineer and the fictional worlds I am currently
            serializing.
          </p>
        </div>
        {/* The Glass Filter Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-xl transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>
        {/* The Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title + index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col p-5 sm:p-6 h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,44,85,0.15)] transition-all ease-out overflow-hidden"
              >
                {/* 1. The Image Block */}
                {project.image ? (
                  <div className="relative w-full h-48 sm:h-52 mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay that fades away on hover */}
                    <div className="absolute inset-0 bg-[#141414]/40 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                ) : (
                  // Sleek Placeholder for missing images
                  <div className="relative w-full h-48 sm:h-52 mb-6 rounded-2xl overflow-hidden border border-white/5 bg-white/5 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[10px_10px]" />
                    <span className="relative z-10 font-mono text-gray-500 text-[10px] tracking-[0.2em] uppercase">
                      Awaiting Visual Data
                    </span>
                  </div>
                )}

                {/* 2. The Content Block */}
                <div className="flex flex-col flex-1">
                  {/* Top Bar: Category & Status */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-semibold tracking-wider text-pink-400 uppercase bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                      {project.tag}
                    </span>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-2 bg-black/20 px-2.5 py-1 rounded-full border border-white/5">
                      <div
                        className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}
                      />
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-100 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* 3. Link out */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors mt-auto w-fit z-10 relative"
                >
                  Explore Project
                  <IconArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-pink-500/0 via-transparent to-cyan-500/0 group-hover:from-pink-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>{" "}
      </div>
    </section>
  );
}
