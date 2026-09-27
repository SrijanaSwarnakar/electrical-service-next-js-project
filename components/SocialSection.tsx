import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { company } from "@/data/company";

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function SocialSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F1A2B] py-14 md:py-20">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#72C452 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="container-site relative z-10">
        <div className="flex flex-col items-center gap-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white p-7 shadow-[0_24px_55px_rgba(0,0,0,0.22)] md:p-10 lg:flex-row lg:gap-12 lg:p-12">
          <div className="relative w-full shrink-0 overflow-hidden rounded-[1.25rem] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_14px_30px_rgba(15,23,42,0.12)] lg:w-5/12">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/page-work10.jpg"
                alt="Prokop Electrical Services recent work grid"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute left-4 top-4 flex flex-col items-center justify-center rounded-xl border border-white/70 bg-white/95 p-3 shadow-[0_8px_20px_rgba(15,23,42,0.16)] backdrop-blur">
              <FacebookIcon className="mb-1 text-[#1877F2]" size={27} />
              <span className="text-xs font-extrabold text-[#101827]">Follow us</span>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="mb-4 flex items-center gap-2">
              <FacebookIcon className="text-[#1877F2]" size={23} />
              <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#1877F2]">
                Join our community
              </span>
            </div>

            <h2 className="mb-5 text-3xl font-extrabold text-[#101827] md:text-4xl">
              See our latest work on Facebook
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-[#475569]">
              We regularly share recent jobs, electrical tips, and updates from the team. Follow us to see the quality of work we deliver across Melbourne.
            </p>

            <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FacebookIcon size={18} />
              Visit our Facebook page
              <ExternalLink size={16} className="opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}