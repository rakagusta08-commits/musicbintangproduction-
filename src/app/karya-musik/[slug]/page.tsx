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
      <div className="relative min-h-screen bg-black flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
        
        {/* BLURRED BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-slate opacity-80 z-10 mix-blend-multiply" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mustard-gold/20 blur-[150px] scale-150 animate-pulse pointer-events-none" />
        </div>

        {/* BACK BUTTON */}
        <div className="absolute top-8 left-8 z-20">
          <Link href={`/artis/${item.artistId}`} className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
            <ArrowLeft size={16} /> {language === 'ID' ? 'Kembali' : 'Back'}
          </Link>
        </div>

        {/* MAIN CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-[3rem] shadow-2xl flex flex-col items-center text-center mt-12"
        >
          {/* ALBUM ART */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-dark-slate shadow-2xl mb-8 border border-white/10 relative overflow-hidden flex items-center justify-center"
          >
            {item.coverImage ? (
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.coverImage})` }}
              />
            ) : (
              <span className="font-display text-2xl font-bold text-white/20 uppercase tracking-widest leading-tight px-4 text-center">{item.title}</span>
            )}
          </motion.div>

          {/* TITLE & ARTIST */}
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-pure-white mb-2 uppercase tracking-wide">
            {item.title}
          </h1>
          <h2 className="text-mustard-gold font-bold tracking-widest text-sm uppercase mb-8">
            {item.artistName}
          </h2>

          {/* SMART LINKS */}
          <div className="w-full space-y-4">
            
            {item.links.spotify && (
              <motion.a 
                href={item.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center bg-white text-black px-6 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Play size={20} className="w-6 h-6" />
                <span className="flex-1 text-center text-sm tracking-wide">Spotify</span>
                <div className="w-6 h-6" /> {/* Spacer to keep text centered */}
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
                className="w-full flex items-center bg-white text-black px-6 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Music size={20} className="w-6 h-6" />
                <span className="flex-1 text-center text-sm tracking-wide">Apple Music</span>
                <div className="w-6 h-6" />
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
                className="w-full flex items-center bg-white text-black px-6 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
              >
                <PlaySquare size={20} className="w-6 h-6" />
                <span className="flex-1 text-center text-sm tracking-wide">YouTube</span>
                <div className="w-6 h-6" />
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
                className="w-full flex items-center bg-white text-black px-6 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Headphones size={20} className="w-6 h-6" />
                <span className="flex-1 text-center text-sm tracking-wide">JOOX</span>
                <div className="w-6 h-6" />
              </motion.a>
            )}

          </div>

          <p className="mt-8 text-white/40 text-xs font-body max-w-xs text-center">
            {language === 'ID' ? item.description.id : item.description.en}
          </p>
          <div className="mt-8">
             <span className="text-[10px] text-white/30 uppercase tracking-widest">© Music Bintang Production</span>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
