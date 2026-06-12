"use client";
import { motion } from 'framer-motion';
import HomeImage from './Images/HomeImage';

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

const Header = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Gradient blobs */}
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

          {/* ── Left column ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Company chip */}
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
              SkyView Analytics Center delivers enterprise-grade cloud hosting, AI/ML infrastructure,
              and expert-led technical training — empowering businesses and professionals
              across Malawi to thrive in the digital economy.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all">
                Explore Services
                <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#credentials"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 bg-white text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 hover:border-blue-300 transition-all">
                View Credentials
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              variants={stagger}
              className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-gray-100"
            >
              {[
                { value: '14+',  label: ['AWS & Cloud', 'Certifications'] },
                { value: '2021', label: ['Founded in', 'Lilongwe, Malawi'] },
                { value: 'AWS',  label: ['Champion', 'Authorized Instructor'], blue: true },
              ].map(stat => (
                <motion.div key={stat.value} variants={statVariant}>
                  <p className={`text-3xl font-extrabold ${stat.blue ? 'text-blue-600' : 'text-slate-900'}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {stat.label[0]}<br />{stat.label[1]}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            className="relative ms-4"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-blue-100 via-white/0 to-indigo-50 rounded-2xl mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6" />
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
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <span className="text-base font-bold text-slate-600">Zakudimba</span>
            <span className="text-gray-300 text-2xl select-none">·</span>
            <span className="text-base font-bold text-slate-600">Cropcare Malawi</span>
            <span className="text-gray-300 text-2xl select-none">·</span>
            <span className="text-base font-bold text-slate-600">Growing Every Day</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
