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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          
          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12" style={{ color: '#000000' }}>How Our Guarantee Works</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: '#000000' }}>
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Try GLINT for 30 Days</h3>
                  <p className="text-gray-700 text-lg">Use GLINT consistently and see the results for yourself. Take your time to experience the full benefits.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}>
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Your Results</h3>
                  <p className="text-gray-700 text-lg">Take before and after photos to show us your results. This helps us understand your experience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: '#000000' }}>
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Your Money Back</h3>
                  <p className="text-gray-700 text-lg">If you're not completely satisfied, we'll refund every penny - no questions asked, no hassle.</p>
                </div>
              </div>
            </div>
          </div>



          {/* Terms & Conditions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12" style={{ color: '#000000' }}>Terms & Conditions</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <p>Guarantee is valid for 30 days from the date of delivery</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <p>Product must be used consistently for at least 14 days before requesting a refund</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <p>Before and after photos are required - clear, well-lit photos of your under-eye area with both eyes visible</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <p>After photos should be taken after 14-30 days of use with the same lighting and angle as before photos</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <p>Refund will be processed within 5-7 business days of photo approval</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                <p>One guarantee per customer per product</p>
              </div>
            </div>
          </div>

          {/* How to Claim */}
          <div className="mb-16 text-center">
            <p className="text-lg text-gray-700 mb-6">
              To submit a refund claim, simply email us with your order number and before/after photos:
            </p>
            <a
              href="mailto:guarantee@glint.com"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#000000', color: 'white' }}
            >
              Email guarantee@glint.com
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* CTA */}
          <div className="p-12 text-center rounded-lg" style={{ backgroundColor: '#000000', color: 'white' }}>
            <h2 className="text-3xl font-bold mb-6">Ready to Try GLINT Risk-Free?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">Join thousands of satisfied customers with our 30-day guarantee</p>
            <a
              href="/api/checkout?qty=1"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#B8860B', color: 'white' }}
            >
              Order Now - Risk Free
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}