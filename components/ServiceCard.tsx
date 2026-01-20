'use client';

import { Service } from '@/lib/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Bot, Zap, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const serviceDetails: Record<string, {
  features: string[];
  process: string[];
  benefits: string[];
}> = {
  'Web Development': {
    features: [
      'Modern and responsive design',
      'SEO optimization',
      'External system integration',
      'Admin dashboard',
      'Support and maintenance',
    ],
    process: [
      'Initial consultation and needs analysis',
      'Design and prototyping',
      'Development and testing',
      'Launch and optimization',
    ],
    benefits: [
      'Professional online presence',
      'Increased credibility',
      '24/7 accessibility',
      'Easy scalability',
    ],
  },
  'AI Agents': {
    features: [
      'Custom AI agents',
      'Integration with existing systems',
      'Natural language processing',
      'Task automation',
      'Machine Learning',
    ],
    process: [
      'Requirements and use case analysis',
      'AI architecture design',
      'Development and training',
      'Testing and optimization',
    ],
    benefits: [
      'Increased efficiency',
      'Reduced operational costs',
      'Process automation',
      'Competitive advantage',
    ],
  },
  'Automation': {
    features: [
      'Workflow automation',
      'API integration',
      'Automated notifications',
      'Scheduled reports',
      'Real-time monitoring',
    ],
    process: [
      'Current process audit',
      'Opportunity identification',
      'Automation solution design',
      'Implementation and testing',
    ],
    benefits: [
      'Time savings',
      'Reduced human errors',
      'Increased productivity',
      'Fast ROI',
    ],
  },
  'Consulting': {
    features: [
      'Technology analysis',
      'Digital strategy',
      'Personalized recommendations',
      'Implementation roadmap',
      'Ongoing support',
    ],
    process: [
      'Initial consultation session',
      'Current situation analysis',
      'Recommendation development',
      'Presentation and planning',
    ],
    benefits: [
      'Informed decisions',
      'Investment optimization',
      'Risk reduction',
      'Strategic vision',
    ],
  },
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const serviceName = serviceMap[service.name] || service.name;
  const Icon = serviceIcons[serviceName] || Briefcase;
  const details = serviceDetails[serviceName] || {
    features: [],
    process: [],
    benefits: [],
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card className="border-2 border-black hover:border-black transition-all duration-300 hover:shadow-2xl overflow-hidden group bg-white">
        <CardHeader className="bg-black/5 pb-6">
          <div className="flex items-start space-x-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0"
            >
              <Icon className="h-10 w-10 text-white" />
            </motion.div>
            <div className="flex-1">
              <CardTitle className="text-3xl sm:text-4xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                {serviceName}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                {service.description || 'Professional high-quality service'}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-black flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Features
              </h3>
              <ul className="space-y-3">
                {details.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-black flex items-center">
                <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">
                  →
                </span>
                Process
              </h3>
              <ul className="space-y-3">
                {details.process.map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-black flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Benefits
              </h3>
              <ul className="space-y-3">
                {details.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t-2 border-gray-100">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all group"
            >
              <Link href="/rezervare">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
