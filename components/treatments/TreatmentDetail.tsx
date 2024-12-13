"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Treatment } from "@/lib/types";
import { Container } from "@/components/layout/Container";
import { TreatmentIcon } from "./TreatmentIcon";
import { TreatmentBenefits } from "./TreatmentBenefits";
import styles from "./TreatmentDetail.module.css";

interface TreatmentDetailProps {
  treatment: Treatment;
  benefits: string[];
}

export function TreatmentDetail({ treatment, benefits }: TreatmentDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Container className="py-20">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to treatments
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.treatmentContent}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-8">
              <TreatmentIcon name={treatment.iconName} className="w-16 h-16 text-blue-600 mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{treatment.name}</h1>
              <p className="text-xl text-gray-600">{treatment.description}</p>
            </div>

            <div className="space-y-8">
              <TreatmentBenefits benefits={benefits} />

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect</h2>
                <p className="text-gray-600">
                  During your consultation, our expert practitioners will assess your needs
                  and create a personalized treatment plan. The procedure is performed with
                  the utmost care and attention to detail, ensuring your comfort throughout
                  the process.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aftercare</h2>
                <p className="text-gray-600">
                  We provide comprehensive aftercare instructions and support to ensure
                  optimal results. Our team is always available to address any concerns
                  during your recovery period.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}