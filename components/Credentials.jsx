"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Albert_Image from './Images/Albert'

const certifications = [
  // ── AWS Champion / Professional / Specialty ──
  { name: "Champion — Authorized Instructor",              org: "Amazon Web Services", level: "Champion",      tier: "amber" },
  { name: "AWS Certified Solutions Architect – Professional", org: "Amazon Web Services", level: "Professional", tier: "amber" },
  { name: "AWS Certified Machine Learning – Specialty",    org: "Amazon Web Services", level: "Specialty",     tier: "amber" },
  { name: "AI/ML Guide",                                   org: "Amazon Web Services", level: "Advanced",      tier: "amber" },
  { name: "AAI Industry Cohort: Automotive",               org: "Amazon Web Services", level: "Advanced",      tier: "amber" },
  // ── AWS Associate ──
  { name: "AWS Certified Solutions Architect – Associate", org: "Amazon Web Services", level: "Associate",     tier: "blue"  },
  { name: "AWS Certified Developer – Associate",           org: "Amazon Web Services", level: "Associate",     tier: "blue"  },
  { name: "AWS Certified SysOps Administrator – Associate",org: "Amazon Web Services", level: "Associate",     tier: "blue"  },
  { name: "AWS Certified Machine Learning Engineer – Associate", org: "Amazon Web Services", level: "Associate", tier: "blue" },
  // ── AWS Foundational ──
  { name: "AWS Certified AI Practitioner",                 org: "Amazon Web Services", level: "Foundational",  tier: "green" },
  { name: "AWS Certified Cloud Practitioner",              org: "Amazon Web Services", level: "Foundational",  tier: "green" },
  { name: "AWS re/Start Graduate",                         org: "Amazon Web Services", level: "Graduate",      tier: "green" },
  // ── Linux Foundation ──
  { name: "KCNA: Kubernetes and Cloud Native Associate",   org: "The Linux Foundation", level: "Associate",   tier: "violet"},
  { name: "LFS250: Kubernetes and Cloud Native Essentials",org: "The Linux Foundation", level: "Course",      tier: "violet"},
];

const palette = {
  amber:  { card: "bg-amber-50 border-amber-200",  badge: "bg-amber-100 text-amber-700",  org: "text-amber-600"  },
  blue:   { card: "bg-blue-50 border-blue-200",    badge: "bg-blue-100 text-blue-700",    org: "text-blue-600"   },
  green:  { card: "bg-emerald-50 border-emerald-200", badge: "bg-emerald-100 text-emerald-700", org: "text-emerald-600" },
  violet: { card: "bg-violet-50 border-violet-200",badge: "bg-violet-100 text-violet-700",org: "text-violet-600" },
};

