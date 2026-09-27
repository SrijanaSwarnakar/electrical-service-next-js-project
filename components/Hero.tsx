import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-88px)] overflow-hidden bg-[#0B1220] text-white">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/fbpage.jpg"
          alt={`${company.name} team and service vans in Melbourne`}
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
      </div>

      {/* Preserve the photo while creating a controlled reading zone. */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,15,28,0.94)_0%,rgba(7,15,28,0.78)_38%,rgba(7,15,28,0.38)_68%,rgba(7,15,28,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#0B1220]/55 to-transparent" />

      <div className="container-site relative flex min-h-[calc(100vh-88px)] items-center py-20 md:py-24">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0B1220]/55 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#72C452] shadow-[0_0_0_5px_rgba(114,196,82,0.13)]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">
              Melbourne&apos;s Trusted Electricians
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-0.035em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] md:text-6xl lg:text-7xl">
            Reliable electrical services,
            <span className="block text-[#72C452]">built for your home &amp; business.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] md:text-xl md:leading-8">
            {company.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-primary py-3.5 px-6 text-base">
              Explore our services
              <ArrowRight size={19} />
            </Link>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="btn-secondary py-3.5 px-6 text-base"
            >
              <Phone size={18} className="text-[#72C452]" />
              Call {company.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/90">
            <span className="inline-flex items-center gap-2 font-semibold">
              <ShieldCheck size={18} className="text-[#72C452]" />
              Family-run business
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span className="font-semibold">Residential &amp; commercial</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span className="font-semibold">Serving Melbourne</span>
          </div>
        </div>
      </div>
    </section>
  );
}