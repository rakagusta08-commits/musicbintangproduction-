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
          ? "bg-dark-slate/60 backdrop-blur-md text-white pt-4 pb-3 sm:pt-5 sm:pb-4 md:py-6" 
          : "bg-dark-slate/95 backdrop-blur-md shadow-lg border-b border-white/10 text-white pt-3.5 pb-3 sm:py-3 md:py-4",
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
                ? "w-10 h-10 xs:w-11 xs:h-11 sm:w-14 sm:h-14 md:w-16 md:h-16" 
                : "w-11 h-11 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            )}
          >
            <Image 
              src="/newlogo.png" 
              alt="Music Bintang Production Logo" 
              fill
              priority
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </Link>

        {/* ALWAYS-VISIBLE HORIZONTAL NAV MENU */}
        <nav className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 flex-nowrap shrink">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-[12px] xs:text-[13px] sm:text-sm md:text-lg lg:text-xl tracking-wider sm:tracking-[0.1em] uppercase font-extrabold whitespace-nowrap transition-all py-1.5 px-1 sm:px-2 rounded hover:text-mustard-gold flex flex-col items-center",
                  isActive 
                    ? "text-mustard-gold scale-105" 
                    : "text-white/90 hover:text-white"
                )}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="block h-[2.5px] w-full mt-1 bg-mustard-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* LANGUAGE SWITCHER */}
        <div className="flex items-center shrink-0 pl-1.5 sm:pl-3 border-l border-white/15 sm:border-transparent">
          <LanguageSwitcher />
        </div>

      </div>
    </header>
  );
};
