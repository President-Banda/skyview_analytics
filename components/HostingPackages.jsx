"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = () => (
  <svg className="size-4 text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const packages = [
  {
    id: 1,
    name: "Web Hosting",
    popular: false,
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    features: [
      "Managed shared hosting environments",
      "Custom domain configuration & DNS management",
      "Enterprise-grade SSD storage solutions",
      "Optimized for WordPress & modern CMS platforms",
      "Managed daily backups & recovery",
      "Technical setup & ongoing maintenance support ⭐",
    ],
    includes: "Includes Package 1",
    useCase: "Ideal for startups, portfolios, and small business websites needing reliable online presence without infrastructure complexity.",
  },
  {
    id: 2,
    name: "VPS & Cloud Servers",
    popular: true,
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    features: [
      "Dedicated virtual server environments",
      "Scalable compute & storage resources",
      "Custom server configurations & OS selection",
      "Load balancing & traffic optimization",
      "Continuous uptime monitoring & alerts",
      "Expert DevOps support & system administration",
    ],
    includes: "Includes Package 2 +",
    useCase: "Perfect for growing applications, SaaS products, and businesses requiring dedicated resources with full control and scalability.",
  },
  {
    id: 3,
    name: "AI / ML Infrastructure",
    popular: false,
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    features: [
      "GPU-accelerated compute infrastructure",
      "High-performance storage for large datasets",
      "Pre-configured ML frameworks & libraries",
      "Model training & deployment pipelines",
      "Secure data handling & compliance support",
      "Dedicated ML engineering consultation",
    ],
    includes: "Includes Package 3 +",
    useCase: "Built for data science teams, AI startups, and enterprises running machine learning models, deep learning, and big data analytics.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HostingPackages = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Cloud Hosting &
          </h1>
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600">
            Infrastructure Packages
          </h1>
        </motion.div>

        {/* Global Badge */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wide text-blue-600">
            <svg className="size-3" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            Global
          </span>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 mb-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-xl bg-white p-6 ${
                pkg.popular
                  ? 'border-2 border-blue-600 shadow-lg'
                  : 'border border-slate-200'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="size-16 rounded-xl bg-blue-50 flex items-center justify-center">
                  {pkg.icon}
                </div>
              </div>

              {/* Package Header */}
              <div className="mb-4 text-center">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
                {pkg.includes && (
                  <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {pkg.includes}
                  </span>
                )}
                {pkg.useCase && (
                  <p className="text-xs text-slate-600 leading-relaxed italic mt-3">
                    {pkg.useCase}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-sm text-slate-600 leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPackages;
