import { getTreatmentBySlug, getAllTreatmentSlugs } from "@/lib/api/treatments";
import { TREATMENT_BENEFITS } from "@/lib/constants";
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getAllTreatmentSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TreatmentPage({ params }: { params: { slug: string } }) {
  const treatment = await getTreatmentBySlug(params.slug);

  if (!treatment) {
    notFound();
  }

  const benefits = TREATMENT_BENEFITS[params.slug as keyof typeof TREATMENT_BENEFITS] || [];

  return <TreatmentDetail treatment={treatment} benefits={benefits} />;
}