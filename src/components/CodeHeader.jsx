import React from "react";
import { Rocket } from "lucide-react";

export default function CodeHeader() {
  const items = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#070b15]/70 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono text-slate-200 tracking-wider">&lt;Crisvin/&gt;</a>

        <nav className="hidden md:flex items-center">
          <div className="font-mono text-[13px] rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-2 shadow-[0_0_40px_-24px_rgba(56,189,248,0.4)]">
            <span className="text-sky-300">const</span>{" "}
            <span className="text-fuchsia-300">nav</span>{" "}
            <span>= [</span>
            {items.map((l, i) => (
              <span key={l.href} className="mx-1">
                <a href={l.href} className="text-slate-300 hover:text-sky-300 transition-colors">
                  {"'"}{l.label}{"'"}
                </a>
                {i < items.length - 1 ? <span className="text-slate-500">,</span> : null}
              </span>
            ))}
            <span>]</span>
            <span className="inline-block ml-2 h-4 w-[2px] bg-slate-300/80 animate-pulse align-middle" />
          </div>
        </nav>

        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 transition">
          <Rocket className="h-4 w-4" /> Hire me
        </a>
      </div>
    </header>
  );
}
