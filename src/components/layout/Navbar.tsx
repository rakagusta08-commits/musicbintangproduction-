'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const isHome = pathname === '/';
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 30);

      // Hide if scrolling down past 150px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { t } = useLanguage();

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/artis', label: 'ARTIS' },
    { href: '/karya-musik', label: t('nav.music') },
    { href: '/kontak', label: t('nav.contact') }
  ];

  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full overflow-hidden",
        isTransparent 
          ? "bg-dark-slate/40 backdrop-blur-md text-white pt-3 pb-2.5 sm:pt-4 sm:pb-3 md:py-5" 
          : "bg-dark-slate/95 backdrop-blur-md shadow-lg border-b border-white/10 text-white pt-2.5 pb-2 sm:py-2.5 md:py-3.5",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div 
            className={cn(
              "relative overflow-hidden group-hover:scale-105 transition-all duration-300 origin-left",
              isScrolled 
                ? "w-8 h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 md:w-16 md:h-16" 
                : "w-9 h-9 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-18 md:h-18"
            )}
          >
            <Image 
              src="/newlogo.png" 
              alt="Music Bintang Production Logo" 
              fill
              priority
              sizes="(max-width: 640px) 40px, (max-width: 768px) 56px, 72px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </Link>

        {/* ALWAYS-VISIBLE HORIZONTAL NAV MENU */}
        <nav className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 flex-nowrap">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-[10.5px] xs:text-[11.5px] sm:text-sm md:text-base lg:text-lg tracking-wider sm:tracking-[0.1em] uppercase font-bold whitespace-nowrap transition-all py-1 px-1 sm:px-2 rounded hover:text-mustard-gold flex flex-col items-center",
                  isActive 
                    ? "text-mustard-gold" 
                    : "text-white/85 hover:text-white"
                )}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="block h-[2px] w-full mt-0.5 bg-mustard-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
};
