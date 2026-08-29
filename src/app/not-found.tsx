import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-4xl font-display font-bold text-foreground mb-4">404 - Tidak Ditemukan</h2>
      <p className="text-lg text-slate-600 mb-8">Halaman yang Anda cari tidak ada.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-mustard-gold text-white rounded-md hover:bg-mustard-gold-dark transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
