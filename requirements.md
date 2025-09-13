3) Project structure
glint-web/
  app/
    layout.tsx
    page.tsx                 -> Landing page (Hero + Product teaser)
    product/
      page.tsx               -> Product page (Add to Cart + Buy Now)
    api/
      shopify/
        route.ts             -> Minimal GraphQL proxy (server)
      cart/
        route.ts             -> Cart create/add helpers (server)
      checkout/
        route.ts             -> “Buy Now” (checkoutCreate) redirect
  components/
    GlassNav.tsx
    Hero.tsx
    ProductCard.tsx
    AddToCart.tsx
  lib/
    shopify.ts               -> Helper for Storefront calls
    ids.ts                   -> Helpers for gid conversion
  public/
    hero.png                 -> Your hero image (1920x1280)


Create folders as above.

4) Shopify helper (Storefront API)

lib/shopify.ts

export const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const STOREFRONT_TOKEN = process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN!;
export const API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`;

export async function shopify<T>(query: string, vars?: Record<string, any>) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables: vars }),
    // Force server-side Only; never cache dynamic cart/checkout
    cache: "no-store",
  });

  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data as T;
}


lib/ids.ts

export const gid = {
  product: (id: string | number) => `gid://shopify/Product/${id}`,
  variant: (id: string | number) => `gid://shopify/ProductVariant/${id}`,
};

5) Glassmorphic Navbar

