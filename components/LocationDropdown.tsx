"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@/contexts/LocationContext';

interface Country {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  language: string;
  locale: string;
}

const TOP_CURRENCIES: Country[] = [
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', currencySymbol: '£', language: 'en', locale: 'en-GB' },
  { code: 'US', name: 'United States', currency: 'USD', currencySymbol: '$', language: 'en', locale: 'en-US' },
  { code: 'EU', name: 'Europe', currency: 'EUR', currencySymbol: '€', language: 'en', locale: 'en-EU' },
  { code: 'CA', name: 'Canada', currency: 'CAD', currencySymbol: 'C$', language: 'en', locale: 'en-CA' },
  { code: 'AU', name: 'Australia', currency: 'AUD', currencySymbol: 'A$', language: 'en', locale: 'en-AU' },
];

// Flag display for the top currencies
const getFlagDisplay = (code: string) => {
  const flags: { [key: string]: { emoji: string; image: string; name: string } } = {
    'GB': { emoji: '🇬🇧', image: 'https://flagcdn.com/w20/gb.png', name: 'UK' },
    'US': { emoji: '🇺🇸', image: 'https://flagcdn.com/w20/us.png', name: 'US' },
    'EU': { emoji: '🇪🇺', image: 'https://flagcdn.com/w20/eu.png', name: 'EU' },
    'CA': { emoji: '🇨🇦', image: 'https://flagcdn.com/w20/ca.png', name: 'CA' },
    'AU': { emoji: '🇦🇺', image: 'https://flagcdn.com/w20/au.png', name: 'AU' },
  };
  return flags[code] || { emoji: '🏳️', image: '', name: '??' };
};

interface LocationDropdownProps {
  isMobile?: boolean;
  className?: string;
}

export default function LocationDropdown({ isMobile = false, className = '' }: LocationDropdownProps) {
  const { location, loading, updateLocation } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debug logging
  console.log('LocationDropdown - loading:', loading, 'location:', location);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountrySelect = async (country: Country) => {
    try {
      // Get exchange rate for the selected currency
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/GBP`);
      const data = await response.json();
      const exchangeRate = data.rates[country.currency] || 1;

      updateLocation({
        country: country.name,
        countryCode: country.code,
        currency: country.currency,
        currencySymbol: country.currencySymbol,
        language: country.language,
        exchangeRate,
        locale: country.locale,
      });

      setIsOpen(false);
    } catch (error) {
      console.error('Failed to update location:', error);
    }
  };

  if (loading) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        <span className={`text-sm ${isMobile ? 'text-white' : 'text-gray-600'}`}>Detecting...</span>
      </div>
    );
  }

  // Fallback if no location data
  if (!location) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className={`text-sm font-medium ${isMobile ? 'text-white' : 'text-gray-700'}`}>
          GB
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${
          isMobile 
            ? 'text-gray-800 border-gray-300 bg-white/95 hover:bg-white shadow-sm' 
            : 'text-gray-700 border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-5 h-4 rounded-sm overflow-hidden flex-shrink-0">
            {location ? (
              <img 
                src={getFlagDisplay(location.countryCode).image} 
                alt={getFlagDisplay(location.countryCode).name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to emoji if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
            ) : null}
            <span 
              className="text-sm leading-none"
              style={{ display: location ? 'none' : 'block' }}
            >
              {location ? getFlagDisplay(location.countryCode).emoji : '🇬🇧'}
            </span>
          </div>
          <span className="text-sm font-medium">
            {location?.countryCode || 'GB'}
          </span>
        </div>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute top-full mt-2 bg-white rounded-lg shadow-xl border z-50 ${
          isMobile 
            ? 'right-0 w-56' 
            : 'left-0 w-64'
        }`}>
          <div className="p-2">
            <div className="text-xs font-medium text-gray-600 mb-2">Select Currency</div>
          </div>
          
          <div className="max-h-48 overflow-y-auto">
            {TOP_CURRENCIES.map((country) => (
              <button
                key={country.code}
                onClick={() => handleCountrySelect(country)}
                className={`w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                  location?.countryCode === country.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-6 h-4 bg-gray-100 rounded border flex-shrink-0 overflow-hidden">
                    {getFlagDisplay(country.code).image ? (
                      <img 
                        src={getFlagDisplay(country.code).image} 
                        alt={getFlagDisplay(country.code).name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span 
                      className="text-sm leading-none"
                      style={{ display: getFlagDisplay(country.code).image ? 'none' : 'block' }}
                    >
                      {getFlagDisplay(country.code).emoji}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{country.name}</div>
                    <div className="text-xs text-gray-500">
                      {country.currencySymbol} {country.currency}
                    </div>
                  </div>
                </div>
                {location?.countryCode === country.code && (
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          
          <div className="p-2 border-t bg-gray-50 rounded-b-lg">
            <div className="text-xs text-gray-500 text-center">
              Prices will be converted to your local currency
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
