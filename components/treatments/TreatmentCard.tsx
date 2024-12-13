"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Treatment } from "@/lib/types";
import { TreatmentIcon } from "./TreatmentIcon";
import styles from "./TreatmentCard.module.css";

interface TreatmentCardProps {
  treatment: Treatment;
  index: number;
}

export function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/treatments/${treatment.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className={`${styles.treatmentCard} bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
          <div className="mb-6">
            <TreatmentIcon name={treatment.iconName} className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{treatment.name}</h2>
          <p className="text-gray-600">{treatment.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}