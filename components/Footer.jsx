"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Footer_Image from './Images/Foooter'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/6b4e89409e31ebc94dc27e22d7e56df8';

const serviceLinks = [
  "Web Hosting", "VPS & Cloud", "AI/ML Infrastructure",
  "Web Development", "Systems Design", "Penetration Testing",
  "IT Consultancy", "Automation", "Technical Training",
  "IT Support", "Technical Writing",
];

const Footer = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.target);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:     fd.get('name'),
          email:    fd.get('email'),
          phone:    fd.get('phone'),
          message:  fd.get('message'),
          _subject: 'New Inquiry — SkyView Analytics',
          _captcha: 'false',
        }),
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="bg-white" id="contact">

      {/* ── Contact section ────────────────────────────────────────────── */}
      <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto">

        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Contact Us Today</h2>
          <p className="mt-3 text-slate-600">
            Have a project in mind or need a tailored solution? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <section className="bg-slate-50 rounded-2xl">
          <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-5">

              {/* Contact info */}
              <motion.div
                className="lg:col-span-2 lg:py-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <p className="max-w-xl text-base font-medium text-slate-700 leading-relaxed">
                  Have a specific requirement or need a more tailored solution? Reach out and we&apos;ll
                  respond promptly with expert guidance.
                </p>

                <div className="mt-8 space-y-3">
                  <div>
                    <a href="tel:+265887053883"
                      className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors">
                      +265 887 053 883
                    </a>
                  </div>
                  <div>
                    <a href="mailto:woof-prevail-grub@duck.com"
                      className="inline-flex items-center gap-2 group">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-wide text-blue-600 group-hover:bg-blue-100 transition-colors">
                        <svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        e-mail
                      </span>
                      <span className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">Albert Banda</span>
                    </a>
                  </div>
                  <div>
                    <motion.a
                      href="https://wa.me/265887053883"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      Chat on WhatsApp
                    </motion.a>
                  </div>
                  <address className="not-italic text-sm text-slate-500">
                    Area 47, Lilongwe, Malawi
                  </address>
                </div>

                <ul className="mt-8 flex gap-4">
                  <li>
                    <a href="https://www.linkedin.com/company/skyview-analytics-center/" rel="noreferrer" target="_blank"
                      className="text-slate-400 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.359V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.451H3.56V9h3.554v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/skyview_analytics_centre?igsh=cmw4ZTJ3YW9sOGNi" rel="noreferrer" target="_blank"
                      className="text-slate-400 hover:text-pink-600 transition-colors" aria-label="Instagram">
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/albertbanda-tech/" rel="noreferrer" target="_blank"
                      className="text-slate-400 hover:text-blue-700 transition-colors text-xs font-bold pt-1 inline-block"
                      aria-label="Albert's LinkedIn">
                      CEO
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Contact form */}
              <motion.div
                className="rounded-xl bg-white p-8 shadow-sm border border-gray-100 lg:col-span-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{   opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center h-full min-h-[280px] text-center gap-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                        className="size-16 rounded-full bg-green-100 flex items-center justify-center"
                      >
                        <svg className="size-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                      <p className="text-slate-500 text-sm max-w-xs">
                        Thanks for reaching out. We&apos;ll be in touch shortly at the email you provided.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-2 text-sm text-blue-600 font-semibold hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{   opacity: 0 }}
                      className="space-y-4"
                    >
                      {status === 'error' && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                          Something went wrong. Please email us directly at{' '}
                          <a href="mailto:woof-prevail-grub@duck.com" className="font-semibold underline">
                            woof-prevail-grub@duck.com
                          </a>
                        </div>
                      )}

                      <div>
                        <label className="sr-only" htmlFor="name">Name</label>
                        <input
                          name="name" id="name" type="text" required
                          placeholder="Full name"
                          className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="sr-only" htmlFor="email">Email</label>
                          <input
                            name="email" id="email" type="email" required
                            placeholder="Email address"
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow"
                          />
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="phone">Phone</label>
                          <input
                            name="phone" id="phone" type="tel"
                            placeholder="Phone number"
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="message">Message</label>
                        <textarea
                          name="message" id="message" rows="6" required
                          placeholder="Tell us about your project..."
                          className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow resize-none"
                        />
                      </div>

                      <div>
                        <motion.button
                          type="submit"
                          disabled={status === 'sending'}
                          whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                          whileTap={{  scale: status === 'sending' ? 1 : 0.97 }}
                          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                        >
                          {status === 'sending' ? (
                            <>
                              <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                              </svg>
                              Sending…
                            </>
                          ) : (
                            'Send Enquiry'
                          )}
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>

            </div>
          </div>
        </section>
      </div>

      {/* ── Footer strip ───────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100">
        <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-8 items-start">

            <div className="relative h-24 lg:col-span-2 lg:h-full mb-8 lg:mb-0">
              <Footer_Image />
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Call us</p>
                  <a href="tel:+265887053883"
                    className="block text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    +265 887 053 883
                  </a>
                  <a href="mailto:woof-prevail-grub@duck.com"
                    className="inline-flex items-center gap-2 mt-1 group">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-wide text-blue-600 group-hover:bg-blue-100 transition-colors">
                      <svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      e-mail
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-blue-600 transition-colors">Albert Banda</span>
                  </a>
                  <ul className="mt-3 space-y-1 text-sm text-slate-500">
                    <li>Mon – Fri: 8 am – 5 pm</li>
                    <li>Sat – Sun: 9 am – 3 pm</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-900 mb-4">Services</p>
                  <ul className="space-y-2 text-sm">
                    {serviceLinks.map(s => (
                      <li key={s}>
                        <a href="#services" className="text-slate-500 hover:text-blue-600 transition-colors">{s}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-900 mb-4">Company</p>
                  <ul className="space-y-3 text-sm">
                    {[
                      { label: "About",       href: "#" },
                      { label: "Our Team",    href: "#team" },
                      { label: "Credentials", href: "#credentials" },
                      { label: "LinkedIn",    href: "https://www.linkedin.com/company/skyview-analytics-center/" },
                      { label: "Instagram",   href: "https://www.instagram.com/skyview_analytics_centre?igsh=cmw4ZTJ3YW9sOGNi" },
                    ].map(item => (
                      <li key={item.label}>
                        <a href={item.href} className="text-slate-500 hover:text-blue-600 transition-colors">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <ul className="flex flex-wrap gap-4 text-xs text-slate-400">
                  <li><a href="#" className="hover:text-slate-600 transition-colors">Terms &amp; Conditions</a></li>
                  <li><a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</a></li>
                </ul>
                <p className="text-xs text-slate-400">
                  &copy; {new Date().getFullYear()} SkyView Analytics Center. All rights reserved.
                </p>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
