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
  const variant = product?.variants?.nodes?.[0];
  const price = variant ? new Intl.NumberFormat("en", {
    style: "currency",
    currency: variant.price.currencyCode,
  }).format(Number(variant.price.amount)) : "$49";
  
  const compareAtPrice = variant?.compareAtPrice ? new Intl.NumberFormat("en", {
    style: "currency",
    currency: variant.compareAtPrice.currencyCode,
  }).format(Number(variant.compareAtPrice.amount)) : "$79";
  return (
    <section className="relative min-h-screen flex items-center -mt-20 pt-36">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Iridescent Pearl Ring - subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(220,232,255,.08),transparent_60%)]"></div>
      
      {/* Hero Content - Centered */}
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase bg-black text-white border border-gray-600">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Viral on TikTok
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl">
              Eye Glow
              <span className="block text-white drop-shadow-2xl">Serum</span>
              <span className="block text-xl lg:text-2xl font-light mt-4 tracking-wider text-gray-200">
                by GLINT
              </span>
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              Revolutionary brightening & hydrating roller that transforms your under-eye area with clinically proven actives and cooling metallic applicator.
            </p>
          </div>

          {/* Price & Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl lg:text-5xl font-bold text-black drop-shadow-2xl">{price}</span>
              {variant?.compareAtPrice && (
                <span className="text-2xl text-gray-300 line-through font-light drop-shadow-lg">{compareAtPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 drop-shadow-lg" fill="white" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-200 ml-3 text-sm font-medium drop-shadow-lg">(2,847 reviews)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/api/checkout?qty=1"
              className="rounded-full px-8 py-4 bg-black text-white text-lg font-semibold transition-colors text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-0.5 focus-visible:outline-none hover:bg-gray-800"
            >
              Buy Now - {price}
            </a>
            <a
              href="/product"
              className="rounded-full px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--ink)] text-lg font-semibold transition-colors text-center backdrop-blur-sm bg-white/10"
            >
              View Details
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border-2 border-white/30 bg-white/20">
                <svg className="w-6 h-6 drop-shadow-lg" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs text-gray-200 font-semibold tracking-wide uppercase drop-shadow-lg">Free Shipping</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border-2 border-white/30 bg-white/20">
                <svg className="w-6 h-6 drop-shadow-lg" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-200 font-semibold tracking-wide uppercase drop-shadow-lg">30-Day Returns</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border-2 border-white/30 bg-white/20">
                <svg className="w-6 h-6 drop-shadow-lg" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-200 font-semibold tracking-wide uppercase drop-shadow-lg">Clinically Tested</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
