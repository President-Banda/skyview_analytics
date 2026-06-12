"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Images/Logo';

const links = [
  { href: '#',            label: 'Home'        },
  { href: '#services',    label: 'Services'    },
  { href: '#credentials', label: 'Credentials' },
  { href: '#team',        label: 'Team'        },
  { href: '#contact',     label: 'Contact'     },
];

const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100' : 'bg-white'
      }`}
    >
      <nav className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo — container sized to the 770:561 ≈ 1.37:1 logo ratio */}
        <a href="#" className="flex-shrink-0 w-36 h-16 relative">
          <Logo className="w-full h-full" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.35 }}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.35 }}
        >
          <a href="#contact"
            className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all">
            Get Quote
          </a>
        </motion.div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(o => !o)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle navigation">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.svg key="close" className="size-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg key="open" className="size-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map(link => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-100 mt-2">
                <a href="#contact" onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold text-center rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
