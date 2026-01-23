// Backend API URL - MUST be set via environment variable
// Set NEXT_PUBLIC_API_URL in Cloudflare Pages → Settings → Environment Variables
// For local development, defaults to http://localhost:3000
const getApiBaseUrl = (): string => {
  // During build time, environment variables might not be available
  // Use a default value and validate at runtime instead
  const url = process.env.NEXT_PUBLIC_API_URL;
  
  if (!url) {
    // Only throw error at runtime, not during build
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.error(
        'NEXT_PUBLIC_API_URL is not set! ' +
        'Please configure it in Cloudflare Pages → Settings → Environment Variables. ' +
        'Set NEXT_PUBLIC_API_URL to your backend URL (e.g., https://api.sistemix.com)'
      );
    }
    // Return default for build time, will be validated at runtime
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  }
  
  return url;
};

// Use a function to get API URL instead of evaluating at module level
// This allows build to succeed even if env var is not set during build
const API_BASE_URL = getApiBaseUrl();

export interface Service {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  status: string;
  serviceId: string;
  service: Service;
  verificationCode?: string;
  isVerified: boolean;
  codeExpiresAt?: string;
  verifiedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBookingDto {
  name: string;
  email: string;
  phone: string;
  description: string;
  serviceId: string;
  appointmentDate?: string;
  appointmentTime?: string;
}

export interface UpdateBookingDto {
  name?: string;
  email?: string;
  phone?: string;
  description?: string;
  status?: string;
  serviceId?: string;
}

export const api = {
  async getServices(): Promise<Service[]> {
    const response = await fetch(`${API_BASE_URL}/services`);
    if (!response.ok) {
      throw new Error('Failed to fetch services');
    }
    return response.json();
  },

  async getService(id: string): Promise<Service> {
    const response = await fetch(`${API_BASE_URL}/services/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch service');
    }
    return response.json();
  },

  async createBooking(booking: CreateBookingDto): Promise<Booking> {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create booking');
    }
    return response.json();
  },

  async verifyBookingCode(bookingId: string, code: string): Promise<Booking> {
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to verify booking code');
    }
    return response.json();
  },

  async resendVerificationCode(bookingId: string): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/resend-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to resend verification code');
    }
    return response.json();
  },
};
