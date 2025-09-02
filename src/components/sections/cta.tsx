import React from 'react';

const CtaSection = () => {
  const backgroundImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e82ec4c5-a8da-4f17-a686-d74ff1b875b9-websitedemos-net/assets/images/CTA-Image-14.png?";

  return (
    <section
      className="bg-primary-medium bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="max-w-3xl text-center text-white lg:text-left">
            <h3 className="font-heading text-[32px] font-bold leading-tight">
              Let’s Build Your Dream Home.
            </h3>
            <p className="mt-4 font-body text-base leading-[1.6] text-white/80">
              Whether it’s a new build, a remodel, or just an idea — we’re here to help bring it to life. Let’s talk and explore how Brikly can make it happen.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#"
              className="inline-block rounded-full bg-accent-org px-8 py-4 font-body text-base font-medium uppercase text-primary-org transition-opacity duration-300 hover:opacity-90"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;