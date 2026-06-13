"use client";
import { useEffect, useRef } from 'react';
import {
  motion,
  useScroll, useTransform,
  useMotionValue, useSpring,
  animate, useInView,
  useMotionTemplate,
} from 'framer-motion';
import HomeImage from './Images/HomeImage';

// ── Animated counter ────────────────────────────────────────────────────────
function Counter({ to, suffix = '', duration = 1.4 }) {
  const wrapRef  = useRef(null);
  const nodeRef  = useRef(null);
  const isInView = useInView(wrapRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const node = nodeRef.current;
    const ctrl = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate(v) { if (node) node.textContent = Math.floor(v) + suffix; },
    });
    return () => ctrl.stop();
  }, [isInView, to, suffix, duration]);

  return (
    <span ref={wrapRef}>
      <span ref={nodeRef}>0{suffix}</span>
    </span>
  );
}

// ── Magnetic CTA button ──────────────────────────────────────────────────────
function MagneticButton({ href, children, primary = false }) {
  const ref = useRef(null);
  const x   = useSpring(0, { stiffness: 350, damping: 22 });
  const y   = useSpring(0, { stiffness: 350, damping: 22 });

  function onMouseMove(e) {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width  / 2) * 0.38);
    y.set((e.clientY - r.top  - r.height / 2) * 0.38);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={
        primary
          ? 'inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors'
          : 'inline-flex items-center gap-2 px-6 py-3 border border-slate-200 bg-white text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 hover:border-blue-300 transition-all'
      }
    >
      {children}
    </motion.a>
  );
}

// ── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const statVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'backOut' } },
};

// ─────────────────────────────────────────────────────────────────────────────
const Header = () => {
  // Parallax: hero image drifts up 60 px over the first 600 px of scroll
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, -60]);

  // Cursor spotlight on the hero section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotBg = useMotionTemplate`radial-gradient(520px at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.07), transparent 80%)`;

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
      onMouseMove={onMouseMove}
    >
      {/* Cursor spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{ background: spotBg }}
      />

      {/* Ambient gradient blobs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-blue-100 opacity-60 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.75, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-indigo-100 opacity-40 blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.55, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Left column ─────────────────────────────────────────────── */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="size-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                Cloud · AI · IT Services — Est. 2021, Malawi
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl lg:leading-tight">
              Cloud, AI &amp; IT Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Your Digital Future
              </span>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="mt-5 text-lg text-slate-600 leading-relaxed">
              SkyView Analytics Center delivers enterprise-grade cloud hosting, AI/ML
              infrastructure, and expert-led technical training — empowering businesses
              and professionals across Malawi to thrive in the digital economy.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="#services" primary>
                Explore Services
                <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </MagneticButton>
              <MagneticButton href="#credentials">
                View Credentials
              </MagneticButton>
            </motion.div>

            {/* Stats bar with animated counters */}
            <motion.div
              variants={stagger}
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-8 border-t border-gray-100"
            >
              {[
                { counter: true,  to: 14,   suffix: '+', label: ['AWS & Cloud', 'Certifications'] },
                { counter: true,  to: 20,   suffix: '+', label: ['Course', 'Deliveries'] },
                { counter: true,  to: 1,    suffix: '',  label: ['Client', 'Certification'] },
                { counter: true,  to: 2021, suffix: '',  label: ['Founded in', 'Lilongwe, Malawi'] },
                { counter: false, text: 'AWS',           label: ['Champion', 'Authorized Instructor'], blue: true },
              ].map((stat, i) => (
                <motion.div key={i} variants={statVariant}>
                  <p className={`text-3xl font-extrabold ${stat.blue ? 'text-blue-600' : 'text-slate-900'}`}>
                    {stat.counter
                      ? <Counter to={stat.to} suffix={stat.suffix} />
                      : stat.text}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {stat.label[0]}<br />{stat.label[1]}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column — parallax image ─────────────────────────── */}
          <motion.div
            className="relative ms-4"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-blue-100 via-white/0 to-indigo-50
              rounded-2xl mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6" />
            <HomeImage />
          </motion.div>
        </div>

        {/* Trusted-by strip */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center mb-5">
            Trusted by
          </p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 opacity-50"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 1 } } }}
          >
            {['Zakudimba', 'Cropcare Malawi', 'WishVibe', 'Auxano Farms'].map((name, i) => (
              <motion.span
                key={name}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="text-base font-bold text-slate-600"
              >
                {name}
                {i < 3 && <span className="text-gray-300 text-2xl select-none ml-8">·</span>}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
