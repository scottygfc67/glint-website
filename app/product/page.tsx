import { getProduct } from "@/lib/shopify";
import { gid } from "@/lib/ids";
import AddToCart from "@/components/AddToCart";
import QuantitySelector from "@/components/QuantitySelector";
import Footer from "@/components/Footer";
import ProductPageClient from "@/components/ProductPageClient";
import ProductReviews from "@/components/ProductReviews";

export const dynamic = "force-dynamic";

export default async function ProductPage() {
  let product = null;

  try {
    const productGid = gid.product(process.env.SHOPIFY_PRODUCT_ID!);
    product = await getProduct(productGid);
  } catch (error) {
    console.error("Failed to fetch product data:", error);
  }

  if (!product) {
  return (
    <>
        <div className="bg-white pt-24">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
              <p className="text-gray-600 mb-8">We couldn't find the product you're looking for.</p>
              <a 
                href="/" 
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Return to Home
              </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
  }

  return <ProductPageClient product={product} />;
}
