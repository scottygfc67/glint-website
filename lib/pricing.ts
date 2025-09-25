import { useLocation } from '@/contexts/LocationContext';

// Base price in GBP
export const BASE_PRICE_GBP = 19.99;
export const SPECIAL_DEAL_PRICE_GBP = 29.99;

// Price formatting utility
export function formatPrice(price: number, currency?: string, locale?: string): string {
  const currencyCode = currency || 'GBP';
  const localeCode = locale || 'en-GB';
  
  return new Intl.NumberFormat(localeCode, {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
}

// Currency symbols mapping
export const CURRENCY_SYMBOLS: { [key: string]: string } = {
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

// Get currency symbol
export function getCurrencySymbol(currency: string): string {
  return CURRENCY_SYMBOLS[currency] || currency;
}

// Round price to clean values based on currency
export function roundPrice(price: number, currency: string): number {
  switch (currency) {
    case 'JPY':
    case 'KRW':
    case 'VND':
    case 'IDR':
      // Round to nearest whole number for currencies without decimals
      return Math.round(price);
    case 'USD':
    case 'EUR':
    case 'GBP':
    case 'CAD':
    case 'AUD':
    case 'CHF':
    case 'SGD':
    case 'NZD':
    case 'HKD':
    case 'NOK':
    case 'SEK':
    case 'DKK':
    case 'PLN':
    case 'CZK':
    case 'HUF':
    case 'RUB':
    case 'TRY':
    case 'ZAR':
    case 'AED':
    case 'SAR':
    case 'THB':
    case 'MYR':
    case 'PHP':
    case 'BRL':
    case 'MXN':
    case 'ARS':
    case 'INR':
    case 'CNY':
      // Round to 2 decimal places
      return Math.round(price * 100) / 100;
    default:
      return Math.round(price * 100) / 100;
  }
}

// Get clean rounded price for display
export function getCleanPrice(price: number, currency: string): number {
  const rounded = roundPrice(price, currency);
  
  // For certain currencies, round to nice numbers
  if (currency === 'USD' || currency === 'EUR' || currency === 'GBP') {
    // Round to nearest 0.99 for psychological pricing
    return Math.floor(rounded) + 0.99;
  }
  
  return rounded;
}
