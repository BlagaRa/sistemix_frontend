'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black shadow-lg shadow-black/50 border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
      }`}
      style={
        scrolled
          ? {
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <div className="relative w-auto">
                <Image
                  src={scrolled ? '/logo-white2.png' : '/logo-dark2.png'}
                  alt="Sistemix Logo"
                  width={160}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/servicii" className={`transition-colors font-medium ${scrolled ? 'text-gray-300 hover:text-white' : 'text-black hover:text-gray-800'}`}>
                Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/#about" className={`transition-colors font-medium ${scrolled ? 'text-gray-300 hover:text-white' : 'text-black hover:text-gray-800'}`}>
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/contact" className={`transition-colors font-medium ${scrolled ? 'text-gray-300 hover:text-white' : 'text-black hover:text-gray-800'}`}>
                Contact
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className={scrolled ? "bg-white hover:bg-gray-100 text-black shadow-lg" : "bg-black hover:bg-gray-900 text-white shadow-lg"}>
                <Link href="/rezervare">Book a Call</Link>
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className={`h-10 w-10 ${scrolled ? 'text-white' : 'text-black'}`}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden border-t py-4 overflow-hidden ${
                scrolled ? 'border-white/20' : 'border-gray-200/50'
              }`}
            >
              <div className="flex flex-col space-y-3">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/servicii"
                    className={`transition-colors px-4 py-2 block font-medium ${
                      scrolled 
                        ? 'text-white hover:text-gray-200' 
                        : 'text-black hover:text-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link
                    href="/#about"
                    className={`transition-colors px-4 py-2 block font-medium ${
                      scrolled 
                        ? 'text-white hover:text-gray-200' 
                        : 'text-black hover:text-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className={`transition-colors px-4 py-2 block font-medium ${
                      scrolled 
                        ? 'text-white hover:text-gray-200' 
                        : 'text-black hover:text-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="px-4"
                >
                  <Button asChild className={`w-full ${
                    scrolled 
                      ? 'bg-white hover:bg-gray-100 text-black' 
                      : 'bg-black hover:bg-gray-900 text-white'
                  }`}>
                    <Link href="/rezervare" onClick={() => setIsMenuOpen(false)}>
                      Book a Call
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
