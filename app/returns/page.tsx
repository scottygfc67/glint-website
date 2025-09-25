import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function ReturnsPage() {
  return (
    <>
      <PageHero
        title="Returns & Exchanges"
        subtitle="Easy returns within 30 days"
        description="Not completely satisfied? We offer hassle-free returns and exchanges within 30 days of purchase."
      />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-6 sm:space-y-8">
            {/* Return Policy Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Return Policy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">30-Day Return Window</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">Returns accepted within 30 days of delivery</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    <li>• Items must be unused and in original packaging</li>
                    <li>• Original receipt or order number required</li>
                    <li>• Return shipping costs covered by customer</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Refund Process</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">Full refund processed within 5-7 business days</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    <li>• Refund issued to original payment method</li>
                    <li>• Processing time: 5-7 business days</li>
                    <li>• Email confirmation sent when processed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Return */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">How to Return an Item</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Contact Us</h3>
                  <p className="text-xs text-gray-600">Email returns@glint.com with your order number</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Get Label</h3>
                  <p className="text-xs text-gray-600">We&apos;ll send you a prepaid return label</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Package Item</h3>
                  <p className="text-xs text-gray-600">Pack item securely in original packaging</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Send Back</h3>
                  <p className="text-xs text-gray-600">Drop off at any Royal Mail location</p>
                </div>
              </div>
            </div>

            {/* Return Conditions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Return Conditions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 text-green-600">✓ Accepted Returns</h3>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>• Unused products in original packaging</li>
                    <li>• Items with manufacturing defects</li>
                    <li>• Wrong items sent by mistake</li>
                    <li>• Damaged items during shipping</li>
                    <li>• Change of mind within 30 days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 text-red-600">✗ Not Accepted</h3>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                    <li>• Used or opened products</li>
                    <li>• Items damaged by customer</li>
                    <li>• Returns after 30 days</li>
                    <li>• Items without original packaging</li>
                    <li>• Personalized or custom items</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exchanges */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Exchanges</h2>
              <div className="bg-white rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Size or Color Exchanges</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Need a different size or color? We offer free exchanges within 30 days of purchase.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Contact us at exchanges@glint.com with your order number</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>Specify the size or color you&apos;d like to exchange for</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>We&apos;ll send you a prepaid return label and new item</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-1">•</span>
                    <span>No additional charges for size/color exchanges</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Need Help?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Returns & Exchanges</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">Email: returns@glint.com</p>
                  <p className="text-xs sm:text-sm text-gray-500">Response time: Within 24 hours</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">General Support</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">Email: support@glint.com</p>
                  <p className="text-xs sm:text-sm text-gray-500">Response time: Within 24 hours</p>
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