import { NextResponse } from "next/server";

export async function GET() {
  const envVars = {
    SHOPIFY_CLIENT_ID: process.env.SHOPIFY_CLIENT_ID ? 'Set' : 'Missing',
    SHOPIFY_CLIENT_SECRET: process.env.SHOPIFY_CLIENT_SECRET ? 'Set' : 'Missing',
    SHOPIFY_PRODUCT_ID: process.env.SHOPIFY_PRODUCT_ID,
    SHOPIFY_VARIANT_ID: process.env.SHOPIFY_VARIANT_ID,
    SHOPIFY_VARIENT_ID: process.env.SHOPIFY_VARIENT_ID, // Check both spellings
    NEXT_PUBLIC_SHOPIFY_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
  };
  
  return NextResponse.json(envVars);
}
