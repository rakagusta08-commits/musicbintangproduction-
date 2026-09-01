'use client';

import { music } from '@/data/music';
import { notFound } from 'next/navigation';
import { PageTransition } from '@/components/ui/PageTransition';
import Link from 'next/link';
import { Play, Music, PlaySquare, ArrowLeft, Headphones } from 'lucide-react';
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
          <div className="absolute inset-0 bg-dark-slate opacity-80 z-10 mix-blend-multiply" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mustard-gold/20 blur-[120px] scale-125 animate-pulse" />
        </div>

        {/* BACK BUTTON */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
          <Link href={`/artis/${item.artistId}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-bold tracking-wider uppercase bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md border border-white/10">
            <ArrowLeft size={14} className="sm:w-4 sm:h-4" /> {language === 'ID' ? 'Kembali' : 'Back'}
          </Link>
        </div>

        {/* MAIN CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full max-w-sm sm:max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-3xl sm:rounded-[3rem] shadow-2xl flex flex-col items-center text-center mt-8 sm:mt-12"
        >
          {/* ALBUM ART */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-2xl bg-dark-slate shadow-xl mb-6 sm:mb-8 border border-white/10 relative overflow-hidden flex items-center justify-center"
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
          <div className="w-full space-y-3 sm:space-y-4">
            
            {item.links.spotify && (
              <motion.a 
                href={item.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center bg-white text-black px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold shadow-md hover:bg-gray-100 transition-colors"
              >
                <Play size={18} className="sm:w-5 sm:h-5 shrink-0" />
                <span className="flex-1 text-center text-xs sm:text-sm tracking-wide">Spotify</span>
                <div className="w-5 h-5 shrink-0" />
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
                className="w-full flex items-center bg-white text-black px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold shadow-md hover:bg-gray-100 transition-colors"
              >
                <Music size={18} className="sm:w-5 sm:h-5 shrink-0" />
                <span className="flex-1 text-center text-xs sm:text-sm tracking-wide">Apple Music</span>
                <div className="w-5 h-5 shrink-0" />
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
                className="w-full flex items-center bg-white text-black px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold shadow-md hover:bg-gray-100 transition-colors"
              >
                <PlaySquare size={18} className="sm:w-5 sm:h-5 shrink-0" />
                <span className="flex-1 text-center text-xs sm:text-sm tracking-wide">YouTube</span>
                <div className="w-5 h-5 shrink-0" />
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
                className="w-full flex items-center bg-white text-black px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold shadow-md hover:bg-gray-100 transition-colors"
              >
                <Headphones size={18} className="sm:w-5 sm:h-5 shrink-0" />
                <span className="flex-1 text-center text-xs sm:text-sm tracking-wide">JOOX</span>
                <div className="w-5 h-5 shrink-0" />
              </motion.a>
            )}

          </div>

          <p className="mt-6 sm:mt-8 text-white/50 text-[11px] sm:text-xs font-body max-w-xs text-center leading-relaxed">
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
