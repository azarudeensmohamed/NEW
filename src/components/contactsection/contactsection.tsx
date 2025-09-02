import React from 'react';
import Link from 'next/link';

export default function ContactSection() {
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
        style={{ backgroundImage: "url('https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/g750f4e4972a757b7758f8b94ce36566d7356209e6599c47782275f165df3e8e46d67f0e81a2f6e1ebb29c81b74f4d3dd_640-5713016.jpg')" }}
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
<section className="bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side Text */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-[#00332D] uppercase mb-2">We’re Here to Help</p>
          <h2 className="text-4xl font-bold text-[#00332D] mb-4">Let’s Talk About<br />Your Next Build!</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form, give us a call, or stop by our office in Austin. Let’s start building something great together.
          </p>
          {/* Google Reviews */}
          <div className="flex items-center gap-2 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><g clip-path="url(#clip0_2072_1161)"><path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="#5C5560"></path><path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="#EEEEEE"></path><path d="M55.8967 25.0762H44.8789H30.5794V35.5032H44.6732C43.4047 38.889 40.9962 41.7174 37.9146 43.5247C35.5932 44.8874 32.8879 45.668 30.0002 45.668C23.2821 45.668 17.5515 41.4392 15.3256 35.4987C14.6826 33.7884 14.3322 31.9347 14.3322 29.9999C14.3322 28.2172 14.6305 26.504 15.178 24.9081C17.2922 18.7547 23.1301 14.332 30.0002 14.332C33.0428 14.332 35.8828 15.1994 38.2853 16.7013L46.824 9.7108C42.2592 5.92095 36.3955 3.64294 30.0002 3.64294C19.8137 3.64294 10.9768 9.42123 6.5901 17.8788C4.70596 21.5078 3.64307 25.6293 3.64307 30.0001C3.64307 34.5199 4.7799 38.7732 6.78428 42.4907C11.236 50.7468 19.9628 56.3572 30.0002 56.3572C36.2462 56.3572 41.984 54.185 46.5009 50.5543C51.1453 46.8208 54.4978 41.5451 55.781 35.5032C56.159 33.7277 56.3573 31.887 56.3573 30.0001C56.3573 28.3172 56.1994 26.6706 55.8967 25.0762Z" fill="#FBBB00"></path><path d="M46.4994 50.5528L46.5009 50.5543C41.9839 54.1849 36.2462 56.3571 30.0001 56.3571C19.9627 56.3571 11.2359 50.7469 6.78418 42.4907L15.3256 35.4988C17.5515 41.4392 23.282 45.6681 30.0002 45.6681C32.8879 45.6681 35.5932 44.8875 37.9146 43.5247L46.4994 50.5528Z" fill="#28B446"></path><path d="M55.8965 25.0762C56.1992 26.6706 56.3571 28.3172 56.3571 30C56.3571 31.887 56.1587 33.7277 55.7807 35.5032C54.4977 41.545 51.145 46.8208 46.5007 50.5543L46.4991 50.5527L37.9142 43.5247C40.996 41.7173 43.4043 38.8889 44.6729 35.5032H30.5791V25.0762H44.8787H55.8965Z" fill="#518EF8"></path><path d="M46.8236 9.71091L38.2851 16.7014C35.8825 15.1995 33.0427 14.3321 29.9999 14.3321C23.1297 14.3321 17.292 18.7549 15.1777 24.9083L6.59137 17.8788H6.58984C10.9765 9.42123 19.8133 3.64294 29.9999 3.64294C36.3952 3.64294 42.2589 5.92095 46.8236 9.71091Z" fill="#FC3F1D"></path></g><defs><clipPath id="clip0_2072_1161"><rect width="60" height="60" fill="white"></rect></clipPath></defs></svg>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">260+</span> reviews (4.8 of 5)
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-xl p-12 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 p-6">
            <input type="text" placeholder="First Name*" className="border rounded-md px-4 py-2 w-full" />
            <input type="text" placeholder="Last Name*" className="border rounded-md px-4 py-2 w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 p-6">
            <input type="email" placeholder="Email*" className="border rounded-md px-4 py-2 w-full" />
            <input type="tel" placeholder="Phone Number*" className="border rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-2 p-6">
            <textarea placeholder="Your Message*" className="border rounded-md px-4 py-4 w-full h-32 resize-none" />
          </div>
          <div className="mb-2 p-6">
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-6 p-6 rounded-full">
            SUBMIT
          </button>
          </div>
        </div>
      </div>
</section>
    <div className="bg-white">
      {/* Contact Section */}

      {/* Location Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-600 uppercase">We Are Here</p>
          <h2 className="text-3xl font-bold text-[#00332D]">Find us on Google</h2>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10 text-center">
          <div className="bg-white shadow-md rounded-xl p-6">
            <div className="text-green-600 text-2xl mb-2">📍</div>
            <h4 className="font-semibold text-gray-800">Address</h4>
            <p className="text-gray-600 text-sm">Chicago Heights, TX 60411</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <div className="text-green-600 text-2xl mb-2">✉️</div>
            <h4 className="font-semibold text-gray-800">Send Email</h4>
            <p className="text-gray-600 text-sm">info@qbkly.com</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <div className="text-green-600 text-2xl mb-2">📞</div>
            <h4 className="font-semibold text-gray-800">Call us</h4>
            <p className="text-gray-600 text-sm">+088 (246) 642-8710</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <div className="text-green-600 text-2xl mb-2">📲</div>
            <h4 className="font-semibold text-gray-800">Follow us</h4>
            <div className="flex justify-center gap-3 mt-2 text-gray-500 text-xl">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="max-w-6xl mx-auto mt-5">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62206.164853205366!2d80.14594856023115!3d12.979187139313408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9ff2065a3b%3A0x66435015604038cc!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756635313932!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}}  loading="lazy" ></iframe>      </div>
      </div>
    </div>
  </>
  );

}