import { ShieldCheck, Clock, ThumbsUp, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Family Values",
      description: "As a family-run business, we care deeply about our reputation and treat every customer's home as if it were our own.",
      icon: ThumbsUp,
    },
    {
      title: "High Standards",
      description: "We never compromise on safety or quality. All our work is completed to the highest professional and regulatory standards.",
      icon: ShieldCheck,
    },
    {
      title: "Comprehensive Expertise",
      description: "From simple electrical maintenance to complex home automation and security systems, we have the skills to handle it all.",
      icon: Wrench,
    },
    {
      title: "Reliable Service",
      description: "We turn up when we say we will, communicate clearly throughout the job, and leave your property clean and tidy.",
      icon: Clock,
    },
  ];

  return (
    <section className="section-py bg-[#0F172A] text-white relative overflow-hidden">
      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-bold tracking-widest uppercase text-[#72C452] text-sm mb-4">
            The Prokop Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            Why Choose Prokop?
          </h2>
          <div className="w-14 h-1 bg-[#72C452] mx-auto rounded-full mb-6" />
          <p className="text-[#E2E8F0] text-lg">
            When you choose Prokop Electrical Services, you are choosing a team dedicated to excellence, safety, and outstanding customer care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-[#172033] border border-white/15 rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:bg-[#1B273C] hover:border-[#72C452]/60 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.24)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#72C452]/15 flex items-center justify-center text-[#72C452] mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                <p className="text-[#E2E8F0] leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
