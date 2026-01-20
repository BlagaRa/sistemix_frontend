import { api, Service } from '@/lib/api';
import dynamicImport from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServicesSkeleton from '@/components/loading/ServicesSkeleton';

// Force dynamic rendering to avoid build-time API calls
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ServicesSection = dynamicImport(() => import('@/components/ServicesSection'), {
  loading: () => <ServicesSkeleton />,
});

const AboutSection = dynamicImport(() => import('@/components/AboutSection'), {
  loading: () => (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  ),
});

const ContactForm = dynamicImport(() => import('@/components/ContactForm'), {
  loading: () => (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  ),
});

async function getServices(): Promise<Service[]> {
  try {
    return await api.getServices();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const services = await getServices();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection services={services} />
        <AboutSection />
        {services.length > 0 && <ContactForm services={services} />}
      </main>
      <Footer />
    </div>
  );
}
