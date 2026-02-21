"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xrbazwzb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        form.reset();
        // Reset back to idle after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="min-h-screen py-24 px-4 sm:px-10 flex items-center justify-center relative z-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Let's Create Something.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-md">
            Looking to build a sleek frontend experience for your next product,
            design a digital storefront, or just geek out over character arcs
            and world-building? Drop me a line. I'd love to hear from you
            <br />
            <br />
            Drop a message into the system. I always respond.
          </p>

          {/* Decorative Elements */}
          <div className="flex gap-4 items-center">
            <div className="h-px w-12 bg-purple-500/50" />
            <span className="text-sm font-mono text-green-500 tracking-widest uppercase">
              Available For Work
            </span>
          </div>
        </motion.div>

        {/* Form Column*/}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative group"
        >
          {/* Ambient Glow behind the form */}
          <div className="absolute -inset-1 bg-linear-to-r from-pink-500/20 to-cyan-500/20 rounded-4xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

          <form
            onSubmit={handleSubmit}
            className="relative bg-[#141414]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-4xl shadow-2xl flex flex-col gap-6"
          >
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300 ml-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 ml-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300 ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Let's build something..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
              />
            </div>

            {/* Dynamic Submit Button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className={`
                relative w-full py-4 mt-2 rounded-xl font-semibold tracking-wide overflow-hidden transition-all duration-300 ease-out
                ${
                  status === "success"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    : status === "error"
                      ? "bg-red-500/20 text-red-400 border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(255,44,85,0.3)] disabled:opacity-50"
                }
              `}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center gap-2"
                >
                  {status === "idle" && (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="ml-1" />
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <span>Sending...</span>
                      <Loader2 size={18} className="animate-spin ml-1" />
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <span>Message Received</span>
                      <CheckCircle2 size={18} className="ml-1" />
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <span>Something Went Wrong</span>
                      <AlertCircle size={18} className="ml-1" />
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
