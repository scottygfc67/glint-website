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
  try {
    const { variantGid, quantity } = await req.json();

    if (!variantGid) {
      return NextResponse.json({ error: 'Missing variant ID' }, { status: 400 });
    }

    const data = await shopify<{
      cartCreate: { 
        cart: { id: string; checkoutUrl: string } | null; 
        userErrors: { field: string; message: string }[] 
      }
    }>(CART_CREATE, {
      lines: [{ merchandiseId: variantGid, quantity: quantity || 1 }],
    });

    if (data.cartCreate.userErrors?.length > 0) {
      console.error('Cart creation errors:', data.cartCreate.userErrors);
      return NextResponse.json({ error: 'Failed to create cart' }, { status: 400 });
    }

    const checkoutUrl = data.cartCreate.cart?.checkoutUrl;
    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error('Cart creation failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
