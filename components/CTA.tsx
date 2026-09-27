import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/company";

export default function CTA() {
  return (
    <section className="py-20 md:py-24 bg-[#111827] text-white relative overflow-hidden border-t border-b border-white/10">
      <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
        <span className="inline-block font-bold tracking-widest uppercase text-[#72C452] text-sm mb-4">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to start your next electrical project?
        </h2>
        
        <p className="text-[#D1D5DB] text-lg md:text-xl mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          Contact our friendly team today for a free quote or to discuss your residential or commercial electrical needs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto btn-primary py-4 px-8 text-base shadow-sm"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
          
          <a 
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto btn-secondary py-4 px-8 text-base"
          >
            <Phone size={20} className="text-[#72C452]" />
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