components/GlassNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function GlassNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
          "mx-auto max-w-6xl px-4",
          "rounded-2xl",
          "bg-white/10 backdrop-blur-xl",
          "border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)]",
        ].join(" ")}
      >
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-medium tracking-[0.3em] text-white/90">
            GLINT
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm ${pathname === "/" ? "text-white" : "text-white/70 hover:text-white"}`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`text-sm ${pathname?.startsWith("/product") ? "text-white" : "text-white/70 hover:text-white"}`}
            >
              Product
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

6) Hero section with glass vibe

components/Hero.tsx

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] isolate">
      <img
        src="/hero.png"
        alt="GLINT Eye Glow Serum"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      {/* Glass overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 pt-40 pb-28">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            FUTURE-FORWARD EYE CARE
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-light tracking-wide text-white">
            Eye Glow Serum by <span className="font-medium">GLINT</span>
          </h1>
          <p className="mt-5 text-white/80 leading-relaxed">
            Brightening & Hydrating roller that revives under-eyes with a cooling
            metallic applicator and clinically inspired actives.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/product"
              className="rounded-xl border border-white/20 bg-white/15 px-6 py-3 text-white backdrop-blur-lg hover:bg-white/25 transition"
            >
              Explore Product
            </a>
            <a
              href="/api/checkout?qty=1"
              className="rounded-xl bg-white/90 text-gray-900 px-6 py-3 hover:bg-white"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>

      {/* bottom glass panel */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-white/10 backdrop-blur-xl border-t border-white/20"></div>
    </section>
  );
}

7) Product teaser card (for landing)

components/ProductCard.tsx

import Link from "next/link";

export default function ProductCard() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 md:p-12 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-light">GLINT Eye Glow Serum</h2>
            <p className="mt-4 text-white/80">
              Cooling rollerball brightens, hydrates and depuffs. 8 ml / 0.27 fl oz.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/product" className="rounded-xl bg-white/90 text-gray-900 px-6 py-3 hover:bg-white">
                View Details
              </Link>
              <a href="/api/checkout?qty=1" className="rounded-xl border border-white/30 px-6 py-3 hover:bg-white/20">
                Buy Now
              </a>
            </div>
          </div>
          <div className="justify-self-center">
            <img src="/hero.png" alt="GLINT serum" className="w-full max-w-sm rounded-xl shadow-2xl ring-1 ring-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

8) Add to Cart component (for product page)

components/AddToCart.tsx

"use client";

import { useState } from "react";

export default function AddToCart({ variantGid }: { variantGid: string }) {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  async function addToCart() {
    setLoading(true);
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({ variantGid, quantity: qty }),
      });
      const data = await res.json();
      if (data.checkoutUrl) window.location.href = data.checkoutUrl; // Optional redirect
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <div className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-md">
        <button className="px-3 py-2 text-white" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
        <input
          className="w-12 bg-transparent text-center text-white outline-none"
          value={qty}
          onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
        />
        <button className="px-3 py-2 text-white" onClick={() => setQty(qty + 1)}>+</button>
      </div>
      <button
        onClick={addToCart}
        disabled={loading}
        className="rounded-xl bg-white/90 px-6 py-3 text-gray-900 hover:bg-white disabled:opacity-60"
      >
        {loading ? "Adding…" : "Add to Cart"}
      </button>
      <a
        href={`/api/checkout?qty=${qty}`}
        className="rounded-xl border border-white/30 px-6 py-3 text-white hover:bg-white/10"
      >
        Buy Now
      </a>
    </div>
  );
}

9) API routes (server)
9.1 Minimal GraphQL proxy (optional, for advanced usage)

app/api/shopify/route.ts

import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "@/lib/shopify";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN!,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

9.2 Cart (Storefront Cart API → returns checkoutUrl)

app/api/cart/route.ts

import { NextRequest, NextResponse } from "next/server";
import { shopify } from "@/lib/shopify";

const CART_CREATE = /* GraphQL */ `
mutation CartCreate($lines: [CartLineInput!]) {
  cartCreate(input: { lines: $lines }) {
    cart {
      id
      checkoutUrl
    }
    userErrors { field message }
  }
}`;

export async function POST(req: NextRequest) {
  const { variantGid, quantity } = await req.json();

  const data = await shopify<{
    cartCreate: { cart: { id: string; checkoutUrl: string } | null; userErrors: any[] }
  }>(CART_CREATE, {
    lines: [{ merchandiseId: variantGid, quantity: quantity || 1 }],
  });

  const checkoutUrl = data.cartCreate.cart?.checkoutUrl;
  return NextResponse.json({ checkoutUrl });
}

9.3 CheckoutCreate for “Buy Now” (direct redirect)

app/api/checkout/route.ts

import { NextRequest, NextResponse } from "next/server";
import { shopify } from "@/lib/shopify";
import { gid } from "@/lib/ids";

const CHECKOUT_CREATE = /* GraphQL */ `
mutation CheckoutCreate($lineItems: [CheckoutLineItemInput!]!) {
  checkoutCreate(input: { lineItems: $lineItems }) {
    checkout { webUrl }
    checkoutUserErrors { message }
  }
}`;

export async function GET(req: NextRequest) {
  const qty = Number(new URL(req.url).searchParams.get("qty") || 1);
  const variantGid = gid.variant(process.env.SHOPIFY_VARIENT_ID!);

  const data = await shopify<{
    checkoutCreate: { checkout: { webUrl: string } | null }
  }>(CHECKOUT_CREATE, {
    lineItems: [{ variantId: variantGid, quantity: qty }],
  });

  const url = data.checkoutCreate.checkout?.webUrl ?? "/";
  return NextResponse.redirect(url);
}

10) Pages
10.1 Root layout

app/layout.tsx

import "./globals.css";
import GlassNav from "@/components/GlassNav";

export const metadata = {
  title: "GLINT – Eye Glow Serum",
  description: "Brightening & Hydrating Roller",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#0c0f16] via-[#121827] to-[#1d2435] text-white antialiased">
        <GlassNav />
        <main className="pt-24">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-16 text-white/60">
          <p>© {new Date().getFullYear()} GLINT. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

10.2 Landing page (Hero + teaser)

app/page.tsx

import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  return (
    <>
      <Hero />
      <ProductCard />
    </>
  );
}

10.3 Product page

app/product/page.tsx

import { shopify } from "@/lib/shopify";
import { gid } from "@/lib/ids";
import AddToCart from "@/components/AddToCart";

const PRODUCT_QUERY = /* GraphQL */ `
query Product($id: ID!) {
  product(id: $id) {
    title
    description
    featuredImage { url altText }
    variants(first: 1) {
      nodes { id title price { amount currencyCode } }
    }
  }
}`;

export default async function ProductPage() {
  const productGid = gid.product(process.env.SHOPIFY_PRODUCT_ID!);
  const data = await shopify<{
    product: {
      title: string;
      description: string;
      featuredImage?: { url: string; altText: string | null };
      variants: { nodes: { id: string; title: string; price: { amount: string; currencyCode: string } }[] };
    }
  }>(PRODUCT_QUERY, { id: productGid });

  const p = data.product;
  const variant = p.variants.nodes[0];
  const price = new Intl.NumberFormat("en", {
    style: "currency",
    currency: variant.price.currencyCode,
  }).format(Number(variant.price.amount));

  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl p-4">
          <img src="/hero.png" alt={p.title} className="w-full rounded-xl" />
        </div>

        <div>
          <h1 className="text-4xl font-light">{p.title}</h1>
          <p className="mt-3 text-white/70">{p.description}</p>
          <div className="mt-6 text-2xl">{price}</div>

          <div className="mt-8">
            <AddToCart variantGid={variant.id} />
          </div>

          <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 text-white/80 backdrop-blur-xl">
            <h3 className="mb-2 font-medium text-white">Benefits</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Brightens and revives under-eye area</li>
              <li>Cooling steel roller helps depuff</li>
              <li>Lightweight hydration for all skin types</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

11) Add the hero image

Place your generated hero at: public/hero.png (1920×1280).
Next.js will serve it at /hero.png.

12) Run it
pnpm dev   # or npm run dev / yarn dev


Open http://localhost:3000

Landing: Glass nav + hero + “Buy Now” (redirects to checkout)

Product: “Add to Cart” (creates a Cart with checkoutUrl) and “Buy Now”

13) Deployment tips

Set all .env variables in your hosting provider (Vercel → Project → Settings → Environment Variables).

Enable Edge Runtime only if you remove Node‑specific APIs; above code uses standard fetch so it works on edge or node.

Add caching only on product read queries; keep cart/checkout no-store.

14) Optional polish

Replace product image on product page with p.featuredImage.url if you sync Shopify media.

Add SEO Open Graph tags in metadata.

Add analytics, consent banner, and a persistent floating mini‑cart if desired.