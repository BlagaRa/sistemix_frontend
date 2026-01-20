'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-[#303030] via-[#404040] to-[#505050] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Get in Touch
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-[#303030] mb-6">Contact Information</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Reach out to us through any of the following channels. We're here to help with your tech needs.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-2 border-[#505050] hover:border-[#303030] transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#303030] rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#303030] mb-1">Email</h3>
                            <a
                              href="mailto:razvanblaga10@gmail.com"
                              className="text-[#303030] hover:text-[#404040] hover:underline"
                            >
                              razvanblaga10@gmail.com
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-[#505050] hover:border-[#303030] transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#303030] rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#303030] mb-1">Phone</h3>
                            <a
                              href="tel:+40772169637"
                              className="text-[#303030] hover:text-[#404040] hover:underline"
                            >
                              +40 772 169 637
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-[#505050] hover:border-[#303030] transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#303030] rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#303030] mb-1">Location</h3>
                            <p className="text-gray-600">Romania, European Union</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-[#505050] shadow-xl">
                  <CardHeader className="bg-[#303030] text-white rounded-t-lg">
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#303030] mb-2">
                          Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          required
                          placeholder="Your name"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#303030] mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-[#303030] mb-2">
                          Subject
                        </label>
                        <Input
                          type="text"
                          id="subject"
                          required
                          placeholder="What's this about?"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-[#303030] mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          placeholder="Tell us more about your project..."
                          className="w-full"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#303030] hover:bg-[#404040] text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg font-semibold"
                        size="lg"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
