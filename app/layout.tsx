import "./globals.css";
import GlassNav from "@/components/GlassNav";
import { CartProvider } from "@/contexts/CartContext";

export const metadata = {
  title: "GLINT – Eye Glow Serum",
  description: "Brightening & Hydrating Roller",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <CartProvider>
          <GlassNav />
          <main className="pt-16">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
