'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

export const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-dark-slate text-center border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-12 text-pure-white uppercase tracking-widest text-center">
            {language === 'ID' ? 'DENGARKAN KARYA KAMI DI' : 'LISTEN TO OUR RELEASES ON'}
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {/* --- MUSIC PLATFORMS (LEFT) --- */}
            <div className="flex items-center gap-6 md:gap-8">
              {/* Spotify */}
              <a href="https://open.spotify.com/intl-id/artist/6wBWpY55y17pPZePgn8C43" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#1DB954] transition-all duration-300 transform hover:scale-110" aria-label="Spotify">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.559.42z"/></svg>
              </a>
              
              {/* Apple Music */}
              <a href="#" className="text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Apple Music">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M14.542 3.013c.801-.96 1.336-2.28 1.186-3.606-1.149.048-2.589.771-3.411 1.73-.733.844-1.36 2.215-1.182 3.491 1.298.102 2.607-.638 3.407-1.615zM15.53 4.148c-1.897-.042-3.568 1.127-4.502 1.127-.93 0-2.327-1.076-3.906-1.045-2.052.03-3.953 1.196-5.006 3.037-2.138 3.714-.545 9.206 1.535 12.217 1.024 1.48 2.227 3.144 3.82 3.084 1.542-.06 2.132-.99 3.993-.99 1.85 0 2.393.99 3.99.96 1.637-.03 2.66-1.503 3.676-2.986 1.171-1.714 1.653-3.376 1.677-3.46-.037-.015-3.243-1.246-3.28-4.957-.03-3.107 2.535-4.606 2.656-4.678-1.455-2.128-3.71-2.42-4.52-2.47-1.46-.174-3.132.162-3.132.162z"/></svg>
              </a>
              
              {/* JOOX */}
              <a href="https://www.joox.com/id/search/BINTANG%20PUTRA%20SUGIATNO" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#1DDF73] transition-all duration-300 transform hover:scale-110 font-display font-black text-4xl md:text-5xl tracking-tighter" aria-label="Joox">
                JOOX
              </a>

              {/* YouTube Music */}
              <a href="https://music.youtube.com/search?q=BINTANG+PUTRA+SUGIATNO" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF0000] transition-all duration-300 transform hover:scale-110" aria-label="YouTube Music">
                <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              </a>
            </div>
            
            {/* --- DIVIDER --- */}
            <div className="w-[1px] h-10 bg-white/10 hidden lg:block mx-4"></div>
            
            {/* --- SOCIAL MEDIA (RIGHT) --- */}
            <div className="flex items-center gap-6 md:gap-8">
              {/* YouTube */}
              <a href="https://www.youtube.com/@MusicBintangProduction" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FF0000] transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                 <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" className="group-hover:fill-white"></polygon></svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/musicbintang_production/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <svg className="w-[34px] h-[34px] md:w-[42px] md:h-[42px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/search?q=music%20bintang%20production&t=1787960975239" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="TikTok">
                 <svg className="w-[34px] h-[34px] md:w-[42px] md:h-[42px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <svg className="w-[34px] h-[34px] md:w-[42px] md:h-[42px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>

              {/* Twitter / X */}
              <a href="#" className="text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                <svg className="w-[34px] h-[34px] md:w-[42px] md:h-[42px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};