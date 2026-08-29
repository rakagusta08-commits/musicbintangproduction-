'use client';

import { PageTransition } from '@/components/ui/PageTransition';
import { CTASection } from '@/components/sections/CTASection';
import { artists } from '@/data/artists';
import { music } from '@/data/music';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Play, ArrowLeft } from 'lucide-react';
import { use } from 'react';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ArtistProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { t, language } = useLanguage();
  const resolvedParams = use(params);
  
  const artist = artists.find(a => a.id === resolvedParams.slug);
  
  if (!artist) {
    notFound();
  }

  // Find all music releases for this artist
  const artistReleases = music.filter(m => m.artistId === artist.id);
  // Find releases with youtube links
  const artistVideos = artistReleases.filter(m => !!m.youtubeId);

  // Dummy News Data
  const dummyNews = [
    {
      id: 1,
      title: `${artist.name} Merilis Karya Terbaru Tahun Ini`,
    },
    {
      id: 2,
      title: `Kisah di Balik Proses Kreatif Rekaman ${artist.name}`,
    },
    {
      id: 3,
      title: `${artist.name} Bersiap Untuk Tur Promo Nasional`,
    }
  ];

  return (
    <PageTransition>
      <div className="pt-28 pb-12 bg-pure-white min-h-screen text-dark-slate">
        
        {/* Navigation / Sub-Header */}
        <div className="container mx-auto px-6 max-w-6xl mb-16 flex flex-col md:flex-row md:justify-between md:items-center border-b border-dark-slate/10 pb-6 gap-6">
          <Link href="/artis" className="inline-flex items-center gap-2 text-dark-slate/60 hover:text-logo-red transition-colors font-bold tracking-widest text-sm uppercase">
            <ArrowLeft size={16} /> {language === 'ID' ? 'Kembali' : 'Back'}
          </Link>
          <div className="flex flex-wrap gap-6 md:gap-10 font-display font-bold uppercase tracking-widest text-dark-slate">
            <a href="#about" className="hover:text-logo-red transition-colors">About</a>
            <a href="#releases" className="hover:text-logo-red transition-colors">Releases</a>
            <a href="#videos" className="hover:text-logo-red transition-colors">Videos</a>
            <a href="#news" className="hover:text-logo-red transition-colors">News</a>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section id="about" className="container mx-auto px-6 max-w-6xl mb-32 pt-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            {/* Left Image Placeholder */}
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant}
              className="w-full md:w-[45%] lg:w-[40%] shrink-0"
            >
               <div className="w-full aspect-[4/5] bg-dark-slate relative shadow-xl overflow-hidden">
                 {artist.image ? (
                   <div 
                     className="absolute inset-0 bg-cover bg-center"
                     style={{ backgroundImage: `url(${artist.image})` }}
                   />
                 ) : (
                   <>
                     {/* Placeholder Gradient / Texture */}
                     <div className="absolute inset-0 bg-gradient-to-br from-dark-slate via-dark-grey to-black" />
                     <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/images/beground.png')] bg-cover bg-center" />
                     
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-[12rem] font-black text-white/5 uppercase drop-shadow-2xl">{artist.name[0]}</span>
                     </div>
                   </>
                 )}
               </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUpVariant}
              className="flex-1 py-4"
            >
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-slate uppercase tracking-tight mb-8">
                ABOUT {artist.name}
              </h1>
              <div className="text-dark-slate/80 font-body text-lg mb-10 leading-relaxed whitespace-pre-line">
                {language === 'ID' ? artist.description.id : artist.description.en}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href={artist.social?.instagram || '#'} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-slate/5 hover:bg-dark-slate hover:text-white text-dark-slate transition-all duration-300" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href={artist.social?.youtube || '#'} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-slate/5 hover:bg-logo-red hover:text-white text-dark-slate transition-all duration-300" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href={artist.social?.spotify || '#'} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-slate/5 hover:bg-[#1DB954] hover:text-white text-dark-slate transition-all duration-300" aria-label="Spotify">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.559.42z"/></svg>
                </a>
                <a href={artist.social?.tiktok || '#'} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-slate/5 hover:bg-black hover:text-white text-dark-slate transition-all duration-300" aria-label="TikTok">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VIDEOS SECTION */}
        {artistVideos.length > 0 && (
          <section id="videos" className="container mx-auto px-6 max-w-6xl mb-32 scroll-mt-24">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-dark-slate uppercase tracking-tight mb-8">
              VIDEOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artistVideos.map((video) => (
                <a href={video.links.youtube} target="_blank" rel="noopener noreferrer" key={video.id} className="group block">
                  <div className="w-full aspect-video bg-dark-slate relative overflow-hidden mb-4 shadow-md">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                      style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg)` }} 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-logo-red text-white flex items-center justify-center shadow-xl shadow-logo-red/20">
                        <Play fill="currentColor" size={20} className="ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-dark-slate uppercase tracking-wide group-hover:text-logo-red transition-colors">
                    {video.title} (MUSIC VIDEO)
                  </h3>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* RELEASES SECTION */}
        <section id="releases" className="container mx-auto px-6 max-w-6xl mb-32 scroll-mt-24">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-dark-slate uppercase tracking-tight mb-8">
            RELEASES
          </h2>
          {artistReleases.length === 0 ? (
            <p className="text-dark-slate/50 font-body">Belum ada rilis yang dipublikasikan saat ini.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {artistReleases.map((release) => (
                <Link href={`/karya-musik/${release.id}`} key={release.id} className="group cursor-pointer block">
                  <div className="w-full aspect-square bg-dark-slate relative mb-4 shadow-md overflow-hidden">
                    {release.coverImage ? (
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url(${release.coverImage})` }}
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-slate to-black opacity-100 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          <span className="font-display text-3xl font-bold text-white/10 uppercase text-center leading-none drop-shadow-xl">{release.title[0]}</span>
                        </div>
                      </>
                    )}
                    {/* Outline glow */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-mustard-gold/40 transition-colors duration-500" />
                  </div>
                  <div className="border border-dark-slate/10 p-3 group-hover:border-dark-slate/30 transition-colors bg-pure-white">
                    <h3 className="font-display font-bold text-sm text-dark-slate uppercase tracking-wider group-hover:text-logo-red transition-colors line-clamp-1">
                      {release.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* NEWS SECTION (DUMMY) */}
        <section id="news" className="container mx-auto px-6 max-w-6xl mb-24 scroll-mt-24">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-dark-slate uppercase tracking-tight mb-8">
            NEWS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dummyNews.map((news) => (
              <div key={news.id} className="group cursor-pointer border border-dark-slate/20 bg-white">
                <div className="w-full aspect-[16/10] overflow-hidden bg-dark-slate relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-mustard-gold/30 to-logo-red/30 opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-5xl text-white/10 uppercase tracking-widest drop-shadow-xl">NEWS</span>
                  </div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-dark-slate uppercase tracking-wide group-hover:text-logo-red transition-colors line-clamp-2 leading-snug">
                    {news.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <CTASection />
    </PageTransition>
  );
}
