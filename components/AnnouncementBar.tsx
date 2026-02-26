"use client";

import { useLocation } from '@/contexts/LocationContext';
import { SPECIAL_DEAL_PRICE_GBP } from '@/lib/pricing';

export default function AnnouncementBar(){
  const { location, convertPrice } = useLocation();
  
  // Get localized price for the special deal
  const localizedPrice = location ? convertPrice(SPECIAL_DEAL_PRICE_GBP) : `£${SPECIAL_DEAL_PRICE_GBP.toFixed(2)}`;
  
  return (
    <div className="w-full h-10 text-white text-sm font-medium
                   flex items-center justify-center fixed top-0 left-0 z-[60] shadow-lg"
         style={{ backgroundColor: '#000000' }}>
      <span className="text-sm">Get 2 serums for {localizedPrice} + free worldwide shipping</span>
    </div>
  );
}
