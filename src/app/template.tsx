"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x: 24 }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0 }
      }
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
