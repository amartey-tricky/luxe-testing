import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aesthetic Clinic - Advanced Beauty Treatments',
  description: 'Experience advanced aesthetic treatments tailored to enhance your natural beauty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}