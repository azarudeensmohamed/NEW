import React from 'react';
import { Shovel, HardHat, Building2, UserCog } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] flex flex-col">
      <div className="mb-5">
        <div className="w-16 h-16 bg-primary-grey rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h5 className="font-heading text-xl font-bold text-primary-org mb-2">
        {title}
      </h5>
      <p className="font-body text-base leading-relaxed text-medium-gray">
        {description}
      </p>
    </div>
  );
};

const WhyBriklySection = () => {
    const features = [
        {
            icon: <Shovel className="h-8 w-8 text-accent-green" />,
            title: "Local Knowledge",
            description: "Deep understanding of Austin’s codes, climate, and construction standards."
        },
        {
            icon: <HardHat className="h-8 w-8 text-accent-green" />,
            title: "Pro Team",
            description: "Skilled, certified builders and project managers committed to quality."
        },
        {
            icon: <Building2 className="h-8 w-8 text-accent-green" />,
            title: "Smart Designs",
            description: "Modern layouts and features built for comfort, function, and flow."
        },
        {
            icon: <UserCog className="h-8 w-8 text-accent-green" />,
            title: "Client Focus",
            description: "Responsive service and communication — your satisfaction is our priority."
        }
    ];

  return (
    <section className="bg-light-gray py-20 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div className="max-w-lg">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-medium-gray">
              Why Brikly
            </p>
            <h2 className="mb-5 font-heading text-[42px] font-bold leading-tight text-primary-org">
              What Sets Us Apart
            </h2>
            <p className="font-body text-lg leading-relaxed text-medium-gray">
              We’re more than just builders — we’re your trusted local partner.
              From smart design to solid delivery, every detail is handled with
              care, precision, and pride.
            </p>
          </div>

          {/* Right Column (Grid of Features) */}
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature, index) => (
                <FeatureCard 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBriklySection;