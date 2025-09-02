import React from 'react';
import Image from "next/image";
import Link from 'next/link';


export default function AboutSection() {
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
            className="inline-block rounded-full bg-accent-gre px-9 py-[18px] font-body text-base font-medium uppercase tracking-wider text-primary-dark transition hover:opacity-90"
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
        style={{ transform: 'rotate(180deg) translateY(1px)' }}
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

<section className="bg-white px-6 py-16 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto">
    {/* Heading + Intro */}
    <div className="mb-12 md:flex md:justify-between md:items-start gap-2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
        Built in Austin. Trusted Across Central Texas.
      </h2>
      <p className="text-gray-600 mt-4 md:mt-0 md:max-w-xl">
        At Briky, we believe construction is more than just concrete and steel —
        it’s about building trust, understanding your vision, and creating spaces
        that last for generations. Based in the heart of Austin, we’ve been
        delivering high-quality residential and commercial construction services
        across Central Texas with pride, precision, and purpose.
      </p>
    </div>
  </div>
</section>

  <section className="bg-white px-4 py-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* <div className="grid grid-cols-3 grid-rows-2 gap-0">

        <div className="bg-[#00332D] text-[#C5FF00] p-8 flex flex-col justify-between">
          <h3 className="uppercase text-sm font-semibold mb-4">PROJECTS</h3>
          <h2 className="text-4xl font-bold mb-4">100+</h2>
          <p className="text-white text-sm">
            Completed over 100 residential and commercial projects across Central Texas with unmatched precision and professionalism.
          </p>
        </div>

        <div className="h-64">
          <Image
            src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/About-Img-1-1.png"
            alt="High-rise Building"
            width="400" height="430"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="bg-[#00332D] text-[#C5FF00] p-8 flex flex-col justify-between">
          <h3 className="uppercase text-sm font-semibold mb-4">HAPPY CLIENTS</h3>
          <h2 className="text-4xl font-bold mb-4">80+</h2>
          <p className="text-white text-sm">
            We've earned the trust of over 80 homeowners and businesses through honest work, clear communication, and quality builds.
          </p>
        </div>

        <div className="h-64">
          <Image
            src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/About-Img.png"
            alt="Modern House 1"
            width="400" height="430"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="bg-[#C5FF00] text-black p-8 flex flex-col justify-between">
          <h3 className="uppercase text-sm font-semibold mb-4">COMMITMENT</h3>
          <h2 className="text-4xl font-bold mb-4">110%</h2>
          <p className="text-sm">
            We go above and beyond — with 110% dedication to your project, your goals, and your satisfaction from day one.
          </p>
        </div>

        <div className="h-64">
          <Image
            src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/About-Img-3.png"
            alt="Modern House 2"
            width="400" height="430"
            style={{ objectFit: "cover" }}
          />
        </div>

      </div> */}
      <div className="flex flex-col md:flex-row h-[200px] md:h-[400px] w-full" style={{height:'320px'}} >
        {/* PROJECTS */}
        <div style={{background:'#6b6b6b'}} className="bg-[#00332D] text-[#C5FF00] p-8 flex flex-col justify-between h-80 flex-1">
          <h3 className="uppercase text-sm font-semibold" style={{color:'#e3bd66'}}>PROJECTS</h3>
          <h2 className="text-4xl font-bold" style={{color:'#e3bd66'}} >100+</h2>
          <p className="text-white text-sm">
            Completed over 100 residential and commercial projects across Central Texas with unmatched precision and professionalism.
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="relative h-80 flex-1">
          <Image
            src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/About-Img-1-1.png"
            alt="High-rise Building"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* HAPPY CLIENTS */}
        <div style={{background:'#6b6b6b'}} className="bg-[#00332D] text-[#C5FF00] p-8 flex flex-col justify-between h-80 flex-1">
          <h3 className="uppercase text-sm font-semibold" style={{color:'#e3bd66'}}>HAPPY CLIENTS</h3>
          <h2 className="text-4xl font-bold" style={{color:'#e3bd66'}}>80+</h2>
          <p className="text-white text-sm">
            We've earned the trust of over 80 homeowners and businesses through honest work, clear communication, and quality builds.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row" style={{height:'400px'}} >
        {/* IMAGE 2 */}
        <div className="relative h-80 flex-1 p-2">
          <Image
            src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/About-Img.png"
            alt="Modern House 1"
            fill
            className="object-cover"
          />
        </div>

        {/* COMMITMENT */}
        <div style={{background:'#e3bd66'}} className="bg-[#C5FF00] text-black flex flex-col justify-between h-80 flex-1">
          <h3 className="uppercase text-sm font-semibold p-6" style={{color:'#6b6b6b'}} >COMMITMENT</h3>
          <h2 className="text-4xl font-bold p-6" style={{color:'#6b6b6b'}}>110%</h2>
          <p className="text-sm p-6" style={{color:'white'}}>
            We go above and beyond — with 110% dedication to your project, your goals, and your satisfaction from day one.
          </p>
        </div>

        {/* IMAGE 3 */}
        <div className="relative h-80 flex-1 p-2">
          <Image
            src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/About-Img-3.png"
            alt="Modern House 2"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </section>

<section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto text-center">
    {/* Section Title */}
    <h4 className="text-sm uppercase text-gray-500 font-semibold mb-2">Impactful</h4>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      Vision, Mission & Values
    </h2>

    {/* 3 Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg p-6 shadow-sm text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-900 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
        <p className="text-sm text-gray-600">
          We aim to create lasting spaces that strengthen communities and inspire
          confidence — built with care and purpose.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg p-6 shadow-sm text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-900 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
        <p className="text-sm text-gray-600">
          We make construction simple and dependable through clear communication,
          skilled craftsmanship, and client-first service.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg p-6 shadow-sm text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-900 text-white p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Values</h3>
        <p className="text-sm text-gray-600">
          We build with integrity, treat every project like our own, and prioritize
          We&rsquo;re committed to doing it right.
          
        </p>
      </div>
    </div>
  </div>
</section>

{/* Second Section – What Drives Us */}
<section className="bg-white py-20 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Image */}
    <div>
      <Image
        src="https://your-image-url.jpg"
        alt="Construction Worker"
        className="rounded-lg w-full h-auto object-cover"
      />
    </div>

    {/* Text Content */}
    <div>
      <h4 className="text-sm uppercase text-green-700 font-semibold mb-2">
        Real Foundation
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        What Drives Us
      </h2>
      <p className="text-gray-600 mb-6">
        We started Briky to bring reliability back to construction. That means honest
        timelines, clear communication, and work that holds up — inside and out. We're
        proud to partner with homeowners, businesses, and developers who care about
        quality as much as we do.
      </p>

      {/* Bullet List */}
      <ul className="space-y-3 text-sm text-gray-700">
        <li className="flex items-center gap-2">
          ✅ Licensed, insured, and ISO-certified professionals
        </li>
        <li className="flex items-center gap-2">
          ✅ Customized Build Solutions
        </li>
        <li className="flex items-center gap-2">
          ✅ Reliable Timelines
        </li>
        <li className="flex items-center gap-2">
          ✅ Clean & Organized Job Sites
        </li>
      </ul>
    </div>
  </div>
</section>
</>
  )
};