import { ShieldCheck, Clock, ThumbsUp, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    { title: "Family Values", description: "As a family-run business, we care deeply about our reputation and treat every customer's home as if it were our own.", icon: ThumbsUp },
    { title: "High Standards", description: "We never compromise on safety or quality. All our work is completed to the highest professional and regulatory standards.", icon: ShieldCheck },
    { title: "Comprehensive Expertise", description: "From simple electrical maintenance to complex home automation and security systems, we have the skills to handle it all.", icon: Wrench },
    { title: "Reliable Service", description: "We turn up when we say we will, communicate clearly throughout the job, and leave your property clean and tidy.", icon: Clock },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-20 text-white md:py-24">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#72C452]/[0.06] blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#72C452]/[0.05] blur-3xl" />

      <div className="container-site relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-[#72C452]">
            <span className="h-px w-5 bg-[#72C452]" />
            The Prokop difference
            <span className="h-px w-5 bg-[#72C452]" />
          </span>
          <h2 className="mb-5 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Why choose Prokop?
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            A family-run team focused on safe workmanship, dependable service, and a professional customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="group rounded-[1.25rem] border border-white/10 bg-[#142033] p-7 shadow-[0_12px_28px_rgba(0,0,0,0.20)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#72C452]/50 hover:bg-[#18283E] hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#72C452]/20 bg-[#72C452]/10 text-[#8FE26F] transition-all duration-300 group-hover:bg-[#72C452] group-hover:text-[#0B1220]">
                  <Icon size={27} strokeWidth={2.2} />
                </div>
                <h3 className="mb-3 text-xl font-extrabold text-white">{reason.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}