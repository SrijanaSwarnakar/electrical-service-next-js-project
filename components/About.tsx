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
    <section id="about" className="section-py bg-white overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] w-full border border-[#E5E7EB]">
              <Image
                src="/images/page-work2.jpg"
                alt="Prokop Electrical Services technician working"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Subtle decorative accent block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#72C452]/20 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F5F9F2] border border-[#E5E7EB] rounded-2xl -z-10 hidden md:block" />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="section-label">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-[#111827]">
              Melbourne&apos;s Proud Family-Run Electrical Company
            </h2>
            <div className="section-divider" />
            
            <p className="text-[#4B5563] text-lg mb-6 leading-relaxed">
              {company.description}
            </p>
            <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
              We specialise in all things electrical, security, data, access control, home automation, and split system AC. Our commitment is to deliver every project—no matter the size—to the highest possible standard.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#72C452] shrink-0" size={20} />
                  <span className="text-[#111827] font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
