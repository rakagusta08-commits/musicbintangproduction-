import Link from 'next/link';
import { company } from '@/data/company';
import { MapPin, MessageCircle, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-slate text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4 uppercase">{company.name}</h3>
            <p className="text-pure-white/80 text-lg font-display italic mb-6">&quot;{company.tagline}&quot;</p>
            <div className="flex items-start gap-3 mt-4">
              <MapPin size={18} className="text-mustard-gold shrink-0 mt-0.5 opacity-80" />
              <p className="text-sm text-pure-white/80/80 whitespace-pre-line leading-relaxed">{company.contact.address}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-mustard-gold">Contact</h4>
            <div className="flex flex-col gap-5">
              <a href={`tel:${company.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-pure-white/80 hover:text-mustard-gold text-sm transition-colors group">
                <MessageCircle size={18} className="text-white/40 group-hover:text-mustard-gold transition-colors" />
                <span>{company.contact.phone}</span>
              </a>
              <a href={`mailto:${company.contact.email}`} className="flex items-center gap-3 text-pure-white/80 hover:text-logo-red text-sm transition-colors group">
                <Mail size={18} className="text-white/40 group-hover:text-logo-red transition-colors" />
                <span>{company.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-pure-white/80/60">
            © 2026 {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};