import { api, Service } from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development, AI Agents & Automation Services | Sistemix',
  description: 'Sistemix offers professional web development, website creation, AI agents development, business automation, and tech consulting services in Romania and Europe. Specialized solutions for startups and businesses.',
  keywords: [
    'Sistemix services',
    'Sistemix web development',
    'Sistemix AI agents',
    'Sistemix automation',
    'creare website',
    'creare site web',
    'dezvoltare website',
    'agenti AI',
    'automatizare business',
    'web development services',
    'website creation',
    'AI agents development',
    'business automation',
    'tech consulting',
    'web development Romania',
    'AI development Romania',
    'automation Romania',
    'startup web development',
    'startup AI solutions',
    'startup automation',
    'European web developer',
    'Romanian tech services',
    'custom web development',
    'AI agent creation',
    'process automation',
    'workflow automation',
  ],
  openGraph: {
    title: 'Web Development, AI Agents & Automation Services | Sistemix',
    description: 'Professional web development, website creation, AI agents development, and business automation services by Sistemix. Serving startups and businesses in Romania and Europe.',
    url: '/servicii',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development, AI Agents & Automation Services | Sistemix',
    description: 'Professional web development, AI agents, and automation services by Sistemix in Romania.',
  },
};

async function getServices(): Promise<Service[]> {
  try {
    return await api.getServices();
  } catch (error) {
    return [];
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-[#303030] via-[#404040] to-[#505050] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl">
              Comprehensive and personalized digital solutions tailored to your needs
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 sm:space-y-20">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
