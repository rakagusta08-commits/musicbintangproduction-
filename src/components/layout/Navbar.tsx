'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MobileMenu } from '../navigation/MobileMenu';
import { LanguageSwitcher } from '../navigation/LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isHome = pathname === '/';
  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 40);

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

  const isTransparent = isHome && !isScrolled && !isMobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent ? "bg-gradient-to-b from-black/60 to-transparent text-white py-4 md:py-6" : "bg-dark-slate/95 backdrop-blur-md shadow-md border-b border-white/10 text-white py-3",
          isHidden && !isMobileOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div 
              className={cn(
                "relative overflow-hidden group-hover:scale-105 transition-all duration-300 origin-left",
                isScrolled ? "w-12 h-12 md:w-16 md:h-16" : "w-14 h-14 md:w-20 md:h-20"
              )}
            >
              <Image 
                src="/logo.png" 
                alt="Music Bintang Production Logo" 
                fill
                priority
                sizes="(max-width: 768px) 56px, 80px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-display text-lg md:text-xl tracking-[0.1em] uppercase font-bold transition-all hover:-translate-y-0.5",
                    isActive ? "text-mustard-gold" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="block h-0.5 w-full mt-1 bg-current opacity-50" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center z-50">
            <LanguageSwitcher />
          </div>

          <button
            className="lg:hidden z-50 p-2 text-white hover:text-mustard-gold transition-colors focus:outline-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? (
              <X size={28} className="text-mustard-gold" />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
};
