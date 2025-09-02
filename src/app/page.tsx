'use client';

import { useState } from "react";

import HeroSection from '@/components/sections/hero';
import Features from '@/components/sections/features';
import AboutSection from '@/components/sections/about';
import Services from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import CtaSection from '@/components/sections/cta';
import Testimonials from '@/components/sections/testimonials';
import TrustSection from '@/components/sections/trust';
import WhyBriklySection from '@/components/sections/why-brikly';
import FinalCta from '@/components/sections/final-cta';
import Modal from '@/components/sections/modal';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection mounted={mounted} setMounted={setMounted} />
        <Features />
        <AboutSection />
        <Services />
        <ProjectsSection />
        <CtaSection />
        <Testimonials />
        <TrustSection />
        <WhyBriklySection />
        <FinalCta />
        <Modal mounted={mounted} setMounted={setMounted}  />
      </main>
    </div>
  );
}
