import Footer from "@/components/Footer";

export default function MoneyBackGuaranteePage() {
  return (
    <>
      <div className="bg-white min-h-screen pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h1>
            <p className="text-xl text-gray-600">We&apos;re so confident you&apos;ll love GLINT, we guarantee it!</p>
          </div>

          <div className="space-y-8">
            {/* Guarantee Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">100% Money-Back Guarantee</h2>
              <p className="text-lg text-gray-700 mb-6">
                Try GLINT risk-free for 30 days. If you&apos;re not completely satisfied, 
                we&apos;ll refund every penny - no questions asked.
              </p>
              <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-2xl font-bold text-blue-600 mb-2">30 Days</p>
                <p className="text-gray-600">Full refund guarantee</p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Our Guarantee Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Try GLINT</h3>
                  <p className="text-gray-600 text-sm">Use GLINT for up to 30 days and see the results for yourself</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Take Photos</h3>
                  <p className="text-gray-600 text-sm">Document your results with before and after photos of your eyes</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Get Refund</h3>
                  <p className="text-gray-600 text-sm">If not satisfied, return for a full refund - no questions asked</p>
                </div>
              </div>
            </div>

            {/* Photo Requirements */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Documentation Requirements</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Before Photos (Required)</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Take clear, well-lit photos of your under-eye area</li>
                    <li>• Include both eyes in the frame</li>
                    <li>• Remove makeup for accurate documentation</li>
                    <li>• Use natural lighting when possible</li>
                    <li>• Take photos from the same angle and distance</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">After Photos (Required)</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Take photos after 14-30 days of consistent use</li>
                    <li>• Use the same lighting and angle as before photos</li>
                    <li>• Document any changes in dark circles, puffiness, or texture</li>
                    <li>• Include close-up shots of the under-eye area</li>
                    <li>• Show the product in use if possible</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What We're Looking For */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We&apos;re Looking For</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-green-600">✓ Positive Results</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Reduced dark circles</li>
                    <li>• Less puffiness and swelling</li>
                    <li>• Improved skin texture</li>
                    <li>• Enhanced hydration</li>
                    <li>• Brighter, more refreshed appearance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-blue-600">📸 Photo Quality</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Clear, high-resolution images</li>
                    <li>• Consistent lighting conditions</li>
                    <li>• Same camera angle and distance</li>
                    <li>• Good contrast and visibility</li>
                    <li>• Honest representation of results</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Guarantee is valid for 30 days from the date of delivery</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Product must be used consistently for at least 14 days before requesting a refund</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Before and after photos are required for refund processing</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Refund will be processed within 5-7 business days of photo approval</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>One guarantee per customer per product</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>GLINT reserves the right to use anonymized photos for marketing purposes</p>
                </div>
              </div>
            </div>

            {/* How to Claim */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Claim Your Refund</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 1: Contact Us</h3>
                  <p className="text-gray-600">Email us at guarantee@glint.com with your order number and reason for return</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 2: Submit Photos</h3>
                  <p className="text-gray-600">Send your before and after photos via email or our secure upload portal</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 3: Get Approved</h3>
                  <p className="text-gray-600">Our team will review your photos and approve your refund within 48 hours</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 4: Receive Refund</h3>
                  <p className="text-gray-600">Your refund will be processed within 5-7 business days</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Try GLINT Risk-Free?</h2>
              <p className="text-lg mb-6 opacity-90">Join thousands of satisfied customers with our 30-day guarantee</p>
              <a 
                href="/api/checkout?qty=1" 
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Order Now - Risk Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
