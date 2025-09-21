"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  onQuantityChange: (quantity: number) => void;
}

export default function QuantitySelector({ onQuantityChange }: QuantitySelectorProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(2); // Default to 2 bottles (best value)

  const handleQuantityChange = (quantity: number) => {
    setSelectedQuantity(quantity);
    onQuantityChange(quantity);
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
      <h4 className="font-bold text-gray-900 mb-4 text-center">Choose Your Package</h4>
      <div className="space-y-3">
        <div 
          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors cursor-pointer ${
            selectedQuantity === 1 
              ? 'bg-blue-50 border-blue-400' 
              : 'bg-white/50 border-gray-200 hover:border-blue-400'
          }`}
          onClick={() => handleQuantityChange(1)}
        >
          <div className="flex items-center space-x-3">
            <input 
              type="radio" 
              name="quantity" 
              value="1" 
              checked={selectedQuantity === 1}
              onChange={() => handleQuantityChange(1)}
              className="w-4 h-4 text-blue-600" 
            />
            <div>
              <div className="font-semibold text-gray-900">Single Bottle</div>
              <div className="text-sm text-gray-600">Perfect for trying GLINT</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-gray-900">£19.99</div>
            <div className="text-sm text-gray-500">per bottle</div>
          </div>
        </div>
        
        <div 
          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors cursor-pointer relative ${
            selectedQuantity === 2 
              ? 'bg-blue-50 border-blue-400' 
              : 'bg-white/50 border-gray-200 hover:border-blue-400'
          }`}
          onClick={() => handleQuantityChange(2)}
        >
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            BEST VALUE
          </div>
          <div className="flex items-center space-x-3">
            <input 
              type="radio" 
              name="quantity" 
              value="2" 
              checked={selectedQuantity === 2}
              onChange={() => handleQuantityChange(2)}
              className="w-4 h-4 text-blue-600" 
            />
            <div>
              <div className="font-semibold text-gray-900">2 Bottles</div>
              <div className="text-sm text-gray-600">Most Popular Choice</div>
              <div className="text-xs text-green-600 font-medium mt-1">+ Free Worldwide Shipping</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400 line-through">£39.99</span>
              <span className="text-2xl font-bold text-gray-900">£29.99</span>
            </div>
            <div className="text-sm text-gray-500">total</div>
          </div>
        </div>
        
        <div 
          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors cursor-pointer ${
            selectedQuantity === 3 
              ? 'bg-blue-50 border-blue-400' 
              : 'bg-white/50 border-gray-200 hover:border-blue-400'
          }`}
          onClick={() => handleQuantityChange(3)}
        >
          <div className="flex items-center space-x-3">
            <input 
              type="radio" 
              name="quantity" 
              value="3" 
              checked={selectedQuantity === 3}
              onChange={() => handleQuantityChange(3)}
              className="w-4 h-4 text-blue-600" 
            />
            <div>
              <div className="font-semibold text-gray-900">3 Bottles</div>
              <div className="text-sm text-gray-600">Save 20% + Free Shipping</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-gray-900">£60.00</div>
            <div className="text-sm text-gray-500">total</div>
          </div>
        </div>
      </div>
    </div>
  );
}
