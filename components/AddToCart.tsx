"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface AddToCartProps {
  variantGid: string;
  title: string;
  price: number;
  currencyCode: string;
  image?: string;
  quantity?: number;
}

export default function AddToCart({ variantGid, title, price, currencyCode, image, quantity = 1 }: AddToCartProps) {
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
        quantity: quantity,
      });
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={addToCart}
          disabled={loading}
          className={`flex-1 px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
            added
              ? "bg-green-600 text-white"
              : "bg-black text-white hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
          }`}
        >
          {loading ? "Adding to Cart..." : added ? "✓ Added to Cart!" : "Add to Cart"}
        </button>
        <a
          href={`/api/checkout?qty=${quantity}`}
          className="flex-1 border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center hover:bg-black hover:text-white"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
