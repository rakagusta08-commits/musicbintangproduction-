'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { LanguageSwitcher } from '../navigation/LanguageSwitcher';
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

      // Hide if scrolling down past 120px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
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
          ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white py-2 sm:py-4 md:py-6" 
          : "bg-dark-slate/95 backdrop-blur-md shadow-md border-b border-white/10 text-white py-1.5 sm:py-2.5 md:py-3",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto px-2 xs:px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-1 sm:gap-4 md:gap-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div 
            className={cn(
              "relative overflow-hidden group-hover:scale-105 transition-all duration-300 origin-left",
              isScrolled 
                ? "w-8 h-8 xs:w-9 xs:h-9 sm:w-14 sm:h-14 md:w-16 md:h-16" 
                : "w-9 h-9 xs:w-10 xs:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
            )}
          >
            <Image 
              src="/logo.png" 
              alt="Music Bintang Production Logo" 
              fill
              priority
              sizes="(max-width: 640px) 40px, (max-width: 768px) 64px, 80px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </Link>

        {/* ALWAYS-VISIBLE HORIZONTAL NAV MENU (NO HAMBURGER) */}
        <nav className="flex items-center justify-end xs:justify-center gap-1.5 xs:gap-2.5 sm:gap-5 md:gap-8 flex-nowrap shrink">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-[10px] xs:text-xs sm:text-sm md:text-lg lg:text-xl tracking-wider sm:tracking-[0.1em] uppercase font-bold whitespace-nowrap transition-all py-1 px-1 sm:px-2 rounded hover:text-mustard-gold",
                  isActive 
                    ? "text-mustard-gold" 
                    : "text-white/85 hover:text-white"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="block h-0.5 w-full mt-0.5 bg-mustard-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* LANGUAGE SWITCHER */}
        <div className="flex items-center shrink-0 pl-1 sm:pl-2 border-l border-white/10 sm:border-transparent">
          <LanguageSwitcher />
        </div>

      </div>
    </header>
  );
};
