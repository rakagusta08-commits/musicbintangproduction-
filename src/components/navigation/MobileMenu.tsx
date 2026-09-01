'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/lib/LanguageContext';

export const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/artis', label: 'ARTIS' },
    { href: '/karya-musik', label: t('nav.music') },
    { href: '/kontak', label: t('nav.contact') }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-dark-slate flex flex-col justify-center items-center px-6"
        >
          <nav className="flex flex-col items-center gap-8 mb-10">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`text-2xl sm:text-3xl font-display font-bold tracking-widest uppercase transition-colors ${
                    isActive ? 'text-mustard-gold scale-105' : 'text-white/90 hover:text-mustard-gold'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-6 border-t border-white/10 w-48 flex justify-center">
            <LanguageSwitcher />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
