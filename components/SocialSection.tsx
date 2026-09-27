import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { company } from "@/data/company";

// Custom Facebook Icon since it was removed/renamed in some Lucide versions
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function SocialSection() {
  return (
    <section className="py-12 md:py-16 bg-[#111827] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#72C452 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container-site relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center gap-10 border border-[#E5E7EB]">
          
          {/* Image Side */}
          <div className="w-full md:w-5/12 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm shrink-0 border border-[#E5E7EB]">
            <Image
              src="/images/page-work10.jpg"
              alt="Prokop Electrical Services recent work grid"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            {/* Facebook Badge Overlay */}
            <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md flex flex-col items-center justify-center border border-[#E5E7EB]">
              <FacebookIcon className="text-[#1877F2] mb-1" size={28} />
              <span className="text-xs font-bold text-[#111827]">Follow Us</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-7/12">
            <div className="flex items-center gap-2 mb-4">
              <FacebookIcon className="text-[#1877F2]" size={24} />
              <span className="text-[#1877F2] font-bold tracking-wider uppercase text-sm">
                Join our community
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4">
              See Our Latest Work on Facebook
            </h2>
            
            <p className="text-[#4B5563] text-lg mb-8 leading-relaxed max-w-xl">
              We regularly update our Facebook page with photos from recent jobs, helpful electrical tips, and news about the team. Follow us to stay connected and see the high standard of work we deliver every day across Melbourne.
            </p>
            
            <a 
              href={company.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FacebookIcon size={18} />
              Visit Our Facebook Page
              <ExternalLink size={16} className="ml-1 opacity-70" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
