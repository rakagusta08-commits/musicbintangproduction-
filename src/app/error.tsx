'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-3xl font-display font-bold text-foreground mb-4">Terjadi Kesalahan</h2>
      <p className="text-lg text-slate-600 mb-8">Maaf, ada masalah saat memuat halaman ini.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-mustard-gold text-white rounded-md hover:bg-mustard-gold-dark transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
