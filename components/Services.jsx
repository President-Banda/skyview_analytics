"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Shared_Hosting_Image from './Images/Shared'
import Vps_Hosting_Image from './Images/Vps'
import Ml_Hosting_Image from './Images/Ml'
import { LayoutGridDemo } from './LayOutGridDemo'

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="shrink-0 text-blue-600">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const hostingPlans = [
  {
    title: "Web Hosting",
    subtitle: "Monthly or yearly plans with cPanel, WHM, Coolify, or your choice of control panel.",
    badge: null,
    features: [
      { label: "Shared Hosting", bold: true },
      { label: "Domain Name" },
      { label: "100 GB Ultra-Fast SSD Storage" },
      { label: "Unlimited Transfer" },
      { label: "Unlimited Email Accounts" },
      { label: "WordPress Optimised" },
      { label: "cPanel Control Panel" },
    ],
    Image: Shared_Hosting_Image,
  },
  {
    title: "VPS & Cloud Servers",
    subtitle: "Need more power and isolation? Get a fully managed private server tailored to you.",
    badge: "Popular",
    features: [
      { label: "All Web Hosting features", bold: true },
      { label: "Increased Storage & Resources" },
      { label: "Advanced Analytics Dashboard" },
      { label: "Automated Reporting Tools" },
      { label: "Third-Party Integrations" },
      { label: "Priority Email Support" },
    ],
    Image: Vps_Hosting_Image,
  },
  {
    title: "AI / ML Infrastructure",
    subtitle: "Exclusive environment for businesses running Machine Learning, AI, and Deep Learning workloads.",
    badge: "Enterprise",
    features: [
      { label: "All VPS features", bold: true },
      { label: "Unlimited Storage" },
      { label: "End-to-End Encryption" },
      { label: "Predictive Insights" },
      { label: "Early-Access to New Features" },
      { label: "Dedicated Account Manager" },
      { label: "24/7 Priority Support" },
    ],
    Image: Ml_Hosting_Image,
  },
];

const additionalServices = [
  {
    icon: (
      <svg className="size-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Web Development",
    description: "Responsive, high-performance websites and web applications — from landing pages and e-commerce to full-stack platforms built for growth.",
  },
  {
    icon: (
      <svg className="size-6 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Systems Design",
    description: "End-to-end architecture for scalable, fault-tolerant systems — database schema, API design, microservices, load balancing, and disaster recovery.",
  },
  {
    icon: (
      <svg className="size-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Penetration Testing",
    description: "Authorised security assessments to identify vulnerabilities before attackers do — web app pentests, network audits, and detailed remediation reports.",
  },
  {
    icon: (
      <svg className="size-6 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "IT Consultancy",
    description: "Strategic technology consulting to align your IT infrastructure with business goals — cloud migration, architecture planning, and digital transformation.",
  },
  {
    icon: (
      <svg className="size-6 text-violet-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Software Development",
    description: "Custom application development using modern frameworks — from MVPs to full-scale platforms built for performance, maintainability, and scalability.",
  },
  {
    icon: (
      <svg className="size-6 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.65-4.65 3.032-2.497a3 3 0 0 1 3.786 3.785l-2.498 3.032m-5.65 4.65 2.498-3.032" />
      </svg>
    ),
    title: "IT Support",
    description: "Responsive technical support for hardware, software, networks, and cloud environments — keeping your business running without interruption.",
  },
  {
    icon: (
      <svg className="size-6 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Technical Writing",
    description: "Professional documentation, API guides, SoPs, and technical content tailored for developers, end users, and executive stakeholders.",
  },
  {
    icon: (
      <svg className="size-6 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: "Automation",
    description: "Workflow automation, scripting, and process orchestration — CI/CD pipelines, infrastructure-as-code, scheduled jobs, and RPA to eliminate manual overhead.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const Services = () => {
  return (
    <section className="bg-white py-16 lg:py-24" id="services">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Our Services</h2>
          <p className="mt-4 text-slate-600">
            From reliable hosting to AI/ML infrastructure, web development, security testing,
            and expert training — everything your business needs to scale with confidence.
          </p>
        </motion.div>

        {/* ── Hosting Plans ── */}
        <motion.h3
          className="text-center text-xl font-bold text-slate-700 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Cloud Hosting
        </motion.h3>
        <motion.div
          className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {hostingPlans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={cardVariants}
              className="flex flex-col rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white overflow-hidden"
            >
              <figure className="flex justify-center items-center bg-slate-50 px-6 pt-6">
                <plan.Image />
              </figure>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xl font-bold text-slate-900">{plan.title}</h4>
                  {plan.badge && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 mb-5">{plan.subtitle}</p>

                <ul className="space-y-2.5 text-sm flex-1">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-2.5">
                      <CheckIcon />
                      <span className={f.bold ? 'font-semibold text-slate-800' : 'text-slate-600'}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a href="#contact"
                    className="block w-full py-2.5 text-center text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:scale-95 transition-all">
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Professional Services ── */}
        <div className="mb-20">
          <motion.h3
            className="text-center text-xl font-bold text-slate-700 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Services
          </motion.h3>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {additionalServices.map((svc) => (
              <motion.div
                key={svc.title}
                variants={cardVariants}
                className="group rounded-xl border border-gray-100 p-6 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all bg-white"
              >
                <div className="size-11 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{svc.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{svc.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Training ── */}
        <motion.div
          id="training"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-xl font-bold text-slate-700 mb-3">Technical Training</h3>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-2">
            Industry-aligned cloud and technology training programmes led by AWS-certified professionals.
            Whether you&apos;re starting your cloud journey or advancing your ML/DevOps skills,
            we have a course for you.
          </p>
          <LayoutGridDemo />
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
