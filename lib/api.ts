const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

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
  createdAt: string;
  updatedAt: string;
}

export interface CreateBookingDto {
  name: string;
  email: string;
  phone: string;
  description: string;
  serviceId: string;
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
};
