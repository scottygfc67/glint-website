"use client";

export type Highlight = {
  name: string;
  benefit: string;
  tag?: string;
};

interface IngredientsHighlightsProps {
  items: Highlight[];
  badges?: string[];
}

export default function IngredientsHighlights({ items, badges = [] }: IngredientsHighlightsProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000000' }}>
            Key Ingredients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clinically-proven actives that target your specific concerns
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Ingredient Name */}
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: '#000000' }}
              >
                {item.name}
              </h3>

              {/* Benefit */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.benefit}
              </p>

              {/* Learn More Link */}
              <button
                className="text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: '#B8860B' }}
                onClick={() => {
                  // Scroll to Key Ingredients in accordions
                  const element = document.getElementById('key-ingredients');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>

        {/* Dermatologist Reviewed Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200">
            <svg className="w-5 h-5 mr-2" style={{ color: '#B8860B' }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium" style={{ color: '#B8860B' }}>
              Dermatologist reviewed
            </span>
          </div>
        </div>

        {/* Badges Row */}
        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="px-8 py-4 rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#000000' }}
            onClick={() => {
              // Fire analytics event
              if (typeof window !== 'undefined') {
                window.gtag?.('event', 'cta_click', {
                  location: 'after_ingredients',
                  action: 'add_to_cart'
                });
              }
            }}
          >
            Add to Cart
          </button>
          <button
            className="px-8 py-4 rounded-full font-semibold border-2 hover:opacity-90 transition-opacity"
            style={{ 
              borderColor: '#B8860B',
              color: '#B8860B'
            }}
            onClick={() => {
              // Scroll to Product Information accordions
              const element = document.getElementById('product-info');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Full INCI List
          </button>
        </div>
      </div>
    </section>
  );
}
