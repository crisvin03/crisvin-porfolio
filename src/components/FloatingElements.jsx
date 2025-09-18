// src/components/FloatingElements.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Database, Cpu, Globe, Zap } from "lucide-react";

const floatingIcons = [
  { Icon: Code2, delay: 0, duration: 8, x: "10%", y: "20%" },
  { Icon: Terminal, delay: 1, duration: 10, x: "85%", y: "15%" },
  { Icon: Database, delay: 2, duration: 12, x: "15%", y: "70%" },
  { Icon: Cpu, delay: 3, duration: 9, x: "80%", y: "75%" },
  { Icon: Globe, delay: 4, duration: 11, x: "50%", y: "10%" },
  { Icon: Zap, delay: 5, duration: 7, x: "25%", y: "85%" },
];

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute opacity-5"
          style={{
            left: item.x,
            top: item.y,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon className="h-6 w-6 text-sky-300" />
        </motion.div>
      ))}
      
      {/* Floating particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-sky-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Subtle grid lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
