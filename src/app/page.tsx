"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { CursorGlow } from "@/components/cursor-glow";
import AvatarRoot from "@/components/avatar/AvatarRoot";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Github, href: "#", name: "GitHub" },
  { icon: Instagram, href: "#", name: "Instagram" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#030712] overflow-hidden flex flex-col justify-center px-8 md:px-24 lg:px-32">
      {/* Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <CursorGlow />
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-slate-400/10 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.05, 0.1, 0.05],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-slate-500/5 blur-[120px]"
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto">
        {/* Left Side: Hero Text */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-100 mb-4">
              Muhammad Abdullah
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-200 mb-6 font-mono tracking-wide">
              Full Stack Engineer
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Full Stack Developer with hands-on experience in building and deploying full-stack web applications.
              Skilled in both front-end and back-end technologies with a touch of AI and RAG,
              along with databases, to create scalable and user-friendly solutions.
            </p>

            {/* Navigation */}
            <div className="flex pl-15 justify-center lg:justify-start">
              <Navbar />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Avatar */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-[400px]"
          >
            <AvatarRoot />
          </motion.div>
        </div>
      </div>

      {/* Social Links */}
      <footer className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-20">
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-slate-500 hover:text-slate-100 transition-all duration-300 hover:scale-110"
              aria-label={social.name}
            >
              <social.icon size={22} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
