import React, { useState } from "react";
import { Rocket, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CodeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const items = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[#070b15]/70 border-b border-slate-800/60 w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between w-full">
        <a href="#home" className="font-mono text-slate-200 tracking-wider hover:text-sky-300 transition-colors">&lt;Crisvin/&gt;</a>

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

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 transition">
            <Rocket className="h-4 w-4" /> Hire me
          </a>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800/70 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 text-slate-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-slate-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-slate-800/60 bg-[#070b15]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-sky-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="pt-2"
              >
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-3 px-4 rounded-lg border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Rocket className="h-4 w-4" /> Hire me
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
