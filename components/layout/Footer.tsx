'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import { submitSubscription } from '@/app/actions/subscribe'

const servicesLinks = {
  title: '',
  links: [
      { name: 'Maintenance Packages', href: '/maintenance' },
    { name: 'Services', href: '/service' },
    { name: 'Spare Parts', href: '/spare-parts' },
  ]
}

const supportLinks = {
  title: '',
  links: [
      { name: 'Metalworking Fluids', href: 'https://www.polarchemtech.com/products' },
    { name: '3D Printing', href: '/3d-printing' },
    { name: 'Equipment', href: '/supply' },

  ]
}

const companyLinks = {
  title: '',
  links: [
    { name: 'About Us', href: '/about' },
    { name: 'Quote Request', href: '/quote' },
  ]
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/tpi-cnc/', icon: FaLinkedin },
]

const sitemapLinks = {
  title: 'Sitemap',
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/contact' },
  ]
}

function FooterColumn({ title, links }: { title: string, links: { name: string, href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-3 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href}
              className="text-sm text-white/80 hover:text-accent transition-colors duration-200 inline-block"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    toast.promise(
      submitSubscription(formData),
      {
        loading: 'Subscribing...',
        success: (response) => {
          if (response.success) {
            form.reset();
            return 'Successfully subscribed!';
          }
          throw new Error(response.error);
        },
        error: (err) => err.message || 'Failed to subscribe'
      }
    );
  }

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Row: Logo, Subscribe Form, and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logos/tpinbg.png" 
                alt="TPI CNC" 
                width={120} 
                height={100}
              />
            </Link>
            <p className="text-sm text-white/80 max-w-xs tracking-wider font-medium">
              <span className="text-accent">SERVICE</span> ● <span className="text-brand-blue">SUPPORT</span> ● <span className="text-white">SUPPLY</span>
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="w-full md:w-auto md:ml-auto">
            <h4 className="text-sm font-semibold mb-3">Stay Updated with TPI CNC</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <input
                type="email"
                name="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-2 bg-white/10 rounded-sm text-sm text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:border-accent min-w-[240px]"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-brand-blue/100 text-white hover:bg-brand-blue/70 rounded-sm text-sm transition-colors whitespace-nowrap font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
          <FooterColumn {...servicesLinks} />
          <FooterColumn {...supportLinks} />
          <FooterColumn {...companyLinks} />
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
            <div className="flex items-center gap-4">
              <a href="mailto:info@tpicnc.com" className="hover:text-accent transition-colors duration-200">
                info@tpicnc.com
              </a>
              <Link href="/privacy" className="hover:text-accent transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors duration-200">
                Terms
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <span>©2024 TPI CNC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 