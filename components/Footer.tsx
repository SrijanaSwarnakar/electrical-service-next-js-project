import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { Phone, Mail, MapPin } from "lucide-react";

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-4 border-[#72C452] bg-[#0B1220] pt-16 text-white md:pt-20">
      <div className="container-site">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#72C452]">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="56 10" />
                  <line x1="16" y1="4" x2="16" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold leading-none tracking-tight text-white">prokop</span>
                <span className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] leading-none text-[#72C452]">electrical services</span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Proud family-run electrical company based in Melbourne, delivering electrical, security, data, access control, home automation and air conditioning services.
            </p>

            <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#72C452]/40 hover:bg-[#72C452] hover:text-[#0B1220]" aria-label="Follow us on Facebook">
              <FacebookIcon size={19} />
            </a>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-extrabold text-white">Quick links</h4>
            <ul className="space-y-3">
              {[
                ["/", "Home"],
                ["/about", "About us"],
                ["/services", "Our services"],
                ["/projects", "Our work"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-300 transition hover:text-[#72C452]">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-extrabold text-white">Our services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.slug}`} className="text-sm text-slate-300 transition hover:text-[#72C452]">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-extrabold text-white">Contact us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#72C452]" />
                <span>{company.address.line1}<br />{company.address.city}, {company.address.state} {company.address.postcode}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Phone size={18} className="shrink-0 text-[#72C452]" />
                <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="hover:text-[#72C452]">{company.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Mail size={18} className="shrink-0 text-[#72C452]" />
                <a href={`mailto:${company.email}`} className="hover:text-[#72C452]">{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 md:flex-row">
          <p className="text-xs text-slate-400">&copy; {currentYear} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-400 hover:text-[#72C452]">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-400 hover:text-[#72C452]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}