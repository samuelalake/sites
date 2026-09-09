import Nav from "@/components/Nav";
import HeroSection from "@/sections/HeroSection";
import IntroSection from "@/sections/IntroSection";
import PasswordSection from "@/sections/PasswordSection";
import PrivacySection from "@/sections/PrivacySection";
import AnythingSection from "@/sections/AnythingSection";
import CTASection from "@/sections/CTASection";
import FooterSection from "@/sections/FooterSection";

export default function App() {
  return (
    <div className="bg-white min-h-full">
      <main>
        <div className="relative p-4">
          <Nav />
          <HeroSection />
        </div>
        <IntroSection />
        <AnythingSection />
        <PasswordSection />
        <PrivacySection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}
