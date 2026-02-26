import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully"
        description="These terms and conditions govern your use of our website and services. By using our site, you agree to these terms."
        backgroundImage="/heroextra.jpg"
      />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Agreement to Terms</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                These Terms of Service ("Terms") govern your use of the GLINT website and services. 
                By accessing or using our website, you agree to be bound by these Terms.
              </p>
              <p className="text-lg">
                If you do not agree to these Terms, please do not use our website or services. 
                We reserve the right to modify these Terms at any time, and your continued use 
                constitutes acceptance of any changes.
              </p>
            </div>
          </div>

          {/* Use of Website */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Use of Website</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                  <span>Use the website in any way that violates applicable laws or regulations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                  <span>Transmit any harmful, threatening, or offensive content</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                  <span>Attempt to gain unauthorized access to our systems or networks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                  <span>Interfere with the proper functioning of the website</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                  <span>Use automated systems to access the website without permission</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Products and Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Products and Services</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                We offer GLINT Eye Glow Serum and related products through our website. 
                All product descriptions, images, and specifications are provided for informational purposes only.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Availability</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Products are subject to availability and may be discontinued without notice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>We reserve the right to limit quantities and refuse orders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Prices are subject to change without notice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Orders and Payment */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Orders and Payment</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                When you place an order, you agree to provide accurate and complete information. 
                We reserve the right to refuse or cancel any order at our discretion.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                      <span>Payment is required at the time of order placement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                      <span>We accept major credit cards and other payment methods as displayed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                      <span>All prices are in GBP unless otherwise specified</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Processing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                      <span>Orders are processed within 24 hours of placement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                      <span>You will receive confirmation emails for your order</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                      <span>Shipping times vary by location and service selected</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Returns and Refunds */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Returns and Refunds</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Our return and refund policy is detailed in our separate Returns Policy. 
                By making a purchase, you agree to the terms outlined in that policy.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Points</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                    <span>30-day return window from delivery date</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                    <span>Items must be unused and in original packaging</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#000000' }}></div>
                    <span>Refunds processed within 5-7 business days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Intellectual Property</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of GLINT or its licensors and is protected by copyright and other 
                intellectual property laws.
              </p>
              <p className="text-lg">
                You may not reproduce, distribute, modify, or create derivative works from any content 
                on this website without our express written permission.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Limitation of Liability</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                To the maximum extent permitted by law, GLINT shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to 
                loss of profits, data, or use, arising out of or relating to your use of our website or services.
              </p>
              <p className="text-lg">
                Our total liability to you for any claims arising from these Terms or your use of our 
                services shall not exceed the amount you paid us for the products or services in question.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Governing Law</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
                Any disputes arising from these Terms or your use of our services shall be subject to the 
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <a
              href="mailto:legal@glint.com"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#000000', color: 'white' }}
            >
              Email Legal Team
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
