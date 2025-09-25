import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function ShippingPage() {
  return (
    <>
      <PageHero
        title="Shipping Information"
        subtitle="Fast, secure delivery with Royal Mail"
        description="We offer fast and reliable shipping across the UK with Royal Mail. Free shipping on orders over £50."
      />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-6 sm:space-y-8">
            {/* Shipping Methods */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Shipping Methods & Costs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Royal Mail 24</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Next working day delivery</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">UK Mainland</span>
                      <span className="font-semibold text-gray-900">£4.95</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Northern Ireland</span>
                      <span className="font-semibold text-gray-900">£5.95</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Scottish Highlands</span>
                      <span className="font-semibold text-gray-900">£6.95</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Royal Mail 48</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">2-3 working days delivery</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">UK Mainland</span>
                      <span className="font-semibold text-gray-900">£2.95</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Northern Ireland</span>
                      <span className="font-semibold text-gray-900">£3.95</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-600">Scottish Highlands</span>
                      <span className="font-semibold text-gray-900">£4.95</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Free Shipping */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Free Shipping</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Enjoy <strong>FREE Royal Mail 48 delivery</strong> on all orders over £50
              </p>
              <div className="bg-white rounded-lg p-4 sm:p-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">No minimum order value for free shipping on Royal Mail 24</span>
                </div>
              </div>
            </div>

            {/* Delivery Times */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Delivery Times</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl font-bold text-gray-900">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Order Processing</h3>
                  <p className="text-xs sm:text-sm text-gray-600">1-2 business days</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Royal Mail 24</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Next working day</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Royal Mail 48</h3>
                  <p className="text-xs sm:text-sm text-gray-600">2-3 working days</p>
                </div>
              </div>
            </div>

            {/* Tracking */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Track Your Order</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Once your order is dispatched, you&apos;ll receive a tracking number via email.
                You can track your package using Royal Mail&apos;s tracking service.
              </p>
              <a
                href="https://www.royalmail.com/track-your-item"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors"
              >
                Track Package
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* International Shipping */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">International Shipping</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                We currently ship to the UK only. International shipping coming soon!
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-xs sm:text-sm text-yellow-800">Sign up to our newsletter to be notified when international shipping becomes available.</span>
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