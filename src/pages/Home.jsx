import React from "react";
import { motion } from "framer-motion";
import TypingCode from "../components/TypingCode";
import { TerminalSquare, ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
            <TerminalSquare className="h-3.5 w-3.5" /> Web & App Developer
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Hi, I'm <span className="text-sky-300">Crisvin</span>.</span>
            <span className="block bg-gradient-to-r from-sky-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">I build full-stack web apps.</span>
          </h1>
          <p className="mt-4 text-slate-300/90 max-w-xl">
            JavaScript/TypeScript enjoyer, React + Node expert, with a sprinkle of DevOps.
            I love turning product ideas into reliable, fast experiences.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="rounded-xl px-4 py-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:opacity-90 transition shadow">
              View projects
            </a>
            <a href="#contact" className="rounded-xl px-4 py-2 border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800/70">
              Contact me
            </a>
          </div>
          <div className="mt-8 flex gap-4 text-slate-300">
            <a className="hover:text-sky-300" href="https://github.com/crisvin03" target="_blank" rel="noreferrer"><Github /></a>
            <a className="hover:text-sky-300" href="https://www.linkedin.com/in/crisvin-habitsuela-2a8212269" target="_blank" rel="noreferrer"><Linkedin /></a>
            <a className="hover:text-sky-300" href="mailto:crisvin.habitsuela@sorsu.edu.ph"><Mail /></a>
          </div>
        </div>

        <div className="relative">
          <motion.div
            className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 shadow-[0_0_60px_-25px_rgba(56,189,248,0.3)]"
            initial={{ y: 8, opacity: 0.95 }}
            animate={{ y: [8, -4, 8] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 w-1/3"
                style={{ background: "linear-gradient(110deg, transparent 0%, rgba(255,255,255,.06) 50%, transparent 100%)" }}
                initial={{ x: "-120%" }}
                animate={{ x: "140%" }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <TypingCode
              code={`// ~/src/profile.ts
export const developer = {
  name: 'Crisvin Habitsuela',
  role: 'Full-Stack Developer',
  location: 'PH / Remote',
  stack: ['React', 'Next.js', 'Node', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind'],
  currentlyLearning: ['tRPC', 'Rust'],
  fun: () => 'Coffee + TypeScript + synthwave',
};`}
              speed={16}
              pause={2000}
              showCursor
            />
          </motion.div>

          <div className="absolute -bottom-6 left-6 text-slate-400 text-sm flex items-center gap-2">
            <ChevronDown className="h-4 w-4" /> Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
