import Image from "next/image";

const logos = [
  {
    src: "https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Logo-1.svg",
    alt: "Logoipsum 1",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e82ec4c5-a8da-4f17-a686-d74ff1b875b9-websitedemos-net/assets/svgs/Logo-1-2.svg?",
    alt: "Logoipsum 2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e82ec4c5-a8da-4f17-a686-d74ff1b875b9-websitedemos-net/assets/svgs/Logo-3-4.svg?",
    alt: "Logoipsum 3",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e82ec4c5-a8da-4f17-a686-d74ff1b875b9-websitedemos-net/assets/svgs/Logo-4-5.svg?",
    alt: "Logoipsum 4",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e82ec4c5-a8da-4f17-a686-d74ff1b875b9-websitedemos-net/assets/svgs/Logo-5-6.svg?",
    alt: "Logoipsum 5",
  },
];

const TrustSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <p className="font-body text-primary font-medium uppercase tracking-widest text-sm">
              PROVEN & TRUSTED
            </p>
            <h2 className="mt-4">
              Backed by Results, <br /> Built on Relationships
            </h2>
            <p className="mt-6 max-w-lg">
              Brikly has become a name homeowners trust. Whether it’s new construction or custom renovation, you’re in good company when you build with Brikly. Our strong partnerships are a reflection of the confidence our clients place in us — project after project.
            </p>
            <div className="mt-12 grid grid-cols-[1fr_auto_1fr] items-start gap-x-6">
              <div className="flex flex-col">
                <p className="font-heading text-[56px] font-bold text-primary leading-none">100+</p>
                <h5 className="mt-3">Satisfied Clients</h5>
                <p className="mt-2 text-muted-foreground text-base">Over 100 projects built with trust and excellence.</p>
              </div>
              <div className="border-l border-border self-stretch"></div>
              <div className="flex flex-col">
                <p className="font-heading text-[56px] font-bold text-primary leading-none">10 Yrs.</p>
                <h5 className="mt-3">Structural Warranty</h5>
                <p className="mt-2 text-muted-foreground text-base">Structural coverage & quality you can count on.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative mt-20 lg:mt-0">
            <Image
              src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Trust-Image.png"
              alt="A happy family looking at their new home construction"
              width={546}
              height={521}
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="absolute bg-accent text-primary p-8 rounded-2xl w-auto sm:w-[220px] shadow-lg -bottom-10 -left-4 md:-left-12">
              <h5 className="font-bold">
                Long-Term <br />
                Reliability
              </h5>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-32 flex flex-wrap justify-center lg:justify-between items-center gap-x-10 gap-y-8">
          {logos.map((logo) => (
            <a href="#" key={logo.alt} className="transition-opacity duration-300 filter grayscale opacity-50 hover:filter-none hover:opacity-100">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={140} 
                height={26}
                className="h-[26px] w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;