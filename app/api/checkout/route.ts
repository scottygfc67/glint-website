import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const qty = Number(new URL(req.url).searchParams.get("qty") || 1);
    
    // Get variant ID from environment variables
    const variantId = process.env.SHOPIFY_VARIANT_ID || process.env.SHOPIFY_VARIENT_ID;
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
    
    if (!variantId || !domain) {
      console.error('Missing required environment variables');
      return NextResponse.json({ 
        error: 'Missing required environment variables',
        variantId: !!variantId,
        domain: !!domain
      }, { status: 500 });
    }
    
    // Create direct Shopify checkout URL
    const checkoutUrl = `https://${domain}/cart/${variantId}:${qty}`;
    
    console.log('Redirecting to Shopify checkout:', checkoutUrl);
    return NextResponse.redirect(checkoutUrl);
    
  } catch (error) {
    console.error('Checkout redirect failed:', error);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();
    
    console.log('Checkout API received items:', items);
    
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }
    
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
    
    if (!domain) {
      return NextResponse.json({ error: 'Missing domain' }, { status: 500 });
    }
    
    // Create cart URL with multiple items
    const cartItems = items.map((item: { variantId: string; quantity: number }) => `${item.variantId}:${item.quantity}`).join(',');
    const checkoutUrl = `https://${domain}/cart/${cartItems}`;
    
    console.log('Cart items string:', cartItems);
    console.log('Redirecting to Shopify checkout with items:', checkoutUrl);
    
    // Return the URL instead of redirecting directly
    return NextResponse.json({ url: checkoutUrl });
    
  } catch (error) {
    console.error('Checkout redirect failed:', error);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
