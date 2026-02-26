"use client";

import { useState } from "react";
import AddToCart from "@/components/AddToCart";
import QuantitySelector from "@/components/QuantitySelector";
import Footer from "@/components/Footer";
import ProductReviews from "@/components/ProductReviews";
import HowItWorksSection from "@/components/HowItWorksSection";
import OverviewContent from "@/components/product/OverviewContent";
import KeyBenefitsContent from "@/components/product/KeyBenefitsContent";
import { howItWorksSteps, faqItems } from "@/lib/productData";
import { useLocation } from "@/contexts/LocationContext";
import { BASE_PRICE_GBP } from "@/lib/pricing";

interface ProductPageClientProps {
  product: {
    title: string;
    description: string;
    featuredImage?: { url: string; altText: string | null };
    variants: { 
      nodes: { 
        id: string; 
        title: string; 
        price: { amount: string; currencyCode: string };
        compareAtPrice?: { amount: string; currencyCode: string } | null;
      }[] 
    };
  };
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(2);
  const { location, convertPrice } = useLocation();
  
  const p = product;
  const variant = p.variants.nodes[0];
  
  // Use location-based pricing instead of Shopify's pricing
  const localizedPrice = location ? convertPrice(BASE_PRICE_GBP) : `£${BASE_PRICE_GBP.toFixed(2)}`;
  
  // For compare at price, we'll use a higher price (e.g., £26.99)
  const compareAtPriceGBP = BASE_PRICE_GBP * 1.35; // ~35% higher
  const localizedComparePrice = location ? convertPrice(compareAtPriceGBP) : `£${compareAtPriceGBP.toFixed(2)}`;

  return (
    <>
      <div className="bg-white pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <div
                  className="h-full w-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${p.featuredImage?.url || '/hero.png'}')`,
                  }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{p.title}</h1>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="#C19477" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(2,847 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-gray-900">{localizedPrice}</span>
                  <span className="text-2xl text-gray-400 line-through">
                    {localizedComparePrice}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                    Save 26%
                  </span>
                </div>
                <p className="text-lg text-gray-600">{p.description}</p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-6">
                <QuantitySelector onQuantityChange={setSelectedQuantity} />
                
                <AddToCart 
                  variantGid={variant.id}
                  title={p.title}
                  price={BASE_PRICE_GBP}
                  currencyCode={location?.currency || 'GBP'}
                  image={p.featuredImage?.url}
                  quantity={selectedQuantity}
                />
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free shipping on orders over $50
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    30-day returns
                  </div>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6" style={{ color: '#000000' }}>
                  Product Details
                </h3>
                
                {/* Product Information Accordions */}
                <div className="space-y-4">
                  {/* Product Details */}
                  <details className="group">
                    <summary className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-900">What it is</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4">
                      <OverviewContent />
                    </div>
                  </details>

                  {/* Key Benefits */}
                  <details className="group">
                    <summary className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-900">Key Benefits</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4">
                      <KeyBenefitsContent />
                    </div>
                  </details>

                  {/* How to Use */}
                  <details className="group">
                    <summary className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-900">How to Use</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                      <ol className="space-y-2 text-gray-600">
                        <li>1. Roll under each eye AM and/or PM on clean skin</li>
                        <li>2. Tap gently with your ring finger to help absorption</li>
                        <li>3. Wait 60 seconds before makeup</li>
                        <li>4. Pro tip: keep in the fridge for extra cooling</li>
                      </ol>
                    </div>
                  </details>

                  {/* Ingredients */}
                  <details className="group">
                    <summary className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-900">Key Ingredients</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                        <div>
                          <span className="font-medium">Caffeine (3%)</span> - Energises and de-puffs
                        </div>
                        <div>
                          <span className="font-medium">Peptide Complex</span> - Smoother, firmer appearance
                        </div>
                        <div>
                          <span className="font-medium">Niacinamide (2%)</span> - Brightens and supports barrier
                        </div>
                        <div>
                          <span className="font-medium">Hyaluronic Acid</span> - Long-lasting hydration
                        </div>
                      </div>
                    </div>
                  </details>

                  {/* Shipping & Returns */}
                  <details className="group">
                    <summary className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-900">Shipping & Returns</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="space-y-4 text-gray-600">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Shipping</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Free worldwide shipping on qualifying orders</li>
                            <li>• UK: 2-4 days, EU: 4-7 days, US: 5-8 days</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Returns</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• 30-day money-back guarantee</li>
                            <li>• See returns policy for details</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Before & After Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000000' }}>
              Real Results from Real Customers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the difference GLINT makes with consistent use. Photos unretouched; lighting matched.
            </p>
          </div>

          {/* Before & After Images */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-50 shadow-lg">
            <div className="flex">
              {/* Before Image */}
              <div className="w-1/2 relative">
                <div className="aspect-square relative">
                  <img
                    src="/before.png"
                    alt="Before using GLINT Eye Glow Serum"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-6 left-6">
                  <span 
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
                    style={{ backgroundColor: '#000000' }}
                  >
                    Before
                  </span>
                </div>
              </div>

              {/* After Image */}
              <div className="w-1/2 relative">
                <div className="aspect-square relative">
                  <img
                    src="/after.png"
                    alt="After using GLINT Eye Glow Serum for 3 weeks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-6 right-6">
                  <span 
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
                    style={{ backgroundColor: '#B8860B' }}
                  >
                    After
                  </span>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white shadow-lg"></div>
          </div>

          {/* Results Caption */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              <strong>Sarah M., Birmingham, UK</strong> — 3 weeks of AM/PM usage
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Photos unretouched; lighting matched
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              className="px-8 py-4 rounded-full font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
              style={{ backgroundColor: '#000000' }}
            >
              Buy Now
            </button>
            <button
              className="px-8 py-4 rounded-full font-semibold border-2 hover:opacity-90 transition-opacity"
              style={{ 
                borderColor: '#B8860B',
                color: '#B8860B'
              }}
              onClick={() => {
                // Scroll to How It Works section
                const element = document.getElementById('how-it-works');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See How It Works
            </button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <HowItWorksSection steps={howItWorksSteps} />
      
      {/* Simple FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000000' }}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqItems.slice(0, 6).map((item, index) => (
              <details key={index} className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
                <summary className="flex justify-between items-center w-full p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">{item.q}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Reviews Section */}
      <ProductReviews />
      
      <Footer />
    </>
  );
}
