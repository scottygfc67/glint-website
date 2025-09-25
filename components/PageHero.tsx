interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center -mt-24 pt-40 sm:pt-32">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/heroextra.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Hero Content - Perfectly Centered */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white drop-shadow-lg">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {description}
            </p>
          )}
          
          {/* Icy Navy Button */}
          <div className="pt-4">
            <a
              href="/api/checkout?qty=1"
              className="inline-flex items-center text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:opacity-90 hover:scale-105 shadow-2xl"
              style={{ backgroundColor: '#1E3A8A' }}
            >
              Shop Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
