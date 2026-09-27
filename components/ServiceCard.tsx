import Link from "next/link";
import { ArrowRight, Zap, Shield, Network, KeyRound, Home, Wind } from "lucide-react";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

// Map string icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Zap,
  Shield,
  Network,
  KeyRound,
  Home,
  Wind,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.iconName] || Zap;

  return (
    <div className="card group relative flex flex-col h-full bg-white p-8 border border-[#E5E7EB] hover:border-[#72C452] hover:shadow-md transition-all duration-300 rounded-2xl">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-[#F5F9F2] flex items-center justify-center text-[#111827] mb-6 group-hover:bg-[#72C452] group-hover:text-white transition-colors duration-300">
        <Icon size={28} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-[#111827] group-hover:text-[#72C452] transition-colors">
        {service.title}
      </h3>
      <p className="text-[#4B5563] mb-6 flex-grow leading-relaxed">
        {service.shortDescription}
      </p>

      {/* Link */}
      <Link
        href={`/services#${service.slug}`}
        className="inline-flex items-center gap-2 text-[#111827] font-bold text-sm group-hover:text-[#72C452] transition-colors mt-auto"
      >
        Learn more
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
