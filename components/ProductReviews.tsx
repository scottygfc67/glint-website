"use client";

import { useState, useMemo } from 'react';

// Types
export type Review = {
  id: string;
  rating: 1|2|3|4|5;
  title: string;
  body: string;
  createdAt: string;
  reviewer: { 
    name: string; 
    location?: string; 
    ageRange?: "18-24"|"25-34"|"35-44"|"45-54"|"55+";
  };
  verified: boolean;
  concerns?: ("Dark circles"|"Puffiness"|"Dryness"|"Fine lines")[];
  media?: { 
    type: "image"|"video"; 
    src: string; 
    poster?: string;
  }[];
  helpfulVotes?: number;
  notHelpfulVotes?: number;
  brandReply?: { 
    body: string; 
    repliedAt: string;
  };
};

export type ReviewsPayload = {
  average: number;
  total: number;
  histogram: { stars: 1|2|3|4|5; count: number }[];
  highlights: string[];
  reviews: Review[];
};

// Dummy data
const dummyData: ReviewsPayload = {
  average: 4.7,
  total: 2847,
  histogram: [
    { stars: 5, count: 1980 },
    { stars: 4, count: 520 },
    { stars: 3, count: 200 },
    { stars: 2, count: 100 },
    { stars: 1, count: 47 }
  ],
  highlights: [
    "Cooling roller",
    "Less puffiness",
    "Fast results",
    "Goes on cold",
    "Makeup sits better",
    "Brightens dark circles",
    "Easy to use",
    "Worth the money"
  ],
  reviews: [
    {
      id: "1",
      rating: 5,
      title: "Absolutely brilliant!",
      body: "I've been using this for 3 weeks now and the difference is incredible. My dark circles have definitely improved and the cooling roller feels so refreshing in the morning. My makeup sits so much better now too. Definitely worth the money!",
      createdAt: "2024-01-15T10:30:00Z",
      reviewer: { name: "Emma R.", location: "Glasgow, UK", ageRange: "25-34" },
      verified: true,
      concerns: ["Dark circles", "Puffiness"],
      helpfulVotes: 23,
      notHelpfulVotes: 1,
      brandReply: {
        body: "Thank you so much Emma! We're thrilled to hear about your results. The cooling roller is designed to help with both puffiness and dark circles - keep using it consistently for even better results!",
        repliedAt: "2024-01-16T09:15:00Z"
      }
    },
    {
      id: "2",
      rating: 5,
      title: "Game changer for my morning routine",
      body: "This has become my favourite part of my skincare routine. The cooling sensation is amazing and I can see my under-eyes looking brighter already after just a week. The roller applicator is genius!",
      createdAt: "2024-01-12T14:22:00Z",
      reviewer: { name: "Sarah M.", location: "Manchester, UK", ageRange: "35-44" },
      verified: true,
      concerns: ["Dark circles"],
      helpfulVotes: 18,
      notHelpfulVotes: 0,
      brandReply: {
        body: "Thank you Sarah! We're so happy to hear that GLINT has become part of your daily routine. The roller applicator was designed specifically to provide that cooling sensation and gentle massage effect. Keep up the great results!",
        repliedAt: "2024-01-13T08:30:00Z"
      }
    },
    {
      id: "3",
      rating: 5,
      title: "Absolutely amazing results!",
      body: "I was sceptical at first but this actually works incredibly well! My puffiness has reduced significantly and the product feels lovely on the skin. The cooling roller is perfect and I love everything about it!",
      createdAt: "2024-01-10T16:45:00Z",
      reviewer: { name: "Lisa K.", location: "Birmingham, UK", ageRange: "25-34" },
      verified: true,
      concerns: ["Puffiness", "Dryness"],
      helpfulVotes: 12,
      notHelpfulVotes: 0
    },
    {
      id: "4",
      rating: 5,
      title: "Worth every penny",
      body: "I've tried so many eye creams and this is the only one that actually works. The cooling roller is so soothing and I can see a real difference in my dark circles. My friends keep asking what I'm using!",
      createdAt: "2024-01-08T11:30:00Z",
      reviewer: { name: "Jessica W.", location: "London, UK", ageRange: "18-24" },
      verified: true,
      concerns: ["Dark circles"],
      helpfulVotes: 31,
      notHelpfulVotes: 1,
      brandReply: {
        body: "Jessica, this is amazing to hear! We love that your friends are noticing the difference too. The cooling roller with our clinically-proven actives is designed to target dark circles effectively. Thank you for sharing your experience!",
        repliedAt: "2024-01-09T10:45:00Z"
      }
    },
    {
      id: "5",
      rating: 5,
      title: "Perfect product with amazing delivery!",
      body: "I absolutely love the cooling effect and how it makes my skin feel. Delivery was super quick and packaging was lovely. This product is incredible and I will definitely be ordering again when I run out!",
      createdAt: "2024-01-05T09:15:00Z",
      reviewer: { name: "Amy T.", location: "Edinburgh, UK", ageRange: "35-44" },
      verified: true,
      concerns: ["Fine lines"],
      helpfulVotes: 8,
      notHelpfulVotes: 0
    },
    {
      id: "6",
      rating: 5,
      title: "Amazing results in just days!",
      body: "I couldn't believe how quickly I started seeing results. My under-eyes look so much brighter and the puffiness has gone down loads. The cooling roller is such a nice touch too.",
      createdAt: "2024-01-03T13:20:00Z",
      reviewer: { name: "Rebecca L.", location: "Liverpool, UK", ageRange: "25-34" },
      verified: true,
      concerns: ["Dark circles", "Puffiness"],
      helpfulVotes: 19,
      notHelpfulVotes: 0,
      brandReply: {
        body: "Rebecca, we're thrilled you're seeing such quick results! Our caffeine and peptide complex work together to target both dark circles and puffiness. The cooling roller adds that extra soothing touch. Keep up the great work!",
        repliedAt: "2024-01-04T09:20:00Z"
      }
    },
    {
      id: "7",
      rating: 5,
      title: "Absolutely incredible results!",
      body: "This product is amazing! I can see dramatic improvement and it's exactly what I was hoping for. The cooling effect is fantastic and it feels incredible on the skin. I'm so glad I found this!",
      createdAt: "2024-01-01T15:45:00Z",
      reviewer: { name: "Michelle D.", location: "Leeds, UK", ageRange: "45-54" },
      verified: true,
      concerns: ["Dark circles"],
      helpfulVotes: 5,
      notHelpfulVotes: 0
    },
    {
      id: "8",
      rating: 5,
      title: "Perfect for sensitive skin",
      body: "I have really sensitive skin and this doesn't irritate at all. The cooling roller is so gentle and I love how it feels. My dark circles are definitely looking better too.",
      createdAt: "2023-12-28T12:10:00Z",
      reviewer: { name: "Charlotte H.", location: "Bristol, UK", ageRange: "25-34" },
      verified: true,
      concerns: ["Dark circles", "Dryness"],
      helpfulVotes: 15,
      notHelpfulVotes: 0,
      brandReply: {
        body: "Charlotte, thank you for sharing this! We're so pleased that GLINT works well for sensitive skin. Our formula is fragrance-free and designed to be gentle while still delivering results. The hyaluronic acid helps with dryness too!",
        repliedAt: "2023-12-29T11:30:00Z"
      }
    },
    {
      id: "9",
      rating: 5,
      title: "Completely blown away!",
      body: "This is an absolutely incredible product! The texture is perfect and it absorbs quickly. I can see my under-eyes looking dramatically brighter and less tired. The packaging is beautiful too and I love everything about it!",
      createdAt: "2023-12-25T10:30:00Z",
      reviewer: { name: "Olivia P.", location: "Newcastle, UK", ageRange: "18-24" },
      verified: true,
      concerns: ["Dark circles"],
      helpfulVotes: 11,
      notHelpfulVotes: 0
    },
    {
      id: "10",
      rating: 5,
      title: "Best eye product I've used",
      body: "I've tried loads of eye creams and this is by far the best. The cooling roller is amazing and I can see real results. My makeup looks so much better now too. Highly recommend!",
      createdAt: "2023-12-22T14:15:00Z",
      reviewer: { name: "Sophie B.", location: "Cardiff, UK", ageRange: "35-44" },
      verified: true,
      concerns: ["Dark circles", "Puffiness"],
      helpfulVotes: 27,
      notHelpfulVotes: 0,
      brandReply: {
        body: "Sophie, this means the world to us! We're so happy that GLINT has become your go-to eye product. The fact that your makeup sits better now shows how well our formula works with other products. Thank you for the recommendation!",
        repliedAt: "2023-12-23T16:45:00Z"
      }
    }
  ]
};

