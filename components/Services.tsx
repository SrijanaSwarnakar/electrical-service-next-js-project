import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="section-py bg-[#F5F9F2] relative">
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="section-label">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#111827]">
              Comprehensive Electrical Solutions
            </h2>
            <div className="section-divider" />
            <p className="text-[#4B5563] text-lg">
              From residential repairs to commercial installations, we deliver high-quality workmanship across all aspects of electrical services.
            </p>
          </div>
          
          <Link href="/services" className="btn-outline hidden md:flex shrink-0">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 md:hidden flex justify-center">
          <Link href="/services" className="btn-outline w-full justify-center">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
