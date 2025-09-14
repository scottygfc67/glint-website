import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import ConditionalNav from "@/components/ConditionalNav";

export const metadata = {
  title: "GLINT – Eye Glow Serum",
  description: "Brightening & Hydrating Roller",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <CartProvider>
          <ConditionalNav />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
