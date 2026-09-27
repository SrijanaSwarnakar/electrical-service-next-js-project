"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { ContactFormData, ContactFormErrors } from "@/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    serviceRequired: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      serviceRequired: "",
      message: "",
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-[#E5E7EB]">
      <h3 className="text-2xl font-bold text-[#111827] mb-6">Send us a message</h3>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-[#F5F9F2] border border-[#72C452] text-[#111827] rounded-lg flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#72C452] text-[#111827] font-bold flex items-center justify-center shrink-0">
            ✓
          </div>
          <p className="font-semibold text-sm">Thank you! Your message has been sent. We&apos;ll get back to you shortly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-[#111827] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border bg-white text-[#111827] ${errors.fullName ? "border-red-500 focus:ring-red-500" : "border-[#E5E7EB] focus:ring-[#72C452] focus:border-[#72C452]"} focus:outline-none focus:ring-2 transition-colors`}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-[#111827] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border bg-white text-[#111827] ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-[#E5E7EB] focus:ring-[#72C452] focus:border-[#72C452]"} focus:outline-none focus:ring-2 transition-colors`}
              placeholder="0400 000 000"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#111827] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border bg-white text-[#111827] ${errors.email ? "border-red-500 focus:ring-red-500" : "border-[#E5E7EB] focus:ring-[#72C452] focus:border-[#72C452]"} focus:outline-none focus:ring-2 transition-colors`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Service Required */}
          <div>
            <label htmlFor="serviceRequired" className="block text-sm font-bold text-[#111827] mb-2">
              Service Required
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-[#E5E7EB] focus:ring-[#72C452] focus:border-[#72C452] focus:outline-none focus:ring-2 transition-colors bg-white text-[#111827]"
            >
              <option value="">Select a service (Optional)</option>
              <option value="Electrical Installations">Electrical Installations</option>
              <option value="Security Systems">Security Systems</option>
              <option value="Data & Communications">Data & Communications</option>
              <option value="Access Control">Access Control</option>
              <option value="Home Automation">Home Automation</option>
              <option value="Split System AC">Split System AC</option>
              <option value="General Maintenance">General Maintenance</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-[#111827] mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border bg-white text-[#111827] ${errors.message ? "border-red-500 focus:ring-red-500" : "border-[#E5E7EB] focus:ring-[#72C452] focus:border-[#72C452]"} focus:outline-none focus:ring-2 transition-colors resize-y`}
            placeholder="How can we help you?"
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg font-bold shadow-sm ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
          {!isSubmitting && <Send size={20} />}
        </button>
      </form>
    </div>
  );
}
