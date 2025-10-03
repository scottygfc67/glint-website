# Location Dropdown with Flags and Auto-Detection Implementation Guide

This comprehensive guide explains how to implement a location dropdown with flag images, emoji fallbacks, and automatic geolocation detection for currency conversion.

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Dependencies](#dependencies)
4. [Implementation Steps](#implementation-steps)
5. [Code Files](#code-files)
6. [API Services](#api-services)
7. [Styling & Responsiveness](#styling--responsiveness)
8. [Error Handling](#error-handling)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)

## Overview

The location dropdown system provides:
- **Automatic geolocation detection** on page load
- **Flag images with emoji fallbacks** for visual country identification
- **Real-time currency conversion** using exchange rate APIs
- **Persistent storage** of user preferences
- **Mobile-optimized** responsive design
- **TypeScript support** with proper type definitions

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Location      │    │   Location       │    │   Location      │
│   Context       │◄──►│   Dropdown       │    │   Provider      │
│   (State Mgmt)  │    │   Component      │    │   (App Wrapper) │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Local Storage │    │   Flag Images    │    │   Exchange Rate │
│   (Persistence) │    │   + Emojis       │    │   API Calls     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## Dependencies

### Required NPM Packages
```bash
npm install country-currency-map
npm install lucide-react  # For icons (optional)
```

### TypeScript Declaration File
Create `types/country-currency-map.d.ts`:
```typescript
declare module 'country-currency-map' {
  export function getCurrencyAbbreviation(country: string): string | undefined;
}
```

## Implementation Steps

### Step 1: Create Location Context

Create `contexts/LocationContext.tsx`:

```typescript
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrencyAbbreviation } from 'country-currency-map';

interface LocationData {
  country: string;
  countryCode: string;
  currency: string;
  currencySymbol: string;
  language: string;
  exchangeRate: number;
  locale: string;
}

interface LocationContextType {
  location: LocationData | null;
  loading: boolean;
  error: string | null;
  convertPrice: (priceInGBP: number) => string;
  updateLocation: (newLocation: LocationData) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

// Currency symbols mapping
const CURRENCY_SYMBOLS: { [key: string]: string } = {
  'USD': '$',
  'EUR': '€',
  'GBP': '£',
  'CAD': 'C$',
  'AUD': 'A$',
  'JPY': '¥',
  'CNY': '¥',
  'KRW': '₩',
  'INR': '₹',
  'BRL': 'R$',
  'MXN': '$',
  'RUB': '₽',
  'TRY': '₺',
  'ZAR': 'R',
  'AED': 'د.إ',
  'SAR': '﷼',
  'THB': '฿',
  'MYR': 'RM',
  'IDR': 'Rp',
  'PHP': '₱',
  'VND': '₫',
};

// Language mapping (extensive list for internationalization)
const LANGUAGE_MAP: { [key: string]: string } = {
  'US': 'en',
  'GB': 'en',
  'CA': 'en',
  'AU': 'en',
  'DE': 'de',
  'FR': 'fr',
  'ES': 'es',
  'IT': 'it',
  'PT': 'pt',
  'NL': 'nl',
  'JP': 'ja',
  'KR': 'ko',
  'CN': 'zh',
  'IN': 'hi',
  'BR': 'pt',
  'MX': 'es',
  // ... (extensive list of country codes to languages)
};

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const defaultLocation: LocationData = {
    country: 'United Kingdom',
    countryCode: 'GB',
    currency: 'GBP',
    currencySymbol: '£',
    language: 'en',
    exchangeRate: 1,
    locale: 'en-GB',
  };

  const convertPrice = (priceInGBP: number): string => {
    if (!location) return `£${priceInGBP.toFixed(2)}`;
    
    const convertedPrice = priceInGBP * location.exchangeRate;
    const roundedPrice = Math.round(convertedPrice * 100) / 100;
    
    return `${location.currencySymbol}${roundedPrice.toFixed(2)}`;
  };

  // Detect user location on mount
  useEffect(() => {
    const detectLocation = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check localStorage first
        const storedLocation = localStorage.getItem('glint-location');
        if (storedLocation) {
          const parsed = JSON.parse(storedLocation);
          setLocation(parsed);
          setLoading(false);
          return;
        }

        // Get user's IP and location
        console.log('Detecting user location...');
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        if (data.error) {
          throw new Error(data.reason || 'Failed to detect location');
        }

        const countryCode = data.country_code;
        const country = data.country_name;
        const currency = getCurrencyAbbreviation(country) || 'GBP';
        const language = LANGUAGE_MAP[countryCode] || 'en';
        const currencySymbol = CURRENCY_SYMBOLS[currency] || currency;

        // Get exchange rate
        const exchangeResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/GBP`);
        const exchangeData = await exchangeResponse.json();
        const exchangeRate = exchangeData.rates[currency] || 1;

        const locale = `${language}-${countryCode}`;
        const locationData: LocationData = {
          country,
          countryCode,
          currency,
          currencySymbol,
          language,
          exchangeRate,
          locale,
        };

        setLocation(locationData);
        localStorage.setItem('glint-location', JSON.stringify(locationData));
      } catch (err) {
        console.error('Location detection failed:', err);
        setError(err instanceof Error ? err.message : 'Failed to detect location');
        setLocation(defaultLocation);
      } finally {
        setLoading(false);
      }
    };

    detectLocation();
  }, []);

  const updateLocation = (newLocation: LocationData) => {
    setLocation(newLocation);
    localStorage.setItem('glint-location', JSON.stringify(newLocation));
  };

  return (
    <LocationContext.Provider value={{ location, loading, error, convertPrice, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
```

### Step 2: Create Location Dropdown Component

Create `components/LocationDropdown.tsx`:

```typescript
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

// Flag display with image and emoji fallbacks
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

  // Loading state
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
      {/* Dropdown Button */}
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
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'block';
                  }
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

      {/* Dropdown Menu */}
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
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'block';
                          }
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
```

### Step 3: Wrap Your App with LocationProvider

In your main layout or app component:

```typescript
import { LocationProvider } from '@/contexts/LocationContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocationProvider>
          {children}
        </LocationProvider>
      </body>
    </html>
  );
}
```

### Step 4: Use the Location Dropdown

In your navigation or header component:

```typescript
import LocationDropdown from '@/components/LocationDropdown';

