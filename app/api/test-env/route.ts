import { NextResponse } from "next/server";

export async function GET() {
  const envVars = {
    SHOPIFY_PRODUCT_ID: process.env.SHOPIFY_PRODUCT_ID,
    SHOPIFY_VARIANT_ID: process.env.SHOPIFY_VARIANT_ID,
    SHOPIFY_VARIENT_ID: process.env.SHOPIFY_VARIENT_ID, // Check both spellings
    SHOPIFY_PUBLIC_ACCESS_TOKEN: process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN ? 'Set' : 'Missing',
    NEXT_PUBLIC_SHOPIFY_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
  };
  
  return NextResponse.json(envVars);
}
