import { shopify } from "@/lib/shopify";
import { gid } from "@/lib/ids";
import AddToCart from "@/components/AddToCart";
import Footer from "@/components/Footer";

const PRODUCT_QUERY = /* GraphQL */ `
query Product($id: ID!) {
  product(id: $id) {
    title
    description
    featuredImage { url altText }
    variants(first: 1) {
      nodes { 
        id 
        title 
        price { 
          amount 
          currencyCode 
        }
        compareAtPrice {
          amount
          currencyCode
        }
      }
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
      variants: { 
        nodes: { 
          id: string; 
          title: string; 
          price: { amount: string; currencyCode: string };
          compareAtPrice?: { amount: string; currencyCode: string } | null;
        }[] 
      };
    }
  }>(PRODUCT_QUERY, { id: productGid });

  const p = data.product;
  const variant = p.variants.nodes[0];
  const price = new Intl.NumberFormat("en", {
    style: "currency",
    currency: variant.price.currencyCode,
  }).format(Number(variant.price.amount));

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                {p.featuredImage ? (
                  <img 
                    src={p.featuredImage.url} 
                    alt={p.featuredImage.altText || p.title} 
                    className="h-full w-full object-cover object-center" 
                  />
                ) : (
                  <img src="/hero.png" alt={p.title} className="h-full w-full object-cover object-center" />
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{p.title}</h1>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(2,847 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-gray-900">{price}</span>
                  {p.variants.nodes[0].compareAtPrice && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        {new Intl.NumberFormat("en", {
                          style: "currency",
                          currency: p.variants.nodes[0].compareAtPrice!.currencyCode,
                        }).format(Number(p.variants.nodes[0].compareAtPrice!.amount))}
                      </span>
                      <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                        Save {Math.round((1 - Number(p.variants.nodes[0].price.amount) / Number(p.variants.nodes[0].compareAtPrice!.amount)) * 100)}%
                      </span>
                    </>
                  )}
                </div>
                <p className="text-lg text-gray-600">{p.description}</p>
              </div>

              {/* Add to Cart */}
              <div className="space-y-6">
                <AddToCart 
                  variantGid={variant.id}
                  title={p.title}
                  price={Number(variant.price.amount)}
                  currencyCode={variant.price.currencyCode}
                  image={p.featuredImage?.url}
                />
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free shipping on orders over $50
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    30-day returns
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Volume:</span>
                    <span>8ml / 0.27 fl oz</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Skin Type:</span>
                    <span>All skin types</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Application:</span>
                    <span>Morning and evening</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Results:</span>
                    <span>Visible in 7 days</span>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Reduces dark circles and puffiness",
                    "Brightens and evens skin tone",
                    "Cooling metallic applicator for instant relief",
                    "Hydrates and plumps under-eye area",
                    "Clinically tested and dermatologist approved"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
