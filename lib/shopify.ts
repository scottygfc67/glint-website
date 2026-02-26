export const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const CLIENT_ID = process.env.SHOPIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET!;

/** Admin API base URL (client credentials grant uses Admin API) */
export const ADMIN_API_URL = `https://${SHOPIFY_DOMAIN}/admin/api/2025-01/graphql.json`;
const TOKEN_URL = `https://${SHOPIFY_DOMAIN}/admin/oauth/access_token`;

/** Cached access token; refresh before expiry (tokens expire in 24 hours) */
let cachedToken: string | null = null;
let tokenExpiresAt = 0;
const REFRESH_BUFFER_MS = 5 * 60 * 1000; // refresh 5 min before expiry

export async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiresAt - REFRESH_BUFFER_MS) {
    return cachedToken;
  }

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Token request failed: ${res.status} ${await res.text()}`);
  }

  const json = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = json.access_token;
  tokenExpiresAt = Date.now() + json.expires_in * 1000;
  return cachedToken;
}

export async function shopify<T>(query: string, vars?: Record<string, unknown>): Promise<T> {
  const token = await getAccessToken();
  const res = await fetch(ADMIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
    body: JSON.stringify({ query, variables: vars }),
    cache: "no-store",
  });

  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data as T;
}

/** Product shape expected by the frontend (Storefront-like) */
export type ProductForFrontend = {
  title: string;
  description: string;
  featuredImage?: { url: string; altText: string | null };
  variants: {
    nodes: {
      id: string;
      title: string;
      price: { amount: string; currencyCode: string };
      compareAtPrice?: { amount: string; currencyCode: string } | null;
    }[];
  };
};

const ADMIN_PRODUCT_QUERY = /* GraphQL */ `
  query Product($id: ID!) {
    shop { currencyCode }
    product(id: $id) {
      title
      description
      featuredMedia {
        ... on MediaImage {
          image { url }
          preview { image { url } }
        }
      }
      media(first: 1) {
        nodes {
          ... on MediaImage {
            image { url }
            preview { image { url } }
          }
        }
      }
      variants(first: 1) {
        nodes {
          id
          title
          price
          compareAtPrice
        }
      }
    }
  }
`;

/** Fetch a single product via Admin API and return the Storefront-like shape. */
export async function getProduct(productGid: string): Promise<ProductForFrontend | null> {
  const data = await shopify<{
    shop: { currencyCode: string };
    product: {
      title: string;
      description: string;
      featuredMedia?: { image?: { url: string }; preview?: { image?: { url: string } } } | null;
      media?: { nodes: Array<{ image?: { url: string }; preview?: { image?: { url: string } } }> } | null;
      variants: { nodes: { id: string; title: string; price: string; compareAtPrice?: string | null }[] };
    } | null;
  }>(ADMIN_PRODUCT_QUERY, { id: productGid });

  if (!data?.product) return null;

  const { shop, product } = data;
  const currencyCode = shop.currencyCode;

  const featuredMediaUrl =
    product.featuredMedia?.image?.url ?? product.featuredMedia?.preview?.image?.url;
  const firstMediaUrl =
    product.media?.nodes?.[0]?.image?.url ?? product.media?.nodes?.[0]?.preview?.image?.url;
  const imageUrl = featuredMediaUrl ?? firstMediaUrl;

  return {
    title: product.title,
    description: product.description,
    featuredImage: imageUrl ? { url: imageUrl, altText: null } : undefined,
    variants: {
      nodes: product.variants.nodes.map((v) => ({
        id: v.id,
        title: v.title,
        price: { amount: String(v.price ?? "0"), currencyCode },
        compareAtPrice: v.compareAtPrice
          ? { amount: String(v.compareAtPrice), currencyCode }
          : null,
      })),
    },
  };
}
