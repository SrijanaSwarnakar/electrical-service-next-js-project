import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image — shown in full natural color */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fbpage.jpg"
          alt={`${company.name} team and service vans in Melbourne`}
          fill
          priority
          className="object-cover object-[center_30%]"
        />
        {/* Localized gradient ONLY behind the text area for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07101D]/90 via-[#111827]/65 to-[#111827]/15" />
      </div>

      <div className="container-site relative z-10 w-full py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#72C452]/20 border border-[#72C452]/40 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#72C452] animate-pulse" />
            <span className="text-white text-xs font-bold tracking-wide uppercase drop-shadow">
              Melbourne&apos;s Trusted Electricians
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]">
            Reliable Electrical Services, Built for{" "}
            <span className="text-[#72C452]">Your Home & Business.</span>
          </h1>

          {/* Description */}
          <p className="text-white text-lg md:text-xl mb-10 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            {company.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn-primary py-4 px-8 text-lg group">
              Our Services
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="btn-secondary py-4 px-8 text-lg group"
            >
              <Phone size={20} className="text-[#72C452]" />
              {company.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex items-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#F5C542] drop-shadow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold drop-shadow">5-Star Rated Service</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <span className="font-bold drop-shadow">Family Run</span>
              <span className="drop-shadow">Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
