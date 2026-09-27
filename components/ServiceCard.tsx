import Link from "next/link";
import { ArrowRight, Zap, Shield, Network, KeyRound, Home, Wind } from "lucide-react";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

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
    <article className="group flex h-full flex-col rounded-[1.25rem] border border-[#E2E8F0] bg-white p-7 shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#72C452]/60 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="mb-7 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F8EC] text-[#4D9634] transition-all duration-300 group-hover:bg-[#72C452] group-hover:text-white group-hover:shadow-[0_8px_18px_rgba(114,196,82,0.24)]">
          <Icon size={27} strokeWidth={2.2} />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#94A3B8]">
          {String(service.id).replaceAll("-", " ")}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-extrabold text-[#101827] transition-colors group-hover:text-[#4D9634]">
        {service.title}
      </h3>
      <p className="mb-7 flex-grow leading-7 text-[#475569]">
        {service.shortDescription}
      </p>

      <Link
        href={`/services#${service.slug}`}
        className="inline-flex items-center gap-2 text-sm font-extrabold text-[#101827] group-hover:text-[#4D9634]"
      >
        Learn more
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}