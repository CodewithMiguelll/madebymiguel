"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SUBSTACK_SUBDOMAIN = "authorkaimaa";
const SUBSTACK_URL = `https://${SUBSTACK_SUBDOMAIN}.substack.com`;

const corePillars = [
  {
    title: "Gritty, Grounded Rebellion",
    text: "No chosen ones or effortless victories. A high-stakes story of forgotten underdogs fighting against systems built to crush them.",
    glow: "group-hover:border-amber-400/40 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
  },
  {
    title: "Atmospheric Worldbuilding",
    text: "From the blinding, towering citadels of the Uppers to the rain-slicked ruins of the Lowers, every district breathes tension.",
    glow: "group-hover:border-rose-400/40 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
  },
  {
    title: "Morally Complex Characters",
    text: "A layered ensemble cast where survival demands difficult choices, fragile alliances, and questioning the price of freedom.",
    glow: "group-hover:border-cyan-400/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  },
];

const universeRoadmap = [
  {
    tag: "NOW AVAILABLE",
    tagColor: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
    title: "Rise of the Rejects: UPRISE",
    subtitle: "Book 1 — The Mainline Saga",
    description:
      "The debut novel sparking the rebellion. Available now on Kindle, Kindle Unlimited, and Paperback.",
    status: "Live on Amazon",
  },
  {
    tag: "IN DEVELOPMENT",
    tagColor: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    title: "The Long Night",
    subtitle: "A Rise of the Rejects Companion Story",
    description:
      "Set immediately after Uprise. The Long Night is a dark, covert thriller following Sly and Ayomide going up against a familiar foe in Powered Nigeria.",
    status: "Drafting",
  },
  {
    tag: "PLANNED",
    tagColor: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    title: "Rise of the Rejects: DAWN OF THE APOCALYPSE",
    subtitle: "Book 2 — The Mainline Saga",
    description: "TBA! Stay Tuned",
    status: "Coming Soon",
  },
  {
    tag: "PLANNED",
    tagColor: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    title: "Cradle of Shadows",
    subtitle: "Prequel Novel",
    description: "TBA! Stay Tuned",
    status: "Coming Soon",
  },
];

export default function BooksPage() {
  const [email, setEmail] = useState("");

  const handleSubstackRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      window.open(`${SUBSTACK_URL}/subscribe`, "_blank", "noopener,noreferrer");
      return;
    }
    // Pre-populates reader email directly into Substack's sign-up route
    const encodedEmail = encodeURIComponent(email);
    window.open(
      `${SUBSTACK_URL}/subscribe?email=${encodedEmail}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="min-h-screen text-white selection:bg-white/20 selection:text-white">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-24 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {/* Glass Badge */}
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-zinc-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
              Speculative Fiction • The ROTR Universe
            </p>

            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl lg:leading-[1.1]">
              Stories of the outcasts who fight back.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300 md:text-xl">
              When I&apos;m not designing digital products or shipping code, I
              build sprawling speculative worlds. Welcome to the storytelling
              corner of my ecosystem—home to{" "}
              <span className="font-semibold text-white">
                Rise of the Rejects
              </span>
              .
            </p>

            {/* Glassmorphic Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#featured"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/15 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/50 hover:bg-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Book 1: UPRISE
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <a
                href="#dispatch"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-lg transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                Join the Newsletter
              </a>
            </div>

            {/* Minimal Stat Highlights */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8 text-sm text-zinc-400">
              <div>
                <div className="text-2xl font-black text-white">
                  Kindle & KU
                </div>
                <div className="mt-1 text-zinc-400">Read on any device</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">Paperback</div>
                <div className="mt-1 text-zinc-400">
                  Print edition available
                </div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">3+ Books</div>
                <div className="mt-1 text-zinc-400">Expanding canon</div>
              </div>
            </div>
          </div>

          {/* Featured Book Showcase Card with Live Book Cover */}
          <div id="featured" className="relative">
            <div className="rounded-4xl border border-white/20 bg-white/4 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition duration-500 hover:border-white/30">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-md md:p-8">
                {/* Status Tag */}
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                  <span>Debut Novel</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 backdrop-blur-md">
                    Out Now
                  </span>
                </div>

                {/* 3D Rendered Book Cover */}
                <div className="my-8 flex justify-center">
                  <div className="group relative transition-transform duration-500 hover:scale-[1.02]">
                    <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-amber-500/20 via-rose-500/20 to-violet-500/20 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                      <Image
                        src="/images/rotr-book-cover-cinematic-variant-2.jpg"
                        alt="Rise of the Rejects: UPRISE by Chikaima Uwakwe"
                        width={320}
                        height={480}
                        priority
                        className="h-auto w-56 object-cover sm:w-64"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-linear-to-r from-white/25 via-white/5 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Book Details & CTA */}
                <div className="space-y-4 rounded-2xl border border-white/15 bg-white/6 p-4.5 text-sm text-zinc-300 backdrop-blur-lg">
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      Rise of the Rejects: UPRISE
                    </h2>
                    <p className="mt-1 text-xs italic text-zinc-400">
                      &ldquo;They cast us aside. Now they have to face what they
                      created.&rdquo;
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">
                    In a world partitioned by privilege and power, the forgotten
                    outcasts of the Lowers ignite a rebellion against the Upper
                    tier.
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://www.amazon.com/dp/B0HBLP2ZVZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    >
                      Read on Amazon & Kindle ➔
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- CORE PILLARS SECTION ----------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
            Inside the Universe
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            High stakes. Broken systems. Resilient heroes.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {corePillars.map((point) => (
            <article
              key={point.title}
              className={`group rounded-3xl border border-white/10 bg-white/4 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 hover:bg-white/8 ${point.glow}`}
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <h3 className="text-xl font-bold text-white">{point.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-300">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------- EXPANDING UNIVERSE ROADMAP ----------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
              The Canon Pipeline
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              The Universe Expands
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400">
            A living timeline of mainline novels, prequel anthologies, and
            standalone spinoffs currently in development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {universeRoadmap.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/4 p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:bg-white/[0.07]"
            >
              <div>
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md ${item.tagColor}`}
                >
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-zinc-400">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 text-xs font-mono text-zinc-400">
                Status: <span className="text-zinc-200">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- SUBSTACK SECTION ----------------- */}
      <section id="dispatch" className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-4xl border border-white/20 bg-white/5 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-2xl md:p-12">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
                Substack Publication
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
                The Lowers Dispatch
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300">
                Our primary transmission channel on Substack. Get worldbuilding
                dossiers, draft snippets from upcoming releases, and author
                notes sent directly to your inbox.
              </p>

              <div className="mt-6 flex items-center gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  100% Free
                </span>
                <span>•</span>
                <span>Direct Inbox Delivery</span>
                <span>•</span>
                <span>Web Archive Access</span>
              </div>
            </div>

            <form
              onSubmit={handleSubstackRedirect}
              className="rounded-3xl border border-white/15 bg-white/6 p-6 backdrop-blur-xl"
            >
              <label
                htmlFor="substack-email"
                className="mb-2 block text-sm font-medium text-zinc-200"
              >
                Join with your email
              </label>
              <input
                id="substack-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="reader@example.com"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder:text-zinc-500 backdrop-blur-md focus:border-white/40 focus:bg-white/10 focus:outline-none"
              />

              <button
                type="submit"
                className="group relative mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-xl border border-white/30 bg-white/20 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/50 hover:bg-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                  Subscribe on Substack
                
              </button>

              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
                <span>Opens Substack in a new tab</span>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition hover:text-zinc-200"
                >
                  Visit Publication Archive
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
