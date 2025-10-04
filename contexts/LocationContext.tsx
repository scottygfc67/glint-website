"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrencyAbbreviation } from 'country-currency-map';
import { getCleanPrice } from '@/lib/pricing';

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
  'TH': 'th',
  'VN': 'vi',
  'ID': 'id',
  'MY': 'ms',
  'PH': 'en',
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
  'GF': 'fr',
  'FK': 'en',
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
  'TG': 'fr',
  'BJ': 'fr',
  'NE': 'fr',
  'BF': 'fr',
  'ML': 'fr',
  'SN': 'fr',
  'GM': 'en',
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

  const   convertPrice = (priceInGBP: number): string => {
    if (!location) return `£${priceInGBP.toFixed(2)}`;
    
    const convertedPrice = priceInGBP * location.exchangeRate;
    const cleanPrice = getCleanPrice(convertedPrice, location.currency); // Apply .99 rounding
    
    return `${location.currencySymbol}${cleanPrice.toFixed(2)}`;
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
