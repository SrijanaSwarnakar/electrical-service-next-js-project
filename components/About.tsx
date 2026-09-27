import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";

export default function About() {
  const highlights = [
    "Proud family-run business",
    "Serving all of Melbourne",
    "Residential & Commercial",
    "High standard of workmanship",
  ];

  return (
    <section id="about" className="section-py overflow-hidden bg-white">
      <div className="container-site">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="relative w-full lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_18px_42px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/page-work2.jpg"
                alt="Prokop Electrical Services technician working"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1220]/10 via-transparent to-white/10" />
            </div>

            <div className="absolute -bottom-5 -right-5 hidden h-32 w-32 rounded-[1.5rem] border border-[#72C452]/20 bg-[#72C452]/10 md:block" />
            <div className="absolute -top-5 -left-5 hidden h-24 w-24 rounded-[1.25rem] border border-[#E2E8F0] bg-[#F6FAF3] md:block" />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="section-label">About us</span>
            <h2 className="mb-6 text-3xl font-extrabold text-[#101827] md:text-4xl lg:text-5xl">
              A family-run electrical team you can rely on
            </h2>
            <div className="section-divider" />

            <p className="mb-6 text-lg leading-8 text-[#475569]">
              {company.description}
            </p>
            <p className="mb-8 text-lg leading-8 text-[#475569]">
              We specialise in electrical, security, data, access control, home automation, and split system AC services. Every project is approached with care, clear communication, and a high standard of workmanship.
            </p>

            <ul className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3">
                  <CheckCircle2 className="shrink-0 text-[#5BA83D]" size={20} />
                  <span className="font-bold text-[#172033]">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary">
              Learn more about us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}