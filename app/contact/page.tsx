import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="bg-[#0B1220] px-6 py-16 text-center text-white md:py-24">
        <div className="container-site">
          <span className="section-label !text-[#72C452]">Contact us</span>
          <h1 className="mb-5 text-4xl font-extrabold text-white md:text-5xl">Let&apos;s talk about your project</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            Need an electrician in Melbourne? Contact our friendly team for a free quote or expert advice.
          </p>
        </div>
      </section>

      <section className="section-py bg-[#F6FAF3] px-6">
        <div className="container-site">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-5/12">
              <span className="section-label">Contact details</span>
              <h2 className="mb-5 text-3xl font-extrabold text-[#101827]">We&apos;re here to help</h2>
              <p className="mb-9 leading-7 text-[#475569]">
                Whether you need a quote, help with an electrical project, or advice about our services, our team is ready to assist.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Phone, title: "Call us", content: company.phone, href: `tel:${company.phone.replace(/\s+/g, "")}` },
                  { icon: Mail, title: "Email us", content: company.email, href: `mailto:${company.email}` },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.title} href={item.href} className="group flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-[#72C452]/50 hover:shadow-md">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F8EC] text-[#4D9634] group-hover:bg-[#72C452] group-hover:text-white">
                        <Icon size={22} />
                      </span>
                      <span>
                        <span className="block text-sm font-extrabold uppercase tracking-[0.1em] text-[#64748B]">{item.title}</span>
                        <span className="mt-1 block font-bold text-[#101827] group-hover:text-[#4D9634]">{item.content}</span>
                      </span>
                    </a>
                  );
                })}

                <div className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.05)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F8EC] text-[#4D9634]">
                    <MapPin size={22} />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold uppercase tracking-[0.1em] text-[#64748B]">Location</span>
                    <span className="mt-1 block font-bold text-[#101827]">{company.address.line1}<br />{company.address.city}, {company.address.state} {company.address.postcode}</span>
                  </span>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.05)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F8EC] text-[#4D9634]">
                    <Clock size={22} />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold uppercase tracking-[0.1em] text-[#64748B]">Business hours</span>
                    <span className="mt-1 block font-bold leading-6 text-[#101827]">Monday - Friday: 7:00 AM - 5:00 PM<br />Emergency callouts available</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[400px] w-full bg-[#E2E8F0] md:h-[500px]">
        <iframe
          src="https://maps.google.com/maps?q=8/158%20Chesterville%20Road,%20Moorabbin,%20VIC,%20Australia,%203189&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prokop Electrical Services Location"
          className="absolute inset-0 grayscale transition-all duration-700 hover:grayscale-0"
        />
      </section>
    </main>
  );
}