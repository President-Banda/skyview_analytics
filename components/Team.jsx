"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Albert_Image from './Images/Albert'
import Richard_Image from './Images/Richard'
import Bright_Image from './Images/Bright'
import Chinsisi_Image from './Images/Chinsisi'

const LinkedInIcon = () => (
  <svg className="shrink-0 size-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.359V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.451H3.56V9h3.554v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="shrink-0 size-4" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
  </svg>
);

const members = [
  {
    Image: Albert_Image,
    name: "Albert Banda",
    role: "Founder · CEO / CTO",
    bio: "AWS Champion Authorized Instructor with 14 cloud & AI certifications. Architect of SkyView's technical strategy.",
    linkedIn: "https://www.linkedin.com/in/albertbanda-tech/",
    twitter: "#",
    credly: "https://www.credly.com/users/albert-banda/badges",
  },
  {
    Image: Richard_Image,
    name: "Richard Malombe",
    role: "Marketing & Branding",
    bio: "Drives SkyView's brand identity, digital marketing campaigns, and client communication strategies.",
    linkedIn: "#",
    twitter: "#",
    credly: null,
  },
  {
    Image: Bright_Image,
    name: "Bright Ngongonda",
    role: "Operations Manager",
    bio: "Oversees day-to-day operations, service delivery, and ensures clients receive world-class support.",
    linkedIn: "#",
    twitter: "#",
    credly: null,
  },
  {
    Image: Chinsisi_Image,
    name: "Chinsisi Mollen",
    role: "Finance Administrator",
    bio: "Manages SkyView's financial operations, billing systems, and administrative processes.",
    linkedIn: "#",
    twitter: "#",
    credly: null,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Team = () => (
  <section className="bg-white py-16 lg:py-20" id="team">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        className="max-w-2xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full mb-4">
          The Crew
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Meet the Team</h2>
        <p className="mt-3 text-slate-600">
          A passionate group of technologists and business professionals united by one goal —
          democratising world-class cloud and AI expertise in Malawi.
        </p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {members.map((m) => (
          <motion.div
            key={m.name}
            variants={cardVariant}
            className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
          >
            <div className="flex justify-center pt-8 pb-4 bg-slate-50">
              <div className="size-20 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                <m.Image />
              </div>
            </div>

            <div className="flex flex-col flex-1 p-5 text-center">
              <h3 className="font-bold text-slate-900">{m.name}</h3>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mt-0.5">
                {m.role}
              </p>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed flex-1">{m.bio}</p>

              <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <a href={m.linkedIn} target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-colors">
                  <LinkedInIcon />
                </a>
                <a href={m.twitter} target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors">
                  <TwitterIcon />
                </a>
                {m.credly && (
                  <a href={m.credly} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-orange-500 transition-colors text-xs font-bold leading-none pt-0.5">
                    Credly
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default Team;
