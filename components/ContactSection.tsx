import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-py scroll-mt-24 bg-[#F6FAF3]"
    >
      <div className="container-site">
        <div className="mb-12 text-center">
          <span className="section-label">Contact us</span>

          <h2 className="mt-2 text-3xl font-extrabold text-[#101827] md:text-4xl">
            Let&apos;s talk about your project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#475569]">
            Need an electrician in Melbourne? Contact our friendly team for a
            free quote or expert advice.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="w-full lg:w-5/12">
            <span className="section-label">Contact details</span>

            <h3 className="mb-5 text-3xl font-extrabold text-[#101827]">
              We&apos;re here to help
            </h3>

            <p className="mb-9 leading-7 text-[#475569]">
              Whether you need a quote, help with an electrical project, or
              advice about our services, our team is ready to assist.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="group flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-[#72C452]/50 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F8EC] text-[#4D9634] transition-colors group-hover:bg-[#72C452] group-hover:text-white">
                  <Phone size={22} />
                </span>

                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.1em] text-[#64748B]">
                    Call us
                  </span>

                  <span className="mt-1 block font-bold text-[#101827] group-hover:text-[#4D9634]">
                    {company.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-[#72C452]/50 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F8EC] text-[#4D9634] transition-colors group-hover:bg-[#72C452] group-hover:text-white">
                  <Mail size={22} />
                </span>

                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.1em] text-[#64748B]">
                    Email us
                  </span>

                  <span className="mt-1 block break-all font-bold text-[#101827] group-hover:text-[#4D9634]">
                    {company.email}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.05)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F8EC] text-[#4D9634]">
                  <MapPin size={22} />
                </span>

                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.1em] text-[#64748B]">
                    Location
                  </span>

                  <span className="mt-1 block font-bold leading-6 text-[#101827]">
                    {company.address.line1}
                    <br />
                    {company.address.city}, {company.address.state}{" "}
                    {company.address.postcode}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.05)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F8EC] text-[#4D9634]">
                  <Clock size={22} />
                </span>

                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.1em] text-[#64748B]">
                    Business hours
                  </span>

                  <span className="mt-1 block font-bold leading-6 text-[#101827]">
                    Monday - Friday: 7:00 AM - 5:00 PM
                    <br />
                    Emergency callouts available
                  </span>
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
  );
}
