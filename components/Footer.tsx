import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { Phone, Mail, MapPin } from "lucide-react";

// Custom Facebook Icon 
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111827] text-white pt-16 md:pt-24 pb-8 border-t-4 border-[#72C452]">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-[#72C452] flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56 10" />
                  <line x1="16" y1="4" x2="16" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight leading-none">
                  prokop
                </span>
                <span className="text-[#72C452] text-[0.65rem] font-bold uppercase tracking-widest leading-none mt-1">
                  electrical services
                </span>
              </div>
            </Link>
            
            <p className="text-[#D1D5DB] text-sm leading-relaxed pr-4">
              Proud family-run electrical company based in Melbourne, delivering a range of electrical, security, and data services to a high standard.
            </p>
            
            <a 
              href={company.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex w-10 h-10 rounded-full bg-white/10 items-center justify-center text-white hover:bg-[#72C452] hover:text-[#111827] transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FacebookIcon size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#D1D5DB] hover:text-[#72C452] transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-[#D1D5DB] hover:text-[#72C452] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-[#D1D5DB] hover:text-[#72C452] transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/projects" className="text-[#D1D5DB] hover:text-[#72C452] transition-colors text-sm">Our Work</Link></li>
              <li><Link href="/contact" className="text-[#D1D5DB] hover:text-[#72C452] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.slug}`} className="text-[#D1D5DB] hover:text-[#72C452] transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-[#D1D5DB]">
                <MapPin size={18} className="text-[#72C452] shrink-0 mt-0.5" />
                <span>
                  {company.address.line1}<br />
                  {company.address.city}, {company.address.state} {company.address.postcode}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#D1D5DB]">
                <Phone size={18} className="text-[#72C452] shrink-0" />
                <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="hover:text-[#72C452] transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#D1D5DB]">
                <Mail size={18} className="text-[#72C452] shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-[#72C452] transition-colors">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-xs">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#9CA3AF] hover:text-[#72C452] transition-colors text-xs">Privacy Policy</Link>
            <Link href="/terms" className="text-[#9CA3AF] hover:text-[#72C452] transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
