"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function QRPage() {
  const [step, setStep] = useState(1); // 1: TikTok review, 2: upload, 3: success
  const [isUploading, setIsUploading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false);
        setStep(3);
      }, 1500);
    }
  };

  const faqs = [
    {
      question: "How to find your review screenshot?",
      answer: "Go to your purchase history in TikTok Shop, find your GLINT order, and take a screenshot of your 5-star review."
    },
    {
      question: "How long does approval take?",
      answer: "Your review is verified instantly! You'll get your discount code immediately after uploading."
    },
    {
      question: "What if my review is private?",
      answer: "No problem! As long as you can see the review in your purchase history, we can verify it."
    },
    {
      question: "Can I use this code multiple times?",
      answer: "This is a one-time use code per customer. Each review gets you one discount code."
    },
    {
      question: "What if I don't have TikTok?",
      answer: "You can leave a review on our website or any other platform where you purchased GLINT, then upload a screenshot here."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6">
          <div className="flex justify-center">
            <Image 
              src="/logo.png" 
              alt="GLINT" 
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6 max-w-md mx-auto">
        {/* Step 1: TikTok Review Instructions */}
        {step === 1 && (
          <div className="space-y-8">
            {/* Main Content */}
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                
                <h1 className="text-2xl font-bold text-gray-900">
                  Post your review on TikTok Shop
                </h1>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  Thanks for trying GLINT. Leave an honest TikTok review of your purchase, upload a quick screenshot here, and we&apos;ll instantly unlock a 30% thank-you code.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Instant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">30% Off</span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900">Review</span>
                </div>
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-bold">2</span>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">Upload</span>
                </div>
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-bold">3</span>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">Get Code</span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">How to find your review:</h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 mr-3">1</span>
                  <span>Open TikTok Shop on your phone</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 mr-3">2</span>
                  <span>Go to &quot;My Orders&quot; or search &quot;GLINT Eye Glow Serum&quot;</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 mr-3">3</span>
                  <span>Find your purchase and tap &quot;Write Review&quot;</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 mr-3">4</span>
                  <span>Leave an honest review with a star rating</span>
                </li>
              </ol>
            </div>

            {/* Continue Button */}
            <div className="space-y-4">
              <button
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                I&apos;ve Posted My Review →
              </button>
            </div>

            {/* FAQ Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 text-center">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <svg 
                        className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-3 text-sm text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Image Upload */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Upload Your Review Screenshot
              </h1>
              <p className="text-gray-600 text-lg">
                Show us your 5-star review to get your discount code!
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-purple-400 transition-colors">
                <input
                  type="file"
                  id="review-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label
                  htmlFor="review-upload"
                  className="cursor-pointer block"
                >
                  <div className="text-center space-y-4">
                    <svg className="w-12 h-12 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div>
                      <p className="text-lg font-medium text-gray-900">Tap to upload</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                </label>
              </div>

              {isUploading && (
                <div className="flex items-center justify-center space-x-2 text-purple-600">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </div>
              )}

              <button
                onClick={() => setStep(1)}
                className="w-full text-gray-600 py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success with Discount Code */}
        {step === 3 && (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900">
                Thank You! 🎉
              </h1>
              
              <p className="text-gray-600 text-lg">
                Your review has been verified. Here&apos;s your exclusive discount code:
              </p>
            </div>

            {/* Discount Code Display */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 shadow-lg">
              <p className="text-white font-medium mb-4">Your Discount Code</p>
              <div className="bg-white rounded-lg p-6 border-2 border-dashed border-white/50">
                <p className="text-4xl font-black text-gray-900 tracking-wider">GLINT30</p>
                <p className="text-sm text-gray-600 mt-2">30% off your next order</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                href="/"
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Shop Now
              </Link>
              
              <button
                onClick={() => {
                  navigator.clipboard.writeText('GLINT30');
                  // You could add a toast notification here
                }}
                className="w-full text-gray-600 py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Copy Code
              </button>
            </div>

            {/* Terms */}
            <div className="text-xs text-gray-500 space-y-1">
              <p>Code expires in 30 days</p>
              <p>One use per customer</p>
              <p>Cannot be combined with other offers</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
