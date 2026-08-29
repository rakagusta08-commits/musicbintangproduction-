'use client';

import { PageTransition } from '@/components/ui/PageTransition';
import { CTASection } from '@/components/sections/CTASection';
import { music } from '@/data/music';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function KaryaMusikPage() {
  const { t, language } = useLanguage();
  
  const releasesRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  
  const isHoveredReleases = useRef(false);
  const isHoveredVideos = useRef(false);

  useEffect(() => {
    let animationId: number;

    const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, isHovered: boolean) => {
      if (ref.current && !isHovered) {
        ref.current.scrollLeft += 1.5; // adjust speed here
        
        // If we've scrolled past half the content (the first set of duplicated items),
        // reset scroll position to 0 seamlessly.
        if (ref.current.scrollLeft >= ref.current.scrollWidth / 2) {
          ref.current.scrollLeft = 0;
        }
      }
    };

    const animate = () => {
      scrollContainer(releasesRef, isHoveredReleases.current);
      scrollContainer(videosRef, isHoveredVideos.current);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate items to create a seamless infinite scrolling effect
  const duplicatedMusic = [...music, ...music];

  return (
    <PageTransition>
      <div className="pt-24 pb-0 bg-white text-black min-h-screen">
        
        <section className="py-20 md:py-32 container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
            {t('music.page.title')}
          </h1>
        </section>

        {/* LATEST RELEASES (CAROUSEL) */}
        <section className="py-12 border-t border-black/10">
          <div className="container mx-auto px-6 mb-8">
             <h2 className="font-display text-3xl font-extrabold text-black uppercase tracking-tight">
               {language === 'ID' ? 'RILISAN TERBARU' : 'LATEST RELEASES'}
             </h2>
          </div>
          <div 
            ref={releasesRef}
            className="w-full overflow-x-auto scrollbar-hide pb-8 pl-6 md:pl-[calc((100vw-72rem)/2+1.5rem)] cursor-pointer"
            onMouseEnter={() => isHoveredReleases.current = true}
            onMouseLeave={() => isHoveredReleases.current = false}
            onTouchStart={() => isHoveredReleases.current = true}
            onTouchEnd={() => isHoveredReleases.current = false}
          >
            <div className="flex gap-6 w-max pr-6">
              {duplicatedMusic.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % music.length) * 0.1, duration: 0.5 }}
                  key={`release-${item.id}-${i}`} 
                  className="w-64 sm:w-72 lg:w-80 flex-shrink-0 group relative"
                >
                  <Link href={`/karya-musik/${item.id}`} className="block">
                    <div className="aspect-square bg-gray-200 overflow-hidden relative shadow-md">
                       {item.coverImage ? (
                         <div 
                           className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                           style={{ backgroundImage: `url(${item.coverImage})` }}
                         />
                       ) : (
                         <div className="absolute inset-0 bg-gradient-to-br from-mustard-gold to-logo-red opacity-80 group-hover:scale-105 transition-transform duration-700" />
                       )}
                       <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-display text-white text-2xl font-bold uppercase">{item.title}</span>
                          <span className="text-white/80 font-bold uppercase tracking-widest text-xs mt-2">{item.artistName}</span>
                       </div>
                       <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:opacity-0 transition-opacity duration-300">
                          {!item.coverImage && (
                            <span className="font-display text-white text-3xl font-extrabold uppercase text-center drop-shadow-xl mix-blend-overlay">{item.title}</span>
                          )}
                       </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST VIDEOS (CAROUSEL) */}
        <section className="py-12 border-t border-black/10">
          <div className="container mx-auto px-6 mb-8">
             <h2 className="font-display text-3xl font-extrabold text-black uppercase tracking-tight">
               {language === 'ID' ? 'VIDEO TERBARU' : 'LATEST VIDEOS'}
             </h2>
          </div>
          <div 
            ref={videosRef}
            className="w-full overflow-x-auto scrollbar-hide pb-8 pl-6 md:pl-[calc((100vw-72rem)/2+1.5rem)] cursor-pointer"
            onMouseEnter={() => isHoveredVideos.current = true}
            onMouseLeave={() => isHoveredVideos.current = false}
            onTouchStart={() => isHoveredVideos.current = true}
            onTouchEnd={() => isHoveredVideos.current = false}
          >
            <div className="flex gap-6 w-max pr-6">
              {duplicatedMusic.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % music.length) * 0.1, duration: 0.5 }}
                  key={`video-${item.id}-${i}`} 
                  className="w-80 sm:w-96 lg:w-[400px] flex-shrink-0 group relative"
                >
                  <a href={item.links.youtube || '#'} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="aspect-video bg-gray-900 overflow-hidden relative shadow-md">
                       {item.youtubeId ? (
                         <div 
                           className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                           style={{ backgroundImage: `url(https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg)` }} 
                         />
                       ) : (
                         <div className="absolute inset-0 bg-dark-slate opacity-80 group-hover:scale-105 transition-transform duration-700" />
                       )}
                       {/* Dark overlay for readability */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                       
                       <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-3">
                             <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                          </div>
                       </div>
                       <div className="absolute bottom-4 left-4 right-4 z-10">
                          <span className="font-display text-white text-xl font-bold uppercase drop-shadow-md">{item.title} - Music Video</span>
                       </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <CTASection />
    </PageTransition>
  );
}