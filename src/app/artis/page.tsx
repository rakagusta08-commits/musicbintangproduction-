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
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ArtisPage() {
  const { t, language } = useLanguage();

  return (
    <PageTransition>
      <div className="pt-20 md:pt-28 pb-12 bg-dark-slate min-h-screen text-pure-white">
        
        {/* HEADER */}
        <section className="py-12 md:py-20 container mx-auto px-4 sm:px-6 text-center max-w-5xl relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-mustard-gold/5 rounded-full blur-[100px] pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-pure-white uppercase tracking-tight mb-6 leading-tight">
              ARTIS MUSIK BINTANG PRODUCTION
            </h1>
            <div className="w-20 md:w-24 h-1.5 bg-mustard-gold mx-auto" />
          </motion.div>
        </section>

        {/* ARTISTS GRID */}
        <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-20 md:mb-32">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {artists.map((artist) => (
              <Link href={`/artis/${artist.id}`} key={artist.id} className="group block cursor-pointer h-full">
                <motion.div variants={itemVariants} className="relative w-full aspect-[3/4] bg-[#111] overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1.5">
                  
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                  
                  {/* Artist Image */}
                  {artist.image ? (
                    <div 
                      className="absolute inset-0 bg-cover group-hover:scale-105 transition-transform duration-700 z-0"
                      style={{ 
                        backgroundImage: `url(${artist.image})`,
                        backgroundPosition: artist.imagePosition || 'center'
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 bg-dark-slate">
                      <span className="font-display text-9xl font-black text-white/5 uppercase select-none">
                        {artist.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                    <h3 className="text-mustard-gold font-bold tracking-widest text-xs uppercase mb-1.5">
                      {language === 'ID' ? artist.role.id : artist.role.en}
                    </h3>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-pure-white uppercase tracking-wider mb-3 leading-tight group-hover:text-mustard-gold transition-colors">
                      {artist.name}
                    </h2>
                    
                    {/* Arrow button */}
                    <div className="flex items-center gap-2 text-pure-white font-bold uppercase tracking-widest text-xs">
                      <span className="text-white/80 group-hover:text-mustard-gold transition-colors">Lihat Profil</span>
                      <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-mustard-gold group-hover:text-mustard-gold transition-colors">
                        →
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-white/10 group-hover:border-mustard-gold/40 rounded-2xl transition-colors duration-500 pointer-events-none" />
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
