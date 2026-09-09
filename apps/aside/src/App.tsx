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
      <Nav />
      <main className="pt-[56px]">
        <div className="px-4 md:px-6 lg:px-10 py-6">
          <HeroSection />
        </div>
        <IntroSection />
        <PasswordSection />
        <PrivacySection />
        <AnythingSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}
