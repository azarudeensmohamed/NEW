import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter as X, Phone, Mail, MapPin } from 'lucide-react';

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const supportLinks = [
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Testimonials', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Youtube, href: '#', name: 'YouTube' },
  { icon: X, href: '#', name: 'X' },
];

const contactDetails = [
  {
    icon: Phone,
    title: 'Call us',
    content: '+988 (246) 642-2710',
    href: 'tel:+9882466422710',
  },
  {
    icon: Mail,
    title: 'Send Email',
    content: 'info@brikly.com',
    href: 'mailto:info@brikly.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: 'Chicago Heights, TX 60411',
    href: '#',
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary-grey text-white pt-20 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8">
          <div className="lg:col-span-4 flex flex-col gap-6 items-start">
            <Link href="/" style={{background:'white',borderRadius:'25px'}}>
             <Image src="/assest/images/logo.png" alt="Logo" width={107} height={26} />
            </Link>
            <p className="text-white/80 text-base font-body leading-relaxed max-w-sm">
              At Brikly, we are dedicated to delivering exceptional construction services that stand the test of time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-white hover:text-accent-green transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-heading text-lg font-bold text-white mb-5">Company</h5>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/80 hover:text-accent-green transition-colors font-body text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-heading text-lg font-bold text-white mb-5">Support</h5>
            <ul className="flex flex-col gap-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/80 hover:text-accent-green transition-colors font-body text-base">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="font-heading text-lg font-bold text-white mb-5">Contact Us</h5>
            <div className="flex flex-col gap-6">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-gre flex items-center justify-center">
                    <detail.icon className="w-6 h-6 text-primary-org" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white">{detail.title}</p>
                    <a href={detail.href} className="text-white/80 hover:text-accent-green transition-colors font-body text-base">
                      {detail.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-white/80 text-sm font-body">© 2025 Copyright by Brikly</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/80 hover:text-accent-green transition-colors text-sm font-body">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/80 hover:text-accent-green transition-colors text-sm font-body">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;