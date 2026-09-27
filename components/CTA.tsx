import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/company";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0B1220] py-20 text-white md:py-24">
      <div className="absolute -left-28 top-10 h-64 w-64 rounded-full bg-[#72C452]/[0.07] blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[#72C452]/[0.06] blur-3xl" />

      <div className="container-site relative z-10 mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-[#72C452]">
          <span className="h-px w-5 bg-[#72C452]" />
          Get in touch
          <span className="h-px w-5 bg-[#72C452]" />
        </span>

        <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">
          Ready to start your next electrical project?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          Contact our friendly team for a free quote or to discuss your residential or commercial electrical needs.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary w-full py-4 px-7 sm:w-auto">
            Get a free quote
            <ArrowRight size={20} />
          </Link>
          <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="btn-secondary w-full py-4 px-7 sm:w-auto">
            <Phone size={19} className="text-[#72C452]" />
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}