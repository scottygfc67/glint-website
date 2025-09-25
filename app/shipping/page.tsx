import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function ShippingPage() {
  return (
    <>
      <PageHero
        title="Shipping Information"
        subtitle="Fast, secure delivery worldwide"
        description="Choose from our range of shipping options to get your GLINT Eye Glow Serum delivered quickly and safely."
      />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Shipping Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12" style={{ color: '#4A6B8A' }}>Shipping Options</h2>
            
            <div className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2" style={{ borderColor: '#4A6B8A' }}>
                    <th className="text-left py-4 px-2 font-semibold text-gray-900">Service</th>
                    <th className="text-left py-4 px-2 font-semibold text-gray-900">Delivery Time</th>
                    <th className="text-left py-4 px-2 font-semibold text-gray-900">Service Type</th>
                    <th className="text-right py-4 px-2 font-semibold text-gray-900">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-2">
                      <div className="font-semibold text-gray-900">UK Next Day</div>
                    </td>
                    <td className="py-4 px-2 text-gray-600">Next working day</td>
                    <td className="py-4 px-2 text-gray-500 text-sm">Royal Mail Special Delivery</td>
                    <td className="py-4 px-2 text-right">
                      <span className="text-xl font-bold" style={{ color: '#4A6B8A' }}>£5.99</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-2">
                      <div className="font-semibold text-gray-900">UK Standard</div>
                    </td>
                    <td className="py-4 px-2 text-gray-600">2-3 working days</td>
                    <td className="py-4 px-2 text-gray-500 text-sm">Royal Mail Tracked</td>
                    <td className="py-4 px-2 text-right">
                      <span className="text-xl font-bold" style={{ color: '#4A6B8A' }}>£3.99</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-2">
                      <div className="font-semibold text-gray-900">International Standard</div>
                    </td>
                    <td className="py-4 px-2 text-gray-600">3-7 business days</td>
                    <td className="py-4 px-2 text-gray-500 text-sm">Tracked & Insured</td>
                    <td className="py-4 px-2 text-right">
                      <span className="text-xl font-bold" style={{ color: '#4A6B8A' }}>£5.99</span>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-2">
                      <div className="font-semibold text-gray-900">USA Standard</div>
                    </td>
                    <td className="py-4 px-2 text-gray-600">3-7 business days</td>
                    <td className="py-4 px-2 text-gray-500 text-sm">Express International</td>
                    <td className="py-4 px-2 text-right">
                      <span className="text-xl font-bold" style={{ color: '#4A6B8A' }}>£9.99</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Special Offer */}
          <div className="p-8 mb-16 rounded-lg" style={{ backgroundColor: '#4A6B8A', color: 'white' }}>
            <h3 className="text-2xl font-bold mb-4">Special Offer</h3>
            <p className="text-xl">
              Get <strong>2 serums for £29.99</strong> + <strong>FREE worldwide shipping</strong>
            </p>
            <p className="text-blue-100 mt-2">No minimum order required for this special offer</p>
          </div>

          {/* Delivery Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12" style={{ color: '#4A6B8A' }}>Delivery Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#4A6B8A' }}>Processing Times</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Orders are processed within 24 hours of being placed. We dispatch Monday to Friday.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Orders placed after 2pm on Friday will be dispatched the following Monday.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ color: '#4A6B8A' }}>Tracking</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  You'll receive a tracking number via email once your order is dispatched.
                </p>
                <a
                  href="https://www.royalmail.com/track-your-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#B8860B' }}
                >
                  Track your package
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t pt-12" style={{ borderColor: '#4A6B8A' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#4A6B8A' }}>Need Help?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Questions about shipping? Contact our customer service team.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#4A6B8A' }}
            >
              Contact Support
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}