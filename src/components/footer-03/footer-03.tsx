"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  ArrowRight,
  Check,
  Loader2,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../navbar-04/logo";
import { useState } from "react";
import { SUPPORT_EMAIL, SUPPORT_PHONE, SUPPORT_PHONE_HREF } from "@/lib/contact";

const footerSections = [
  {
    title: "Company",
    links: [
      { title: "The Marketplace", href: "/#marketplace" },
      { title: "Why CarryMart", href: "/#features" },
      { title: "CarryPay Wallet", href: "/#carrypay" },
      { title: "Sell on CarryMart", href: "/#sell" },
    ],
  },
  {
    title: "Categories",
    links: [
      { title: "Fashion", href: "/#marketplace" },
      { title: "Beauty", href: "/#marketplace" },
      { title: "Food", href: "/#marketplace" },
      { title: "Deals & Events", href: "/#marketplace" },
    ],
  },
  {
    title: "Help & Legal",
    links: [
      { title: "Help & FAQs", href: "/support" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { icon: InstagramIcon, href: "https://instagram.com/carrymart", label: "Instagram" },
  { icon: TwitterIcon, href: "https://twitter.com/carrymart", label: "Twitter" },
  { icon: FacebookIcon, href: "https://facebook.com/carrymart", label: "Facebook" },
];

type Status = "idle" | "submitting" | "success" | "error";

const Footer03Page = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    // Gutter lives on the footer, so the max-w-7xl track below matches the
    // content edges of the page sections.
    <footer className="bg-secondary text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo isDarkBg={true} />
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xs">
              The campus marketplace. Buy and sell with students on campuses
              across Ghana.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" />
                {SUPPORT_EMAIL}
              </a>
              <a
                href={`tel:${SUPPORT_PHONE_HREF}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" />
                {SUPPORT_PHONE}
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          {footerSections.map(({ title, links }) => (
            <div key={title} className="lg:col-span-2">
              <h6 className="font-semibold text-white text-sm">{title}</h6>
              <ul className="mt-4 space-y-3">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h6 className="font-semibold text-white text-sm">Stay Updated</h6>
            <p className="mt-4 text-white/70 text-sm">
              Get notified when we launch on your campus.
            </p>

            {status === "success" ? (
              <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-white/10 p-4">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                <p className="text-sm text-white/80 leading-relaxed">
                  You&apos;re on the list. We&apos;ll be in touch before launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 space-y-3" noValidate>
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "footer-email-error" : undefined}
                  className="w-full h-11 px-4 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
                  required
                />
                <Button type="submit" className="w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <>
                      Subscribing
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
                {status === "error" && (
                  <p id="footer-email-error" className="text-sm text-white/80 leading-relaxed">
                    {message}{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="underline underline-offset-4 hover:text-white"
                    >
                      Email us instead
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Footer Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/60 text-sm">
            © {new Date().getFullYear()} CarryMart. All rights reserved.
          </span>
          <span className="text-white/60 text-sm">
            Made for campus life
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer03Page;
