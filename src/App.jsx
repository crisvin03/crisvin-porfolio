// src/App.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Starfield from "./components/Starfield";
import Loader, { LOADER_MS } from "./components/Loader";
import CodeHeader from "./components/CodeHeader";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / LOADER_MS);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setLoading(false), 300);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b15] text-slate-100 relative">
      <Starfield />
      <FloatingElements />
      <AnimatePresence>{loading && <Loader progress={progress} />}</AnimatePresence>

      <CodeHeader />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Professional footer */}
      <Footer />
    </div>
  );
}
