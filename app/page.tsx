import Hero from "@/components/Hero";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import ProductCard from "@/components/ProductCard";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { shopify } from "@/lib/shopify";
import { gid } from "@/lib/ids";

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

export default async function Page() {
  let product = null;
  
  try {
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
    
    product = data.product;
  } catch (error) {
    console.error('Failed to fetch product data:', error);
  }

  return (
    <>
      <Hero product={product || undefined} />
      <ScrollingMarquee />
      <ProductCard product={product || undefined} />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
