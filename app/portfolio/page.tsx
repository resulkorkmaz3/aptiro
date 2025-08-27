'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortfolioPage() {
  const router = useRouter();

  useEffect(() => {
    // Services section'a yönlendir (portfolio yerine services gösteriyoruz)
    router.replace('/#services');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-slate-600">Redirecting to our services...</p>
      </div>
    </div>
  );
}
