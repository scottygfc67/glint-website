"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";

export default function GlassNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all",
        scrolled ? "py-2" : "py-4",
      ].join(" ")}
    >
      <nav
        className={[
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          "rounded-2xl",
          "bg-white/10 backdrop-blur-xl",
          "border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)]",
        ].join(" ")}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="GLINT" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-white" : "text-white/70 hover:text-white"}`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`text-sm font-medium transition-colors ${pathname?.startsWith("/product") ? "text-white" : "text-white/70 hover:text-white"}`}
            >
              Products
            </Link>
            <Link
              href="/shipping"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Shipping
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <Link
              href="/api/checkout?qty=1"
              className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/70 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-xl border-t border-white/20 rounded-b-2xl">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/product"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/shipping"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shipping
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/cart"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cart ({getTotalItems()})
              </Link>
              <Link
                href="/api/checkout?qty=1"
                className="block px-3 py-2 text-base font-medium bg-white/20 text-white rounded-lg mx-3 text-center hover:bg-white/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Buy Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
