"use client";

import * as Icons from "lucide-react";

interface TreatmentIconProps {
  name: string;
  className?: string;
}

export function TreatmentIcon({ name, className }: TreatmentIconProps) {
  const Icon = Icons[name as keyof typeof Icons];
  return Icon ? <Icon className={className} /> : null;
}