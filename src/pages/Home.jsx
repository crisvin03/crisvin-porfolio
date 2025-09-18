import React from "react";
import { motion } from "framer-motion";
import TypingCode from "../components/TypingCode";
import { TerminalSquare, ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <TerminalSquare className="h-3.5 w-3.5" />
            </motion.div>
            Web & App Developer
          </motion.div>
          
          <motion.h1 
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Hi, I'm <motion.span 
                className="text-sky-300"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{
                  background: "linear-gradient(90deg, #7dd3fc, #38bdf8, #0ea5e9, #38bdf8, #7dd3fc)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Crisvin
              </motion.span>.
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-sky-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I build full-stack web apps.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-4 text-slate-300/90 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            JavaScript/TypeScript enjoyer, React + Node expert, with a sprinkle of DevOps.
            I love turning product ideas into reliable, fast experiences.
          </motion.p>
          
          <motion.div 
            className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.a 
              href="#projects" 
              className="w-full sm:w-auto text-center rounded-xl px-4 py-2 bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:opacity-90 transition shadow relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(56, 189, 248, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">View projects</span>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="w-full sm:w-auto text-center rounded-xl px-4 py-2 border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800/70 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Contact me</span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex gap-4 text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {[
              { icon: Github, href: "https://github.com/crisvin03", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/crisvin-habitsuela-2a8212269", label: "LinkedIn" },
              { icon: Mail, href: "mailto:crisvin.habitsuela@sorsu.edu.ph", label: "Email" }
            ].map((social, index) => (
              <motion.a 
                key={social.label}
                className="hover:text-sky-300 transition-colors duration-300 relative group"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5" />
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {social.label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

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
