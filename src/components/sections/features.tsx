import React from 'react';
import { Clock, BadgeCheck, BrickWall } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const featuresData: FeatureCardProps[] = [
  {
    icon: Clock,
    title: 'On Time\u200b',
    description: 'We respect your time with planning and predictable project timelines.\u200b',
  },
  {
    icon: BadgeCheck,
    title: ' ISO Certified\u200b',
    description: 'We respect your time with planning and predictable project timelines.\u200b',
  },
  {
    icon: BrickWall,
    title: 'Quality Materials\u200b',
    description: 'We use trusted brands and durable & materials suited for Texas conditions.\u200b',
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start gap-5">
      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary-grey">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h5 className="font-heading text-lg font-bold text-primary-org leading-none">
          {title}
        </h5>
        <p className="mt-[13px] text-base text-medium-gray leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="relative z-10 pt-[50px] -mt-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white rounded-[20px] shadow-[0px_40px_60px_-20px_rgba(10,29,66,0.1)] lg:py-[60px] lg:px-10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuresData.map((feature, index) => (
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

export default Features;