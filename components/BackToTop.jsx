"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.5, y: 16 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{    opacity: 0, scale: 0.5, y: 16 }}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{   scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="fixed bottom-8 right-8 z-50 size-12 rounded-full bg-blue-600 text-white
            shadow-lg shadow-blue-600/30 flex items-center justify-center
            hover:bg-blue-700 focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label="Back to top"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
