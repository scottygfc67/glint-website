import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function FAQPage() {
  const faqs = [
    {
      category: "Product & Usage",
      questions: [
        {
          q: "How do I use GLINT Eye Glow Serum?",
          a: "Apply a small amount to your under-eye area using the cooling metallic roller. Use morning and evening for best results. The roller provides instant cooling relief and helps with product absorption."
        },
        {
          q: "How long does one bottle last?",
          a: "One 8ml bottle typically lasts 2-3 months with daily use. A little goes a long way - just 2-3 drops per application is sufficient."
        },
        {
          q: "Can I use this with other skincare products?",
          a: "Yes! GLINT Eye Glow Serum can be used alongside your existing skincare routine. Apply after cleansing and before moisturizer for best results."
        },
        {
          q: "Is this suitable for sensitive skin?",
          a: "Absolutely! Our formula is hypoallergenic and dermatologist-tested. However, we always recommend doing a patch test first if you have very sensitive skin."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How long does shipping take?",
          a: "We ship via Royal Mail with two options: Royal Mail 24 (next working day) and Royal Mail 48 (2-3 working days). Free shipping on orders over £50."
        },
        {
          q: "Do you ship internationally?",
          a: "Currently we only ship within the UK. International shipping is coming soon - sign up to our newsletter to be notified!"
        },
        {
          q: "Can I track my order?",
          a: "Yes! You'll receive a tracking number via email once your order is dispatched. You can track your package using Royal Mail's tracking service."
        },
        {
          q: "What if my package is lost or damaged?",
          a: "We're fully insured with Royal Mail. If your package is lost or damaged in transit, we'll send a replacement immediately at no cost to you."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for unused products in original packaging. Returns are free and we'll process your refund within 3-5 business days."
        },
        {
          q: "How do I return an item?",
          a: "Simply email us at returns@glint.com with your order number. We'll send you a prepaid return label and instructions."
        },
        {
          q: "When will I receive my refund?",
          a: "Refunds are processed within 3-5 business days after we receive your return. You'll receive an email confirmation once processed."
        },
        {
          q: "Can I exchange for a different product?",
          a: "We don't offer direct exchanges, but you can return your item and place a new order. This ensures you get the most current pricing and availability."
        }
      ]
    },
    {
      category: "Ingredients & Safety",
      questions: [
        {
          q: "What ingredients are in GLINT Eye Glow Serum?",
          a: "Our formula contains hyaluronic acid, caffeine, vitamin C, and peptides. All ingredients are clinically proven and dermatologist-tested for safety and efficacy."
        },
        {
          q: "Is this product cruelty-free?",
          a: "Yes! GLINT is 100% cruelty-free and never tested on animals. We're proud to be certified by Leaping Bunny."
        },
        {
          q: "Is this suitable for pregnant or breastfeeding women?",
          a: "While our ingredients are generally safe, we recommend consulting with your healthcare provider before using any new skincare products during pregnancy or while breastfeeding."
        },
        {
          q: "Does this contain parabens or sulfates?",
          a: "No! Our formula is free from parabens, sulfates, phthalates, and other harsh chemicals. We use only gentle, effective ingredients."
        }
      ]
    },
    {
      category: "Results & Expectations",
      questions: [
        {
          q: "How quickly will I see results?",
          a: "Many customers notice immediate cooling relief and improved hydration. Visible improvements in dark circles and puffiness typically appear within 7-14 days of consistent use."
        },
        {
          q: "What if I don't see results?",
          a: "We're so confident in our product that we offer a 30-day money-back guarantee. If you're not satisfied, simply return the unused portion for a full refund."
        },
        {
          q: "Can I use this on other areas of my face?",
          a: "While specifically formulated for the delicate under-eye area, some customers use it on other areas. However, we recommend using it as directed for best results."
        },
        {
          q: "Should I use this every day?",
          a: "For optimal results, we recommend using GLINT twice daily - morning and evening. Consistency is key to seeing the best results."
        }
      ]
    }
  ];

  return (
    <>
      <PageHero 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about GLINT"
        description="Find answers to common questions about our products, shipping, returns, and more."
      />
      
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Still Have Questions */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-700 mb-6">Can&apos;t find what you&apos;re looking for? Our customer support team is here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Support
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a 
                  href="mailto:support@glint.com" 
                  className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Email Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
