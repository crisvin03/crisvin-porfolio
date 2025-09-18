// src/pages/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Cpu, Laptop, Database, Server, Wrench, Code2, Atom, Braces, Boxes,
  Layers, TerminalSquare, GitBranch, Package, Globe, Palette
} from "lucide-react";

/**
 * Skills
 * - Centered title + subtitle (animated)
 * - Card hover animation (lift + glow)
 * - Category icons + per-skill icons
 * - Proficiency badge computed from level
 */

const groups = [
  {
    key: "frontend",
    title: "Frontend",
    note: "Web & Mobile UI",
    items: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React Native", level: 65 },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    note: "APIs & Services",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 75 },
    ],
  },
  {
    key: "mobile",
    title: "Mobile / Cross-platform",
    note: "Apps & SDKs",
    items: [
      { name: "Flutter (Dart)", level: 60 },
      { name: "Firebase", level: 70 },
      { name: "Expo", level: 65 },          // ➕ added Expo
    ],
  },
  {
    key: "databases",
    title: "Databases",
    note: "Relational & NoSQL",
    items: [
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 60 },
      { name: "MongoDB", level: 55 },
      { name: "Firestore", level: 65 },
    ],
  },
  {
    key: "tooling",
    title: "Tooling & DevOps",
    note: "Build & Ship",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Vite", level: 75 },
      { name: "CI/CD (basic)", level: 55 },
      { name: "Vercel", level: 65 },
    ],
  },
  {
    key: "languages",
    title: "Languages",
    note: "What I code in most",
    items: [
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "PHP", level: 80 },
      { name: "Python", level: 65 },        // ➕ added Python
      { name: "Dart", level: 60 },
    ],
  },
];

/* ---------------- icons ---------------- */
const groupIcon = {
  frontend: Atom,
  backend: Server,
  mobile: Laptop,
  databases: Database,
  tooling: Wrench,
  languages: Code2,
};

const skillIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes("react")) return Atom;
  if (n.includes("expo")) return Atom;                // Expo (RN) -> React icon vibe
  if (n.includes("next")) return Globe;
  if (n.includes("tailwind")) return Layers;
  if (n === "html" || n.includes("html5")) return FileIcon;
  if (n === "css" || n.includes("css3")) return Palette;
  if (n.includes("node")) return Boxes;
  if (n.includes("express")) return TerminalSquare;
  if (n.includes("laravel")) return Braces;
  if (n.includes("php")) return Braces;
  if (n.includes("python")) return Code2;            // Python
  if (n.includes("git")) return GitBranch;
  if (n.includes("vite")) return Package;
  if (n.includes("ci/cd")) return Wrench;
  if (n.includes("vercel")) return Globe;
  if (n.includes("mysql") || n.includes("postgres") || n.includes("mongo") || n.includes("firestore"))
    return Database;
  if (n.includes("firebase")) return Server;
  if (n.includes("dart") || n.includes("flutter")) return Laptop;
  return Code2;
};

// tiny HTML icon using Lucide's Layers as fallback shape
function FileIcon(props) {
  return <Layers {...props} />;
}

/* ------------- animations ------------- */
const gridVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

/* ------------- helpers ------------- */
function levelBadge(level) {
  if (level >= 85) return { label: "Expert", cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" };
  if (level >= 70) return { label: "Advanced", cls: "bg-amber-500/15 text-amber-300 border-amber-500/30" };
  return { label: "Intermediate", cls: "bg-sky-500/15 text-sky-300 border-sky-500/30" };
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* centered & animated header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent"
          >
            Skills
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
            A practical toolkit I use to design, build, and ship full-stack apps for web and mobile.
          </motion.p>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {groups.map((g) => {
            const GIcon = groupIcon[g.key] ?? Cpu;
            return (
              <motion.div
                key={g.title}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 30px 80px -30px rgba(56,189,248,0.35)" }}
                className="relative rounded-2xl border border-slate-700/60 bg-slate-900/40 p-4 sm:p-6 transition-transform"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-tr from-sky-500/10 to-fuchsia-500/10 blur-2xl" />

                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sky-200 mb-1 flex items-center gap-2">
                    <GIcon className="h-5 w-5" /> {g.title}
                  </h3>
                  <span className="text-xs text-slate-400">{g.note}</span>
                </div>

                {/* skills list */}
                <div className="mt-4 space-y-3">
                  {g.items.map((i, skillIndex) => {
                    const SIcon = skillIcon(i.name);
                    const badge = levelBadge(i.level);
                    return (
                      <motion.div
                        key={i.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="group relative rounded-xl border border-slate-700/60 bg-slate-900/50 px-3 py-2 overflow-hidden"
                      >
                        {/* Hover glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.div 
                              className="grid place-items-center h-9 w-9 rounded-lg bg-slate-800/60 border border-slate-700/60"
                              whileHover={{ rotate: 5, scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <SIcon className="h-4.5 w-4.5 text-sky-300" />
                            </motion.div>
                            <div>
                              <span className="text-slate-200 text-sm">{i.name}</span>
                              {/* Animated progress bar */}
                              <div className="mt-1 w-20 h-1 bg-slate-700/50 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-sky-500 to-fuchsia-500 rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${i.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                                />
                              </div>
                            </div>
                          </div>

                          <motion.span
                            className={`text-[11px] px-2 py-0.5 rounded-md border ${badge.cls}`}
                            title={`${i.level}%`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {badge.label}
                          </motion.span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
