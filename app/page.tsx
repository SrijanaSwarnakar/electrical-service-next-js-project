import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectGallery from "@/components/ProjectGallery";
import SocialSection from "@/components/SocialSection";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <ProjectGallery />
      <SocialSection />
      <CTA />
    </main>
  );
}
