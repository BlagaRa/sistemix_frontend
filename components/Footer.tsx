'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="relative w-auto">
                  <Image
                    src="/logo-white2.png"
                    alt="Sistemix Logo"
                    width={160}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Premium technology solutions provider. We transform ideas into reality with cutting-edge 
                web development, AI agents, automation, and expert consulting.
              </p>
              <div className="text-gray-400 text-sm space-y-2">
                <p className="font-semibold text-white">Blaga Razvan Antonio PFA</p>
                <p>CUI: RO12345678</p>
                <p>Romania, EU</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicii" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/rezervare" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all"></span>
                  Book a Call
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-gray-400 mt-0.5 shrink-0" />
                <a href="mailto:razvanblaga10@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  razvanblaga10@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-gray-400 mt-0.5 shrink-0" />
                <a href="tel:+40772169637" className="text-gray-300 hover:text-white transition-colors">
                  +40 772 169 637
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-300">Romania, European Union</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="https://www.linkedin.com/in/razvan-blaga-652a49306/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
             
              <motion.a
                href="https://github.com/BlagaRa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Sistemix. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
