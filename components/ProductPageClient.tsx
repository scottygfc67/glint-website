"use client";

import { useState } from "react";
import AddToCart from "@/components/AddToCart";
import QuantitySelector from "@/components/QuantitySelector";
import Footer from "@/components/Footer";
import ProductReviews from "@/components/ProductReviews";

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
  
  const p = product;
  const variant = p.variants.nodes[0];
  const price = new Intl.NumberFormat("en", {
    style: "currency",
    currency: variant.price.currencyCode,
  }).format(Number(variant.price.amount));

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
                  <span className="text-4xl font-bold text-gray-900">{price}</span>
                  {p.variants.nodes[0].compareAtPrice && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        {new Intl.NumberFormat("en", {
                          style: "currency",
                          currency: p.variants.nodes[0].compareAtPrice!.currencyCode,
                        }).format(Number(p.variants.nodes[0].compareAtPrice!.amount))}
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        Save {Math.round((1 - Number(p.variants.nodes[0].price.amount) / Number(p.variants.nodes[0].compareAtPrice!.amount)) * 100)}%
                      </span>
                    </>
                  )}
                </div>
                <p className="text-lg text-gray-600">{p.description}</p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-6">
                <QuantitySelector onQuantityChange={setSelectedQuantity} />
                
                <AddToCart 
                  variantGid={variant.id}
                  title={p.title}
                  price={Number(variant.price.amount)}
                  currencyCode={variant.price.currencyCode}
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

              {/* Product Information Accordion */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-6">Product Information</h3>
                <div className="space-y-4">
                  {/* Product Details */}
                  <details className="group">
                    <summary className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-900">Product Details</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Volume:</span>
                          <span>8ml / 0.27 fl oz</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Skin Type:</span>
                          <span>All skin types</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Application:</span>
                          <span>Morning and evening</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Results:</span>
                          <span>Visible in 7 days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Packaging:</span>
                          <span>Recyclable glass bottle</span>
                        </div>
                      </div>
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
                    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                      <ul className="space-y-3">
                        {[
                          "Reduces dark circles and puffiness",
                          "Brightens and evens skin tone",
                          "Cooling metallic applicator for instant relief",
                          "Hydrates and plumps under-eye area",
                          "Clinically tested and dermatologist approved",
                          "Reduces fine lines and wrinkles",
                          "Improves skin elasticity",
                          "Non-greasy, fast-absorbing formula"
                        ].map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-3" fill="#C19477" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
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
                      <div className="space-y-4 text-sm text-gray-600">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Hyaluronic Acid</h4>
                          <p>Deeply hydrates and plumps the under-eye area, reducing the appearance of fine lines.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Caffeine</h4>
                          <p>Reduces puffiness and dark circles by constricting blood vessels and improving circulation.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Vitamin C</h4>
                          <p>Brightens skin tone and reduces hyperpigmentation for a more even complexion.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Peptides</h4>
                          <p>Stimulate collagen production to improve skin firmness and elasticity.</p>
                        </div>
                      </div>
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
                      <ol className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 mr-3">1</span>
                          <span>Cleanse your face and pat dry</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 mr-3">2</span>
                          <span>Apply a small amount to the under-eye area using the metallic rollerball</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 mr-3">3</span>
                          <span>Gently roll from the inner corner to the outer corner of the eye</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 mr-3">4</span>
                          <span>Pat gently with your ring finger to help absorption</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 mr-3">5</span>
                          <span>Use morning and evening for best results</span>
                        </li>
                      </ol>
                    </div>
                  </details>

                  {/* Clinical Studies */}
                  <details className="group">
                    <summary className="flex justify-between items-center w-full p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-900">Clinical Studies</span>
                      <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="space-y-4 text-sm text-gray-600">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">Study Results (4 weeks)</h4>
                          <ul className="space-y-1">
                            <li>• 94% of participants saw reduced puffiness</li>
                            <li>• 89% noticed brighter under-eye area</li>
                            <li>• 87% reported smoother skin texture</li>
                            <li>• 92% would recommend to others</li>
                          </ul>
                        </div>
                        <p className="text-xs text-gray-500">*Results based on clinical study of 100 participants over 4 weeks</p>
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
                      <div className="space-y-4 text-sm text-gray-600">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Shipping</h4>
                          <ul className="space-y-1">
                            <li>• Free shipping on orders over £50</li>
                            <li>• Standard delivery: 2-3 business days</li>
                            <li>• Express delivery: Next day (available)</li>
                            <li>• International shipping available</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Returns</h4>
                          <ul className="space-y-1">
                            <li>• 30-day money-back guarantee</li>
                            <li>• Free returns within UK</li>
                            <li>• Unused products only</li>
                            <li>• Contact support for return label</li>
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
      
      {/* Product Reviews Section */}
      <ProductReviews />
      
      <Footer />
    </>
  );
}
