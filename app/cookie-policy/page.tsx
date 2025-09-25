import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies"
        description="Learn about the cookies we use on our website and how you can manage your cookie preferences."
        backgroundImage="/heroextra.jpg"
      />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>What Are Cookies?</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
              <p className="text-lg">
                We use cookies and similar technologies to enhance your browsing experience, analyze 
                website traffic, and personalize content. By continuing to use our website, you consent 
                to our use of cookies as described in this policy.
              </p>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Types of Cookies We Use</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly and cannot be disabled. 
                  They enable basic functions like page navigation and access to secure areas of the website.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Session management and security</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Shopping cart functionality</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>User authentication and preferences</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Page views and user behavior tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Traffic source analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Performance monitoring and optimization</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to deliver relevant advertisements and track the effectiveness 
                  of our marketing campaigns.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Ad targeting and personalization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Campaign performance measurement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Social media integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Third-Party Cookies</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                We may use third-party services that set their own cookies on our website. 
                These services help us provide better functionality and analyze our website performance.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services We Use</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span><strong>Google Analytics:</strong> Website traffic analysis and user behavior tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span><strong>Shopify:</strong> E-commerce platform and payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span><strong>Social Media:</strong> Social sharing and integration features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span><strong>Email Marketing:</strong> Newsletter and promotional email tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Managing Your Cookie Preferences</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                You have several options for managing cookies on our website:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Browser Settings</h3>
                  <p className="text-gray-700 mb-4">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                      <span>Block all cookies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                      <span>Block third-party cookies only</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                      <span>Delete existing cookies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                      <span>Set preferences for specific websites</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cookie Consent</h3>
                  <p className="text-gray-700 mb-4">
                    When you first visit our website, you'll see a cookie consent banner. You can:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                      <span>Accept all cookies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                      <span>Customize your preferences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                      <span>Reject non-essential cookies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Impact of Disabling Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Impact of Disabling Cookies</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Please note that disabling certain cookies may affect your experience on our website:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Some features may not function properly</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>You may need to re-enter information more frequently</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Shopping cart may not remember your items</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Personalized content may not be available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Updates to This Policy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Updates to This Policy</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the updated policy on our website.
              </p>
              <p className="text-lg">
                We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <a
              href="mailto:privacy@glint.com"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#4A6B8A', color: 'white' }}
            >
              Email Privacy Team
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
