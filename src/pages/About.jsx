// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  User, Briefcase, GraduationCap, Globe, Clock,
  Sparkles, Code2, Rocket, Facebook, Instagram, Mail, Zap, Target, Lightbulb
} from "lucide-react";

/* ---- left card chips ---- */
const highlights = [
  { icon: Sparkles, label: "Product-minded", desc: "I ship for impact and UX." },
  { icon: Code2,   label: "Full-stack",     desc: "From pixel to production." },
  { icon: Rocket,  label: "Fast iteration", desc: "Short cycles, clear docs." },
  { icon: Zap,     label: "Performance",    desc: "Optimized & scalable." },
  { icon: Target,  label: "Problem solver", desc: "Creative solutions." },
  { icon: Lightbulb, label: "Innovation",   desc: "Creative solutions." },
];

/* ---- right card sections ---- */
const timeline = [
  {
    title: "Building Real Applications",
    period: "2021 — Present",
    points: [
      "Created lms-SorSU-BC: Learning Management System for my university using React, Node.js, Express, and MongoDB.",
      "Developed StoreMe: Inventory management app with React, Vite, Tailwind, and Firebase for small businesses.",
      "Built Storya: Lightweight blogging platform with React, Express, and MongoDB for content creators.",
      "Experimented with bumo: Mobile-first utilities using React Native and Expo for cross-platform development.",
    ],
  },
  {
    title: "Full-Stack Development Journey",
    period: "2021 — Present",
    points: [
      "Mastered React/Next.js with Tailwind CSS and Framer Motion for modern, accessible UIs.",
      "Built robust backends with Node.js/Express, PHP/Laravel, and multiple databases (PostgreSQL, MongoDB, MySQL).",
      "Integrated authentication, REST/JSON APIs, and deployed applications on Vercel and Firebase.",
      "Explored mobile development with React Native, Expo, and Flutter for cross-platform solutions.",
    ],
  },
  {
    title: "College Education",
    period: "2022 — Present",
    points: [
      "Bachelor of Science in Information Technology at Sorsogon State University – Bulan Campus.",
      "Learning algorithms, data structures, and software engineering principles.",
      "Applying theoretical knowledge through hands-on projects and open-source contributions.",
    ],
  },
];

/* ---- animations ---- */
const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent"
          >
            About me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-2 h-[3px] w-24 origin-center rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500"
          />
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-slate-300/90 max-w-2xl mx-auto"
          >
            A quick TL;DR on who I am and how I work.
          </motion.p>
        </div>

        {/* Row */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-5 gap-4 md:gap-6 items-stretch"
        >
          {/* ===== Left: Bio ===== */}
          <motion.div
            variants={card}
            whileHover={{ y: -6, boxShadow: "0 30px 80px -30px rgba(56,189,248,0.35)" }}
            className="lg:col-span-2 relative rounded-2xl border border-slate-700/60 
                       bg-slate-900/40 p-4 sm:p-6 overflow-hidden h-full flex flex-col"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 
                            rounded-full bg-gradient-to-tr from-sky-500/10 to-fuchsia-500/10 blur-2xl" />
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl grid place-items-center bg-slate-800/60 border border-slate-700/60">
                <User className="h-6 w-6 text-sky-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sky-200">Crisvin Habitsuela</h3>
                <p className="text-sm text-slate-400">Full-Stack Developer • Philippines / Remote</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-5 grid gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/50 px-3 py-2">
                  <div className="h-9 w-9 grid place-items-center rounded-lg bg-slate-800/60 border border-slate-700/60">
                    <h.icon className="h-4.5 w-4.5 text-sky-300" />
                  </div>
                  <div>
                    <div className="text-slate-200 text-sm">{h.label}</div>
                    <div className="text-slate-400 text-xs">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 px-3 py-2">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> Experience
                </div>
                <div className="text-slate-200">2+ yrs building apps</div>
              </div>
              <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 px-3 py-2">
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5" /> Focus
                </div>
                <div className="text-slate-200">Web • Mobile • APIs</div>
              </div>
            </div>

            {/* Social Links (centered) */}
            <div className="mt-auto pt-6 flex justify-center gap-3 flex-wrap">
              <a
                href="mailto:crisvin.habitsuela@sorsu.edu.ph"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-slate-600/50 bg-slate-800/50 hover:bg-slate-700/70 text-slate-200 text-sm transition"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://web.facebook.com/cris.habit0830/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-blue-600/50 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-sm transition"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/nivsirc3/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-pink-500/50 bg-gradient-to-r from-pink-500/10 to-orange-400/10 hover:from-pink-500/20 hover:to-orange-400/20 text-pink-400 text-sm transition"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </motion.div>

          {/* ===== Right: Journey ===== */}
          <motion.div
            variants={card}
            whileHover={{ y: -6, boxShadow: "0 30px 80px -30px rgba(217,70,239,0.28)" }}
            className="lg:col-span-3 relative rounded-2xl border border-slate-700/60 
                       bg-slate-900/40 p-4 sm:p-6 overflow-hidden h-full flex flex-col"
          >
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 
                            rounded-full bg-gradient-to-tr from-fuchsia-500/10 to-sky-500/10 blur-2xl" />
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-5 w-5 text-sky-300" />
              <h3 className="text-sky-200 font-semibold">Journey</h3>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-7">
                {timeline.map((t, idx) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: idx * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 shadow-[0_0_0_3px_rgba(2,6,23,1)]" />
                        <h4 className="text-slate-200 font-semibold">{t.title}</h4>
                      </div>
                      <span className="text-xs text-slate-400">{t.period}</span>
                    </div>
                    <ul className="mt-2 list-disc ps-5 text-slate-300/90 text-sm space-y-1.5">
                      {t.points.map((p) => (
                        <li key={p} className="transition-transform group-hover:translate-x-[1px]">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6">
                <div className="inline-flex items-center gap-2 rounded-lg border 
                                border-slate-700/60 bg-slate-900/50 px-3 py-1.5 
                                text-slate-200 text-sm">
                  <GraduationCap className="h-4 w-4 text-sky-300" />
                  Always learning & improving
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
