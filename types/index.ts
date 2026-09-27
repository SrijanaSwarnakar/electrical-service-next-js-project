// ============================================================
// PROKOP ELECTRICAL SERVICES — Shared TypeScript Types
// ============================================================

// ─── Navigation ─────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ─── Services ───────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string; // Lucide icon name
  features: string[];
  slug: string;
}

// ─── Projects / Gallery ─────────────────────────────────────
export type ProjectCategory =
  | "Electrical Installations"
  | "Security"
  | "Commercial"
  | "Residential"
  | "Data / Networking"
  | "Access Control"
  | "Air Conditioning"
  | "Electrical Maintenance";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageSrc: string;
  imageAlt: string;
  description?: string;
}

// ─── Contact Form ────────────────────────────────────────────
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceRequired?: string;
  message?: string;
}

// ─── Company Info ────────────────────────────────────────────
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  phone: string;
  email: string;
  googleMapsUrl: string;
  facebook: string;
}
