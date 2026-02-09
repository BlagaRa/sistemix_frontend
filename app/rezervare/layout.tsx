import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/rezervare',
  },
};

export default function RezervareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
