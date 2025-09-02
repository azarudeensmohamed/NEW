import Image from "next/image";
import { Building2, ScrollText, Home as HomeIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ElementType;
  link: string;
}

const servicesData: Service[] = [
  {
    title: "Residential Construction",
    description: "Custom-built homes designed with care, quality, and Austin’s unique character in mind.",
    imageUrl: "https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Service-1.png",
    icon: ScrollText,
    link: "#"
  },
  {
    title: "Commercial Buildings",
    description: "Smart, scalable commercial spaces that support growth and reflect your business values.",
    imageUrl: "https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Service-2.png",
    icon: Building2,
    link: "#"
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with modern upgrades, improved function, and fresh appeal.",
    imageUrl: "https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Service-3.png",
    icon: HomeIcon,
    link: "#"
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  const IconComponent = service.icon;
  return (
    <div className="group bg-white rounded-2xl overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="relative h-[250px] w-full">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-10 flex flex-col flex-grow">
        <div className="mb-5">
           <IconComponent className="h-[50px] w-[50px] text-primary-org" strokeWidth={1} />
        </div>
        <h4 className="font-heading text-2xl font-bold text-primary-org mb-2.5">
          {service.title}
        </h4>
        <p className="text-medium-gray text-base leading-relaxed mb-5 flex-grow">
          {service.description}
        </p>
        <a href={service.link} className="font-body text-sm font-medium uppercase tracking-[1px] text-primary-org hover:underline self-start mt-auto">
          Enquire Now
        </a>
      </div>
    </div>
  );
};


export default function Services() {
  return (
    <section className="bg-light-gray py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-dark-gray font-medium uppercase tracking-[1px] text-base">
            What We Do
          </p>
          <h2 className="font-heading font-bold text-primary-org text-[42px] leading-tight mt-4">
            Our Full-Spectrum <br /> Construction Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}