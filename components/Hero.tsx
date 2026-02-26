"use client";

interface HeroProps {
  product?: {
    title: string;
    variants: { 
      nodes: { 
        id: string; 
        price: { amount: string; currencyCode: string };
        compareAtPrice?: { amount: string; currencyCode: string } | null;
      }[] 
    };
  };
}

export default function Hero({ product }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center -mt-20 pt-20 sm:pt-36">
      {/* Hero image only - text is on the image */}
      <div className="absolute inset-0 h-full w-full">
        <img 
          src="/hero.png" 
          alt="GLINT Eye Glow Serum" 
          className="hero-image w-full h-full object-cover object-center"
        />
        <style jsx>{`
          @media (max-width: 767px) {
            .hero-image {
              object-position: calc(50% - 200px) calc(50% + 150px);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
