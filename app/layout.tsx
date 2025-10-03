import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { LocationProvider } from "@/contexts/LocationContext";
import TopChrome from "@/components/TopChrome";

export const metadata = {
  title: "GLINT – Eye Glow Serum",
  description: "Brightening & Hydrating Roller",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <LocationProvider>
          <CartProvider>
            <TopChrome />
            <main>{children}</main>
          </CartProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
