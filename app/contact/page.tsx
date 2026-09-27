import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* Page Header */}
      <section className="bg-[#111827] text-white py-16 md:py-24 text-center px-6">
        <div className="container-site">
          <span className="inline-block font-bold tracking-widest uppercase text-[#72C452] text-sm mb-3">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Get in Touch</h1>
          <p className="text-[#D1D5DB] text-lg max-w-2xl mx-auto">
            Need an electrician in Melbourne? Get in touch with our friendly team today for a free quote or expert advice.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-py px-6 bg-[#F5F9F2]">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Details Side */}
            <div className="w-full lg:w-5/12 space-y-10">
              <div>
                <span className="section-label">Contact Details</span>
                <h2 className="text-3xl font-bold text-[#111827] mb-6">
                  We&apos;re here to help
                </h2>
                <p className="text-[#4B5563] mb-8 leading-relaxed">
                  Whether you have an electrical emergency, need a quote for a major project, or just have a question about our services, we&apos;re ready to assist you.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#72C452]/20 flex items-center justify-center text-[#72C452] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-1">Call Us</h3>
                    <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="text-[#4B5563] hover:text-[#72C452] font-semibold text-lg transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#72C452]/20 flex items-center justify-center text-[#72C452] shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-1">Email Us</h3>
                    <a href={`mailto:${company.email}`} className="text-[#4B5563] hover:text-[#72C452] transition-colors">
                      {company.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#72C452]/20 flex items-center justify-center text-[#72C452] shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-1">Location</h3>
                    <p className="text-[#4B5563]">
                      {company.address.line1}<br />
                      {company.address.city}, {company.address.state} {company.address.postcode}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#72C452]/20 flex items-center justify-center text-[#72C452] shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-1">Business Hours</h3>
                    <p className="text-[#4B5563]">
                      Monday - Friday: 7:00 AM - 5:00 PM<br />
                      Emergency Callouts Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-7/12">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full h-[400px] md:h-[500px] bg-[#E5E7EB] relative">
        <iframe
          src="https://maps.google.com/maps?q=8/158%20Chesterville%20Road,%20Moorabbin,%20VIC,%20Australia,%203189&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prokop Electrical Services Location"
          className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
        />
      </section>
    </main>
  );
}
