"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export type BAItem = {
  id: string;
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
  duration: string;
  name: string;
  location?: string;
  concern?: "Puffiness" | "Dark circles";
};

interface BeforeAfterProps {
  items: BAItem[];
}

export default function BeforeAfterSection({ items }: BeforeAfterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStart;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    
    setDragOffset(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentItem = items[currentIndex];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4A6B8A' }}>
            Real Results from Real Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the difference GLINT makes with consistent use. Photos unretouched; lighting matched.
          </p>
        </div>

        {/* Before & After Slider */}
        <div className="relative mb-12">
          <div 
            ref={sliderRef}
            className="relative overflow-hidden rounded-2xl bg-gray-50"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="flex">
              {/* Before Image */}
              <div className="w-1/2 relative">
                <div className="aspect-square relative">
                  <Image
                    src={currentItem.before}
                    alt={currentItem.altBefore}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: '#4A6B8A' }}
                  >
                    Before
                  </span>
                </div>
              </div>

              {/* After Image */}
              <div className="w-1/2 relative">
                <div className="aspect-square relative">
                  <Image
                    src={currentItem.after}
                    alt={currentItem.altAfter}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: '#B8860B' }}
                  >
                    After
                  </span>
                </div>
              </div>
            </div>

            {/* Drag Indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                aria-label="Previous before/after"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === items.length - 1}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                aria-label="Next before/after"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Case Caption */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600">
            <strong>{currentItem.name}</strong>
            {currentItem.location && `, ${currentItem.location}`} — {currentItem.duration}
            {currentItem.concern && `. Concern: ${currentItem.concern}`}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Photos unretouched; lighting matched
          </p>
        </div>

        {/* Dots Navigation */}
        {items.length > 1 && (
          <div className="flex justify-center space-x-2 mb-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#4A6B8A' : undefined
                }}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="px-8 py-4 rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#4A6B8A' }}
            onClick={() => {
              // Fire analytics event
              if (typeof window !== 'undefined') {
                window.gtag?.('event', 'cta_click', {
                  location: 'after_ba',
                  action: 'add_to_cart'
                });
              }
            }}
          >
            Add to Cart
          </button>
          <button
            className="px-8 py-4 rounded-full font-semibold border-2 hover:opacity-90 transition-opacity"
            style={{ 
              borderColor: '#B8860B',
              color: '#B8860B'
            }}
            onClick={() => {
              // Scroll to How It Works section
              const element = document.getElementById('how-it-works');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See Routine
          </button>
        </div>
      </div>
    </section>
  );
}
