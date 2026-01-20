'use client';

import { useState, FormEvent } from 'react';
import { Service, CreateBookingDto } from '@/lib/api';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Calendar from '@/components/Calendar';
import TimeSelector from '@/components/TimeSelector';
import { Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContactFormProps {
  services: Service[];
}

const serviceMap: Record<string, string> = {
  'Dezvoltare Site Web': 'Web Development',
  'Creare Agenți AI': 'AI Agents',
  'Implementare Automatizare': 'Automation',
  'Consultanță': 'Consulting',
};

export default function ContactForm({ services }: ContactFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState<CreateBookingDto>({
    name: '',
    email: '',
    phone: '',
    description: '',
    serviceId: services[0]?.id || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast.error('Please select a date and time for your appointment');
      return;
    }

    setIsSubmitting(true);

    const bookingDescription = `Appointment scheduled for ${formatDate(selectedDate)} at ${selectedTime}\n\n${formData.description}`;

    try {
      await api.createBooking({
        ...formData,
        description: bookingDescription,
      });
      toast.success('Your booking has been submitted successfully! We will contact you for confirmation.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: '',
        serviceId: services[0]?.id || '',
      });
      setSelectedDate(null);
      setSelectedTime('');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = services.find(s => s.id === formData.serviceId);
  const serviceName = selectedService ? (serviceMap[selectedService.name] || selectedService.name) : '';

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#303030] mb-3 tracking-wider uppercase">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#303030] mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a call with our experts to discuss your project and discover how we can help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="border-2 border-[#505050] shadow-xl">
              <CardHeader className="bg-[#303030] text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-6 w-6" />
                  <div>
                    <CardTitle className="text-2xl">Select Date & Time</CardTitle>
                    <CardDescription className="text-white/80">
                      Choose the perfect time for your consultation
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <Calendar selectedDate={selectedDate} onDateSelect={handleDateSelect} />
                
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <TimeSelector
                      selectedTime={selectedTime}
                      onTimeSelect={setSelectedTime}
                    />
                  </motion.div>
                )}

                {selectedDate && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#303030]/10 border-2 border-[#303030]/20 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#303030] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[#303030] mb-1">
                          Appointment Selected:
                        </p>
                        <p className="text-[#303030] font-bold">
                          {formatDate(selectedDate)} at {selectedTime}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Card className="border-2 border-[#505050] shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Details</CardTitle>
                <CardDescription>
                  Complete your information to finalize the booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#303030] mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[#303030] mb-2">
                      Service
                    </label>
                    <Select
                      id="service"
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      required
                      className="w-full"
                    >
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {serviceMap[service.name] || service.name}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#303030] mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#303030] mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+1 234 567 890"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-[#303030] mb-2">
                      Project Description
                    </label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !selectedDate || !selectedTime}
                    className="w-full bg-[#303030] hover:bg-[#404040] text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg font-semibold"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Submitting...
                      </span>
                    ) : (
                      'Book a Call'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
