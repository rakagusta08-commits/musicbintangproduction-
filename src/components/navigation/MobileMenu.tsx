'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/artis', label: 'ARTIS' },
  { href: '/karya-musik', label: 'KARYA MUSIK' },
  { href: '/kontak', label: 'KONTAK' }
];

export const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-dark-slate flex flex-col justify-center items-center"
        >
          <nav className="flex flex-col items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`text-2xl font-display font-medium tracking-wide transition-colors ${
                    isActive ? 'text-mustard-gold' : 'text-white hover:text-pure-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};