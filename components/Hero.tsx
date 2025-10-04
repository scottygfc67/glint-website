"use client";

import { motion } from 'framer-motion';
import { useLocation } from '@/contexts/LocationContext';
import { BASE_PRICE_GBP, getCleanPrice, getCurrencySymbol } from '@/lib/pricing';
import ProductReviews from './ProductReviews';

interface HeroProps {
  product?: {
    title: string;
    variants: { 
      nodes: { 
        id: string; 
        price: { amount: string; currencyCode: string };
        compareAtPrice?: { amount: string; currencyCode: string } | null;
      }[] 
    };
  };
}

export default function Hero({ product }: HeroProps) {
  const { location, convertPrice } = useLocation();
  
  // Use localized pricing
  const basePrice = BASE_PRICE_GBP;
  const localizedPrice = location ? convertPrice(basePrice) : `£${basePrice.toFixed(2)}`;
  
  // Calculate compare at price (typically 50% more)
  const compareAtPriceAmount = basePrice * 1.5;
  const localizedComparePrice = location ? convertPrice(compareAtPriceAmount) : `£${compareAtPriceAmount.toFixed(2)}`;

  // Animation variants - FAST and snappy
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 300,
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { 
      y: 30,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 400,
        duration: 0.4
      }
    }
  };

  const priceVariants = {
    hidden: { 
      scale: 0.9,
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 18,
        stiffness: 500,
        duration: 0.25
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      y: 15,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 22,
        stiffness: 400,
        duration: 0.3
      }
    }
  };

  const trustBadgeVariants = {
    hidden: { 
      y: 10,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 350,
        duration: 0.2
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center -mt-20 pt-20 sm:pt-36">
      {/* Hero Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img 
          src="/hero.png" 
          alt="GLINT Eye Glow Serum" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Iridescent Pearl Ring - subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(220,232,255,.08),transparent_60%)]"></div>
      
      {/* Hero Content - Centered */}
      <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-12 sm:py-20 text-center">
        <motion.div 
          className="space-y-4 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4 sm:space-y-6">
            <motion.span 
              className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase text-white border border-gray-600"
              style={{ backgroundColor: '#4A6B8A' }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", damping: 20, stiffness: 400, duration: 0.15 }
              }}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Viral on TikTok
            </motion.span>
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-2xl"
              variants={titleVariants}
            >
              Eye Glow
              <span className="block text-white drop-shadow-2xl">Serum</span>
              <span className="block text-lg sm:text-xl lg:text-2xl font-light mt-2 sm:mt-4 tracking-wider text-gray-200">
                by GLINT
              </span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto drop-shadow-lg px-2"
              variants={itemVariants}
            >
              Revolutionary brightening & hydrating roller that transforms your under-eye area with clinically proven actives and cooling metallic applicator.
            </motion.p>
          </div>

          {/* Price & Rating */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            variants={priceVariants}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.span 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", damping: 18, stiffness: 500, duration: 0.1 }
                }}
              >
                {localizedPrice}
              </motion.span>
              <span className="text-xl sm:text-2xl text-gray-300 line-through font-light drop-shadow-lg">{localizedComparePrice}</span>
            </div>
            <motion.div 
              className="flex items-center gap-1"
              variants={itemVariants}
            >
              {[...Array(5)].map((_, i) => (
                <motion.svg 
                  key={i} 
                  className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" 
                  fill="white" 
                  viewBox="0 0 20 20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                    transition: { 
                      delay: 0.5 + (i * 0.05),
                      type: "spring", 
                      damping: 20, 
                      stiffness: 400,
                      duration: 0.2
                    }
                  }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
              <span className="text-gray-200 ml-2 sm:ml-3 text-xs sm:text-sm font-medium drop-shadow-lg">(2,847 reviews)</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            variants={buttonVariants}
          >
            <motion.a
              href="/api/checkout?qty=1"
              className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-colors text-center shadow-2xl focus-visible:outline-none"
              style={{ 
                backgroundColor: '#4A6B8A',
                color: '#F8FBFF'
              }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { type: "spring", damping: 20, stiffness: 400, duration: 0.1 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { type: "spring", damping: 25, stiffness: 600, duration: 0.05 }
              }}
            >
              Buy Now - {localizedPrice}
            </motion.a>
            <motion.a
              href="/product"
              className="rounded-full px-6 sm:px-8 py-3 sm:py-4 border-2 text-base sm:text-lg font-semibold transition-colors text-center backdrop-blur-sm"
              style={{ 
                backgroundColor: '#B8860B',
                borderColor: '#B8860B',
                color: '#F8FBFF'
              }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { type: "spring", damping: 20, stiffness: 400, duration: 0.1 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { type: "spring", damping: 25, stiffness: 600, duration: 0.05 }
              }}
            >
              View Details
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 px-4"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center"
              variants={trustBadgeVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", damping: 20, stiffness: 400, duration: 0.1 }
              }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 backdrop-blur-sm border-2 border-white/30 bg-white/20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs text-gray-200 font-semibold tracking-wide uppercase drop-shadow-lg">Free Shipping</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={trustBadgeVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", damping: 20, stiffness: 400, duration: 0.1 }
              }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 backdrop-blur-sm border-2 border-white/30 bg-white/20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-200 font-semibold tracking-wide uppercase drop-shadow-lg">30-Day Returns</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={trustBadgeVariants}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", damping: 20, stiffness: 400, duration: 0.1 }
              }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 backdrop-blur-sm border-2 border-white/30 bg-white/20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-200 font-semibold tracking-wide uppercase drop-shadow-lg">Clinically Tested</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
