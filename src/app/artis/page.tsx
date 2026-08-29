'use client';

import { PageTransition } from '@/components/ui/PageTransition';
import { CTASection } from '@/components/sections/CTASection';
import { artists } from '@/data/artists';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ArtisPage() {
  const { t, language } = useLanguage();

  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-dark-slate min-h-screen text-pure-white">
        
        {/* HEADER */}
        <section className="py-24 container mx-auto px-6 text-center max-w-5xl relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-mustard-gold/5 rounded-full blur-[120px] pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-pure-white uppercase tracking-tight mb-8 leading-tight">
              ARTIS MUSIK BINTANG PRODUCTION
            </h1>
            <div className="w-24 h-1.5 bg-mustard-gold mx-auto" />
          </motion.div>
        </section>

        {/* ARTISTS GRID */}
        <section className="container mx-auto px-6 max-w-[1400px] mb-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {artists.map((artist) => (
              <Link href={`/artis/${artist.id}`} key={artist.id} className="group block cursor-pointer h-full">
                <motion.div variants={itemVariants} className="relative w-full aspect-[3/4] bg-[#111] overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                  
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  
                  {/* Artist Image or Initial Placeholder */}
                  {artist.image ? (
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 z-0"
                      style={{ backgroundImage: `url(${artist.image})` }}
                    />
                  ) : (
                    <>
                      {/* Subtle Glow / Abstract background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-mustard-gold/10 to-logo-red/5 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 z-0" />
                      
                      {/* Initial Typography (Acts as photo placeholder) */}
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
                        <span className="font-display text-[15rem] font-black text-white/5 uppercase select-none group-hover:text-white/10 transition-colors duration-500">
                          {artist.name.charAt(0)}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                    <h3 className="text-mustard-gold font-bold tracking-widest text-[10px] uppercase mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      {language === 'ID' ? artist.role.id : artist.role.en}
                    </h3>
                    <h2 className="font-display text-3xl font-bold text-pure-white uppercase tracking-wider mb-2 leading-tight group-hover:text-mustard-gold transition-colors">
                      {artist.name}
                    </h2>
                    
                    {/* Animated arrow button */}
                    <div className="mt-6 flex items-center gap-3 text-pure-white font-bold uppercase tracking-widest text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-mustard-gold group-hover:text-mustard-gold transition-colors">
                        →
                      </div>
                      <span className="group-hover:text-mustard-gold transition-colors">Lihat Profil</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </section>

      </div>
      <CTASection />
    </PageTransition>
  );
}
