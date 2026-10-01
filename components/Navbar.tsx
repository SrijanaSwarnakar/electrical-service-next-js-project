"use client";

import { useEffect, useState } from "react";
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#E2E8F0]/80 bg-white/95 py-3 shadow-[0_10px_26px_rgba(15,23,42,0.10)] backdrop-blur-xl"
          : "border-[#E2E8F0] bg-white py-4"
      }`}
    >
      <div className="container-site flex items-center justify-between">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group relative z-[80] flex items-center gap-2.5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#72C452] shadow-[0_7px_16px_rgba(114,196,82,0.22)] transition-transform group-hover:scale-105">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="16"
                cy="16"
                r="12"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="56 10"
              />
              <line
                x1="16"
                y1="4"
                x2="16"
                y2="10"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight leading-none text-[#101827] group-hover:text-[#4D9634]">
              prokop
            </span>

            <span className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] leading-none text-[#5BA83D]">
              electrical services
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-bold text-[#334155] transition-colors hover:text-[#4D9634]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="btn-primary hidden px-4 py-2.5 text-sm lg:flex"
          >
            <Phone size={16} />
            {company.phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative z-[80] p-2 text-[#101827] md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile 75% width menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="fixed inset-y-0 right-0 z-[60] flex min-h-screen w-[75vw] flex-col overflow-y-auto border-l border-[#E2E8F0] bg-white px-6 pt-24 shadow-2xl md:hidden"
          >
            <nav>
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-[#E2E8F0]">
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block py-5 text-left text-2xl font-extrabold text-[#101827] transition-colors hover:text-[#4D9634]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pb-8 pt-8">
              <p className="mb-3 text-sm font-semibold text-[#64748B]">
                Need immediate assistance?
              </p>

              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                onClick={closeMobileMenu}
                className="btn-primary flex w-full items-center justify-center gap-2 py-4"
              >
                <Phone size={18} />
                {company.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
