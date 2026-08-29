import { PageTransition } from '@/components/ui/PageTransition';
import { company } from '@/data/company';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

export const metadata = {
  title: 'Kontak | Music Bintang Production',
};

export default function KontakPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-0 bg-dark-slate min-h-screen flex flex-col text-white">
        
        <section className="py-20 md:py-32 container mx-auto px-6 max-w-4xl flex-grow flex flex-col justify-center">
          
          <div className="mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-pure-white mb-4">
              Detail Kontak
            </h1>
            <h2 className="text-xl md:text-2xl text-pure-white/80 font-body">
              {company.name}.
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            
            {/* Email */}
            <div className="flex items-start gap-6">
              <Mail className="w-6 h-6 text-white/50 mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                <a href={`mailto:${company.contact.email}`} className="text-mustard-gold hover:text-white transition-colors">
                  {company.contact.email}
                </a>
              </div>
            </div>

            {/* Telepon */}
            <div className="flex items-start gap-6">
              <Phone className="w-6 h-6 text-white/50 mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Telepon</h3>
                <a href={`tel:${company.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-mustard-gold hover:text-white transition-colors">
                  {company.contact.phone}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-6">
              <svg className="w-6 h-6 text-white/50 mt-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Instagram</h3>
                <a href="https://www.instagram.com/musicbintang_production/" target="_blank" rel="noreferrer" className="text-mustard-gold hover:text-white transition-colors">
                  @musicbintang_production
                </a>
              </div>
            </div>

            {/* Alamat */}
            <div className="flex items-start gap-6">
              <MapPin className="w-6 h-6 text-white/50 mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Alamat</h3>
                <p className="text-white/80 leading-relaxed mb-2 whitespace-pre-line">
                  {company.contact.address}
                </p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(company.contact.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-mustard-gold hover:text-white transition-colors text-sm"
                >
                  View on Google map
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
      
      <CTASection />
    </PageTransition>
  );
}