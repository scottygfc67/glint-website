
"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useLocation } from "@/contexts/LocationContext";
import { BASE_PRICE_GBP, SPECIAL_DEAL_PRICE_GBP } from "@/lib/pricing";

interface ProductCardProps {
  product?: {
    title: string;
    description: string;
    featuredImage?: {
      url: string;
      altText: string | null;
    };
    variants?: { 
      nodes: { 
        id: string; 
        price: { amount: string; currencyCode: string };
        compareAtPrice?: { amount: string; currencyCode: string } | null;
      }[] 
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(2); // Default to 2 bottles (best value)
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { location, convertPrice } = useLocation();
  
  const title = product?.title || "GLINT Eye Glow Serum";
  const description = product?.description || "Cooling rollerball brightens, hydrates and depuffs. 10 ml / 0.33 fl oz.";
  const imageUrl = product?.featuredImage?.url || "/hero.png";
  const imageAlt = product?.featuredImage?.altText || "GLINT serum";
  
  // Use localized pricing
  const basePrice = BASE_PRICE_GBP;
  const specialDealPrice = SPECIAL_DEAL_PRICE_GBP;
  const compareAtPriceAmount = basePrice * 1.5;
  
  const localizedPrice = location ? convertPrice(basePrice) : `£${basePrice.toFixed(2)}`;
  const localizedSpecialPrice = location ? convertPrice(specialDealPrice) : `£${specialDealPrice.toFixed(2)}`;
  const localizedComparePrice = location ? convertPrice(compareAtPriceAmount) : `£${compareAtPriceAmount.toFixed(2)}`;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
               style={{ backgroundColor: '#000000', color: '#F8FBFF' }}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Clinically Proven Results
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your
            <span className="block" style={{color: '#B8860B'}}>
              Under-Eye Area
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of advanced skincare technology with our revolutionary eye glow serum
          </p>
        </div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Product Image */}
          <div className="relative group">
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <div className="relative">
                <div
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat aspect-square"
                  style={{
                    backgroundImage: `url('${imageUrl}')`,
                  }}
                />
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  BESTSELLER
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">{title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {description}
              </p>
              
              {/* Price */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl font-bold text-gray-900">{localizedPrice}</span>
                <span className="text-2xl text-gray-400 line-through">{localizedComparePrice}</span>
                <span className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#B8860B', color: '#F8FBFF' }}>
                  SAVE {Math.round((1 - basePrice / compareAtPriceAmount) * 100)}%
                </span>
              </div>
            </div>

            {/* Quantity Upsell Selector */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 text-center">Choose Your Package</h4>
              <div className="space-y-3">
                <div 
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                    selectedQuantity === 1 
                      ? 'border-[#000000] bg-white/50' 
                      : 'bg-white/50 border-gray-200 hover:border-[#000000]'
                  }`}
                  onClick={() => setSelectedQuantity(1)}
                >
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      name="quantity" 
                      value="1" 
                      checked={selectedQuantity === 1}
                      onChange={() => setSelectedQuantity(1)}
                      className="w-4 h-4"
                      style={{ accentColor: '#000000' }} 
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Single Bottle</div>
                      <div className="text-sm text-gray-600">Perfect for trying GLINT</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{localizedPrice}</div>
                    <div className="text-sm text-gray-500">per bottle</div>
                  </div>
                </div>
                
                <div 
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors cursor-pointer relative ${
                    selectedQuantity === 2 
                      ? 'border-[#000000] bg-white/50' 
                      : 'bg-white/50 border-gray-200 hover:border-[#000000]'
                  }`}
                  onClick={() => setSelectedQuantity(2)}
                >
                  <div className="absolute -top-2 -right-2 text-white text-xs font-bold px-2 py-1 rounded-full"
                       style={{ backgroundColor: '#B8860B' }}>
                    BEST VALUE
                  </div>
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      name="quantity" 
                      value="2" 
                      checked={selectedQuantity === 2}
                      onChange={() => setSelectedQuantity(2)}
                      className="w-4 h-4"
                      style={{ accentColor: '#000000' }} 
                    />
                    <div>
                      <div className="font-semibold text-gray-900">2 Bottles</div>
                      <div className="text-sm text-gray-600">Most Popular Choice</div>
                      <div className="text-xs text-green-600 font-medium mt-1">+ Free Worldwide Shipping</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400 line-through">{localizedComparePrice}</span>
                      <span className="text-2xl font-bold text-gray-900">{localizedSpecialPrice}</span>
                    </div>
                    <div className="text-sm text-gray-500">total</div>
                  </div>
                </div>
                
                <div 
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors cursor-pointer ${
                    selectedQuantity === 3 
                      ? 'border-[#000000] bg-white/50' 
                      : 'bg-white/50 border-gray-200 hover:border-[#000000]'
                  }`}
                  onClick={() => setSelectedQuantity(3)}
                >
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      name="quantity" 
                      value="3" 
                      checked={selectedQuantity === 3}
                      onChange={() => setSelectedQuantity(3)}
                      className="w-4 h-4"
                      style={{ accentColor: '#000000' }} 
                    />
                    <div>
                      <div className="font-semibold text-gray-900">3 Bottles</div>
                      <div className="text-sm text-gray-600">Save 20% + Free Shipping</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">£60.00</div>
                    <div className="text-sm text-gray-500">total</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const variant = product?.variants?.nodes?.[0];
                  if (variant) {
                    addItem({
                      variantId: variant.id,
                      title: title,
                      price: Number(variant.price.amount),
                      currencyCode: variant.price.currencyCode,
                      image: imageUrl,
                      quantity: selectedQuantity,
                    });
                    setAdded(true);
                    setTimeout(() => setAdded(false), 2000);
                  }
                }}
                className={`flex-1 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center ${
                  added
                    ? "bg-green-600 text-white"
                    : "text-white hover:opacity-90"
                }`}
                style={!added ? { backgroundColor: '#000000' } : {}}
              >
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
              <a 
                href={`/api/checkout?qty=${selectedQuantity}`}
                className="flex-1 border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center hover:opacity-90"
                style={{ 
                  borderColor: '#B8860B',
                  color: '#B8860B',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8860B';
                  e.currentTarget.style.color = '#F8FBFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#B8860B';
                }}
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-gray-900 mb-2">7 Days</div>
            <div className="text-gray-600">Visible Results</div>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
