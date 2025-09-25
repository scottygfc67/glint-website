import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function MoneyBackGuaranteePage() {
  return (
    <>
      <PageHero
        title="30-Day Money-Back Guarantee"
        subtitle="We're so confident you'll love GLINT, we guarantee it!"
        description="Try GLINT risk-free for 30 days. If you're not completely satisfied, we'll refund every penny - no questions asked."
      />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-6 sm:space-y-8">
            {/* How It Works - Mobile Optimized */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">How Our Guarantee Works</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl font-bold text-gray-900">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Try GLINT</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Use GLINT for up to 30 days and see the results for yourself</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl font-bold text-gray-900">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Take Photos</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Document your results with before and after photos of your eyes</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl font-bold text-gray-900">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Get Refund</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">If not satisfied, return for a full refund - no questions asked</p>
                </div>
              </div>
            </div>

            {/* Photo Requirements - Simplified */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Photo Requirements</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Before Photos</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>Clear, well-lit photos of your under-eye area</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>Include both eyes in the frame</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>Remove makeup for accurate documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>Use natural lighting when possible</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">After Photos</h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>Take photos after 14-30 days of consistent use</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>Use the same lighting and angle as before photos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>Document any changes in dark circles or puffiness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      <span>Include close-up shots of the under-eye area</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What We're Looking For - Compact */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">What We&apos;re Looking For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-green-600 text-sm sm:text-base">✓ Positive Results</h3>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>• Reduced dark circles</li>
                    <li>• Less puffiness and swelling</li>
                    <li>• Improved skin texture</li>
                    <li>• Enhanced hydration</li>
                    <li>• Brighter, more refreshed appearance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-blue-600 text-sm sm:text-base">📸 Photo Quality</h3>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>• Clear, high-resolution images</li>
                    <li>• Consistent lighting conditions</li>
                    <li>• Same camera angle and distance</li>
                    <li>• Good contrast and visibility</li>
                    <li>• Honest representation of results</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Terms & Conditions - Simplified */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Terms & Conditions</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Guarantee is valid for 30 days from the date of delivery</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Product must be used consistently for at least 14 days before requesting a refund</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Before and after photos are required for refund processing</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Refund will be processed within 5-7 business days of photo approval</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>One guarantee per customer per product</p>
                </div>
              </div>
            </div>

            {/* How to Claim - Streamlined */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">How to Claim Your Refund</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Contact Us</h3>
                  <p className="text-xs text-gray-600">Email guarantee@glint.com with your order number</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Submit Photos</h3>
                  <p className="text-xs text-gray-600">Send your before and after photos</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Get Approved</h3>
                  <p className="text-xs text-gray-600">We&apos;ll review and approve within 48 hours</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Receive Refund</h3>
                  <p className="text-xs text-gray-600">Refund processed within 5-7 business days</p>
                </div>
              </div>
            </div>

            {/* CTA - Mobile Optimized */}
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-6 sm:p-8 text-center text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Try GLINT Risk-Free?</h2>
              <p className="text-sm sm:text-base mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">Join thousands of satisfied customers with our 30-day guarantee</p>
              <a
                href="/api/checkout?qty=1"
                className="inline-flex items-center bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors"
              >
                Order Now - Risk Free
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}