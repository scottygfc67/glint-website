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
  
  // Special case: UK base prices should never be rounded
  if (currency === 'GBP' && (price === BASE_PRICE_GBP || price === SPECIAL_DEAL_PRICE_GBP)) {
    return price; // Always return exact price for UK base prices
  }
  
  // For currencies that support decimals, round DOWN to .99 for psychological pricing
  if (currency === 'JPY' || currency === 'KRW' || currency === 'VND' || currency === 'IDR') {
    // Integer currencies - round down to nearest whole number
    return Math.floor(rounded);
  } else {
    // All other currencies - round DOWN to the .99 below
    const wholeNumber = Math.floor(rounded);
    return wholeNumber - 0.01; // Round DOWN to .99 (e.g., 56.38 becomes 55.99)
  }
}
