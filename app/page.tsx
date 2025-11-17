import AboutSection from "@/components/landing/AboutSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import ServicesSection from "@/components/landing/ServicesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <PricingSection />
      <Footer />
    </main>

  );
}