const AwsLogo = () => (
  <svg viewBox="0 0 60 36" fill="none" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1 14.4c0 .7.1 1.3.2 1.7.2.4.4.9.7 1.4.1.2.2.3.2.5 0 .2-.1.4-.4.6l-1.2.8c-.2.1-.4.2-.5.2-.2 0-.4-.1-.6-.3-.3-.3-.5-.7-.7-1-.2-.4-.4-.8-.6-1.3-1.5 1.7-3.3 2.6-5.5 2.6-1.6 0-2.8-.4-3.7-1.3-.9-.9-1.4-2.1-1.4-3.5 0-1.6.6-2.8 1.7-3.8 1.1-.9 2.6-1.4 4.5-1.4.6 0 1.3.1 2 .2.7.1 1.4.3 2.2.5V9.6c0-1.3-.3-2.3-.8-2.8-.6-.5-1.6-.8-2.9-.8-.6 0-1.3.1-2 .3-.7.2-1.4.4-2 .7-.3.1-.5.2-.6.3-.1 0-.2.1-.3.1-.3 0-.4-.2-.4-.6V5.9c0-.3 0-.5.1-.6.1-.1.3-.3.6-.4.6-.3 1.4-.6 2.2-.8.9-.2 1.8-.3 2.8-.3 2.1 0 3.7.5 4.7 1.5 1 1 1.5 2.5 1.5 4.5v5.6zm-7.6 2.9c.6 0 1.2-.1 1.9-.4.7-.3 1.3-.7 1.8-1.4.3-.4.5-.8.6-1.3.1-.5.2-1 .2-1.7v-.8c-.5-.1-1.1-.2-1.7-.3-.6-.1-1.1-.1-1.7-.1-1.2 0-2.1.2-2.7.7-.6.5-.9 1.1-.9 2 0 .8.2 1.4.6 1.8.4.4 1 .5 1.9.5zm14.6 1.9c-.3 0-.5-.1-.7-.2-.2-.2-.3-.4-.4-.8L20 7.4c-.1-.4-.2-.7-.2-.9 0-.4.2-.6.6-.6h2.2c.4 0 .6.1.7.2.2.2.3.4.4.8l2.3 9.2 2.2-9.2c.1-.4.2-.6.4-.8.2-.2.4-.2.8-.2h1.8c.4 0 .6.1.8.2.2.2.3.4.4.8l2.2 9.3 2.4-9.3c.1-.4.2-.6.4-.8.2-.2.5-.2.7-.2h2.1c.4 0 .6.2.6.6 0 .1 0 .2-.1.4l-.1.5-3.5 10.8c-.1.4-.2.6-.4.8-.2.2-.4.2-.7.2h-1.9c-.4 0-.6-.1-.8-.2-.2-.2-.3-.4-.4-.8l-2.2-9.1-2.2 9.1c-.1.4-.2.6-.4.8-.2.2-.4.2-.8.2h-1.9zm18.8.4c-1.2 0-2.3-.2-3.3-.7-1-.5-1.7-1.1-2.1-1.9-.1-.2-.2-.4-.2-.5 0-.3.2-.5.6-.5h2.2c.2 0 .4.1.5.3.4.4.8.7 1.3.9.5.2 1 .3 1.6.3.9 0 1.6-.2 2.1-.5.5-.4.8-.9.8-1.5 0-.5-.2-.9-.5-1.2-.3-.3-.9-.5-1.7-.7l-2.5-.6c-1.3-.3-2.2-.8-2.8-1.6-.6-.7-.9-1.6-.9-2.6 0-.8.2-1.5.7-2.1.5-.6 1.1-1.1 1.9-1.4.8-.3 1.7-.5 2.7-.5 1.1 0 2.1.2 2.9.6.8.4 1.5.9 1.9 1.5.2.3.3.6.3.8 0 .3-.2.5-.6.5h-2c-.2 0-.4-.1-.5-.2-.3-.3-.6-.6-1-.7-.4-.2-.9-.3-1.5-.3-.8 0-1.4.2-1.9.5-.5.3-.7.8-.7 1.4 0 .5.2.9.5 1.2.3.3.9.5 1.8.7l2.4.6c1.3.3 2.2.8 2.8 1.5.6.7.9 1.6.9 2.7 0 .8-.2 1.6-.7 2.2-.5.6-1.2 1.1-2.1 1.4-.9.3-1.9.5-3 .5z" fill="#FF9900"/>
  </svg>
);

const LinuxFoundationBadge = () => (
  <span className="inline-flex items-center justify-center h-5 w-7 rounded bg-[#003E77] text-white text-[9px] font-bold tracking-tight">
    LF
  </span>
);

const certVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.45, ease: 'easeOut' } },
};

const Credentials = () => (
  <section className="bg-slate-50 py-16 lg:py-20" id="credentials">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        className="max-w-3xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full mb-4">
          Leadership Credentials
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
          Expertise You Can Trust
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Our CEO/CTO holds <strong className="text-slate-900">14 industry-recognised certifications</strong> from
          Amazon Web Services and the Linux Foundation — making SkyView Analytics one of the most
          credentialed technology firms in Malawi.
        </p>
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15 }}
      >
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-6">
          <div className="flex-shrink-0">
            <Albert_Image />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Albert Banda</h3>
            <p className="text-sm font-semibold text-blue-600 mt-0.5">Founder · CEO / CTO</p>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              AWS Champion Authorized Instructor · Solutions Architect Professional ·
              Machine Learning Specialist · Kubernetes &amp; Cloud Native
            </p>
            <div className="mt-3 flex gap-3">
              <a href="https://www.credly.com/users/albert-banda/badges" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline">
                <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                </svg>
                Credly Profile
              </a>
              <a href="https://www.linkedin.com/in/albertbanda-tech/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                <svg className="size-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.359V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.451H3.56V9h3.554v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      >
        {certifications.map((cert, i) => {
          const c = palette[cert.tier];
          return (
            <motion.div
              key={i}
              variants={certVariant}
              className={`${c.card} border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex-shrink-0 pt-0.5">
                  {cert.org === "Amazon Web Services" ? <AwsLogo /> : <LinuxFoundationBadge />}
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${c.badge}`}>
                  {cert.level}
                </span>
              </div>
              <p className="text-sm font-bold text-slate-800 leading-snug">{cert.name}</p>
              <p className={`text-xs mt-1.5 font-medium ${c.org}`}>{cert.org}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-10 text-xs font-medium text-slate-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-amber-300 border border-amber-500 inline-block" />
          AWS Professional / Specialty
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-blue-300 border border-blue-500 inline-block" />
          AWS Associate
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-emerald-300 border border-emerald-500 inline-block" />
          AWS Foundational
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-violet-300 border border-violet-500 inline-block" />
          Linux Foundation
        </span>
      </motion.div>

    </div>
  </section>
);

export default Credentials;
