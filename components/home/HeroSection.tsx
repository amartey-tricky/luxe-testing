"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <header className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Transform Your Beauty Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience advanced aesthetic treatments tailored to enhance your natural beauty
        </p>
      </motion.div>
    </header>
  );
}