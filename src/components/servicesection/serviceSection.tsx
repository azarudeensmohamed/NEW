import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceSection() {
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
        style={{ backgroundImage: "url('https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/g78393a4dc207dd66ddf7acfa9298f3b2673b8b152a1997dabe91808c1bc7dd6bccc525c58f2d54cbbe772ff038082277_640-4070978.jpg')" }}
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
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20 text-center">
      <div className="space-y-12 p-6 bg-gray-50">
        {/* Residential Section */}
        <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg mb-5">
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Service-Image-1.png"
              alt="Residential Construction"
              layout="fill"
              objectFit="cover"
              className="rounded-l-2xl"
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Residential Construction</h2>
            <p className="text-gray-600 mb-4">
              We specialize in custom homes designed around your lifestyle, preferences, and budget – built with care, high-quality materials, and attention to detail.
            </p>
            <h4 className="text-lg font-medium text-gray-700 mb-2 text-start" style={{textAlign: 'start'}}>Key Benefits</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start"><span className="text-green-600 mr-2">✔</span> Tailored floor plans and architecture.</li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✔</span> Energy-efficient systems and modern designs.</li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✔</span> Seamless permit handling and inspections.</li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✔</span> Built to suit Texas weather and local codes.</li>
            </ul>
            <a href="#" className="mt-6 inline-block bg-lime-400 text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-lime-500 transition">
              ENQUIRE NOW
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Service-Image-1.png"
              alt="Residential Construction"
              layout="fill"
              objectFit="cover"
              className="rounded-l-2xl"
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Residential Construction</h2>
            <p className="text-gray-600 mb-4">
              We specialize in custom homes designed around your lifestyle, preferences, and budget – built with care, high-quality materials, and attention to detail.
            </p>
            <h4 className="text-lg font-medium text-gray-700 mb-2 text-start" style={{textAlign: 'start'}} >Key Benefits</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start"><span className="text-green-600 mr-2">✔</span> Tailored floor plans and architecture.</li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✔</span> Energy-efficient systems and modern designs.</li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✔</span> Seamless permit handling and inspections.</li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✔</span> Built to suit Texas weather and local codes.</li>
            </ul>
            <a href="#" className="mt-6 inline-block bg-lime-400 text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-lime-500 transition">
              ENQUIRE NOW
            </a>
          </div>
        </div>

     
      </div>
    </section>
      {/* Process Section */}
      <section className="bg-white py-16 px-4 md:px-12 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase font-semibold tracking-wide text-[#00332D] mb-2">3-STEP PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00332D] mb-4">Our Process, Made Simple</h2>
          <p className="text-gray-600 text-sm md:text-base">
            We believe great construction starts with great communication. That’s why our process is built around
            transparency, trust, and timely execution — so you always know what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-[#F9FAFB] rounded-xl shadow-sm p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="bg-[#00332D] text-white rounded-full p-3" style={{background:'#6b6b6b'}}>
                <span className="text-2xl font-bold h-30 w-30">
                    <svg style={{height:'30px',width:'30px',fill:'#e3bd66'}} xmlns="http://www.w3.org/2000/svg" id="Glyph" height="512" viewBox="0 0 24 24" width="512"><path d="m16.75 3v1c0 .9648-.7852 1.75-1.75 1.75h-6c-.9648 0-1.75-.7852-1.75-1.75v-1c0-.9648.7852-1.75 1.75-1.75h6c.9648 0 1.75.7852 1.75 1.75zm4 3v14c0 1.5166-1.2334 2.75-2.75 2.75h-12c-1.5166 0-2.75-1.2334-2.75-2.75v-14c0-1.431 1.1021-2.5961 2.5-2.7247v.7247c0 1.792 1.458 3.25 3.25 3.25h6c1.792 0 3.25-1.458 3.25-3.25v-.7247c1.3979.1286 2.5 1.2938 2.5 2.7247zm-4 13c0-.4141-.3359-.75-.75-.75h-8c-.4141 0-.75.3359-.75.75s.3359.75.75.75h8c.4141 0 .75-.3359.75-.75zm0-4c0-.4141-.3359-.75-.75-.75h-8c-.4141 0-.75.3359-.75.75s.3359.75.75.75h8c.4141 0 .75-.3359.75-.75zm0-4c0-.4141-.3359-.75-.75-.75h-8c-.4141 0-.75.3359-.75.75s.3359.75.75.75h8c.4141 0 .75-.3359.75-.75z"></path></svg>
                </span>
              </div>
            </div>
            <h3 className="text-[#00332D] font-semibold text-lg mb-2">Plan & Discover</h3>
            <p className="text-gray-600 text-sm">
              We start with a detailed consultation to understand your vision, goals, and budget — followed by a site visit and early planning advice.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F9FAFB] rounded-xl shadow-sm p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="bg-[#00332D] text-white rounded-full p-3" style={{background:'#6b6b6b'}}>
                <span className="text-2xl font-bold">
                    <svg style={{height:'30px',width:'30px',fill:'#e3bd66'}} xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="512" viewBox="0 0 512 512" width="512"><g><path d="m183.337 236.273v116.238h57.641v-48.61h30v48.61h58.793v-115.841l-71.787-43.408z"></path><path d="m512 150.781c-7.524 3.864-16.04 6.06-25.064 6.06h-33.749v318.447h28.834c16.531 0 29.979-13.449 29.979-29.979z"></path><path d="m0 361.219c7.524-3.864 16.04-6.06 25.064-6.06h33.255v-318.447h-28.34c-16.53 0-29.979 13.449-29.979 29.979z"></path><path d="m486.936 76.712h-398.617v308.447h-63.255c-13.82 0-25.064 11.244-25.064 25.065s11.244 25.064 25.064 25.064h398.122v-308.447h63.749c13.821 0 25.064-11.244 25.064-25.064s-11.243-25.065-25.063-25.065zm-127.165 305.799h-206.434v-163.575l105.016-60.51 44.045 26.633.074-40.162 30 .055-.108 58.227 27.407 16.572z"></path></g></svg>
                </span>
              </div>
            </div>
            <h3 className="text-[#00332D] font-semibold text-lg mb-2">Design & Quote</h3>
            <p className="text-gray-600 text-sm">
              You&apos;ll receive a tailored design proposal, material insights, and a clear, itemized quote — no guesswork, just straightforward numbers.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F9FAFB] rounded-xl shadow-sm p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="bg-[#00332D] text-white rounded-full p-3" style={{background:'#6b6b6b'}}>
                <span className="text-2xl font-bold">
                    <svg style={{height:'30px',width:'30px',fill:'#e3bd66'}} xmlns="http://www.w3.org/2000/svg" id="Layer_1" height="512" viewBox="0 0 512 512" width="512"><ellipse cx="445.084" cy="66.057" rx="65.918" ry="66.057"></ellipse><path d="m359.396 370.362h42.405v42.494h-42.405z"></path><path d="m282.207 139.243c8.225-7.312 18.81-11.338 29.804-11.338s21.579 4.027 29.804 11.338l11.819 10.506v-37.537c0-61.791-50.165-112.061-111.827-112.061-54.012 0-99.202 38.573-109.583 89.673 16.979 25.843 46.735 76.358 59.462 129.889z"></path><path d="m497.029 481.804h-20.677v-142.746l9.744 8.662c2.85 2.534 6.397 3.78 9.929 3.779 4.133 0 8.247-1.705 11.205-5.047 5.487-6.198 4.921-15.68-1.265-21.178l-43.887-39.013v-77.75c0-8.285-6.703-15.002-14.971-15.002s-14.971 6.717-14.971 15.002v51.133l-110.192-97.956c-5.669-5.039-14.201-5.039-19.869 0l-184.02 163.585c-6.185 5.498-6.751 14.98-1.265 21.178 5.487 6.199 14.95 6.765 21.134 1.267l9.744-8.662v142.746h-48.316v-65.45c6.395-1.959 12.549-5.175 18.376-9.584v-26.458c-8.949-2.107-17.131-6.938-23.335-13.946-16.433-18.564-14.732-47.066 3.792-63.535l67.572-60.068c-11.374-72.714-66.72-148.528-69.334-152.074-2.823-3.828-7.291-6.087-12.041-6.087s-9.218 2.259-12.041 6.087c-2.915 3.953-71.378 97.723-71.378 176.884 0 38.637 7.689 75.197 21.651 102.945 12.316 24.477 28.579 40.266 46.797 45.837v65.451h-54.44c-8.268 0-14.971 6.717-14.971 15.002s6.703 15.002 14.971 15.194h461.382 20.677c8.268-.192 14.971-6.909 14.971-15.194s-6.704-15.002-14.972-15.002zm-167.575-126.444c0-8.285 6.703-15.002 14.971-15.002h72.347c8.268 0 14.971 6.717 14.971 15.002v72.499c0 8.285-6.703 15.002-14.971 15.002h-72.347c-8.268 0-14.971-6.717-14.971-15.002zm-81.979 126.444v-111.442h-29.942v111.442h-29.941v-126.444c0-8.286 6.703-15.002 14.971-15.002h59.883c8.268 0 14.971 6.717 14.971 15.002v126.444z"></path></svg>
                </span>
              </div>
            </div>
            <h3 className="text-[#00332D] font-semibold text-lg mb-2">Build & Deliver</h3>
            <p className="text-gray-600 text-sm">
              Our skilled team gets to work, keeping you informed every step of the way. We wrap up with a final walkthrough and present you a build you’ll be proud to call yours.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="bg-[#e3bd66] text-black font-semibold px-6 py-3 rounded-full text-sm shadow hover:bg-lime-300 transition">
            SCHEDULE A FREE CONSULTATION
          </button>
        </div>
      </section>
    </>
  );
}
