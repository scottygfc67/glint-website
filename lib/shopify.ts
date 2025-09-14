export const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const STOREFRONT_TOKEN = process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN || process.env.SHOPIFY_PRIVATE_ACESS_TOKEN!;
export const API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`;

export async function shopify<T>(query: string, vars?: Record<string, unknown>) {
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
