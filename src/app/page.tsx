'use client';

import { PageTransition } from '@/components/ui/PageTransition';
import { CTASection } from '@/components/sections/CTASection';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { services } from '@/data/services';
import { Service } from '@/types';
import { artists } from '@/data/artists';
import { music } from '@/data/music';
import { X, Music, Users, Radio, Lightbulb } from 'lucide-react';
import Link from 'next/link';
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function Home() {
  const { t, language } = useLanguage();
  const [selectedFocus, setSelectedFocus] = useState<Service | null>(null);

  return (
    <PageTransition>
      {/* EXCLUSIVE HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-slate text-pure-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-slate/80 via-transparent to-dark-slate z-10" />
          <div className="absolute inset-0 bg-[url('/images/beground.png')] bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 animate-[pulse_10s_ease-in-out_infinite]" />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
          }}
          className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter uppercase text-mustard-gold drop-shadow-2xl">
            <span className="block overflow-hidden pb-2">
              {"MUSIC BINTANG".split("").map((char, index) => (
                <motion.span 
                  key={`line1-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 100, rotate: 10 },
                    visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden pt-2">
              {"PRODUCTION".split("").map((char, index) => (
                <motion.span 
                  key={`line2-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 100, rotate: 10 },
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
      <section id="tentang" className="py-32 md:py-48 bg-pure-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left: Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-dark-slate overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/studio.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Optional aesthetic frame/overlay */}
              <div className="absolute inset-4 border border-white/20 rounded-xl z-10 pointer-events-none" />
              
              {/* Label */}
              <div className="absolute bottom-6 left-6 z-20">
                <span className="bg-mustard-gold text-dark-slate font-bold px-4 py-2 text-xs tracking-widest uppercase rounded-sm">
                  Music Bintang
                </span>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-left"
            >
              <motion.h2 
                variants={fadeUpVariant} 
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-slate mb-10 uppercase tracking-tight leading-tight"
              >
                {t('about.title')}
              </motion.h2>
              
              <motion.div variants={fadeUpVariant} className="mb-10">
                <div className="w-20 h-1.5 bg-mustard-gold rounded-full"></div>
              </motion.div>

              <motion.p 
                variants={fadeUpVariant} 
                className="text-lg md:text-xl font-body text-dark-slate/80 leading-loose whitespace-pre-line"
              >
                {t('about.description')}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* LATEST RELEASES (CAROUSEL) */}
      <section className="py-24 bg-dark-slate overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 mb-12">
           <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pure-white uppercase tracking-tight">
             {language === 'ID' ? 'RILISAN TERBARU' : 'LATEST RELEASES'}
           </h2>
        </div>
        
        {/* Auto Scrolling Marquee Container */}
        <div className="w-full overflow-hidden pb-8 relative group">
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            style={{ 
              // Pause on hover
              animationPlayState: "inherit" 
            }}
          >
            {[...music, ...music].map((item, i) => (
              <div 
                key={`${item.id}-${i}`} 
                className="w-72 sm:w-80 lg:w-96 flex-shrink-0 relative group/card"
              >
                <Link href={`/karya-musik/${item.id}`} className="block">
                  <div className="aspect-square bg-dark-slate overflow-hidden relative border border-black/5">
                     {/* Album Art */}
                     {item.coverImage ? (
                       <div 
                         className="absolute inset-0 bg-cover bg-center group-hover/card:scale-105 transition-transform duration-700"
                         style={{ backgroundImage: `url(${item.coverImage})` }}
                       />
                     ) : (
                       <div className="absolute inset-0 bg-gradient-to-br from-mustard-gold to-logo-red opacity-80 group-hover/card:scale-105 transition-transform duration-700" />
                     )}
                     
                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black/50 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10">
                        <span className="font-display text-white text-3xl font-bold uppercase">{item.title}</span>
                        <span className="text-white/80 font-bold uppercase tracking-widest text-sm mt-2">{item.artistName}</span>
                     </div>
                     {/* Temporary cover title (only if no image) */}
                     <div className="absolute inset-0 flex items-center justify-center p-6 group-hover/card:opacity-0 transition-opacity duration-300">
                        {!item.coverImage && (
                          <span className="font-display text-white text-4xl lg:text-5xl font-extrabold uppercase text-center drop-shadow-2xl mix-blend-overlay">{item.title}</span>
                        )}
                     </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ARTIS MBP SECTION */}
      <section className="py-32 bg-pure-white overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.div variants={fadeUpVariant} className="flex justify-between items-end mb-16 max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark-slate uppercase tracking-tight">
              {language === 'ID' ? 'ARTIS KAMI' : 'OUR ARTISTS'}
            </h2>
            <div className="w-32 h-[2px] bg-mustard-gold hidden md:block"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
            {artists.map((artist, index) => (
              <Link href={`/artis/${artist.id}`} key={artist.id} className="group block cursor-pointer">
                <motion.div 
                  variants={fadeUpVariant} 
                  className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-dark-slate shadow-lg hover:shadow-2xl hover:shadow-mustard-gold/20 transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Modern Abstract/Gradient Background (Placeholder for future photos) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-slate via-dark-grey to-black opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out" />
                  
                  {/* Subtle noise/texture overlay for a premium feel */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/images/beground.png')] bg-cover bg-center" />
                  
                  {/* Dynamic Color Accent based on index */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 ${index % 2 === 0 ? 'bg-mustard-gold' : 'bg-logo-red'}`} />
                  <div className={`absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 ${index % 2 !== 0 ? 'bg-mustard-gold' : 'bg-logo-red'}`} />

                  {/* Artist Image or Initial Placeholder */}
                  {artist.image ? (
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${artist.image})` }}
                    />
                  ) : (
                    <>
                      {/* Placeholder Pattern */}
                      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-[url('/images/beground.png')] bg-cover bg-center mix-blend-overlay" />
                      
                      {/* Large Initial (Acts as artwork) */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-display text-8xl md:text-9xl font-black text-white/5 uppercase drop-shadow-xl group-hover:text-white/10 group-hover:scale-110 transition-all duration-500">
                          {artist.name[0]}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Sleek Content Overlay at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent h-1/2">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-display text-lg md:text-xl font-bold text-pure-white uppercase tracking-wider mb-1 line-clamp-2">
                        {artist.name}
                      </h3>
                      <p className="text-mustard-gold font-bold tracking-widest text-[10px] md:text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {language === 'ID' ? artist.role.id : artist.role.en}
                      </p>
                    </div>
                  </div>
                  
                  {/* Outline glow effect on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-mustard-gold/30 rounded-xl transition-colors duration-500" />
                </motion.div>
              </Link>
            ))}
          </div>
          
          <motion.div variants={fadeUpVariant} className="mt-16 text-center">
             <Link href="/artis" className="inline-block border-2 border-dark-slate text-dark-slate px-10 py-4 font-bold uppercase tracking-widest hover:bg-dark-slate hover:text-white transition-colors">
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
