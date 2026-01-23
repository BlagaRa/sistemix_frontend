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

type VerificationStep = 'form' | 'verify' | 'success';

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
  const [verificationStep, setVerificationStep] = useState<VerificationStep>('form');
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

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
      const booking = await api.createBooking({
        ...formData,
        description: bookingDescription,
        appointmentDate: selectedDate.toISOString(),
        appointmentTime: selectedTime,
      });
      setBookingId(booking.id);
      setVerificationStep('verify');
      toast.success('Booking created! Please check your email for the verification code.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyCode = async (e: FormEvent) => {
    e.preventDefault();
    if (!bookingId) return;

    setIsVerifying(true);

    try {
      await api.verifyBookingCode(bookingId, verificationCode);
      setVerificationStep('success');
      toast.success('Booking confirmed! You will receive a confirmation email shortly.');
      // Reset form after successful verification
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: '',
          serviceId: services[0]?.id || '',
        });
        setSelectedDate(null);
        setSelectedTime('');
        setVerificationCode('');
        setBookingId(null);
        setVerificationStep('form');
      }, 5000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Invalid or expired code. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    if (!bookingId) return;

    setIsResending(true);

    try {
      await api.resendVerificationCode(bookingId);
      toast.success('Verification code resent! Please check your email.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to resend code. Please try again.');
    } finally {
      setIsResending(false);
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
          <p className="text-sm font-semibold text-black mb-3 tracking-wider uppercase">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a call with our experts to discuss your project and discover how we can help
          </p>
        </motion.div>

        {verificationStep === 'verify' ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-2 border-black shadow-xl">
              <CardHeader className="bg-black text-white rounded-t-lg">
                <CardTitle className="text-2xl">Verify Your Booking</CardTitle>
                <CardDescription className="text-white/80">
                  Enter the 6-digit code sent to your email
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    We sent a verification code to <strong>{formData.email}</strong>.
                    Please enter the 6-digit code to confirm your booking.
                  </p>
                </div>

                <form onSubmit={handleVerifyCode} className="space-y-6">
                  <div>
                    <label htmlFor="verificationCode" className="block text-sm font-semibold text-black mb-2">
                      Verification Code
                    </label>
                    <Input
                      type="text"
                      id="verificationCode"
                      value={verificationCode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                        setVerificationCode(value);
                      }}
                      placeholder="000000"
                      maxLength={6}
                      className="w-full text-center text-3xl tracking-widest font-bold"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">Enter the 6-digit code from your email</p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isVerifying || verificationCode.length !== 6}
                    className="w-full bg-black hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg font-semibold"
                    size="lg"
                  >
                    {isVerifying ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Verifying...
                      </span>
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={handleResendCode}
                      disabled={isResending}
                      variant="outline"
                      className="flex-1 border-2 border-black hover:bg-gray-100"
                      size="lg"
                    >
                      {isResending ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        'Resend Code'
                      )}
                    </Button>

                    <Button
                      type="button"
                      onClick={() => {
                        setVerificationStep('form');
                        setVerificationCode('');
                      }}
                      variant="outline"
                      className="flex-1 border-2 border-black hover:bg-gray-100"
                      size="lg"
                    >
                      Back to Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        ) : verificationStep === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-2 border-green-500 shadow-xl">
              <CardContent className="pt-12 pb-12">
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">Booking Confirmed!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your booking has been successfully confirmed. You will receive a confirmation email with all the details shortly.
                </p>
                <p className="text-sm text-gray-500">
                  This page will redirect automatically in a few seconds...
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
            <Card className="border-2 border-black shadow-xl">
              <CardHeader className="bg-black text-white rounded-t-lg">
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
                    className="bg-black/10 border-2 border-black/20 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-black mb-1">
                          Appointment Selected:
                        </p>
                        <p className="text-black font-bold">
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
            <Card className="border-2 border-black shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Details</CardTitle>
                <CardDescription>
                  Complete your information to finalize the booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
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
                    <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
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
                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
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
                    <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
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
                    <label htmlFor="description" className="block text-sm font-semibold text-black mb-2">
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
                    className="w-full bg-black hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg font-semibold"
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
        )}
      </div>
    </section>
  );
}
