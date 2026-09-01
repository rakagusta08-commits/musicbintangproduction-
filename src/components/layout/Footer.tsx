import { company } from '@/data/company';
import { MapPin, MessageCircle, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-slate text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-white/10 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 uppercase tracking-tight">{company.name}</h3>
            <p className="text-white/80 text-base sm:text-lg font-display italic mb-4 sm:mb-6">&quot;{company.tagline}&quot;</p>
            <div className="flex items-start gap-3 mt-4 max-w-lg">
              <MapPin size={18} className="text-mustard-gold shrink-0 mt-0.5 opacity-80" />
              <p className="text-xs sm:text-sm text-white/70 whitespace-pre-line leading-relaxed">{company.contact.address}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6 text-mustard-gold">Contact</h4>
            <div className="flex flex-col gap-4 sm:gap-5">
              <a href={`tel:${company.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-white/80 hover:text-mustard-gold text-xs sm:text-sm transition-colors group">
                <MessageCircle size={18} className="text-white/50 group-hover:text-mustard-gold transition-colors shrink-0" />
                <span className="break-all">{company.contact.phone}</span>
              </a>
              <a href={`mailto:${company.contact.email}`} className="flex items-center gap-3 text-white/80 hover:text-logo-red text-xs sm:text-sm transition-colors group">
                <Mail size={18} className="text-white/50 group-hover:text-logo-red transition-colors shrink-0" />
                <span className="break-all">{company.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-white/50">
            © 2026 {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
