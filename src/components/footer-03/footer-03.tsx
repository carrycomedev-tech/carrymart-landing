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
} from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { title: "Home", href: "#" },
      { title: "About", href: "#" },
      { title: "Services", href: "#" },
      { title: "Become a Rider", href: "#" },
      { title: "Blogs", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Cookie Policy", href: "#" },
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
            <h3 className="text-2xl font-semibold text-white">CarryCome</h3>
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

          {/* Newsletter */}
          <div className="col-span-2">
            <h6 className="font-medium text-white">Stay up to date</h6>
            <p className="text-white/70 text-sm mt-2">
              Get delivery updates, student offers, and tips in your inbox.
            </p>
            <form className="mt-6 flex items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="grow max-w-64 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-[#FFCC00] text-[#080231] hover:bg-[#FFCC00]/90">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <span className="text-white/70 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} CarryCome. All rights reserved. <br />
            Built with 💛 by students, for students.
          </span>

          <div className="flex items-center gap-5 text-white/70">
            <Link href="#" target="_blank" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5 hover:text-[#FFCC00] transition-colors" />
            </Link>
            <Link href="#" target="_blank" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5 hover:text-[#FFCC00] transition-colors" />
            </Link>
            <Link href="#" target="_blank" aria-label="Twitter (X)">
              <TwitterIcon className="h-5 w-5 hover:text-[#FFCC00] transition-colors" />
            </Link>
            <Link href="#" target="_blank" aria-label="YouTube">
              <YoutubeIcon className="h-5 w-5 hover:text-[#FFCC00] transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer03Page;
