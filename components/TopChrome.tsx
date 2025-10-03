"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import ConditionalNav from "@/components/ConditionalNav";
import { usePathname } from "next/navigation";

export default function TopChrome() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/qr" && <AnnouncementBar />}
      <ConditionalNav />
    </>
  );
}


