'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-mustard-gold text-dark-slate shadow-md transition-all duration-300 hover:bg-white hover:scale-110",
        isVisible ? "opacity-90 hover:opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} className="sm:hidden" strokeWidth={2.5} />
      <ArrowUp size={22} className="hidden sm:block" strokeWidth={2.5} />
    </button>
  );
};
