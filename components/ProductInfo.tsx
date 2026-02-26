"use client";

import { useState } from 'react';
import { productInfoData } from '@/lib/productData';

interface ProductInfoProps {
  // No props needed - using data from lib
}

export default function ProductInfo({}: ProductInfoProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderContent = (id: string) => {
    const data = productInfoData[id as keyof typeof productInfoData];
    if (!data) return null;

    switch (id) {
      case 'product-details':
        return (
          <div className="space-y-4 text-gray-600">
            {(data as typeof productInfoData['product-details']).sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-2">{section.label}</h4>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        );

      case 'key-benefits':
        return (
          <ul className="space-y-3 text-gray-600">
            {(data as typeof productInfoData['key-benefits']).benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#B8860B' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        );

      case 'key-ingredients':
        return (
          <div className="space-y-4 text-gray-600">
            <div className="grid md:grid-cols-2 gap-4">
              {(data as typeof productInfoData['key-ingredients']).ingredients.map((ingredient, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-2">{ingredient.name}</h4>
                  <p>{ingredient.description}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Also contains:</h4>
              <p>{(data as typeof productInfoData['key-ingredients']).additional}</p>
            </div>
          </div>
        );

      case 'how-to-use':
        return (
          <ol className="space-y-3 text-gray-600">
            {(data as typeof productInfoData['how-to-use']).steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 mr-3">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        );

      case 'clinicals':
        return (
          <div className="space-y-4 text-gray-600">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">{(data as typeof productInfoData['clinicals']).study.description}</h4>
              <ul className="space-y-2">
                {(data as typeof productInfoData['clinicals']).study.results.map((result, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2" style={{ color: '#B8860B' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-500">{(data as typeof productInfoData['clinicals']).study.disclaimer}</p>
          </div>
        );

      case 'shipping-returns':
        return (
          <div className="space-y-4 text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Shipping</h4>
              <ul className="space-y-1">
                {(data as typeof productInfoData['shipping-returns']).shipping.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Returns</h4>
              <ul className="space-y-1">
                {(data as typeof productInfoData['shipping-returns']).returns.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="product-info" className="py-12 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000000' }}>
            Product Information
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about GLINT Eye Glow Serum
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {Object.entries(productInfoData).map(([id, data]) => {
            const isOpen = openSections.has(id);
            
            return (
              <div key={id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ '--tw-ring-color': '#000000' } as React.CSSProperties}
                  onClick={() => toggleSection(id)}
                  aria-expanded={isOpen}
                  aria-controls={`content-${id}`}
                >
                  <h3 
                    className="text-lg font-semibold"
                    style={{ color: '#000000' }}
                  >
                    {data.title}
                  </h3>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {isOpen && (
                  <div
                    id={`content-${id}`}
                    className="px-6 pb-6"
                    role="region"
                    aria-labelledby={`heading-${id}`}
                  >
                    {renderContent(id)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
