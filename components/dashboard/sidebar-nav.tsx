"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserCircle, Users, Briefcase, Settings, LayoutDashboard } from "lucide-react";

const sidebarNavItems = [
  {
    label: "Overview",
    href: "/dashboard/overview",
    icon: LayoutDashboard
  },
  {
    label: "Contacts",
    href: "/dashboard/contacts",
    icon: Users
  },
  {
    label: "Deals",
    href: "/dashboard/deals",
    icon: Briefcase
  },
  {
    label: "Team",
    href: "/dashboard/team",
    icon: UserCircle
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  }
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 py-2 px-3">
      <span className="font-extrabold text-2xl text-primary mb-6 tracking-tight">
        RelateCRM
      </span>
      {sidebarNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
            pathname === item.href
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground"
          )}
        >
          <item.icon className="w-5 h-5 mr-2" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}