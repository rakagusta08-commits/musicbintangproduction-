import { PageTransition } from '@/components/ui/PageTransition';
import { company } from '@/data/company';
import { Mail } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { technicalRider } from '@/data/technical-rider';
import { TechnicalTable } from '@/components/technical-rider/TechnicalTable';
import { RiderEquipment } from '@/components/technical-rider/RiderEquipment';

export const metadata = {
  title: 'Kontak | Music Bintang Production',
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function KontakPage() {
  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: <WhatsAppIcon className="w-8 h-8" />,
      value: company.contact.phone,
      desc: 'Hubungi kami via WhatsApp untuk respon cepat.',
      href: `https://wa.me/${company.contact.phone.replace(/[^0-9]/g, '')}`,
      hoverColor: 'group-hover:text-green-400',
      glow: 'group-hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]',
      border: 'group-hover:border-green-400/50',
    },
    {
      id: 'email',
      title: 'Email',
      icon: <Mail className="w-8 h-8" />,
      value: company.contact.email,
      desc: 'Kirimkan pesan elektronik untuk keperluan bisnis.',
      href: `mailto:${company.contact.email}`,
      hoverColor: 'group-hover:text-logo-red',
      glow: 'group-hover:shadow-[0_0_30px_rgba(255,59,48,0.2)]',
      border: 'group-hover:border-logo-red/50',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      icon: <InstagramIcon className="w-8 h-8" />,
      value: '@musicbintang_production',
      desc: 'Ikuti update dan karya terbaru kami.',
      href: 'https://www.instagram.com/musicbintang_production/',
      hoverColor: 'group-hover:text-pink-500',
      glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]',
      border: 'group-hover:border-pink-500/50',
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-0 bg-dark-slate min-h-screen flex flex-col text-white relative overflow-hidden">
        
        {/* Background Decorations */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-mustard-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-logo-red/5 rounded-full blur-[150px] pointer-events-none" />

        <section className="py-20 md:py-32 container mx-auto px-6 max-w-6xl flex-grow flex flex-col justify-center relative z-10">
          
          <div className="text-center mb-20">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-pure-white mb-6 uppercase tracking-tight">
              Mari <span className="text-mustard-gold">Berbincang</span>
            </h1>
            <p className="text-xl md:text-2xl text-pure-white/70 font-body max-w-2xl mx-auto">
              Punya ide karya atau pertanyaan tentang layanan kami? Jangan ragu untuk menghubungi tim {company.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col items-center text-center bg-pure-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl transition-all duration-500 ease-out hover:-translate-y-2 ${method.glow} ${method.border}`}
              >
                <div className={`w-20 h-20 rounded-full bg-dark-slate border border-white/10 flex items-center justify-center mb-6 text-white/50 transition-colors duration-500 ${method.hoverColor}`}>
                  {method.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-wide">
                  {method.title}
                </h3>
                <p className="text-mustard-gold font-medium text-lg mb-4 truncate w-full px-4">
                  {method.value}
                </p>
                <p className="text-white/60 font-body text-sm leading-relaxed max-w-xs">
                  {method.desc}
                </p>
              </a>
            ))}
          </div>

        </section>

        {/* TECHNICAL RIDER SECTION */}
        <section className="py-20 bg-dark-slate/50 relative z-10 border-t border-white/10">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pure-white uppercase tracking-tight mb-4">
                Technical <span className="text-mustard-gold">Rider</span>
              </h2>
              <p className="text-white/70 font-body max-w-2xl mx-auto">
                Spesifikasi teknis standar untuk keperluan pertunjukan artis Music Bintang Production.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-dark-slate">
              <TechnicalTable 
                title="CHANNEL LIST" 
                data={technicalRider.channels} 
                type="channel" 
              />
              <TechnicalTable 
                title="MONITOR OUTPUT" 
                data={technicalRider.monitors} 
                type="monitor" 
              />
              <RiderEquipment equipments={technicalRider.equipments} />
            </div>
          </div>
        </section>

      </div>
      
      <CTASection />
    </PageTransition>
  );
}