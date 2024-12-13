interface BenefitProps {
  benefits: string[];
}

export function TreatmentBenefits({ benefits }: BenefitProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </section>
  );
}