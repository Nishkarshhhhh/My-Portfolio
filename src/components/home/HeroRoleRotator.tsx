"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface HeroRoleRotatorProps {
  words: string[];
}

export default function HeroRoleRotator({ words }: HeroRoleRotatorProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (words.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-flex items-center h-[1.6em] overflow-hidden align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className="text-sky-300 font-semibold font-mono"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
