"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  {
    label: "Overview",
    href: "/dashboard/overview",
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
  },
  {
    label: "Tasks",
    href: "/dashboard/tasks",
  },
  {
    label: "Team",
    href: "/dashboard/team",
  },
];

export default function SidebarNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col h-full py-5 px-6 bg-muted border-r border-border">
      <div className="mb-8 font-extrabold text-xl tracking-tight text-primary">
        TeamNest
      </div>
      <ul className="flex flex-col gap-2">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-md px-3 py-2 font-medium transition-colors ${
                  isActive
                    ? "bg-background text-foreground shadow"
                    : "text-muted-foreground hover:text-primary"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}