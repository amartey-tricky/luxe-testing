import { Treatment } from "@/lib/types";
import { treatments } from "@/lib/treatments";

export async function getTreatments(): Promise<Treatment[]> {
  return treatments;
}

export async function getTreatmentBySlug(slug: string): Promise<Treatment | null> {
  const treatment = treatments.find(
    (t) => t.name.toLowerCase().replace(/\s+/g, "-") === slug
  );
  return treatment || null;
}

export async function getAllTreatmentSlugs(): Promise<string[]> {
  return treatments.map((treatment) => 
    treatment.name.toLowerCase().replace(/\s+/g, "-")
  );
}