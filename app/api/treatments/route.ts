import { NextResponse } from "next/server";
import { getTreatments } from "@/lib/api/treatments";

export async function GET() {
  try {
    const treatments = await getTreatments();
    return NextResponse.json({ treatments });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch treatments" },
      { status: 500 }
    );
  }
}