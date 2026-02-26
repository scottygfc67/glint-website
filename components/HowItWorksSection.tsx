"use client";

export type Step = {
  title: string;
  body: string;
  icon?: React.ReactNode;
};

interface HowItWorksProps {
  steps: Step[];
}

export default function HowItWorksSection({ steps }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000000' }}>
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to brighter, less puffy under-eyes
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto"
                  style={{ backgroundColor: '#B8860B' }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-4">
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: '#000000' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Results vary. Cosmetic product; not a medical treatment.
          </p>
        </div>
      </div>
    </section>
  );
}
