import { NextRequest, NextResponse } from "next/server";
import { getAccessToken, ADMIN_API_URL } from "@/lib/shopify";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = await getAccessToken();

  const res = await fetch(ADMIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
