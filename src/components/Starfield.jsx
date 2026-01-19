import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const Star = ({ size = 2, x = 0, y = 0, delay = 0 }) => (
  <motion.span
    className="absolute bg-white/70 rounded-full"
    style={{ width: size, height: size, left: x, top: y, boxShadow: "0 0 8px #6ea8fe" }}
    animate={{ opacity: [0.2, 0.9, 0.2] }}
    transition={{ duration: 2.8 + Math.random() * 2, repeat: Infinity, delay }}
  />
);

export function useStars(count = 80) {
  return useMemo(
    () =>
      new Array(count).fill(0).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
      })),
    [count]
  );
}

export default function Starfield() {
  const stars = useStars(80);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {stars.map((s) => (
        <Star key={`bg-${s.id}`} {...s} />
      ))}
    </div>
  );
}
