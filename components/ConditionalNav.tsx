"use client";

import { usePathname } from "next/navigation";
import GlassNav from "./GlassNav";

export default function ConditionalNav() {
  const pathname = usePathname();
  
  // Hide navbar on QR page
  if (pathname === "/qr") {
    return null;
  }
  
  return <GlassNav />;
}
