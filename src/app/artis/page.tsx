'use client';

import { PageTransition } from '@/components/ui/PageTransition';
import { CTASection } from '@/components/sections/CTASection';
import { artists } from '@/data/artists';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function ArtisPage() {
  const { language } = useLanguage();

  return (
    <PageTransition>
      <div className="pt-20 md:pt-28 pb-12 bg-dark-slate min-h-screen text-pure-white">
        
        {/* HEADER */}
        <section className="py-8 sm:py-12 md:py-16 container mx-auto px-4 sm:px-6 text-center max-w-4xl relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-mustard-gold/5 rounded-full blur-[90px] pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-pure-white uppercase tracking-tight mb-4 leading-tight">
              ARTIS MUSIK BINTANG PRODUCTION
            </h1>
            <div className="w-16 md:w-20 h-1 bg-mustard-gold mx-auto" />
          </motion.div>
        </section>

        {/* ARTISTS GRID */}
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl mb-16 md:mb-24">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {artists.map((artist) => (
              <Link href={`/artis/${artist.id}`} key={artist.id} className="group block cursor-pointer h-full">
                <motion.div variants={itemVariants} className="relative w-full aspect-[3/4] bg-[#111] overflow-hidden rounded-xl sm:rounded-2xl shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                  
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                  
                  {/* Artist Image */}
                  {artist.image ? (
                    <div 
                      className="absolute inset-0 bg-cover group-hover:scale-105 transition-transform duration-500 z-0"
                      style={{ 
                        backgroundImage: `url(${artist.image})`,
                        backgroundPosition: artist.imagePosition || 'center'
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 bg-dark-slate">
                      <span className="font-display text-7xl font-black text-white/5 uppercase select-none">
                        {artist.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end z-20">
                    <h3 className="text-mustard-gold font-bold tracking-widest text-[9px] sm:text-xs uppercase mb-0.5 sm:mb-1">
                      {language === 'ID' ? artist.role.id : artist.role.en}
                    </h3>
                    <h2 className="font-display text-xs sm:text-base md:text-lg font-bold text-pure-white uppercase tracking-wider mb-2 leading-tight group-hover:text-mustard-gold transition-colors line-clamp-1">
                      {artist.name}
                    </h2>
                    
                    {/* Arrow button */}
                    <div className="flex items-center gap-1.5 text-pure-white font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                      <span className="text-white/80 group-hover:text-mustard-gold transition-colors">Lihat Profil</span>
                      <span className="text-mustard-gold">→</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-white/10 group-hover:border-mustard-gold/40 rounded-xl sm:rounded-2xl transition-colors duration-300 pointer-events-none" />
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
