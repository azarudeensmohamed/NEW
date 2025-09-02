import React from 'react';

const FinalCta = () => {
  return (
    <section className="bg-primary-grey py-20">
      <div className="container px-6">
        <div className="bg-accent-gre rounded-[32px] p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="text-center lg:text-left lg:w-1/2">
              <p className="text-sm font-medium uppercase tracking-[1px] text-primary-org mb-2">
                READY TO START YOUR PROJECT?
              </p>
              <h2 className="text-[42px] font-bold text-primary-org leading-[1.2]">
                From Idea to Reality,
                <br />
                Let’s Begin
              </h2>
            </div>
            <div className="text-center lg:text-left lg:w-1/2">
              <p className="text-primary-medium text-base mb-8">
                Your home should be more than a place to live — it should reflect your
                lifestyle, your values, and your dreams.
              </p>
              <a
                href="#"
                className="inline-block bg-primary-grey text-white font-medium uppercase tracking-[1px] text-base py-4 px-8 rounded-full transition-colors hover:bg-dark-gray"
              >
                LET'S TALK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;