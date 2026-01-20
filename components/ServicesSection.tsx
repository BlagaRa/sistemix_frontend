'use client';

import { Service } from '@/lib/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Bot, Zap, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ServicesSkeleton from '@/components/loading/ServicesSkeleton';

const serviceIcons: Record<string, typeof Code> = {
  'Web Development': Code,
  'AI Agents': Bot,
  'Automation': Zap,
  'Consulting': Briefcase,
};

const serviceMap: Record<string, string> = {
  'Dezvoltare Site Web': 'Web Development',
  'Creare Agenți AI': 'AI Agents',
  'Implementare Automatizare': 'Automation',
  'Consultanță': 'Consulting',
};

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (services.length === 0) {
    return <ServicesSkeleton />;
  }

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#303030] mb-3 tracking-wider uppercase">
            Our Services
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#303030] mb-4">
            Premium Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology services designed to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const serviceName = serviceMap[service.name] || service.name;
            const Icon = serviceIcons[serviceName] || Briefcase;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-2 border-[#505050] hover:border-[#303030] transition-all duration-300 hover:shadow-2xl group cursor-pointer bg-white">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-[#303030] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-[#303030] group-hover:text-[#404040] transition-colors">
                      {serviceName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 mb-4 min-h-[60px]">
                      {service.description || 'Professional high-quality service'}
                    </CardDescription>
                    <Link
                      href="/servicii"
                      className="inline-flex items-center text-[#303030] font-semibold group-hover:gap-2 transition-all hover:text-[#404040]"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
