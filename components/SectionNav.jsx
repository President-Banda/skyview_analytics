"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero',        label: 'Home'        },
  { id: 'services',    label: 'Services'    },
  { id: 'credentials', label: 'Credentials' },
  { id: 'team',        label: 'Team'        },
  { id: 'contact',     label: 'Contact'     },
];

export default function SectionNav() {
  const [active,  setActive]  = useState('hero');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { threshold: [0.2, 0.5] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4"
          aria-label="Page sections"
        >
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className="group flex items-center gap-2.5"
                aria-label={`Go to ${label}`}
              >
                <span
                  className={`text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'opacity-100 text-blue-600'
                      : 'opacity-0 group-hover:opacity-100 text-slate-500'
                  }`}
                >
                  {label}
                </span>
                <motion.span
                  className={`block rounded-full flex-shrink-0 ${
                    isActive
                      ? 'bg-blue-600 ring-2 ring-blue-400/40'
                      : 'bg-slate-300 group-hover:bg-slate-400'
                  }`}
                  animate={{
                    width:  isActive ? 12 : 8,
                    height: isActive ? 12 : 8,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                />
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
