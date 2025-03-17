"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        background: "radial-gradient(circle at center, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1), black)",
        backgroundSize: "200% 200%",
      }}
    />
  );
}