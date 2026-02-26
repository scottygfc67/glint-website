import Hero from "@/components/Hero";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import ProductCard from "@/components/ProductCard";
import FeaturesSection from "@/components/FeaturesSection";
import ProductReviews from "@/components/ProductReviews";
import Footer from "@/components/Footer";
import { getProduct } from "@/lib/shopify";
import { gid } from "@/lib/ids";

export default async function Page() {
  let product = null;

  try {
    const productGid = gid.product(process.env.SHOPIFY_PRODUCT_ID!);
    product = await getProduct(productGid);
  } catch (error) {
    console.error("Failed to fetch product data:", error);
  }

  return (
    <>
      <Hero product={product || undefined} />
      <ScrollingMarquee />
      <ProductCard product={product || undefined} />
      <FeaturesSection />
      <ProductReviews />
      <Footer />
    </>
  );
}
