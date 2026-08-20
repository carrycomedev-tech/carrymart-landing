"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useEffect, useState } from "react";

const Navbar04Page = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Gutter lives on the header, so the nav's max-w-7xl track matches the
    // content edges of the page sections instead of sitting 32px inside them.
    <header
      className={`fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-[0_1px_2px_rgba(0,11,41,0.04)]"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="h-(--nav-height) max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" aria-label="CarryMart home">
          <Logo compact />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden lg:block" />

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Kept visible on phones too — this is the primary action. */}
          <Button asChild className="px-4 sm:px-6">
            <Link href="/#download">Get the app</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar04Page;
