// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, ArrowUpRight, ChevronUp } from "lucide-react";

export default function Footer() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socials = [
    { href: "mailto:crisvin.habitsuela@sorsu.edu.ph", Icon: Mail, label: "Email" },
    { href: "https://github.com/crisvin03", Icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/crisvin-habitsuela-2a8212269", Icon: Linkedin, label: "LinkedIn" },
  ];

  const stack = ["React", "Next.js", "Node", "Tailwind", "Framer-Motion"];

  return (
    <footer className="relative mt-16">
      {/* top gradient rule */}
      <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/40 via-fuchsia-500/40 to-sky-500/40" />

      <div className="relative">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-sky-500/10 to-transparent blur-2xl" />

        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* header strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-11 w-11 rounded-xl border border-slate-700/60 bg-slate-900/60 shadow-[0_0_40px_-20px_rgba(56,189,248,.45)]">
                <Code2 className="h-5 w-5 text-sky-300" />
              </div>
              <div>
                <div className="font-mono text-slate-200 tracking-wider text-sm">
                  {`const brand = '<Crisvin />'`}
                </div>
                <div className="text-xs text-slate-400">
                  Full-stack developer • Philippines / Remote
                </div>
              </div>
            </div>

            {/* back to top */}
            <a
              href="#home"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2 text-sm text-slate-300
                         hover:border-sky-500/50 hover:bg-slate-900/80 transition"
              aria-label="Back to top"
            >
              <ChevronUp className="h-4 w-4 text-sky-300 group-hover:translate-y-[-2px] transition-transform" />
              Back to top
            </a>
          </div>

          {/* main grid */}
          <div className="grid gap-10 md:grid-cols-3 pt-8">
            {/* Brand & blurb */}
            <div className="space-y-4">
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                I design and build robust, accessible products—clean UIs, reliable APIs, and
                thoughtful DX. Open to freelance and full-time opportunities.
              </p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-slate-700/60 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <nav>
              <h4 className="text-sm font-semibold text-slate-200 mb-3">Navigate</h4>
              <ul className="grid grid-cols-2 gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-slate-400 hover:text-sky-300 transition-colors"
                    >
                      {l.label}
                      <span className="w-0 group-hover:w-3 h-[1px] bg-sky-400/70 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Socials / CTA */}
            <div className="md:justify-self-end space-y-4">
              <h4 className="text-sm font-semibold text-slate-200">Reach me</h4>
              <div className="flex items-center gap-3">
                {socials.map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    className="group rounded-xl border border-slate-700/60 bg-slate-900/60 p-2.5
                               hover:border-sky-500/50 hover:bg-slate-900/80 hover:shadow-[0_12px_40px_-20px_rgba(56,189,248,0.45)]
                               transition"
                  >
                    <Icon className="h-4.5 w-4.5 text-slate-300 group-hover:text-sky-300 transition-colors" />
                  </motion.a>
                ))}
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sm
                           text-slate-100 hover:bg-sky-500/20 transition"
              >
                Let’s collaborate
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