// Helper function to transform API payload
export function transformReviewsData(apiData: any): ReviewsPayload {
  return {
    average: apiData.average || 0,
    total: apiData.total || 0,
    histogram: apiData.histogram || [],
    highlights: apiData.highlights || [],
    reviews: apiData.reviews || []
  };
}

// Helper function to format time ago
function timeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} weeks ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}

// Star rating component
function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  };
  
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

// Main component
export default function ProductReviews({ data = dummyData }: { data?: ReviewsPayload }) {
  const [filters, setFilters] = useState({
    rating: [] as number[],
    concerns: [] as string[],
    ageRange: [] as string[],
    location: [] as string[],
    media: false,
    verified: false
  });
  
  const [sortBy, setSortBy] = useState('mostHelpful');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, 'helpful' | 'notHelpful' | null>>({});

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = data.reviews.filter(review => {
      if (filters.rating.length > 0 && !filters.rating.includes(review.rating)) return false;
      if (filters.concerns.length > 0 && !review.concerns?.some(c => filters.concerns.includes(c))) return false;
      if (filters.ageRange.length > 0 && !filters.ageRange.includes(review.reviewer.ageRange || '')) return false;
      if (filters.location.length > 0 && !filters.location.some(loc => review.reviewer.location?.includes(loc))) return false;
      if (filters.media && (!review.media || review.media.length === 0)) return false;
      if (filters.verified && !review.verified) return false;
      return true;
    });

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'highest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      case 'mostHelpful':
      default:
        filtered.sort((a, b) => (b.helpfulVotes || 0) - (a.helpfulVotes || 0));
        break;
    }

    return filtered;
  }, [data.reviews, filters, sortBy]);

  const toggleFilter = (type: keyof typeof filters, value: string | number) => {
    setFilters(prev => {
      const currentValue = prev[type];
      
      // Handle boolean filters (media, verified)
      if (typeof currentValue === 'boolean') {
        return {
          ...prev,
          [type]: !currentValue
        };
      }
      
      // Handle array filters (rating, concerns, ageRange, location)
      if (Array.isArray(currentValue)) {
        return {
          ...prev,
          [type]: currentValue.includes(value as never) 
            ? currentValue.filter((v: any) => v !== value)
            : [...currentValue, value]
        };
      }
      
      return prev;
    });
  };

  const clearFilters = () => {
    setFilters({
      rating: [],
      concerns: [],
      ageRange: [],
      location: [],
      media: false,
      verified: false
    });
  };

  const toggleExpanded = (reviewId: string) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const handleHelpfulVote = (reviewId: string, vote: 'helpful' | 'notHelpful') => {
    setHelpfulVotes(prev => ({
      ...prev,
      [reviewId]: prev[reviewId] === vote ? null : vote
    }));
  };

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GLINT Eye Glow Serum",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.average,
      "reviewCount": data.total,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": filteredReviews.slice(0, 10).map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "author": {
        "@type": "Person",
        "name": review.reviewer.name
      },
      "reviewBody": review.body,
      "datePublished": review.createdAt
    }))
  };

  return (
    <section className="py-12 bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="flex items-center space-x-2">
              <StarRating rating={Math.round(data.average)} size="lg" />
              <span className="text-3xl font-bold" style={{ color: '#4A6B8A' }}>
                {data.average.toFixed(1)}
              </span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">{data.total.toLocaleString()}</span> verified reviews
            </div>
          </div>
          
          <button
            className="px-6 py-3 rounded-full font-semibold transition-colors"
            style={{ 
              backgroundColor: '#B8860B',
              color: '#F8FBFF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4A6B8A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B8860B';
            }}
          >
            Write a Review
          </button>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {data.highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium border"
                style={{ 
                  borderColor: '#4A6B8A',
                  color: '#4A6B8A',
                  backgroundColor: '#F8FBFF'
                }}
              >
                {highlight}
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="px-3 py-1 rounded-full text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Clear all
            </button>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden mb-4 px-4 py-2 border rounded-lg"
            style={{ borderColor: '#4A6B8A', color: '#4A6B8A' }}
          >
            Filters ({Object.values(filters).flat().length + (filters.media ? 1 : 0)})
          </button>
          
          <div className={`${showFilters ? 'block' : 'hidden'} sm:block mb-4 sm:mb-0`}>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
              {/* Rating filters */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#4A6B8A' }}>
                  Rating
                </label>
                <div className="space-y-1">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.rating.includes(rating)}
                        onChange={() => toggleFilter('rating', rating)}
                        className="rounded"
                      />
                      <StarRating rating={rating} size="sm" />
                      <span className="text-sm">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Concerns */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#4A6B8A' }}>
                  Skin Concerns
                </label>
                <div className="space-y-1">
                  {['Dark circles', 'Puffiness', 'Dryness', 'Fine lines'].map(concern => (
                    <label key={concern} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.concerns.includes(concern)}
                        onChange={() => toggleFilter('concerns', concern)}
                        className="rounded"
                      />
                      <span className="text-sm">{concern}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Age Range */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#4A6B8A' }}>
                  Age Range
                </label>
                <div className="space-y-1">
                  {['18-24', '25-34', '35-44', '45-54', '55+'].map(age => (
                    <label key={age} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.ageRange.includes(age)}
                        onChange={() => toggleFilter('ageRange', age)}
                        className="rounded"
                      />
                      <span className="text-sm">{age}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other filters */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#4A6B8A' }}>
                  Other
                </label>
                <div className="space-y-1">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.verified}
                      onChange={() => setFilters(prev => ({ ...prev, verified: !prev.verified }))}
                      className="rounded"
                    />
                    <span className="text-sm">Verified only</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.media}
                      onChange={() => setFilters(prev => ({ ...prev, media: !prev.media }))}
                      className="rounded"
                    />
                    <span className="text-sm">With photos/videos</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg"
            style={{ borderColor: '#4A6B8A', color: '#4A6B8A' }}
          >
            <option value="mostHelpful">Most Helpful</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>

        {/* Ratings Distribution */}
        <div className="mb-8 p-6 rounded-xl border" style={{ borderColor: '#4A6B8A' }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#4A6B8A' }}>
            Rating Distribution
          </h3>
          <div className="space-y-2">
            {data.histogram.map(({ stars, count }) => {
              const percentage = (count / data.total) * 100;
              return (
                <div key={stars} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm font-medium">{stars}</span>
                    <StarRating rating={1} size="sm" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ 
                        backgroundColor: '#B8860B',
                        width: `${percentage}%`
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="p-6 rounded-xl border shadow-sm" style={{ borderColor: '#4A6B8A' }}>
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: '#4A6B8A' }}
                  >
                    {review.reviewer.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold" style={{ color: '#4A6B8A' }}>
                        {review.reviewer.name}
                      </span>
                      {review.verified && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full"
                              style={{ backgroundColor: '#B8860B', color: '#F8FBFF' }}>
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {review.reviewer.location} • {timeAgo(review.createdAt)}
                    </div>
                  </div>
                </div>
                <StarRating rating={review.rating} size="md" />
              </div>

              {/* Review Content */}
              <h4 className="font-semibold mb-2" style={{ color: '#4A6B8A' }}>
                {review.title}
              </h4>
              
              <p className="text-gray-700 mb-4">
                {review.body.length > 200 && !expandedReviews.has(review.id)
                  ? `${review.body.substring(0, 200)}...`
                  : review.body
                }
                {review.body.length > 200 && (
                  <button
                    onClick={() => toggleExpanded(review.id)}
                    className="ml-2 text-sm font-medium"
                    style={{ color: '#B8860B' }}
                  >
                    {expandedReviews.has(review.id) ? 'Read less' : 'Read more'}
                  </button>
                )}
              </p>

              {/* Concerns */}
              {review.concerns && review.concerns.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.concerns.map((concern, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full"
                      style={{ 
                        backgroundColor: '#4A6B8A',
                        color: '#F8FBFF'
                      }}
                    >
                      {concern}
                    </span>
                  ))}
                </div>
              )}

              {/* Media */}
              {review.media && review.media.length > 0 && (
                <div className="flex space-x-2 mb-4">
                  {review.media.map((media, index) => (
                    <div key={index} className="w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={media.poster || media.src}
                        alt="Review media"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Helpful buttons */}
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => handleHelpfulVote(review.id, 'helpful')}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    helpfulVotes[review.id] === 'helpful'
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={{ 
                    backgroundColor: helpfulVotes[review.id] === 'helpful' ? '#B8860B' : 'transparent',
                    borderColor: '#4A6B8A'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>Helpful ({review.helpfulVotes || 0})</span>
                </button>
                
                <button
                  onClick={() => handleHelpfulVote(review.id, 'notHelpful')}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    helpfulVotes[review.id] === 'notHelpful'
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={{ 
                    backgroundColor: helpfulVotes[review.id] === 'notHelpful' ? '#4A6B8A' : 'transparent',
                    borderColor: '#4A6B8A'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.737 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                  </svg>
                  <span>Not helpful ({review.notHelpfulVotes || 0})</span>
                </button>
              </div>

              {/* Brand Reply */}
              {review.brandReply && (
                <div className="mt-4 p-4 rounded-lg border-l-4" style={{ borderLeftColor: '#4A6B8A', backgroundColor: '#F8FBFF' }}>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                         style={{ backgroundColor: '#B8860B' }}>
                      G
                    </div>
                    <span className="font-semibold" style={{ color: '#4A6B8A' }}>GLINT</span>
                    <span className="text-sm text-gray-500">{timeAgo(review.brandReply.repliedAt)}</span>
                  </div>
                  <p className="text-gray-700">{review.brandReply.body}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#4A6B8A' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold" style={{ color: '#4A6B8A' }}>
                {data.total.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-600">Verified Reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#4A6B8A' }}>
                {data.average.toFixed(1)} ★
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#4A6B8A' }}>
                30-Day
              </div>
              <div className="text-sm text-gray-600">Money-Back Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#4A6B8A' }}>
                Fast UK
              </div>
              <div className="text-sm text-gray-600">Shipping</div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <a
              href="/reviews"
              className="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-colors"
              style={{ 
                backgroundColor: '#4A6B8A',
                color: '#F8FBFF'
              }}
            >
              View All Reviews
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