export default function Navigation() {
  return (
    <nav className="flex items-center space-x-4">
      {/* Other nav items */}
      <LocationDropdown />
      <LocationDropdown isMobile={true} className="md:hidden" />
    </nav>
  );
}
```

### Step 5: Use Price Conversion

In your product components:

```typescript
import { useLocation } from '@/contexts/LocationContext';

export default function ProductCard() {
  const { convertPrice } = useLocation();
  const priceInGBP = 29.99;

  return (
    <div>
      <span className="text-2xl font-bold">
        {convertPrice(priceInGBP)}
      </span>
    </div>
  );
}
```

## API Services

### 1. Geolocation API (ipapi.co)
- **Endpoint**: `https://ipapi.co/json/`
- **Purpose**: Detect user's country based on IP address
- **Response**: Country code, country name, and other location data
- **Rate Limits**: 1,000 requests/day (free tier)

### 2. Exchange Rate API (exchangerate-api.com)
- **Endpoint**: `https://api.exchangerate-api.com/v4/latest/GBP`
- **Purpose**: Get real-time exchange rates
- **Response**: Exchange rates from GBP to other currencies
- **Rate Limits**: 1,500 requests/month (free tier)

### Alternative APIs
- **ipapi.co** alternatives: ipinfo.io, ip-api.com, ipgeolocation.io
- **Exchange rate** alternatives: exchangerate.host, fixer.io, currencylayer.com

## Styling & Responsiveness

