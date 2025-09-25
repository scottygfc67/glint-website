"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";

export default function GlassNav() {
  const pathname = usePathname();
  const [, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-10 z-50 border-b border-[var(--hairline)]"
            style={{ backgroundColor: '#F8FBFF' }}>
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
                  <Link href="/" className="flex items-center">
                    <div
                      className="h-8 w-auto bg-contain bg-no-repeat bg-center"
                      style={{
                        backgroundImage: "url('/logo.png')",
                        width: "120px",
                        height: "32px"
                      }}
                    />
                  </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[var(--pearl-soft)] after:transition-all hover:after:w-full ${pathname === "/" ? "text-[var(--ink)] after:w-full" : "text-[var(--ink)]/80 hover:text-[var(--ink)]"}`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`text-sm font-medium transition-colors relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[var(--pearl-soft)] after:transition-all hover:after:w-full ${pathname?.startsWith("/product") ? "text-[var(--ink)] after:w-full" : "text-[var(--ink)]/80 hover:text-[var(--ink)]"}`}
            >
              Products
            </Link>
            <Link
              href="/shipping"
              className="text-sm font-medium text-[var(--ink)]/80 hover:text-[var(--ink)] transition-colors relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[var(--pearl-soft)] after:transition-all hover:after:w-full"
            >
              Shipping
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-[var(--ink)]/80 hover:text-[var(--ink)] transition-colors relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[var(--pearl-soft)] after:transition-all hover:after:w-full"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[var(--ink)]/80 hover:text-[var(--ink)] transition-colors relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[var(--pearl-soft)] after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative text-[var(--ink)]/80 hover:text-[var(--ink)] p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--ink)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <Link
              href="/api/checkout?qty=1"
              className="rounded-full px-6 py-3 text-white text-sm font-semibold transition-colors focus-visible:outline-none hover:opacity-90"
              style={{ backgroundColor: '#4A6B8A' }}
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--ink)]/80 hover:text-[var(--ink)] p-2"
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
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-[var(--hairline)]"
                 style={{ backgroundColor: '#F8FBFF' }}>
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-[var(--ink)]/80 hover:text-[var(--ink)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/product"
                className="block px-3 py-2 text-base font-medium text-[var(--ink)]/80 hover:text-[var(--ink)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/shipping"
                className="block px-3 py-2 text-base font-medium text-[var(--ink)]/80 hover:text-[var(--ink)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shipping
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-base font-medium text-[var(--ink)]/80 hover:text-[var(--ink)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-[var(--ink)]/80 hover:text-[var(--ink)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/cart"
                className="block px-3 py-2 text-base font-medium text-[var(--ink)]/80 hover:text-[var(--ink)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cart ({getTotalItems()})
              </Link>
              <Link
                href="/api/checkout?qty=1"
                className="block px-3 py-2 text-base font-medium text-white rounded-full mx-3 text-center hover:opacity-90"
                style={{ backgroundColor: '#4A6B8A' }}
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
