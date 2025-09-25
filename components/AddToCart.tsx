"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Toast from "@/components/Toast";

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
  const [showToast, setShowToast] = useState(false);
  const { addItem } = useCart();

  async function addToCart() {
    setLoading(true);
    try {
      console.log('Adding to cart:', {
        variantId: variantGid,
        title,
        price,
        currencyCode,
        image,
        quantity: quantity,
      });
      
      addItem({
        variantId: variantGid,
        title,
        price,
        currencyCode,
        image,
        quantity: quantity,
      });
      
      console.log('Item added to cart successfully');
      setAdded(true);
      setShowToast(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="space-y-4">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={addToCart}
            disabled={loading}
            className={`flex-1 px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
              added
                ? "bg-green-600 text-white"
                : "text-white hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            }`}
            style={!added ? { backgroundColor: '#4A6B8A' } : {}}
          >
            {loading ? "Adding to Cart..." : added ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
          <a
            href={`/api/checkout?qty=${quantity}`}
            className="flex-1 border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center hover:opacity-90"
            style={{ 
              borderColor: '#B8860B',
              color: '#B8860B',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B8860B';
              e.currentTarget.style.color = '#F8FBFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#B8860B';
            }}
          >
            Buy Now
          </a>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <Toast
          message={`${quantity} x ${title} added to cart!`}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
