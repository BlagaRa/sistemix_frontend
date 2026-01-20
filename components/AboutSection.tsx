'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Sparkles, Target, Users } from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: Target,
      title: 'Proven Track Record',
      description: 'Successfully delivered complex projects for clients worldwide',
    },
    {
      icon: Sparkles,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest tools and frameworks to build modern solutions',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Continuous consultation and support throughout your project journey',
    },
    {
      icon: CheckCircle2,
      title: 'Custom Solutions',
      description: 'Tailored approaches designed specifically for your business needs',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold text-[#303030] mb-3 tracking-wider uppercase">
              About Sistemix
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#303030] mb-6">
              Excellence in Every Project
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                We are a team of technology specialists passionate about innovation and excellence. 
                We deliver comprehensive digital solutions that transform ideas into reality.
              </p>
              <p>
                With expertise in web development, artificial intelligence, automation, and consulting, 
                we are your trusted partner for digital projects.
              </p>
              <p className="font-semibold text-[#303030]">
                Quality, professionalism, and client satisfaction are our fundamental values.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#303030] rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-200 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
