"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Shared_Hosting_Image from './Images/Shared'
import Vps_Hosting_Image from './Images/Vps'
import Ml_Hosting_Image from './Images/Ml'
import { LayoutGridDemo } from './LayOutGridDemo'
import HostingPackages from './HostingPackages';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="shrink-0 text-slate-400 mt-0.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const hostingPlans = [
  {
    title: "Web Hosting",
    subtitle: "Monthly or yearly plans with cPanel, WHM, Coolify, or your choice of control panel.",
    badge: null,
    packageLabel: "Package 1",
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    features: [
      { label: "Managed shared hosting environments" },
      { label: "Custom domain configuration & DNS management" },
      { label: "Enterprise-grade SSD storage solutions" },
      { label: "Optimized for WordPress & modern CMS platforms" },
      { label: "Managed daily backups & recovery" },
      { label: "Technical setup & ongoing maintenance support ⭐" },
    ],
    useCase: "Ideal for startups, portfolios, and small business websites needing reliable online presence without infrastructure complexity.",
    Image: Shared_Hosting_Image,
  },
  {
    title: "VPS & Cloud Servers",
    subtitle: "Need more power and isolation? Get a fully managed private server tailored to you.",
    badge: "Popular",
    packageLabel: "Package 2",
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    features: [
      { label: "Dedicated virtual server environments" },
      { label: "Scalable compute & storage resources" },
      { label: "Custom server configurations & OS selection" },
      { label: "Load balancing & traffic optimization" },
      { label: "Continuous uptime monitoring & alerts" },
      { label: "Expert DevOps support & system administration" },
    ],
    useCase: "Perfect for growing applications, SaaS products, and businesses requiring dedicated resources with full control and scalability.",
    Image: Vps_Hosting_Image,
  },
  {
    title: "AI / ML Infrastructure",
    subtitle: "Exclusive environment for businesses running Machine Learning, AI, and Deep Learning workloads.",
    badge: "Enterprise",
    packageLabel: "Package 3",
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    features: [
      { label: "GPU-accelerated compute infrastructure" },
      { label: "High-performance storage for large datasets" },
      { label: "Pre-configured ML frameworks & libraries" },
      { label: "Model training & deployment pipelines" },
      { label: "Secure data handling & compliance support" },
      { label: "Dedicated ML engineering consultation" },
    ],
    useCase: "Built for data science teams, AI startups, and enterprises running machine learning models, deep learning, and big data analytics.",
    Image: Ml_Hosting_Image,
  },
];

const trainingPackages = [
  {
    id: 1,
    name: "Certification Practice",
    popular: false,
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
    features: [
      { label: "Practice exam questions" },
      { label: "Detailed explanations" },
      { label: "Exam strategies" },
      { label: "Weak-area identification" },
      { label: "Continuous coaching" },
      { label: "Extensive practice sessions" },
    ],
    packageLabel: "Package 1",
    useCase: "Perfect for self-learners who want to test their knowledge and identify gaps before taking the certification exam.",
  },
  {
    id: 2,
    name: "Certification Preparation",
    popular: true,
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    features: [
      { label: "Structured learning roadmap" },
      { label: "Complete theory lessons" },
      { label: "Service-by-service coverage" },
      { label: "Exam blueprint & study plan" },
      { label: "Architecture discussions" },
      { label: "Knowledge checks" },
    ],
    packageLabel: "Package 2",
    useCase: "Ideal for professionals seeking comprehensive guided preparation with structured lessons and expert-led instruction.",
  },
  {
    id: 3,
    name: "Certification Plus Voucher",
    popular: false,
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3v.75m-9-3h9M3.75 7.5h16.5m-16.5 3.75h16.5m-16.5 3.75h16.5m-16.5 3.75h16.5M6.75 21h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25A2.25 2.25 0 0 0 17.25 3H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21Z" />
      </svg>
    ),
    features: [
      { label: "AWS certification exam voucher" },
      { label: "Exam registration guidance" },
      { label: "Final readiness assessment" },
      { label: "Test-day strategies & tips" },
      { label: "Post-exam career guidance" },
      { label: "Priority instructor support" },
    ],
    packageLabel: "Package 3",
    useCase: "Best for committed learners ready to schedule their exam and gain official AWS certification with included voucher.",
  },
  {
    id: 4,
    name: "Premium Certification Experience",
    popular: false,
    icon: (
      <svg className="size-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    ),
    features: [
      { label: "Hands-on labs" },
      { label: "Demos" },
      { label: "Practical assignments" },
      { label: "Architecture walkthroughs" },
      { label: "End-to-end project guidance" },
      { label: "Instructor support" },
      { label: "Revision sessions" },
    ],
    packageLabel: "Package 4",
    useCase: "Designed for professionals seeking hands-on experience, personalized mentorship, and complete end-to-end certification journey.",
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
          className="max-w-2xl mx-auto text-center mb-8"
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
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Cloud Hosting &
          </h3>
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-600">
            Infrastructure Packages
          </h3>
        </motion.div>

        {/* Hosting Packages Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 mb-20 mt-12">
          {hostingPlans.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-xl bg-white p-6 ${
                plan.badge === 'Popular'
                  ? 'border-2 border-blue-600 shadow-lg'
                  : 'border border-slate-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge === 'Popular' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="size-16 rounded-xl bg-blue-50 flex items-center justify-center">
                  {plan.icon}
                </div>
              </div>

              {/* Package Header */}
              <div className="mb-4 text-center">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h4>
                {plan.packageLabel && (
                  <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {plan.packageLabel}
                  </span>
                )}
                {plan.useCase && (
                  <p className="text-[11px] text-blue-600 leading-relaxed font-medium mt-3">
                    {plan.useCase}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-sm text-slate-600 leading-tight">
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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
          {/* Training Header */}
          <div className="text-center mb-4">
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Technical Training &
            </h3>
            <h3 className="text-3xl md:text-5xl font-extrabold text-blue-600">
              AWS Certification Packages
            </h3>
          </div>

          {/* Global Badge */}
          <motion.div
            className="flex justify-center mb-4"
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

          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12 text-xs">
            Industry-aligned cloud and technology training programmes led by AWS-certified professionals.
            Whether you&apos;re starting your cloud journey or advancing your ML/DevOps skills,
            we have a course for you.
          </p>

          {/* Training Packages Grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-4 mb-12">
            {trainingPackages.map((pkg, idx) => (
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
                  {pkg.packageLabel && (
                    <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {pkg.packageLabel}
                    </span>
                  )}
                  {pkg.useCase && (
                    <p className="text-[11px] text-blue-600 leading-relaxed font-medium mt-3">
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
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <LayoutGridDemo />
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
