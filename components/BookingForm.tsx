'use client';

import { useState, FormEvent } from 'react';
import { Service, CreateBookingDto, Booking } from '@/lib/api';
import { api } from '@/lib/api';

interface BookingFormProps {
  services: Service[];
}

type VerificationStep = 'form' | 'verify' | 'success';

export default function BookingForm({ services }: BookingFormProps) {
  const [formData, setFormData] = useState<CreateBookingDto>({
    name: '',
    email: '',
    phone: '',
    description: '',
    serviceId: services[0]?.id || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [verificationStep, setVerificationStep] = useState<VerificationStep>('form');
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const booking = await api.createBooking(formData);
      setBookingId(booking.id);
      setVerificationStep('verify');
      setMessage({ 
        type: 'success', 
        text: 'Rezervarea ta a fost creată! Te rugăm să verifici email-ul pentru codul de verificare.' 
      });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'A apărut o eroare. Te rugăm să încerci din nou.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyCode = async (e: FormEvent) => {
    e.preventDefault();
    if (!bookingId) return;

    setIsVerifying(true);
    setMessage(null);

    try {
      await api.verifyBookingCode(bookingId, verificationCode);
      setVerificationStep('success');
      setMessage({ 
        type: 'success', 
        text: 'Rezervarea ta a fost confirmată cu succes! Vei primi un email de confirmare cu toate detaliile.' 
      });
      // Reset form after successful verification
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: '',
          serviceId: services[0]?.id || '',
        });
        setVerificationCode('');
        setBookingId(null);
        setVerificationStep('form');
        setMessage(null);
      }, 5000);
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Cod invalid sau expirat. Te rugăm să încerci din nou.' 
      });
    } finally {
      setIsVerifying(false);
    }
  };

  if (verificationStep === 'verify') {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Verifică rezervarea</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
          <p className="text-sm text-blue-800">
            Am trimis un cod de verificare la adresa <strong>{formData.email}</strong>.
            Te rugăm să introduci codul de 6 cifre pentru a confirma rezervarea.
          </p>
        </div>

        <form onSubmit={handleVerifyCode} className="space-y-4">
          <div>
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-1">
              Cod de verificare
            </label>
            <input
              type="text"
              id="verificationCode"
              value={verificationCode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setVerificationCode(value);
              }}
              placeholder="000000"
              maxLength={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-2xl tracking-widest"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Introdu codul de 6 cifre primit pe email</p>
          </div>

          {message && (
            <div
              className={`p-3 rounded-md ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isVerifying || verificationCode.length !== 6}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVerifying ? 'Se verifică...' : 'Verifică codul'}
          </button>

          <button
            type="button"
            onClick={() => {
              setVerificationStep('form');
              setVerificationCode('');
              setMessage(null);
            }}
            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Înapoi la formular
          </button>
        </form>
      </div>
    );
  }

  if (verificationStep === 'success') {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Rezervare confirmată!</h2>
          {message && (
            <div className="bg-green-100 text-green-800 p-3 rounded-md mt-4">
              {message.text}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Rezervă o discuție</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nume complet
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Serviciu
        </label>
        <select
          id="service"
          value={formData.serviceId}
          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Număr de telefon
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Descriere
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {message && (
        <div
          className={`p-3 rounded-md ${
            message.type === 'success'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Se trimite...' : 'Trimite rezervarea'}
      </button>
    </form>
  );
}
