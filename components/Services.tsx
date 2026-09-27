import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="section-py bg-[#F6FAF3]">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label">Our Expertise</span>
            <h2 className="mb-4 text-3xl font-extrabold text-[#101827] md:text-4xl lg:text-5xl">
              Electrical solutions for the way you live and work
            </h2>
            <div className="section-divider" />
            <p className="text-lg text-[#475569]">
              From residential repairs to commercial installations, we deliver practical, high-quality electrical and technology solutions across Melbourne.
            </p>
          </div>

          <Link href="/services" className="btn-outline hidden shrink-0 md:flex">
            View all services
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-9 flex justify-center md:hidden">
          <Link href="/services" className="btn-outline w-full justify-center">
            View all services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}