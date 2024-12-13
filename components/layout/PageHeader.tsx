"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}
      </motion.div>
    </header>
  );
}