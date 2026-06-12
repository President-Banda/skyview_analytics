import React from 'react'
import Footer_Image from './Images/Foooter'

const Footer = () => {
  return (
    <div className="bg-white" id="contact">

      {/* Contact section */}
      <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Contact Us Today</h2>
          <p className="mt-3 text-slate-600">
            Have a project in mind or need a tailored solution? We&apos;d love to hear from you.
          </p>
        </div>

        <section className="bg-slate-50 rounded-2xl">
          <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-5">

              <div className="lg:col-span-2 lg:py-6">
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
                    <a href="https://wa.me/265887053883" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 active:scale-95 transition-all">
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                  <address className="not-italic text-sm text-slate-500">
                    Area 47, Lilongwe, Malawi
                  </address>
                </div>

                {/* Social icons */}
                <ul className="mt-8 flex gap-4">
                  <li>
                    <a href="https://www.linkedin.com/company/skyview-analytics-center/" rel="noreferrer" target="_blank"
                      className="text-slate-500 hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.359V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.601 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.451H3.56V9h3.554v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/skyview_analytics_centre?igsh=cmw4ZTJ3YW9sOGNi" rel="noreferrer" target="_blank"
                      className="text-slate-500 hover:text-pink-600 transition-colors" aria-label="Instagram">
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/albertbanda-tech/" rel="noreferrer" target="_blank"
                      className="text-slate-500 hover:text-blue-700 transition-colors text-xs font-bold pt-1 inline-block"
                      aria-label="Albert's LinkedIn">
                      CEO
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact form */}
              <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-100 lg:col-span-3">
                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      placeholder="Full name" type="text" id="name" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">Email</label>
                      <input className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        placeholder="Email address" type="email" id="email" />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="phone">Phone</label>
                      <input className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        placeholder="Phone number" type="tel" id="phone" />
                    </div>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="message">Message</label>
                    <textarea className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                      placeholder="Tell us about your project..." rows="6" id="message" />
                  </div>
                  <div>
                    <button type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all">
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer strip */}
      <footer className="border-t border-gray-100">
        <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-8 items-start">

            {/* Logo / image */}
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
                  <ul className="mt-4 space-y-1 text-sm text-slate-500">
                    <li>Mon – Fri: 8 am – 5 pm</li>
                    <li>Sat – Sun: 9 am – 3 pm</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-900 mb-4">Services</p>
                  <ul className="space-y-3 text-sm">
                    {["Web Hosting", "VPS & Cloud", "AI/ML Infrastructure", "Web Development", "Systems Design", "Penetration Testing", "IT Consultancy", "Technical Training", "IT Support", "Technical Writing"].map(s => (
                      <li key={s}><a href="#services" className="text-slate-500 hover:text-blue-600 transition-colors">{s}</a></li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-900 mb-4">Company</p>
                  <ul className="space-y-3 text-sm">
                    {[
                      { label: "About", href: "#" },
                      { label: "Our Team", href: "#team" },
                      { label: "Credentials", href: "#credentials" },
                      { label: "LinkedIn", href: "https://www.linkedin.com/company/skyview-analytics-center/" },
                      { label: "Instagram", href: "https://www.instagram.com/skyview_analytics_centre?igsh=cmw4ZTJ3YW9sOGNi" },
                    ].map(item => (
                      <li key={item.label}>
                        <a href={item.href} className="text-slate-500 hover:text-blue-600 transition-colors">{item.label}</a>
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
  )
}

export default Footer
