import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-4 flex flex-col">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <Link href="/" aria-label="CarryMart home">
          <Logo />
        </Link>
        <NavMenu orientation="vertical" className="mt-8 [&>div]:h-full" />

        <Button asChild size="lg" className="mt-auto w-full">
          <Link href="/#download">
            Get the app
            <ArrowRight className="size-5" />
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};
