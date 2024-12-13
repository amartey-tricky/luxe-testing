import { treatments } from "@/lib/treatments";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { TreatmentGrid } from "@/components/treatments/TreatmentGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHeader
        title="Transform Your Beauty Journey"
        description="Experience advanced aesthetic treatments tailored to enhance your natural beauty"
      />
      
      <Container className="pb-20">
        <TreatmentGrid treatments={treatments} />
      </Container>
    </div>
  );
}