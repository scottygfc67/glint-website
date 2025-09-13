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
    <section className="relative min-h-screen flex items-center -mt-16 pt-16">
      <img
        src="/hero.png"
        alt="GLINT Eye Glow Serum"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-6">
              <span className="inline-block text-white px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase" style={{background: 'linear-gradient(to right, #C19477, #B8865B)'}}>
                ✨ NEW ARRIVAL
              </span>
              <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="text-white drop-shadow-2xl">Eye Glow</span>
                <span className="block text-white drop-shadow-2xl">
                  Serum
                </span>
                <span className="block text-2xl lg:text-3xl font-light mt-4 tracking-wider">
                  by <span className="drop-shadow-2xl" style={{color: '#C19477'}}>GLINT</span>
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg">
                Revolutionary brightening & hydrating roller that transforms your under-eye area with clinically proven actives and cooling metallic applicator.
              </p>
            </div>

            {/* Price & Rating */}
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl lg:text-5xl font-black text-white drop-shadow-2xl">{price}</span>
                {variant?.compareAtPrice && (
                  <span className="text-2xl text-gray-300 line-through font-light">{compareAtPrice}</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 drop-shadow-lg" fill="#C19477" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-200 ml-3 text-lg font-light drop-shadow-lg">(2,847 reviews)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/api/checkout?qty=1"
                className="text-white px-10 py-5 rounded-lg font-black text-xl transition-all duration-300 text-center shadow-2xl transform hover:-translate-y-1 tracking-wide uppercase"
                style={{background: 'linear-gradient(to right, #C19477, #B8865B)'}}
              >
                Buy Now - {price}
              </a>
              <a
                href="/product"
                className="border-2 border-gray-300 text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 text-center backdrop-blur-sm bg-white/10 tracking-wide uppercase"
              >
                View Details
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border" style={{background: 'linear-gradient(to right, rgba(193, 148, 119, 0.2), rgba(184, 134, 91, 0.2))', borderColor: '#C19477'}}>
                  <svg className="w-8 h-8 drop-shadow-lg" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-200 font-bold tracking-wide uppercase drop-shadow-lg">Free Shipping</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border" style={{background: 'linear-gradient(to right, rgba(193, 148, 119, 0.2), rgba(184, 134, 91, 0.2))', borderColor: '#C19477'}}>
                  <svg className="w-8 h-8 drop-shadow-lg" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-200 font-bold tracking-wide uppercase drop-shadow-lg">30-Day Returns</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border" style={{background: 'linear-gradient(to right, rgba(193, 148, 119, 0.2), rgba(184, 134, 91, 0.2))', borderColor: '#C19477'}}>
                  <svg className="w-8 h-8 drop-shadow-lg" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-200 font-bold tracking-wide uppercase drop-shadow-lg">Clinically Tested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling Benefits Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm py-4">
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex items-center space-x-12 text-white text-sm font-medium">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Shipping on Orders Over £50</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Clinically Tested & Dermatologist Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Results Visible in 7 Days</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>100% Cruelty-Free & Vegan</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Cooling Metallic Roller Applicator</span>
              </div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-12 text-white text-sm font-medium ml-12">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Shipping on Orders Over £50</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Clinically Tested & Dermatologist Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Results Visible in 7 Days</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>100% Cruelty-Free & Vegan</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="#C19477" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Cooling Metallic Roller Applicator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
