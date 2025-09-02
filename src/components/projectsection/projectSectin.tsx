import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Vista Heights',
    image: 'https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Project-Img-4.png',
    description:
      'A premium multi-family residential community featuring 122 townhomes with modern architecture and energy-efficient features. Full design-build, utility layout.',
    highlights: [
      'Gated access & Green spaces',
      'Solar-ready construction',
      '2100–2400 sq. ft. units',
    ],
    type: 'Residential',
  },
  {
    title: 'Retail Plaza',
    image: 'https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Project-Img-5.png',
    description:
      'A 10,000 sq. ft. mall center with B-lease-ready units, parking, and ADA accessibility. Commercial site development, steel frame structure, core and shell delivery.',
    highlights: [
      'Zoned for restaurants and retail',
      'Ample customer parking',
      'Traffic-heavy location',
    ],
    type: 'Commercial',
  },
  {
    title: 'Buda Homes',
    image: 'https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Project-Img-6.png',
    description:
      'A 2,500 sq. ft. single-family home with open-concept design, 3BHK layout, and backyard deck. Ground-up residential build with smart home pre-wiring and custom interiors.',
    highlights: [
      'High-efficiency insulation',
      '10-ft ceilings & luxury vinyl floors',
      'Walk-in master suite',
    ],
    type: 'Residential',
  },
];

export default function ProjectsSection() {
  return (
    <>
    <section className="relative overflow-hidden bg-[#2D5A43] pt-[168px] pb-[220px]">
      {/* 
        Background Image and Overlay
        NOTE: The original background image 'Hero-bg.jpg' was not provided in the assets.
        The URL from the scraped HTML is used directly.
        Original URL: https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Hero-bg.jpg
      */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Hero-bg.jpg')" }}
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
          <Link
            href="#"
            className="inline-block rounded-full bg-accent-green px-9 py-[18px] font-body text-base font-medium uppercase tracking-wider text-primary-dark transition hover:opacity-90"
          >
            Enquire Now
          </Link>
          <Link
            href="#"
            className="inline-block rounded-full border-2 border-white bg-transparent px-[34px] py-4 font-body text-base font-medium uppercase tracking-wider text-white transition hover:bg-white hover:text-primary-dark"
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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">Built to Last</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#00332D]">
          Where Ideas Become <br /> Landmarks
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap " style={{marginBottom:'30px'}}>
        <button className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#00332D] shadow" style={{background:'#6b6b6b'}}>
          All
        </button>
        <button className="px-4 py-2 rounded-full text-sm font-semibold text-[#00332D] bg-white border border-[#00332D]">
          Completed Projects
        </button>
        <button className="px-4 py-2 rounded-full text-sm font-semibold text-[#00332D] bg-white border border-[#00332D]">
          Upcoming Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className="bg-white px-6 py-16 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
            <div key={index} className="bg-white border rounded-xl shadow-sm overflow-hidden">
                {/* Image */}
                <div className="h-60 w-full relative">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl"
                />
                </div>

                {/* Content */}
                {/* <div className="p-6 space-y-4 text-left"> */}
                {/* Highlights */}
                <div className="border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#00332D] mb-2 px-6 mt-3">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 px-6">
                      {project.description}
                    </p>

                    <h4 className="text-base font-semibold text-[#00332D] mb-2 px-6">Highlights</h4>
                    <ul className="space-y-2 text-sm text-[#00332D] p-6">
                        {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">✔</span>{item}
                        </li>
                         ))}
                    </ul>

                    <div className="border-t mt-6 pt-1 text-sm text-[#00332D] font-medium">
                       <div className="p-4"> Type: <span className="font-normal">Residential</span></div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            ))}
        </div>
      </div>
    </section>
    </>
  );
}
