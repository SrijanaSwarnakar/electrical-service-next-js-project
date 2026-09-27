import type { Project, ProjectCategory } from "@/types";

// ─── Project Gallery Data ────────────────────────────────────
// Images sourced from public/images/ — real Prokop work photos.
// Titles and categories are descriptive only; no invented project
// names, customer names, addresses or results have been added.

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Residential Lighting Installation",
    category: "Residential",
    imageSrc: "/images/page-work.jpg",
    imageAlt: "Premium residential bathroom and living area with professional lighting installation",
    description: "Professional lighting installation in a premium residential property.",
  },
  {
    id: "proj-2",
    title: "Outdoor Spotlight Installation",
    category: "Electrical Installations",
    imageSrc: "/images/page-work2.jpg",
    imageAlt: "Prokop electrician installing an outdoor spotlight on an exterior wall",
    description: "Outdoor spotlight fitting and cabling for residential exterior.",
  },
  {
    id: "proj-3",
    title: "Kitchen Pendant Lighting",
    category: "Residential",
    imageSrc: "/images/page-work5.jpg",
    imageAlt: "High-end kitchen with professionally installed pendant lighting",
    description: "Designer pendant lighting installation in a high-end kitchen.",
  },
  {
    id: "proj-4",
    title: "Outdoor Entertaining Lighting",
    category: "Residential",
    imageSrc: "/images/page-work6.jpg",
    imageAlt: "Residential outdoor alfresco area with architectural lighting at dusk",
    description: "Architectural lighting for an alfresco and outdoor entertaining space.",
  },
  {
    id: "proj-5",
    title: "Switchboard Testing & Maintenance",
    category: "Electrical Maintenance",
    imageSrc: "/images/page-work8.jpg",
    imageAlt: "Electrical switchboard testing with a multimeter — Prokop Electrical Services",
    description: "Switchboard testing and inspection using professional diagnostic equipment.",
  },
  {
    id: "proj-6",
    title: "Commercial Control Panel",
    category: "Commercial",
    imageSrc: "/images/page-work9.jpg",
    imageAlt: "Commercial electrical relay and control panel installation",
    description: "Commercial electrical relay panel installation and commissioning.",
  },
  {
    id: "proj-7",
    title: "Residential Hallway Lighting",
    category: "Residential",
    imageSrc: "/images/page-work11.jpg",
    imageAlt: "Residential hallway with chandelier lighting, fireplace and artwork",
    description: "Hallway chandelier and ambient lighting installation.",
  },
  {
    id: "proj-8",
    title: "Designer Pendant Lighting",
    category: "Residential",
    imageSrc: "/images/page-work12.jpg",
    imageAlt: "Premium dining room with custom ring pendant lighting installation",
    description: "Custom designer ring pendant lighting for a premium dining room.",
  },
  {
    id: "proj-9",
    title: "Architectural Exterior Lighting",
    category: "Residential",
    imageSrc: "/images/page-work13.jpg",
    imageAlt: "Modern Melbourne townhouse with architectural exterior and garden lighting",
    description: "Architectural exterior and garden path lighting for a modern Melbourne townhouse.",
  },
];

// ─── All available project categories ───────────────────────
export const projectCategories: ProjectCategory[] = [
  "Electrical Installations",
  "Security",
  "Commercial",
  "Residential",
  "Data / Networking",
  "Access Control",
  "Air Conditioning",
  "Electrical Maintenance",
];
