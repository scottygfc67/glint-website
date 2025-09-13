import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "@/lib/shopify";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN || process.env.SHOPIFY_PRIVATE_ACESS_TOKEN!;
  
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
