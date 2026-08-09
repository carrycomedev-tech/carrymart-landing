"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { SHEET_CLOSE_MS, scrollToSection } from "./section-scroll";

export const NavigationSheet = () => {
  // Controlled so tapping a nav item can close the sheet before it scrolls.
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleCtaClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);

    // Off the homepage, let Next.js route to "/#download" and scroll there.
    if (pathname !== "/" || !document.getElementById("download")) return;

    e.preventDefault();
    setTimeout(() => scrollToSection("download"), SHEET_CLOSE_MS);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-4 flex flex-col">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <Link
          href="/"
          aria-label="CarryMart home"
          className="w-fit"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>
        <NavMenu
          orientation="vertical"
          viewport={false}
          className="mt-8"
          onItemClick={() => setOpen(false)}
        />

        <Button asChild size="lg" className="mt-auto w-full">
          <Link href="/#download" onClick={handleCtaClick}>
            Get the app
            <ArrowRight className="size-5" />
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};
