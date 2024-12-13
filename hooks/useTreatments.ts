import { useState, useEffect } from "react";
import { Treatment } from "@/lib/types";

export function useTreatments() {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTreatments() {
      try {
        const response = await fetch("/api/treatments");
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch treatments");
        }

        setTreatments(data.treatments);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchTreatments();
  }, []);

  return { treatments, loading, error };
}