import { Treatment } from "@/lib/types";
import { TreatmentCard } from "./TreatmentCard";

interface TreatmentGridProps {
  treatments: Treatment[];
}

export function TreatmentGrid({ treatments }: TreatmentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {treatments.map((treatment, index) => (
        <TreatmentCard
          key={treatment.name}
          treatment={treatment}
          index={index}
        />
      ))}
    </div>
  );
}