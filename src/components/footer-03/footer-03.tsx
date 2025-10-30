import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../navbar-04/logo";

const footerSections = [
  {
    title: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "How It Works", href: "#" },
      { title: "Campus Pass", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Food Delivery", href: "#" },
      { title: "Parcel Delivery", href: "#" },
      { title: "Document Delivery", href: "#" },
      { title: "Grocery Delivery", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Help Center", href: "#" },
      { title: "FAQs", href: "#" },
      { title: "Contact Us", href: "#" },
      { title: "Safety Guidelines", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Courier Agreement", href: "#" },
      { title: "Community Guidelines", href: "#" },
    ],
  },
];

const Footer03Page = () => {
  return (
    <footer className="border-t bg-[#080231] text-white">
      <div className="max-w-(--breakpoint-xl) mx-auto">
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 px-6 xl:px-0">
          {/* Brand Info */}
          <div className="col-span-full xl:col-span-2">
            <Logo isDarkBg={true}/>
            <p className="mt-4 text-white/80">
              CarryCome connects students through fast, affordable, and reliable
              campus deliveries. Whether it&apos;s food, parcels, or errands — we make
              life on campus simpler and more rewarding.
            </p>

            <div className="mt-6 space-y-3 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FFCC00]" />
                <span>CarryCome HQ, University Campus Innovation Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#FFCC00]" />
                <span>support@carrycome.app</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FFCC00]" />
                <span>+233 55 123 4567 </span>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h6 className="font-medium text-white">{title}</h6>
              <ul className="mt-6 space-y-4">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-white/70 hover:text-[#FFCC00] transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div className="col-span-2">
            <h6 className="font-medium text-white">Connect</h6>
            <div className="mt-6 flex items-center gap-4">
              <Link href="#" target="_blank" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5 hover:text-[#FFCC00] transition-colors" />
              </Link>
              <Link href="#" target="_blank" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5 hover:text-[#FFCC00] transition-colors" />
              </Link>
              <Link href="#" target="_blank" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5 hover:text-[#FFCC00] transition-colors" />
              </Link>
              <Link href="#" target="_blank" aria-label="TikTok">
                <YoutubeIcon className="h-5 w-5 hover:text-[#FFCC00] transition-colors" />
              </Link>
            </div>
            <div className="mt-6 space-y-3 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#FFCC00]" />
                <span>hello@carrycome.gh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FFCC00]" />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#FFCC00]" />
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <span className="text-white/70 text-sm text-center sm:text-left">
            © 2025 CarryCome Ghana Ltd. All rights reserved. <br />
            Made with 💛 for campus life.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer03Page;
