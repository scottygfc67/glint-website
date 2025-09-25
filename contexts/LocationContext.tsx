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
  updateLocation: (newLocation: Partial<LocationData>) => void;
  convertPrice: (price: number) => string;
  formatPrice: (price: number, currency?: string) => string;
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
  'CHF': 'CHF',
  'CNY': '¥',
  'INR': '₹',
  'BRL': 'R$',
  'MXN': '$',
  'KRW': '₩',
  'SGD': 'S$',
  'NZD': 'NZ$',
  'HKD': 'HK$',
  'NOK': 'kr',
  'SEK': 'kr',
  'DKK': 'kr',
  'PLN': 'zł',
  'CZK': 'Kč',
  'HUF': 'Ft',
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

// Language mapping
const LANGUAGE_MAP: { [key: string]: string } = {
  'US': 'en',
  'GB': 'en',
  'CA': 'en',
  'AU': 'en',
  'NZ': 'en',
  'IE': 'en',
  'DE': 'de',
  'FR': 'fr',
  'ES': 'es',
  'IT': 'it',
  'PT': 'pt',
  'NL': 'nl',
  'BE': 'nl',
  'AT': 'de',
  'CH': 'de',
  'SE': 'sv',
  'NO': 'no',
  'DK': 'da',
  'FI': 'fi',
  'PL': 'pl',
  'CZ': 'cs',
  'HU': 'hu',
  'RU': 'ru',
  'TR': 'tr',
  'GR': 'el',
  'BG': 'bg',
  'RO': 'ro',
  'HR': 'hr',
  'SK': 'sk',
  'SI': 'sl',
  'LT': 'lt',
  'LV': 'lv',
  'EE': 'et',
  'JP': 'ja',
  'KR': 'ko',
  'CN': 'zh',
  'TW': 'zh',
  'HK': 'zh',
  'SG': 'en',
  'MY': 'ms',
  'TH': 'th',
  'ID': 'id',
  'PH': 'en',
  'VN': 'vi',
  'IN': 'hi',
  'PK': 'ur',
  'BD': 'bn',
  'LK': 'si',
  'NP': 'ne',
  'MM': 'my',
  'KH': 'km',
  'LA': 'lo',
  'BR': 'pt',
  'MX': 'es',
  'AR': 'es',
  'CL': 'es',
  'CO': 'es',
  'PE': 'es',
  'VE': 'es',
  'UY': 'es',
  'PY': 'es',
  'BO': 'es',
  'EC': 'es',
  'GY': 'en',
  'SR': 'nl',
  'ZA': 'en',
  'NG': 'en',
  'KE': 'en',
  'GH': 'en',
  'EG': 'ar',
  'MA': 'ar',
  'TN': 'ar',
  'DZ': 'ar',
  'LY': 'ar',
  'SD': 'ar',
  'ET': 'am',
  'UG': 'en',
  'TZ': 'en',
  'ZW': 'en',
  'ZM': 'en',
  'BW': 'en',
  'NA': 'en',
  'SZ': 'en',
  'LS': 'en',
  'MW': 'en',
  'MZ': 'pt',
  'AO': 'pt',
  'MG': 'mg',
  'MU': 'en',
  'SC': 'en',
  'KM': 'ar',
  'DJ': 'ar',
  'SO': 'so',
  'ER': 'ti',
  'SS': 'en',
  'CF': 'fr',
  'TD': 'fr',
  'CM': 'fr',
  'GQ': 'es',
  'GA': 'fr',
  'CG': 'fr',
  'CD': 'fr',
  'ST': 'pt',
  'CV': 'pt',
  'GW': 'pt',
  'GN': 'fr',
  'SL': 'en',
  'LR': 'en',
  'CI': 'fr',
  'GH': 'en',
  'TG': 'fr',
  'BJ': 'fr',
  'NE': 'fr',
  'BF': 'fr',
  'ML': 'fr',
  'SN': 'fr',
  'GM': 'en',
  'GN': 'fr',
  'GW': 'pt',
  'LR': 'en',
  'SL': 'en',
  'CI': 'fr',
  'GH': 'en',
  'TG': 'fr',
  'BJ': 'fr',
  'NE': 'fr',
  'BF': 'fr',
  'ML': 'fr',
  'SN': 'fr',
  'GM': 'en',
  'RU': 'ru',
  'UA': 'uk',
  'BY': 'be',
  'MD': 'ro',
  'GE': 'ka',
  'AM': 'hy',
  'AZ': 'az',
  'KZ': 'kk',
  'UZ': 'uz',
  'TM': 'tk',
  'TJ': 'tg',
  'KG': 'ky',
  'MN': 'mn',
  'AF': 'ps',
  'IR': 'fa',
  'IQ': 'ar',
  'SY': 'ar',
  'LB': 'ar',
  'JO': 'ar',
  'IL': 'he',
  'PS': 'ar',
  'SA': 'ar',
  'YE': 'ar',
  'OM': 'ar',
  'AE': 'ar',
  'QA': 'ar',
  'BH': 'ar',
  'KW': 'ar',
  'IQ': 'ar',
  'SY': 'ar',
  'LB': 'ar',
  'JO': 'ar',
  'IL': 'he',
  'PS': 'ar',
  'SA': 'ar',
  'YE': 'ar',
  'OM': 'ar',
  'AE': 'ar',
  'QA': 'ar',
  'BH': 'ar',
  'KW': 'ar',
};

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Default fallback location (UK)
  const defaultLocation: LocationData = {
    country: 'United Kingdom',
    countryCode: 'GB',
    currency: 'GBP',
    currencySymbol: '£',
    language: 'en',
    exchangeRate: 1,
    locale: 'en-GB',
  };

  // Detect user location
  useEffect(() => {
    const detectLocation = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check if location is already stored
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
        
        console.log('Location API response:', data);

        if (data.error) {
          throw new Error(data.reason || 'Failed to detect location');
        }

        const countryCode = data.country_code;
        const country = data.country_name;
        const currency = getCurrencyAbbreviation(country) || 'GBP';
        const language = LANGUAGE_MAP[countryCode] || 'en';
        const currencySymbol = CURRENCY_SYMBOLS[currency] || currency;

        // Get exchange rate
        console.log('Getting exchange rate for currency:', currency);
        const exchangeResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/GBP`);
        const exchangeData = await exchangeResponse.json();
        const exchangeRate = exchangeData.rates[currency] || 1;
        console.log('Exchange rate:', exchangeRate);

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

        console.log('Setting location data:', locationData);
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

  const updateLocation = (newLocation: Partial<LocationData>) => {
    if (location) {
      const updatedLocation = { ...location, ...newLocation };
      setLocation(updatedLocation);
      localStorage.setItem('glint-location', JSON.stringify(updatedLocation));
    }
  };

  const convertPrice = (price: number): string => {
    if (!location) return `£${price.toFixed(2)}`;
    
    const convertedPrice = price * location.exchangeRate;
    return `${location.currencySymbol}${convertedPrice.toFixed(2)}`;
  };

  const formatPrice = (price: number, currency?: string): string => {
    if (!location && !currency) return `£${price.toFixed(2)}`;
    
    const targetCurrency = currency || location?.currency || 'GBP';
    const symbol = CURRENCY_SYMBOLS[targetCurrency] || targetCurrency;
    const rate = currency === 'GBP' ? 1 : (location?.exchangeRate || 1);
    const convertedPrice = price * rate;
    
    return `${symbol}${convertedPrice.toFixed(2)}`;
  };

  const value: LocationContextType = {
    location,
    loading,
    error,
    updateLocation,
    convertPrice,
    formatPrice,
  };

  return (
    <LocationContext.Provider value={value}>
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
