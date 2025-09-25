"use client";

import { useCart } from "@/contexts/CartContext";
import { useLocation } from "@/contexts/LocationContext";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { location, convertPrice } = useLocation();

  if (items.length === 0) {
    return (
      <>
        {/* Hero Background */}
        <div className="relative min-h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/heroextra.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
            <div className="text-center max-w-2xl mx-auto px-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
                <svg className="mx-auto h-24 w-24 text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
                <p className="text-gray-600 text-lg mb-8">Looks like you haven&apos;t added any items to your cart yet.</p>
                <Link 
                  href="/product"
                  className="inline-flex items-center text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  Continue Shopping
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Hero Background */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/heroextra.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 min-h-screen pt-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Shopping Cart</h1>
                <p className="text-white/80 text-lg">{getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''}</p>
              </div>
              <Link 
                href="/product"
                className="text-white/80 hover:text-white transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-xl">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                        <div
                          className="w-full h-full bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: item.image ? `url('${item.image}')` : 'none',
                          }}
                        >
                          {!item.image && (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0 w-full sm:w-auto">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-base lg:text-lg">
                          {location ? convertPrice(item.price) : `£${item.price.toFixed(2)}`}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between w-full sm:w-auto space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-90 transition-colors"
                          style={{ backgroundColor: '#1E3A8A', borderColor: '#1E3A8A' }}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-12 text-center font-semibold text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-90 transition-colors"
                          style={{ backgroundColor: '#1E3A8A', borderColor: '#1E3A8A' }}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>

                        {/* Item Total */}
                        <div className="text-right sm:text-left">
                          <p className="text-lg lg:text-xl font-bold text-gray-900">
                            {location ? convertPrice(item.price * item.quantity) : `£${(item.price * item.quantity).toFixed(2)}`}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors p-2"
                          style={{ color: '#B87333' }}
                        >
                          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                    </div>
                  </div>
                ))}

                {/* Clear Cart Button */}
                <div className="text-center">
                  <button
                    onClick={clearCart}
                    className="text-white/80 hover:text-white font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1 order-first lg:order-last">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 lg:p-8 shadow-xl lg:sticky lg:top-8">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    {getTotalItems() >= 2 ? (
                      <>
                        {/* Special Deal Display */}
                        <div className="bg-gradient-to-r p-3 lg:p-4 rounded-xl mb-4"
                             style={{ backgroundColor: '#B87333', color: '#F8FBFF' }}>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                            <div>
                              <div className="font-bold text-base lg:text-lg">🎉 Special Deal!</div>
                              <div className="text-xs lg:text-sm">2+ Serums + Free Worldwide Shipping</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl lg:text-2xl font-bold">{location ? convertPrice(29.99) : "£29.99"}</div>
                              <div className="text-xs lg:text-sm line-through opacity-75">
                                {location ? convertPrice(items.reduce((total, item) => total + (item.price * item.quantity), 0)) : `£${items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}`}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm lg:text-base">
                          <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                          <span className="font-semibold">
                            {location ? convertPrice(getTotalPrice()) : `£${getTotalPrice().toFixed(2)}`}
                          </span>
                        </div>
                        
                        <div className="flex justify-between text-sm lg:text-base">
                          <span className="text-gray-600">Shipping</span>
                          <span className="font-semibold text-green-600">Free</span>
                        </div>
                        
                        <div className="border-t border-gray-300 pt-4">
                          <div className="flex justify-between text-lg lg:text-xl font-bold">
                            <span>Total</span>
                            <span>
                              {location ? convertPrice(getTotalPrice()) : `£${getTotalPrice().toFixed(2)}`}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                          <span className="font-semibold text-lg">
                            {location ? convertPrice(getTotalPrice()) : `£${getTotalPrice().toFixed(2)}`}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Shipping</span>
                          <span className="font-semibold text-gray-600">{location ? convertPrice(5.99) : "£5.99"}</span>
                        </div>
                        
                        <div className="border-t border-gray-300 pt-4">
                          <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>
                              {location ? convertPrice(getTotalPrice() + 5.99) : `£${(getTotalPrice() + 5.99).toFixed(2)}`}
                            </span>
                          </div>
                        </div>
                        
                        {/* Add more items prompt */}
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="text-sm text-blue-800">
                              <strong>Add 1 more item</strong> to get 2 serums + free worldwide shipping for just £29.99!
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="mt-6 lg:mt-8 space-y-3 lg:space-y-4">
                    <button
                      onClick={async () => {
                        try {
                          const checkoutItems = items.map(item => ({ variantId: item.variantId, quantity: item.quantity }));
                          console.log('Sending to checkout:', checkoutItems);
                          
                          const response = await fetch('/api/checkout', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ items: checkoutItems })
                          });
                          
                          if (response.ok) {
                            const data = await response.json();
                            if (data.url) {
                              window.location.href = data.url;
                            } else {
                              console.error('No URL in response:', data);
                            }
                          } else {
                            const errorData = await response.json();
                            console.error('Checkout failed:', errorData);
                          }
                        } catch (error) {
                          console.error('Checkout failed:', error);
                        }
                      }}
                      className="w-full text-white px-4 lg:px-6 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:opacity-90 transition-colors text-center"
                      style={{ backgroundColor: '#1E3A8A' }}
                    >
                      Proceed to Checkout
                    </button>
                    
                    <Link
                      href="/product"
                      className="w-full border-2 px-4 lg:px-6 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:opacity-90 transition-colors text-center block"
                      style={{ 
                        borderColor: '#B87333',
                        color: '#B87333',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#B87333';
                        e.currentTarget.style.color = '#F8FBFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#B87333';
                      }}
                    >
                      Continue Shopping
                    </Link>
                  </div>

                  <div className="mt-8 text-sm text-gray-600 space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Free shipping on orders over £50
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      30-day returns
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
