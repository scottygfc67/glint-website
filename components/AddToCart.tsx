"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface AddToCartProps {
  variantGid: string;
  title: string;
  price: number;
  currencyCode: string;
  image?: string;
}

export default function AddToCart({ variantGid, title, price, currencyCode, image }: AddToCartProps) {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  async function addToCart() {
    setLoading(true);
    try {
      addItem({
        variantId: variantGid,
        title,
        price,
        currencyCode,
        image,
        quantity: qty,
      });
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium text-gray-700">Quantity:</label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => {
              console.log('Decrease clicked, current qty:', qty);
              setQty(Math.max(1, qty - 1));
            }}
            className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={qty <= 1}
          >
            −
          </button>
          <div className="w-16 text-center py-2 bg-gray-50 border-x border-gray-300">
            <span className="text-gray-900 font-medium">{qty}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              console.log('Increase clicked, current qty:', qty);
              setQty(qty + 1);
            }}
            className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer select-none"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={addToCart}
          disabled={loading}
          className={`flex-1 px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
            added 
              ? "bg-green-600 text-white" 
              : "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
          }`}
        >
          {loading ? "Adding to Cart..." : added ? "✓ Added to Cart!" : "Add to Cart"}
        </button>
        <a
          href={`/api/checkout?qty=${qty}`}
          className="flex-1 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all text-center"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
