import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us"
        description="Learn how we collect, use, and protect your personal information when you use our services."
        backgroundImage="/heroextra.jpg"
      />

      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Introduction</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                At GLINT, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or make a purchase.
              </p>
              <p className="text-lg">
                By using our website, you consent to the data practices described in this policy. If you do not agree 
                with the terms of this Privacy Policy, please do not access the site.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Information We Collect</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Register for an account or make a purchase</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Subscribe to our newsletter or marketing communications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Contact us with questions or feedback</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                    <span>Participate in surveys or promotions</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  This information may include your name, email address, phone number, billing address, 
                  shipping address, payment information, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  When you visit our website, we automatically collect certain information about your device and usage:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>IP address and location data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Browser type and version</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Operating system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Pages visited and time spent on our site</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                    <span>Referring website information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>How We Use Your Information</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Processing and fulfilling your orders</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Providing customer support and responding to inquiries</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Sending you marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Improving our website and services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Preventing fraud and ensuring security</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Complying with legal obligations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Information Sharing</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                  <span>With service providers who assist us in operating our website and conducting business</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                  <span>When required by law or to protect our rights and safety</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                  <span>With your explicit consent</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#B8860B' }}></div>
                  <span>In connection with a business transfer or acquisition</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Data Security</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet or electronic storage is 100% secure.
              </p>
              <p className="text-lg">
                We use industry-standard encryption and security protocols to safeguard your data, including SSL encryption 
                for all data transmission and secure payment processing through trusted third-party providers.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Your Rights</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Right to access your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Right to correct inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Right to delete your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Right to restrict processing of your information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Right to data portability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: '#4A6B8A' }}></div>
                  <span>Right to object to processing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#4A6B8A' }}>Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
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
