export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "M. Thompson",
      location: "London, UK",
      timeAgo: "2 weeks ago",
      content: "Honestly wasn't expecting much but this actually works. Been using it for 3 weeks now and my under eyes look way less puffy in the morning. The roller thing is nice and cold.",
      rating: 4,
      verified: true
    },
    {
      name: "Alex K.",
      location: "Manchester, UK", 
      timeAgo: "1 month ago",
      content: "Got this after seeing it on TikTok. Takes a bit of getting used to but I can see a difference. Still have some dark circles but they're definitely lighter than before.",
      rating: 4,
      verified: true
    },
    {
      name: "Sarah M.",
      location: "Birmingham, UK",
      timeAgo: "3 weeks ago", 
      content: "Works better than the expensive stuff I was buying from Boots. The cooling effect is really nice, especially after a long day. Would recommend.",
      rating: 5,
      verified: true
    },
    {
      name: "J. Williams",
      location: "Leeds, UK",
      timeAgo: "1 week ago",
      content: "Not a miracle worker but does help with puffiness. The packaging is nice and it feels good on the skin. Worth trying if you're looking for something new.",
      rating: 3,
      verified: true
    },
    {
      name: "Emma R.",
      location: "Glasgow, UK",
      timeAgo: "2 months ago",
      content: "Been using this for 2 months now. My mum even commented that I look more awake. The rollerball is the best part - feels like a mini massage.",
      rating: 5,
      verified: true
    },
    {
      name: "Tom L.",
      location: "Bristol, UK",
      timeAgo: "5 days ago",
      content: "Decent product. Takes time to see results but I'm noticing my under eyes are less puffy. The price is reasonable compared to other eye creams.",
      rating: 4,
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Real Customer Reviews</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about GLINT Eye Glow Serum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              {/* Header with rating and verification */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {testimonial.verified && (
                  <div className="flex items-center text-xs text-green-600">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>

              {/* Review content */}
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Customer info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
                <span className="text-xs text-gray-400">{testimonial.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>2,847 verified reviews</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>4.2/5 average rating</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>30-day money back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}