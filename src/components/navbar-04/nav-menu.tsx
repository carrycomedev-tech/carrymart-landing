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
import { cn } from "@/lib/utils";
import { SHEET_CLOSE_MS, scrollToSection } from "./section-scroll";

const navItems = [
  { href: "/#marketplace", label: "Marketplace" },
  { href: "/#features", label: "Why CarryMart" },
  { href: "/#carrypay", label: "CarryPay" },
  { href: "/#sell", label: "Sell" },
  { href: "/#download", label: "Get the App" },
];

type NavMenuProps = ComponentProps<typeof NavigationMenu> & {
  /** Set by the mobile sheet so tapping an item dismisses it. */
  onItemClick?: () => void;
};

export const NavMenu = ({ onItemClick, ...props }: NavMenuProps) => {
  const pathname = usePathname();
  const isVertical = props.orientation === "vertical";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    onItemClick?.();

    // Off the homepage, let Next.js route to "/#section" and scroll there.
    if (pathname !== "/" || !href.includes("#")) return;

    const targetId = href.split("#")[1];
    if (!document.getElementById(targetId)) return;

    e.preventDefault();

    // In the sheet, scroll only once it has closed and released body scroll.
    if (onItemClick) {
      setTimeout(() => scrollToSection(targetId), SHEET_CLOSE_MS);
      return;
    }

    scrollToSection(targetId);
  };

  return (
    <NavigationMenu
      {...props}
      // The root is max-w-max for the desktop bar; vertically it has to fill
      // the sheet or every row collapses to its own label width.
      className={cn(props.className, isVertical && "w-full max-w-none")}
    >
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:w-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[orientation=vertical]:justify-start data-[orientation=vertical]:gap-1">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "flex items-center px-3.5 h-11 rounded-full text-sm font-medium text-secondary/70 hover:text-secondary hover:bg-muted transition-colors",
                  isVertical && "w-full h-12 px-4 text-base text-secondary"
                )}
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
