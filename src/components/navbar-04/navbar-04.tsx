"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useEffect, useState } from "react";
import { RegistrationModal } from "@/components/registration-modal";

const Navbar04Page = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-muted">
      <nav
        className={`fixed top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-xs border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full z-10 shadow-md ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <RegistrationModal>
              <Button className="rounded-full">Become a Courier</Button>
            </RegistrationModal>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar04Page;
