'use client';

import { music } from '@/data/music';
import { notFound } from 'next/navigation';
import { PageTransition } from '@/components/ui/PageTransition';
import Link from 'next/link';
import { ArrowLeft, Headphones } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { use } from 'react';

const buttonVariants = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } }
};

export default function SmartLinkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { language } = useLanguage();
  const resolvedParams = use(params);
  
  const item = music.find((m) => m.id === resolvedParams.slug);

  if (!item) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16 sm:p-12 overflow-hidden">
        
        {/* BLURRED BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-dark-slate opacity-85 z-10 mix-blend-multiply" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mustard-gold/15 blur-[120px] scale-125 animate-pulse" />
        </div>

        {/* BACK BUTTON */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
          <Link href={`/artis/${item.artistId}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-bold tracking-wider uppercase bg-black/40 px-3.5 py-2 rounded-full backdrop-blur-md border border-white/10">
            <ArrowLeft size={14} className="sm:w-4 sm:h-4" /> {language === 'ID' ? 'Kembali' : 'Back'}
          </Link>
        </div>

        {/* MAIN CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-sm sm:max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-3xl sm:rounded-[3rem] shadow-2xl flex flex-col items-center text-center mt-8 sm:mt-12"
        >
          {/* ALBUM ART */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="w-44 h-44 sm:w-60 sm:h-60 rounded-2xl bg-dark-slate shadow-2xl mb-6 sm:mb-8 border border-white/10 relative overflow-hidden flex items-center justify-center"
          >
            {item.coverImage ? (
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.coverImage})` }}
              />
            ) : (
              <span className="font-display text-xl sm:text-2xl font-bold text-white/20 uppercase tracking-widest leading-tight px-4 text-center">{item.title}</span>
            )}
          </motion.div>

          {/* TITLE & ARTIST */}
          <h1 className="font-display text-xl sm:text-3xl font-extrabold text-pure-white mb-1.5 uppercase tracking-wide line-clamp-2">
            {item.title}
          </h1>
          <h2 className="text-mustard-gold font-bold tracking-widest text-xs sm:text-sm uppercase mb-6 sm:mb-8">
            {item.artistName}
          </h2>

          {/* SMART LINKS */}
          <div className="w-full space-y-3 sm:space-y-3.5">
            
            {item.links.spotify && (
              <motion.a 
                href={item.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group w-full flex items-center justify-between bg-white/95 hover:bg-white text-black px-4 sm:px-6 py-3.5 sm:py-4 rounded-full font-bold shadow-lg transition-all border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#1DB954] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.559.42z"/>
                  </svg>
                  <span className="text-sm sm:text-base font-extrabold tracking-wide">Spotify</span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-black text-white px-3.5 py-1.5 rounded-full group-hover:bg-[#1DB954] transition-colors">
                  {language === 'ID' ? 'Putar' : 'Play'}
                </span>
              </motion.a>
            )}

            {item.links.appleMusic && (
              <motion.a 
                href={item.links.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group w-full flex items-center justify-between bg-white/95 hover:bg-white text-black px-4 sm:px-6 py-3.5 sm:py-4 rounded-full font-bold shadow-lg transition-all border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#FA243C] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.02.62-2.67 1.37-.56.65-1.06 1.7-0.93 2.72 1.03.08 2.07-.51 2.68-1.24z"/>
                  </svg>
                  <span className="text-sm sm:text-base font-extrabold tracking-wide">Apple Music</span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-black text-white px-3.5 py-1.5 rounded-full group-hover:bg-[#FA243C] transition-colors">
                  {language === 'ID' ? 'Buka' : 'Open'}
                </span>
              </motion.a>
            )}

            {item.links.youtube && (
              <motion.a 
                href={item.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group w-full flex items-center justify-between bg-white/95 hover:bg-white text-black px-4 sm:px-6 py-3.5 sm:py-4 rounded-full font-bold shadow-lg transition-all border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#FF0000] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-sm sm:text-base font-extrabold tracking-wide">YouTube</span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-black text-white px-3.5 py-1.5 rounded-full group-hover:bg-[#FF0000] transition-colors">
                  {language === 'ID' ? 'Tonton' : 'Watch'}
                </span>
              </motion.a>
            )}

            {item.links.joox && (
              <motion.a 
                href={item.links.joox}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group w-full flex items-center justify-between bg-white/95 hover:bg-white text-black px-4 sm:px-6 py-3.5 sm:py-4 rounded-full font-bold shadow-lg transition-all border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <Headphones size={22} className="text-[#00D06C] shrink-0" />
                  <span className="text-sm sm:text-base font-extrabold tracking-wide">JOOX</span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-black text-white px-3.5 py-1.5 rounded-full group-hover:bg-[#00D06C] transition-colors">
                  {language === 'ID' ? 'Dengar' : 'Listen'}
                </span>
              </motion.a>
            )}

          </div>

          <p className="mt-6 sm:mt-8 text-white/60 text-[11px] sm:text-xs font-body max-w-xs text-center leading-relaxed">
            {language === 'ID' ? item.description.id : item.description.en}
          </p>
          <div className="mt-6 pt-4 border-t border-white/10 w-full">
             <span className="text-[10px] text-white/30 uppercase tracking-widest">© Music Bintang Production</span>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
