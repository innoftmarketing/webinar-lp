import { Navigation } from "@/components/navigation";
import { MobileCta } from "@/components/mobile-cta";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { LearnSection } from "@/components/sections/learn";
import { AudienceSection } from "@/components/sections/audience";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { SpeakerSection } from "@/components/sections/speaker";
import { FaqSection } from "@/components/sections/faq";
import { RegisterSection } from "@/components/sections/register";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main>
      <Navigation />
      <MobileCta />
      <HeroSection />
      <ProblemSection />
      <LearnSection />
      <AudienceSection />
      <HowItWorksSection />
      <SpeakerSection />
      <FaqSection />
      <RegisterSection />
      <FinalCtaSection />
    </main>
  );
}
