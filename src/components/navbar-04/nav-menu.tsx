"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps, MouseEvent } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About Us" },
  { href: "/support", label: "Support" },
];

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace(/.*#/, "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const navbarHeight = 100; // Approximate height of the fixed navbar
        const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetId === 'hero' ? 0 : elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    // For non-hash links (like /support), let Next.js handle navigation
  };

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
