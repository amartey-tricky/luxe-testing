import { NextResponse } from "next/server";
import { getTreatmentBySlug } from "@/lib/api/treatments";
import { TREATMENT_BENEFITS } from "@/lib/constants";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const treatment = await getTreatmentBySlug(params.slug);
    
    if (!treatment) {
      return NextResponse.json(
        { error: "Treatment not found" },
        { status: 404 }
      );
    }

    const benefits = TREATMENT_BENEFITS[params.slug as keyof typeof TREATMENT_BENEFITS] || [];

    return NextResponse.json({
      treatment,
      benefits,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch treatment" },
      { status: 500 }
    );
  }
}