// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Globe, Code2, Star } from "lucide-react";


const gh = (repo) => `https://opengraph.githubassets.com/1/crisvin03/${repo}`;

const projects = [
  {
    name: "lms-SorSU-BC",
    desc: "Learning Management System prototype for SorSU-BC.",
    stack: ["React", "Node", "Express", "MongoDB"],
    live: null,
    repo: "https://github.com/crisvin03/lms-SorSU-BC",
    image: gh("lms-SorSU-BC"),
    stars: 0,
  },
  {
    name: "StoreMe",
    desc: "Inventory/store management app focused on simplicity.",
    stack: ["React", "Vite", "Tailwind", "Firebase"],
    live: null,
    repo: "https://github.com/crisvin03/StoreMe",
    image: gh("StoreMe"),
    stars: 0,
  },
  {
    name: "Storya",
    desc: "Lightweight storytelling/blogging playground.",
    stack: ["React", "Express", "MongoDB"],
    live: null,
    repo: "https://github.com/crisvin03/Storya",
    image: "/images/Storya1.jpg",
    stars: 0,
  },
  {
    name: "bumo",
    desc: "Mobile-first experiment / utilities bundle.",
    stack: ["React Native", "Expo"],
    live: null,
    repo: "https://github.com/crisvin03/bumo",
    image: gh("bumo"),
    stars: 0,
  },

  // --- keep a few placeholders so the grid feels full
  {
    name: "CodeQuest",
    desc: "Gamified coding challenges with real-time leaderboards.",
    stack: ["Next.js", "Node", "Postgres"],
    live: "#",
    repo: "#",
    image: gh("CodeQuest"),
    stars: 24,
  },
  {
    name: "TaskForge",
    desc: "Team task manager with optimistic UI and offline mode.",
    stack: ["React", "Express", "MongoDB"],
    live: "#",
    repo: "#",
    image: gh("TaskForge"),
    stars: 18,
  },
];

const gridVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-3xl md:text-4xl font-bold tracking-tight
                       bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent"
          >
            <Code2 className="h-7 w-7" /> Projects
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
            transition={{ delay: 0.15 }}
            className="mt-3 text-slate-300/90 max-w-2xl mx-auto"
          >
            A few things I’ve built and shipped. More on my GitHub.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}  
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 12, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -6,
                boxShadow: "0 30px 80px -30px rgba(56,189,248,0.35)",
              }}
              className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/40 overflow-hidden"
            >
              {/* preview image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} preview`}
                  className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  onError={(e) => {
                    // SVG fallback with project title
                    const svg = encodeURIComponent(
                      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'>
                         <defs><linearGradient id='g' x1='0' x2='1'>
                           <stop offset='0%' stop-color='#38bdf8'/><stop offset='100%' stop-color='#a78bfa'/>
                         </linearGradient></defs>
                         <rect width='100%' height='100%' fill='#0b1220'/>
                         <text x='50%' y='50%' fill='url(#g)' font-family='monospace'
                               font-size='48' font-weight='700' text-anchor='middle' dominant-baseline='middle'>
                           ${p.name}
                         </text>
                       </svg>`
                    );
                    e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${svg}`;
                  }}
                />
                {/* subtle top shimmer */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "140%" }}
                  transition={{ duration: 1.8, ease: "linear" }}
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 0%, rgba(255,255,255,.06) 50%, transparent 100%)",
                    width: "35%",
                  }}
                />
              </div>

              <div className="p-6">
                {/* title + stars */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-sky-200">{p.name}</h3>
                  {!!p.stars && (
                    <span
                      className="inline-flex items-center gap-1 rounded-md border border-amber-500/30
                                 bg-amber-500/10 text-amber-300 text-[11px] px-2 py-0.5"
                      title={`${p.stars} GitHub stars`}
                    >
                      <Star className="h-3.5 w-3.5" /> {p.stars}
                    </span>
                  )}
                </div>

                <p className="text-slate-300/90 mt-2">{p.desc}</p>

                {/* tech chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-2.5 py-0.5
                                 text-xs text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* actions */}
                <div className="mt-5 flex items-center gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm
                                 border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800/70
                                 text-slate-200 transition"
                    >
                      <Globe className="h-4 w-4" /> Live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm
                                 border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800/70
                                 text-slate-200 transition"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                  )}
                </div>
              </div>

              {/* bottom accent bar */}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 to-fuchsia-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
