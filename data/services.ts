import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "electrical",
    title: "Electrical Services",
    shortDescription:
      "Full-range residential and commercial electrical work to a professional standard.",
    description:
      "Prokop Electrical Services provides professional electrical work for homes and businesses across Melbourne. From switchboard upgrades and power point installations to lighting and general electrical maintenance, our team delivers quality results on every job.",
    iconName: "Zap",
    features: [
      "Switchboard upgrades",
      "Power point and light installations",
      "Outdoor and garden lighting",
      "Fault finding and repairs",
      "Safety inspections",
      "General electrical maintenance",
    ],
    slug: "electrical",
  },
  {
    id: "security",
    title: "Security Systems",
    shortDescription:
      "Professional security camera and alarm system installations for homes and businesses.",
    description:
      "We supply and install security systems to protect your property. Whether it is CCTV cameras for a residential property or a comprehensive alarm system for a commercial premises, Prokop Electrical Services delivers reliable security solutions.",
    iconName: "Shield",
    features: [
      "CCTV camera installation",
      "Alarm system supply and installation",
      "Residential security solutions",
      "Commercial security systems",
      "Camera positioning and cabling",
      "System testing and commissioning",
    ],
    slug: "security",
  },
  {
    id: "data",
    title: "Data & Communications",
    shortDescription:
      "Structured data cabling and communications solutions for homes and workplaces.",
    description:
      "Our team installs data cabling, network points and communications infrastructure for residential and commercial clients. We ensure clean, organised and reliable connectivity throughout your property.",
    iconName: "Network",
    features: [
      "Data cabling installation",
      "Network point installation",
      "TV antenna and AV cabling",
      "Structured cabling systems",
      "Residential data solutions",
      "Commercial data infrastructure",
    ],
    slug: "data",
  },
  {
    id: "access-control",
    title: "Access Control",
    shortDescription:
      "Intercom, keypad and electronic access control systems for secure entry.",
    description:
      "We install and configure access control systems to manage and secure entry to your property. From video intercoms to keypad and card reader systems, Prokop Electrical Services delivers access control solutions for residential and commercial applications.",
    iconName: "KeyRound",
    features: [
      "Video intercom systems",
      "Keypad and PIN access",
      "Card and fob reader systems",
      "Electric gate and door control",
      "Residential access systems",
      "Commercial access control",
    ],
    slug: "access-control",
  },
  {
    id: "home-automation",
    title: "Home Automation",
    shortDescription:
      "Smart home technology to control your lights, blinds, security and more.",
    description:
      "Prokop Electrical Services installs home automation systems that bring your home to life. Control lighting, blinds, entertainment, security and climate from a single interface, creating a smarter, more comfortable living environment.",
    iconName: "Home",
    features: [
      "Smart lighting control",
      "Automated blinds and shading",
      "Smart security integration",
      "Whole-home automation systems",
      "Voice and app control",
      "System configuration and setup",
    ],
    slug: "home-automation",
  },
  {
    id: "split-system-ac",
    title: "Split System AC",
    shortDescription:
      "Supply and installation of split system air conditioning units.",
    description:
      "Stay comfortable year-round with a professionally installed split system air conditioner. Prokop Electrical Services supplies and installs split system AC units for residential and commercial properties, ensuring efficient and reliable climate control.",
    iconName: "Wind",
    features: [
      "Split system AC supply",
      "Residential AC installation",
      "Commercial AC installation",
      "System testing and commissioning",
      "Electrical connections",
      "Advice on suitable systems",
    ],
    slug: "split-system-ac",
  },
];

export const serviceNames = services.map((s) => s.title);
