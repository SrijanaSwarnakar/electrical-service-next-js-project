import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectGallery from "@/components/ProjectGallery";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <ProjectGallery />
      <SocialSection />
      <ContactSection />
      <CTA />
    </main>
  );
}
