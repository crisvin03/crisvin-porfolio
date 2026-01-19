// src/components/Loader.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export const LOADER_MS = 5000; // exact 5 seconds

const ORBITERS = new Array(10).fill(0).map((_, i) => ({
  r: 78 + (i % 2) * 4,     // orbit radius
  size: 4 + (i % 3),       // dot size
  delay: i * 0.12,         // stagger the start
}));

export default function Loader({ progress = 0 }) {
  const circumference = 2 * Math.PI * 60;
  const dash = circumference * progress;

  // Prevent scrolling and hide scrollbars when loader is visible
  useEffect(() => {
    // Hide scrollbars and prevent scrolling on body and html
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyOverflowY = document.body.style.overflowY;
    const originalBodyOverflowX = document.body.style.overflowX;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalHtmlOverflowY = document.documentElement.style.overflowY;
    const originalHtmlOverflowX = document.documentElement.style.overflowX;
    
    document.body.style.overflow = 'hidden';
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    return () => {
      // Restore original overflow values
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.overflowY = originalBodyOverflowY;
      document.body.style.overflowX = originalBodyOverflowX;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.documentElement.style.overflowY = originalHtmlOverflowY;
      document.documentElement.style.overflowX = originalHtmlOverflowX;
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[#070a14]"
      style={{ 
        overflow: 'hidden',
        overflowY: 'hidden',
        overflowX: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="status"
      aria-label={`Loading ${Math.round(progress * 100)} percent`}
    >
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,.10) 1px, transparent 1px),linear-gradient(to bottom, rgba(148,163,184,.10) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(800px 800px at 50% 50%, black 60%, transparent 100%)",
        }}
      />

      {/* soft aurora glows */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at 20% 25%, rgba(56,189,248,.18), transparent 45%), radial-gradient(800px circle at 80% 35%, rgba(217,70,239,.16), transparent 45%)",
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
        }}
      />

      <div className="relative flex flex-col items-center gap-7 text-center">
        {/* conic glow ring (slow rotation) */}
        <motion.div
          className="absolute -inset-10 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(56,189,248,.12), rgba(167,139,250,.12), transparent 40%)",
            filter: "blur(20px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />

        {/* main ring */}
        <div className="relative">
          <svg
            width="200"
            height="200"
            viewBox="0 0 180 180"
            className="drop-shadow-[0_0_30px_rgba(56,189,248,.35)]"
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            {/* track */}
            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="rgba(148,163,184,.16)"
              strokeWidth="10"
              fill="none"
            />
            {/* animated progress arc */}
            <motion.circle
              cx="90"
              cy="90"
              r="60"
              stroke="url(#g)"
              strokeWidth="10"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress }}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: circumference - dash,
                rotate: -90,
                transformOrigin: "90px 90px",
                filter: "drop-shadow(0 0 14px rgba(56,189,248,.35))",
              }}
              transition={{ type: "tween" }}
            />
          </svg>

          {/* orbiting micro particles */}
          {ORBITERS.map((o, i) => (
            <motion.span
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full bg-sky-300/80"
              style={{
                width: o.size,
                height: o.size,
                marginLeft: -o.size / 2,
                marginTop: -o.size / 2,
                filter: "blur(.2px)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                ease: "linear",
                delay: o.delay,
              }}
            >
              <span
                className="block"
                style={{
                  transform: `translate(${o.r}px, 0)`,
                  width: o.size,
                  height: o.size,
                }}
              />
            </motion.span>
          ))}

          {/* center badge */}
          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              className="h-14 w-14 rounded-2xl bg-[#0b1220] border border-sky-400/30 grid place-items-center"
              animate={{ boxShadow: ["0 0 0px rgba(56,189,248,0)", "0 0 30px rgba(56,189,248,.25)", "0 0 0px rgba(56,189,248,0)"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="h-7 w-7 text-sky-300" />
            </motion.div>
          </div>
        </div>

        {/* name / role with gentle shimmer */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-mono tracking-widest">
            <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-sky-300 bg-clip-text text-transparent [background-size:200%_100%] animate-[shine_3.5s_linear_infinite]">
              Crisvin
            </span>{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-200 to-fuchsia-300 bg-clip-text text-transparent [background-size:200%_100%] animate-[shine_3.5s_linear_infinite] [animation-delay:.6s]">
              Habitsuela
            </span>
          </h1>
          <p className="text-slate-300/90">Full-Stack Developer</p>
        </div>

        {/* progress bar with moving sheen */}
        <div className="w-80 h-2 rounded bg-slate-700/40 overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-sky-500 to-fuchsia-500"
            style={{ width: `${progress * 100}%` }}
          />
          {/* sheen moving across the filled part */}
          <motion.div
            className="absolute top-0 h-full pointer-events-none"
            style={{
              left: 0,
              right: `${(1 - progress) * 100}%`,
              background:
                "linear-gradient(115deg, transparent 0%, rgba(255,255,255,.35) 45%, transparent 60%)",
              mixBlendMode: "plus-lighter",
            }}
            animate={{ x: ["-30%", "130%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="font-mono text-slate-300">{Math.round(progress * 100)}%</div>
      </div>

      {/* keyframes (Tailwind-agnostic) */}
      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        /* Hide scrollbars during loader */
        body::-webkit-scrollbar,
        html::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
}
