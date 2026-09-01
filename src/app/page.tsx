'use client';

import { PageTransition } from '@/components/ui/PageTransition';
import { CTASection } from '@/components/sections/CTASection';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, Variants } from 'framer-motion';
import { artists } from '@/data/artists';
import { music } from '@/data/music';
import Link from 'next/link';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <PageTransition>
      {/* EXCLUSIVE HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-dark-slate text-pure-white pt-16 pb-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-slate/80 via-dark-slate/40 to-dark-slate z-10" />
          <div className="absolute inset-0 bg-[url('/images/beground.png')] bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 animate-[pulse_10s_ease-in-out_infinite]" />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.1 } }
          }}
          className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center"
        >
          <h1 className="font-display text-[1.85rem] xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase text-mustard-gold drop-shadow-2xl leading-tight">
            <span className="block whitespace-nowrap overflow-hidden pb-1 sm:pb-2">
              {"MUSIC BINTANG".split("").map((char, index) => (
                <motion.span 
                  key={`line1-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotate: 6 },
                    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block whitespace-nowrap overflow-hidden pt-1 sm:pt-2">
              {"PRODUCTION".split("").map((char, index) => (
                <motion.span 
                  key={`line2-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotate: 6 },
                    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
        </motion.div>
      </section>

      {/* AESTHETIC INTRO / ABOUT SECTION */}
      <section id="tentang" className="py-12 sm:py-20 md:py-28 bg-pure-white overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Studio Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden shadow-lg group max-w-sm sm:max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-dark-slate overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/studio.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="absolute inset-3 sm:inset-4 border border-white/20 rounded-xl z-10 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                <span className="bg-mustard-gold text-dark-slate font-bold px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs tracking-widest uppercase rounded-sm shadow-md">
                  Music Bintang
                </span>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="text-left"
            >
              <motion.h2 
                variants={fadeUpVariant} 
                className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-dark-slate mb-4 sm:mb-6 uppercase tracking-tight leading-tight"
              >
                {t('about.title')}
              </motion.h2>
              
              <motion.div variants={fadeUpVariant} className="mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-1.5 bg-mustard-gold rounded-full"></div>
              </motion.div>

              <motion.p 
                variants={fadeUpVariant} 
                className="text-sm sm:text-base md:text-lg font-body text-dark-slate/80 leading-relaxed whitespace-pre-line"
              >
                {t('about.description')}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LATEST RELEASES (CAROUSEL) */}
      <section className="py-12 sm:py-16 md:py-20 bg-dark-slate overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-10">
           <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-pure-white uppercase tracking-tight">
             {language === 'ID' ? 'RILISAN TERBARU' : 'LATEST RELEASES'}
           </h2>
        </div>
        
        <div className="w-full overflow-hidden pb-2 sm:pb-6 relative group">
          <motion.div 
            className="flex gap-3 sm:gap-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            style={{ animationPlayState: "inherit" }}
          >
            {[...music, ...music].map((item, i) => (
              <div 
                key={`${item.id}-${i}`} 
                className="w-44 sm:w-64 lg:w-72 flex-shrink-0 relative group/card"
              >
                <Link href={`/karya-musik/${item.id}`} className="block">
                  <div className="aspect-square bg-dark-slate overflow-hidden relative border border-white/10 rounded-xl">
                     {item.coverImage ? (
                       <div 
                         className="absolute inset-0 bg-cover bg-center group-hover/card:scale-105 transition-transform duration-700"
                         style={{ backgroundImage: `url(${item.coverImage})` }}
                       />
                     ) : (
                       <div className="absolute inset-0 bg-gradient-to-br from-mustard-gold to-logo-red opacity-80 group-hover/card:scale-105 transition-transform duration-700" />
                     )}
                     
                     <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
                        <span className="font-display text-white text-xs sm:text-base font-bold uppercase line-clamp-1">{item.title}</span>
                        <span className="text-mustard-gold font-bold uppercase tracking-widest text-[9px] sm:text-xs mt-0.5">{item.artistName}</span>
                     </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ARTIS MBP SECTION */}
      <section className="py-12 sm:py-20 md:py-28 bg-pure-white overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6"
        >
          <motion.div variants={fadeUpVariant} className="flex justify-between items-end mb-6 sm:mb-12 max-w-6xl mx-auto">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-dark-slate uppercase tracking-tight">
              {language === 'ID' ? 'ARTIS KAMI' : 'OUR ARTISTS'}
            </h2>
            <div className="w-20 sm:w-28 h-[2px] bg-mustard-gold hidden md:block"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {artists.map((artist, index) => (
              <Link href={`/artis/${artist.id}`} key={artist.id} className="group block cursor-pointer">
                <motion.div 
                  variants={fadeUpVariant} 
                  className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-dark-slate shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-slate via-dark-grey to-black opacity-100 group-hover:scale-105 transition-transform duration-500 ease-out" />
                  
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 ${index % 2 === 0 ? 'bg-mustard-gold' : 'bg-logo-red'}`} />

                  {artist.image ? (
                    <div 
                      className="absolute inset-0 bg-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ 
                        backgroundImage: `url(${artist.image})`,
                        backgroundPosition: artist.imagePosition || 'center'
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="font-display text-6xl sm:text-8xl font-black text-white/5 uppercase drop-shadow-xl">
                        {artist.name[0]}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                    <p className="text-mustard-gold font-bold tracking-widest text-[9px] sm:text-xs uppercase mb-0.5 sm:mb-1">
                      {language === 'ID' ? artist.role.id : artist.role.en}
                    </p>
                    <h3 className="font-display text-xs sm:text-base md:text-lg font-bold text-pure-white uppercase tracking-wider line-clamp-1 group-hover:text-mustard-gold transition-colors">
                      {artist.name}
                    </h3>
                  </div>
                  
                  <div className="absolute inset-0 border border-white/10 group-hover:border-mustard-gold/40 rounded-xl sm:rounded-2xl transition-colors duration-300" />
                </motion.div>
              </Link>
            ))}
          </div>
          
          <motion.div variants={fadeUpVariant} className="mt-8 sm:mt-12 text-center">
             <Link href="/artis" className="inline-block border border-dark-slate text-dark-slate px-6 sm:px-8 py-2.5 sm:py-3 font-bold uppercase tracking-wider hover:bg-dark-slate hover:text-white transition-colors text-xs sm:text-sm rounded-full">
               {language === 'ID' ? 'Lihat Semua Artis' : 'View All Artists'}
             </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <CTASection />
    </PageTransition>
  );
}
