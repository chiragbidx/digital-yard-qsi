"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 text-lg font-bold tracking-tight hover:opacity-80 transition-opacity",
            pathname.startsWith("/dashboard") ? "text-primary" : ""
          )}
          aria-label={homeContent.navbar.brand}
        >
          {homeContent.navbar.brand}
        </Link>
        {/* You can expand with nav links or theme-toggle here */}
      </div>
    </header>
  );
}