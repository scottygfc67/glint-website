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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Return Policy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12" style={{ color: '#4A6B8A' }}>Return Policy</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                We offer hassle-free returns within 30 days of delivery. Items must be unused and in original packaging. 
                Full refunds are processed within 5-7 business days to your original payment method.
              </p>
              <p className="text-lg">
                For exchanges, we offer free size or color changes within 30 days of purchase. 
                Simply contact us and we'll send you a prepaid return label along with your new item.
              </p>
            </div>
          </div>

          {/* How to Return */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12" style={{ color: '#4A6B8A' }}>How to Return an Item</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}>
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
                  <p className="text-gray-700 text-lg">Email returns@glint.com with your order number and reason for return</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}>
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Return Label</h3>
                  <p className="text-gray-700 text-lg">We'll send you a prepaid return label via email</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}>
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Package Securely</h3>
                  <p className="text-gray-700 text-lg">Pack the unused item in its original packaging and seal securely</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}>
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Send Back</h3>
                  <p className="text-gray-700 text-lg">Drop off at any Royal Mail location using the prepaid label</p>
                </div>
              </div>
            </div>
          </div>

          {/* Return Conditions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12" style={{ color: '#4A6B8A' }}>Return Conditions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-3 text-green-600">✓</span>
                  Accepted Returns
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Unused products in original packaging</li>
                  <li>• Items with manufacturing defects</li>
                  <li>• Wrong items sent by mistake</li>
                  <li>• Damaged items during shipping</li>
                  <li>• Change of mind within 30 days</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-3 text-red-600">✗</span>
                  Not Accepted
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Used or opened products</li>
                  <li>• Items damaged by customer</li>
                  <li>• Returns after 30 days</li>
                  <li>• Items without original packaging</li>
                  <li>• Personalized or custom items</li>
                </ul>
              </div>
            </div>
          </div>


          {/* Contact */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Need Help?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Questions about returns? Contact our support team.
            </p>
            <a
              href="mailto:returns@glint.com"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#4A6B8A', color: 'white' }}
            >
              Email Returns Support
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}