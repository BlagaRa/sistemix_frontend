'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    title: 'Premium Web Development',
    subtitle: 'Cutting-edge digital solutions',
    description: 'Transform your business with modern, scalable web applications built with the latest technologies.',
    image: '/hero2.png',
  },
  {
    title: 'AI-Powered Automation',
    description: 'Intelligent agents and automation systems that optimize your workflows and drive efficiency.',
    subtitle: 'Intelligent technology',
    image: '/hero3.png',
  },
  {
    title: 'Expert Tech Consulting',
    description: 'Strategic guidance from industry experts to help you navigate the digital landscape.',
    subtitle: 'Strategic expertise',
    image: '/hero4.png',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => {
          if (index !== currentSlide) return null;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src={slide.image}
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                  transform: 'scale(1)',
                  filter: 'brightness(1) contrast(1)',
                }}
              />
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <p className="text-sm sm:text-base font-semibold text-gray-300 mb-2 tracking-wider uppercase">
                      {slide.subtitle}
                    </p>
                  </motion.div>
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-200 max-w-2xl mx-auto"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <Button
                      size="lg"
                      asChild
                      className="bg-white text-black hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 group px-8 py-6 text-lg font-semibold"
                    >
                      <a href="#contact">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 glass text-white p-3 rounded-full transition-all hover:bg-white/30 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 glass text-white p-3 rounded-full transition-all hover:bg-white/30 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.button>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8 shadow-lg'
                : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
