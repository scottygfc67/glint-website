import Footer from "@/components/Footer";

export default function ShippingPage() {
  return (
    <>
      <div className="bg-white min-h-screen pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
            <p className="text-xl text-gray-600">Fast, secure delivery with Royal Mail</p>
          </div>

          <div className="space-y-8">
            {/* Shipping Methods */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Methods & Costs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Royal Mail 24</h3>
                  <p className="text-gray-600 mb-4">Next working day delivery</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>UK Mainland</span>
                      <span className="font-semibold">£4.95</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Northern Ireland</span>
                      <span className="font-semibold">£5.95</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scottish Highlands</span>
                      <span className="font-semibold">£6.95</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Royal Mail 48</h3>
                  <p className="text-gray-600 mb-4">2-3 working days delivery</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>UK Mainland</span>
                      <span className="font-semibold">£2.95</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Northern Ireland</span>
                      <span className="font-semibold">£3.95</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scottish Highlands</span>
                      <span className="font-semibold">£4.95</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Free Shipping */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Shipping</h2>
              <p className="text-lg text-gray-700 mb-4">
                Enjoy <strong>FREE Royal Mail 48 delivery</strong> on all orders over £50
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No minimum order value for free shipping on Royal Mail 24</span>
                </div>
              </div>
            </div>

            {/* Delivery Times */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Times</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
                  <p className="text-gray-600">1-2 business days</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Royal Mail 24</h3>
                  <p className="text-gray-600">Next working day</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Royal Mail 48</h3>
                  <p className="text-gray-600">2-3 working days</p>
                </div>
              </div>
            </div>

            {/* Tracking */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Track Your Order</h2>
              <p className="text-gray-700 mb-4">
                Once your order is dispatched, you'll receive a tracking number via email. 
                You can track your package using Royal Mail's tracking service.
              </p>
              <a 
                href="https://www.royalmail.com/track-your-item" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Track Package
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* International Shipping */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Shipping</h2>
              <p className="text-gray-700 mb-4">
                We currently ship to the UK only. International shipping coming soon!
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-yellow-800">Sign up to our newsletter to be notified when international shipping becomes available.</span>
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
