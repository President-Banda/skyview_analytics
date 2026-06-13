"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Chimwemwe_Image from './Images/Chimwemwe'
import Dennis_Image    from './Images/Dennis'
import MosesAvatar     from './Images/Moses'
import Zakudimba_Logo  from './Images/Zakudimba'
import CropCare        from './Images/CropCare'
import WishVibeLogo    from './Images/WishVibe'

const StarIcon = () => (
  <svg className="size-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: 'easeOut' } },
};

const testimonials = [
  {
    stars: 5,
    Logo: CropCare,
    quote: "What I needed was simple — an endpoint with backend code and an underlying database, no management interface, no configuration and no emails. All I did was invite the team to the repo and they set it up for me in a few hours, fully functional.",
    Avatar: Chimwemwe_Image,
    name: "Chimwemwe Vinkhumbo",
    role: "Mobile App Developer · Cropcare Malawi",
    rating: "4.8",
  },
  {
    stars: 5,
    Logo: Zakudimba_Logo,
    quote: "Switched from my previous hosting provider and never faced any issues with speed, availability, nor resources. With assistance from the technical team, I never experienced an outage.",
    Avatar: Dennis_Image,
    name: "Dennis Makwakwa",
    role: "Software Developer · Zakudimba",
    rating: "4.6",
  },
  {
    stars: 5,
    Logo: WishVibeLogo,
    quote: "Honestly, the website SkyView built for us looks even more beautiful than the likes of Meta. The attention to detail, the animations, the speed — everything exceeded what I thought was possible in Malawi. Absolutely world-class service.",
    Avatar: MosesAvatar,
    name: "Moses Nyirenda",
    role: "Founder · WishVibe Platforms",
    rating: "5.0",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {testimonials.map(({ stars, Logo, quote, Avatar, name, role, rating }) => (
            <motion.div
              key={name}
              variants={cardVariant}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5">
                {[...Array(stars)].map((_, i) => <StarIcon key={i} />)}
              </div>

              <div className="flex-shrink-0">
                <Logo />
              </div>

              <blockquote className="text-slate-700 text-base leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <footer className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="shrink-0 size-12 rounded-full overflow-hidden">
                  <Avatar />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{name}</p>
                  <p className="text-sm text-slate-500">{role}</p>
                </div>
                <div className="ms-auto text-right">
                  <p className="text-2xl font-extrabold text-slate-900">{rating}</p>
                  <p className="text-xs text-slate-400">out of 5</p>
                </div>
              </footer>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;
