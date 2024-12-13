import { useState, useEffect } from "react";
import { Treatment } from "@/lib/types";

interface TreatmentData {
  treatment: Treatment;
  benefits: string[];
}

export function useTreatment(slug: string) {
  const [data, setData] = useState<TreatmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTreatment() {
      try {
        const response = await fetch(`/api/treatments/${slug}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch treatment");
        }

        setData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchTreatment();
    }
  }, [slug]);

  return { data, loading, error };
}