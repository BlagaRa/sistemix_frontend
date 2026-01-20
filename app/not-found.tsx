'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect automat după 2 secunde
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-6xl sm:text-8xl font-bold text-black mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist. You will be redirected to the homepage shortly.
          </p>
          <a
            href="/"
            className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Go to Homepage
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
