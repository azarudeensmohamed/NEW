import type { FC } from 'react';
import Image from 'next/image';
import { Star, Quote, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  projectType: string;
  quote: string;
  customer: {
    name: string;
    imageUrl?: string;
  };
}

const testimonialsData: Testimonial[] = [
  {
    projectType: 'Residential Construction',
    quote: 'It turned our dream home into reality. The attention to detail and craftsmanship were truly outstanding.',
    customer: {
      name: 'Martin Roberts',
      imageUrl: 'https://websitedemos.net/brikly-construction-company-04/wp-content/uploads/sites/1544/2025/07/Customer-1.png',
    },
  },
  {
    projectType: 'Commercial Project',
    quote: 'Professional, punctual, and reliable — Brikly delivered our office space on time and beyond expectations.',
    customer: {
      name: 'Emily Blunt',
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e82ec4c5-a8da-4f17-a686-d74ff1b875b9-websitedemos-net/assets/images/Customer-2-4.png?',
    },
  },
  {
    projectType: 'Renovation',
    quote: 'From the first consultation to the final handover, Brikly made the process smooth and stress-free.',
    customer: {
      name: 'Sarah Johnson',
      imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e82ec4c5-a8da-4f17-a686-d74ff1b875b9-websitedemos-net/assets/images/Customer-3-5.png?',
    },
  },
];

const StarRating: FC = () => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-5 w-5 text-accent fill-accent-org" />
    ))}
  </div>
);

const TestimonialCard: FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const { projectType, quote, customer } = testimonial;
  // A generic user icon for the first testimonial since its image is missing from assets.
  const isFirstTestimonial = customer.name === 'Martin Roberts';

  return (
    <div className="bg-card text-card-foreground rounded-2xl p-10 shadow-[0_4px_34px_rgba(0,0,0,0.05)] flex flex-col h-full relative">
      <Quote className="absolute top-10 right-10 h-12 w-12 text-border fill-border/30" strokeWidth={0} />
      <div className="flex flex-col flex-grow z-10">
        <StarRating />
        <h6 className="font-heading text-base font-bold text-primary-org mt-5">
          {projectType}
        </h6>
        <p className={cn('text-body-large text-muted-foreground mt-2.5 flex-grow', 'leading-[1.6]')}>
          {quote}
        </p>
        <div className="mt-8 flex items-center gap-4">
          {isFirstTestimonial ? (
            <div className="w-[60px] h-[60px] rounded-full bg-muted flex items-center justify-center">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
          ) : (
            <Image
              src={customer.imageUrl!}
              alt={`Photo of ${customer.name}`}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
          )}
          <h6 className="font-heading text-base font-bold text-primary-org">
            {customer.name}
          </h6>
        </div>
      </div>
    </div>
  );
};

const Testimonials: FC = () => {
    return (
      <section className="bg-secondary py-24">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-body text-sm font-medium uppercase tracking-[1px] text-muted-foreground">
              Testimonials
            </p>
            <h2 className="font-heading text-[42px] leading-tight font-bold text-primary-org mt-2.5">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default Testimonials;