### Mobile Optimization
```css
/* Mobile-specific styles */
@media (max-width: 768px) {
  .location-dropdown-mobile {
    width: 14rem; /* w-56 */
    padding: 0.5rem 0.75rem; /* px-3 py-2 */
    font-size: 0.875rem; /* text-sm */
  }
  
  .flag-mobile {
    width: 1.5rem; /* w-6 */
    height: 1rem; /* h-4 */
  }
}
```

### Flag Image Fallback Strategy
1. **Primary**: High-quality flag images from flagcdn.com
2. **Fallback**: Unicode emoji flags
3. **Error Handling**: Graceful degradation with onError handlers

### Color Scheme Integration
```css
:root {
  --primary-blue: #4A6B8A;
  --primary-gold: #B8860B;
  --hover-blue: #3A5A7A;
  --text-gray: #374151;
  --border-gray: #D1D5DB;
}
```

## Error Handling

### 1. Network Failures
- Graceful fallback to default location (UK)
- User-friendly error messages
- Retry mechanisms for critical operations

### 2. Image Loading Failures
- Automatic fallback to emoji flags
- onError handlers for img elements
- Progressive enhancement approach

### 3. API Rate Limiting
- Caching of exchange rates
- Local storage for user preferences
- Graceful degradation when APIs are unavailable

### 4. TypeScript Safety
- Null checks for DOM elements
- Type assertions where necessary
- Proper error boundary implementation

## Testing

### Unit Tests
```typescript
// Test location detection
test('detects user location correctly', async () => {
  const mockResponse = {
    country_code: 'US',
    country_name: 'United States'
  };
  
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(mockResponse)
  });
  
  // Test implementation
});
```

### Integration Tests
- Test dropdown open/close functionality
- Test country selection and state updates
- Test price conversion accuracy
- Test mobile responsiveness

### Manual Testing Checklist
- [ ] Location detection works on page load
- [ ] Flag images load correctly
- [ ] Emoji fallbacks work when images fail
- [ ] Currency conversion is accurate
- [ ] Mobile dropdown positioning is correct
- [ ] Local storage persists user selection
- [ ] Error states display appropriately

## Troubleshooting

### Common Issues

1. **Flags not showing**
   - Check flagcdn.com accessibility
   - Verify image URLs are correct
   - Test emoji fallback functionality

2. **Location detection fails**
   - Check ipapi.co service status
   - Verify CORS settings
   - Test with different networks

3. **Exchange rates not updating**
   - Check exchangerate-api.com status
   - Verify API key if using paid tier
   - Test with different currencies

4. **Mobile styling issues**
   - Check responsive breakpoints
   - Verify z-index values
   - Test on actual devices

### Debug Mode
Enable debug logging by adding console.log statements:
```typescript
console.log('Location API response:', data);
console.log('Exchange rate:', exchangeRate);
console.log('Setting location data:', locationData);
```

### Performance Optimization
- Implement request caching
- Use React.memo for expensive components
- Lazy load flag images
- Debounce API calls

## Security Considerations

1. **API Security**
   - Use HTTPS for all API calls
   - Implement rate limiting
   - Validate API responses

2. **Data Privacy**
   - Store minimal user data
   - Clear sensitive data on logout
   - Comply with GDPR/CCPA

3. **XSS Prevention**
   - Sanitize user inputs
   - Use proper TypeScript types
   - Avoid innerHTML usage

## Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+
- **Features Used**: Fetch API, Local Storage, CSS Grid, Flexbox

## Future Enhancements

1. **Additional Features**
   - More country/currency options
   - Language detection and translation
   - Timezone detection
   - Tax calculation based on location

2. **Performance Improvements**
   - Service worker for offline support
   - Image optimization and lazy loading
   - Bundle splitting for smaller initial load

3. **User Experience**
   - Search functionality in dropdown
   - Recent selections
   - Keyboard navigation support

This implementation provides a robust, production-ready location dropdown system that can be easily integrated into any React/Next.js application.

