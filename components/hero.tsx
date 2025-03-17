"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/components/AnimatedBackground"; // Import the animated background

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-black">
      <AnimatedBackground /> {}
      <Navbar />
      <div className="z-10 text-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600">
            Med Amine Bacha
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-cyan-300">
            Mobile Software Developer <span className="text-fuchsia-500">|</span> AI Enthusiast{" "}
            <span className="text-fuchsia-500">|</span> implementing scalable solutions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Specialize in Mobile and Backend development
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-md font-medium hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-shadow"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-cyan-400 rounded-md font-medium hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-shadow"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ArrowDown className="h-8 w-8 text-cyan-400" />
      </motion.div>
    </section>
  );
}