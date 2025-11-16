import AboutSection from "@/components/landing/AboutSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import ServicesSection from "@/components/landing/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <PricingSection />
    </main>
  );
}
