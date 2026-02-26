import { NextRequest, NextResponse } from "next/server";

/** Extract numeric variant ID from GID (e.g. gid://shopify/ProductVariant/52411287667021 -> 52411287667021) */
function variantGidToNumericId(variantGid: string): string | null {
  const match = variantGid.match(/\/(\d+)$/);
  return match ? match[1] : variantGid;
}

export async function POST(req: NextRequest) {
  try {
    const { variantGid, quantity } = await req.json();

    if (!variantGid) {
      return NextResponse.json({ error: "Missing variant ID" }, { status: 400 });
    }

    const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
    if (!domain) {
      return NextResponse.json({ error: "Missing domain" }, { status: 500 });
    }

    const variantId = variantGidToNumericId(String(variantGid));
    const qty = Number(quantity) || 1;
    const checkoutUrl = `https://${domain}/cart/${variantId}:${qty}`;

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error("Cart request failed:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
