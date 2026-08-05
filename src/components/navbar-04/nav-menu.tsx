"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, MouseEvent } from "react";

const navItems = [
  { href: "/#marketplace", label: "Marketplace" },
  { href: "/#features", label: "Why CarryMart" },
  { href: "/#carrypay", label: "CarryPay" },
  { href: "/#sell", label: "Sell" },
  { href: "/#download", label: "Get the App" },
];

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    // Off the homepage, let Next.js route to "/#section" and scroll there.
    if (pathname !== "/" || !href.includes("#")) return;

    const targetId = href.split("#")[1];
    const elem = document.getElementById(targetId);
    if (!elem) return;

    e.preventDefault();
    // Same offset the CSS anchor targets use, so JS and CSS can't drift apart.
    const offset =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--nav-scroll-offset"
        ),
        10
      ) || 88;
    const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetId === "hero" ? 0 : elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:w-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[orientation=vertical]:justify-start data-[orientation=vertical]:gap-1">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="flex items-center px-3.5 h-11 rounded-full text-sm font-medium text-secondary/70 hover:text-secondary hover:bg-muted transition-colors"
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
