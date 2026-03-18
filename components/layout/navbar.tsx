"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { homeContent } from "@/content/home";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-2 px-6 flex items-center justify-between border-b bg-background">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight text-primary">{homeContent.navbar.brand}</span>
        </Link>
        <div className="hidden md:flex gap-6">
          {homeContent.navbar.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors font-medium",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />
        {/* Insert auth CTA or nav here if needed */}
      </div>
    </nav>
  );
}