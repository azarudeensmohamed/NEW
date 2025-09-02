'use client';
import React from "react";
import Link from 'next/link';


type HeroSectionProps = {
  mounted: boolean;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeroSection = ({ setMounted }: HeroSectionProps) => {


  return (
    <section className="relative overflow-hidden bg-[#2D5A43] pt-[168px] pb-[220px]">
      {/* 
        Background Image and Overlay
        NOTE: The original background image 'Hero-bg.jpg' was not provided in the assets.
        The URL from the scraped HTML is used directly.
        Original URL: https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Hero-bg.jpg
      */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/2151264503-2-min.jpg')" }}
      />
      <div className="absolute inset-0 bg-primary-dark/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[800px] px-4 text-center">
        <div className="mb-5 inline-block rounded-full bg-white/10 px-4 py-2">
          <p className="font-body text-base font-medium uppercase tracking-wider text-white">
            25+ Years of Excellence
          </p>
        </div>
        <h1 className="font-heading text-[56px] font-bold leading-[1.2] text-white">
          Building Your Dreams to Reality
        </h1>
        <p className="mx-auto mt-[10px] max-w-[660px] font-body text-lg leading-[1.6] text-white">
          From custom homes to commercial spaces, Brikly delivers quality construction solutions across Austin, Texas — on time, on budget, and built to last.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button
           
            onClick={() => setMounted(true)}
            className="inline-block rounded-full bg-accent-gre px-9 py-[18px] font-body text-base font-medium uppercase tracking-wider text-primary-org transition hover:opacity-90"
          >
            Enquire Now
          </button>
          <Link
            href="#"
            className="inline-block rounded-full border-2 border-white bg-transparent px-[34px] py-4 font-body text-base font-medium uppercase tracking-wider text-white transition hover:bg-white hover:text-primary-org"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Shape Divider */}
      <div 
        className="absolute bottom-0 left-0 h-[100px] w-full"
        style={{ transform: 'rotate(180deg) translateY(0px)' }}
      >
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1279 192" 
          preserveAspectRatio="none" 
          className="relative block h-full w-full"
        >
          <path 
            d="M0,192 C426.33,96 852.67,96 1279,192 L1279,0 L0,0 Z" 
            className="fill-secondary"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;