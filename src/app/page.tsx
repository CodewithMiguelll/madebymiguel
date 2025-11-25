"use client"
import DecryptedText from "@/components/DecryptedText";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <DecryptedText
            text="Welcome, my name is Miguel!"
            characters="ABCDEFGHI123!"
            speed={75}
            sequential={true}
            revealDirection="start"
            animateOn="view"
            encryptedClassName="font-bold text-3xl"
            className="font-bold text-3xl"
          />
        </motion.div>
      </main>
    </>
  );
}
