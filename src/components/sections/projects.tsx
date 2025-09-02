import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <section className="bg-background px-6 py-16 md:px-12 lg:px-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <p className="font-body text-primary font-medium uppercase text-sm tracking-[1.4px] mb-4">
              Our Projects
            </p>
            <h2
              className="font-heading text-primary font-bold text-[42px] md:text-[50px] leading-[1.2] md:leading-[60px]"
              dangerouslySetInnerHTML={{ __html: 'Built to Last.<br>Designed to Inspire.' }}
            />
          </div>
          <div className="lg:w-[30%]">
            <p className="text-medium-gray text-base leading-relaxed mb-6">
              From high-end homes to modern office spaces, each Brikly project is a reflection of quality, detail, and dedication.
            </p>
            <Link
              href="#"
              className="inline-block bg-accent-gre text-primary-org font-body font-medium text-base py-[14px] px-7 rounded-full transition-colors hover:bg-primary-grey hover:text-white"
            >
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {/* Image 1: Large vertical image */}
          <div className="relative w-full md:w-[58%] lg:w-[58%] h-[300px] rounded-xl overflow-hidden">
            <Image
              src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Project-1.png"
              alt="Tall building"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>

          {/* Image 2: Right-top small vertical image */}
          <div className="relative w-full md:w-[38%] lg:w-[38%] h-[300px] rounded-xl overflow-hidden">
            <Image
              src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Project-2.png"
              alt="Apartment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 23vw"
            />
          </div>
         
          {/* Image 4: Bottom-right wide image */}
          <div className="relative w-full md:w-[38%] lg:w-[38%] h-[280px] rounded-xl overflow-hidden">
            <Image
              src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Project-2.png"
              alt="Wide angle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>

          {/* Image 5: Duplicate top image for layout completion */}
          <div className="relative w-full md:w-[58%] lg:w-[58%] h-[280px] rounded-xl overflow-hidden">
            <Image
              src="https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Project-1.png"
              alt="Modern building"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 23vw"
            />
          </div>
        </div>


      </div>
    </section>
  );
};

export default ProjectsSection;