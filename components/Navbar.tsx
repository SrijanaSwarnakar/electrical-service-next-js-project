"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/data/company";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white py-3 shadow-md border-b border-[#E5E7EB]"
          : "bg-white py-5 border-b border-[#E5E7EB]"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="w-10 h-10 rounded-full bg-[#72C452] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
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
            <span className="text-[#111827] font-bold text-xl tracking-tight leading-none group-hover:text-[#72C452] transition-colors">
              prokop
            </span>
            <span className="text-[#72C452] text-[0.65rem] font-bold uppercase tracking-widest leading-none mt-1">
              electrical services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#111827] hover:text-[#72C452] text-sm font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="btn-primary py-2 px-4 text-sm hidden lg:flex"
          >
            <Phone size={16} />
            {company.phone}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#111827] p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-white flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#111827] text-2xl font-bold hover:text-[#72C452] transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-12 flex flex-col items-center gap-4">
            <p className="text-[#6B7280] text-sm">Need immediate assistance?</p>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={18} />
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
