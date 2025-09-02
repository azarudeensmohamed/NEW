import Image from 'next/image';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    '150+ Projects',
    'Licensed & ISO Certified',
    'Experienced Team',
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 items-center gap-x-12 xl:gap-x-24">
          {/* Image Column */}
          <div className="relative w-full max-w-[546px] mx-auto lg:mx-0">
            <Image
              src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/About-Img-1.png"
              alt="Modern residential building with balconies"
              width={546}
              height={467}
              className="rounded-xl object-cover shadow-lg w-full"
            />
            <div className="hidden lg:block absolute w-[250px] h-[250px]" style={{ bottom: '-50px', right: '-50px' }}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e82ec4c5-a8da-4f17-a686-d74ff1b875b9-websitedemos-net/assets/images/About-Img-2-r8ju3n64ryxscq5glhrg9r0fv1hhjddu8ldtuerxfg-2.png?"
                alt="About Img 2"
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content Column */}
          <div>
            <p className="font-body text-primary font-medium uppercase tracking-[1px] mb-4 text-base">
              About us
            </p>
            <h2 className="font-heading text-primary font-bold text-[42px] leading-tight mb-5">
              Trusted Local Construction Partner in Austin.
            </h2>
            <p className="font-body text-muted-foreground text-base leading-[1.6] mb-8">
              At Brikly, we’re proud to serve Austin with reliable, high-quality construction services. From custom homes to commercial builds, our local expertise ensures every project is done right. We build with integrity, craftsmanship, and a commitment to your vision.
            </p>
            <ul className="space-y-3">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-primary stroke-[3px] mr-3 shrink-0" />
                  <span className="font-body text-foreground font-medium text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;