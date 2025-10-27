"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps, MouseEvent } from "react";
import { useActiveSection } from "@/context/active-section-context";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#blogs", label: "Blogs" },
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download App" },
];

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const { activeSection } = useActiveSection();

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
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
  };

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`transition-colors ${activeSection === item.href.replace("#", "")
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
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
