import Footer from "@/components/Footer";

export default function ReturnsPage() {
  return (
    <>
      <div className="bg-white min-h-screen pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
            <p className="text-xl text-gray-600">30-day hassle-free returns</p>
          </div>

          <div className="space-y-8">
            {/* Return Policy */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Return Policy</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">30-Day Return Window</h3>
                    <p className="text-gray-600">You have 30 days from delivery to return your order</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Unused Products Only</h3>
                    <p className="text-gray-600">Products must be unused and in original packaging</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Return Shipping</h3>
                    <p className="text-gray-600">We cover the cost of return shipping</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Return */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                  <p className="text-gray-600 text-sm">Email us at returns@glint.com with your order number</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Get Return Label</h3>
                  <p className="text-gray-600 text-sm">We&apos;ll send you a prepaid return label</p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ship & Refund</h3>
                  <p className="text-gray-600 text-sm">Send it back and receive your refund</p>
                </div>
              </div>
            </div>

            {/* Return Conditions */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Conditions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-green-600">✓ What We Accept</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Unused products in original packaging</li>
                    <li>• Products within 30 days of delivery</li>
                    <li>• Items with original tags and labels</li>
                    <li>• Products in resellable condition</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-red-600">✗ What We Don&apos;t Accept</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Used or opened products</li>
                    <li>• Items past the 30-day window</li>
                    <li>• Products without original packaging</li>
                    <li>• Items damaged by customer</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Process</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-semibold text-blue-600">1</span>
                    </div>
                    <span className="text-gray-700">We receive your return</span>
                  </div>
                  <span className="text-sm text-gray-500">1-2 days</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-semibold text-blue-600">2</span>
                    </div>
                    <span className="text-gray-700">Quality inspection</span>
                  </div>
                  <span className="text-sm text-gray-500">1-2 days</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-semibold text-green-600">3</span>
                    </div>
                    <span className="text-gray-700">Refund processed</span>
                  </div>
                  <span className="text-sm text-gray-500">3-5 days</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-700 mb-6">Have questions about returns? We&apos;re here to help!</p>
              <a 
                href="/contact" 
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Support
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
