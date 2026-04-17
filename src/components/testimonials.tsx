"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";


const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Founder, Coffeely",
    text: "He didn't just build us a website; he built a digital storefront that perfectly captures our brand's warmth. The frontend architecture is incredibly snappy.",
    type: "Client",
  },
  {
    id: 2,
    name: "@WattpadReader99",
    role: "Reader",
    text: "Rise of the Rejects has me hooked! The world-building is insane, and the character development keeps getting better every single chapter. Ranked #1 for a reason!",
    type: "Audience",
  },
  // {
  //   id: 3,
  //   name: "Tobi A.",
  //   role: "Event Organizer",
  //   text: "The new Exhibits directory on the Cre8r platform completely changed how we showcase our live events. The UX decisions are absolutely flawless.",
  //   type: "Client",
  // },
  {
    id: 4,
    name: "Enwodo E.",
    role: "Creative Director",
    text: "During his six-month collaboration with our AI agency, Chikaima consistently delivered high-quality graphics for our Instagram campaigns, colleague birthday posts, and onboarding banners. His designs were always on-brand, creative, and timely. We appreciated his reliability and fresh eye for detail.",
    type: "Founder",
  },
  {
    id: 5,
    name: "Aaliyah J.",
    role: "Blockchain Developer",
    text: "I had the pleasure of collaborating with Chikaima on a project, and I was blown away by his skills and work ethic. He's a true creative genius, and his passion for design and development shines through in every project he takes on. Plus, he's a joy to work with, always positive and communicative.",
    type: "Collaborator",
  },
  {
    id: 6,
    name: "Shalom I.",
    role: "Project Manager",
    text: "I had the pleasure of working with Chikaima at African AI Network, and I can confidently say he is an exceptional graphic designer. He is hardworking, highly creative, and consistently delivers high-quality designs that perfectly capture the message and vision of every project. His professionalism, attention to detail, and ability to meet deadlines make him a valuable asset to any team. I strongly recommend him to any employer or client looking for top-notch design work.",
    type: "Collaborator",
  },
  {
    id: 7,
    name: "Chika U.",
    role: "Sole Proprietor",
    text: "I've worked with Chikaima on countless design projects, and he never disappoints. Most recently, he created the poster, pamphlet, invitation, and VIP access card for a family event, and the results were stunning. His eye for detail and creativity make him an invaluable designer to work with.",
    type: "Collaborator",
  },
];

// Duplicate the array to create the seamless infinite scroll effect
const scrollingTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden relative z-10 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-white to-gray-500 tracking-tight mb-4"
        >
          Word on the street.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          As a creator, I believe in excellence above all. My work speaks for itself. But, of course, don't just take my word for it—hear what others have to say about their experience working with me.
        </motion.p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full max-w-[100vw] flex items-center">
        {/* CSS Mask to fade the left and right edges */}
        <div className="absolute inset-0 z-20 pointer-events-none mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] bg-[#141414]/0" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex gap-6 px-3 w-max hover:paused"
        >
          {scrollingTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="group relative w-[320px] md:w-[400px] p-8 shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-pink-500/0 via-transparent to-cyan-500/0 group-hover:from-pink-500/10 group-hover:to-cyan-500/10 rounded-3xl transition-all duration-500 pointer-events-none" />

              <div>
                <Quote className="text-white/20 w-8 h-8 mb-6 rotate-180 group-hover:text-pink-500/40 transition-colors duration-300" />
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10 text-sm md:text-base">
                  "{item.text}"
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    {item.role}
                  </p>
                </div>

                {/* Dynamic Badge based on identity type */}
                <span
                  className={`text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-full border ${
                    item.type === "Audience"
                      ? "text-cyan-400 border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                      : item.type === "Collaborator"
                        ? "text-purple-400 border-purple-400/30 bg-purple-400/10 shadow-[0_0_10px_rgba(192,132,252,0.2)]"
                        : "text-pink-400 border-pink-400/30 bg-pink-400/10 shadow-[0_0_10px_rgba(255,44,85,0.2)]"
                  }`}
                >
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
