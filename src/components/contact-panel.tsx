import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SUPPORT_EMAIL, SUPPORT_EMAIL_HREF } from "@/lib/contact";

type ContactPanelProps = {
  title: string;
  description: string;
  /** Turn off on the help centre itself, where the link would be circular. */
  showHelpCenterLink?: boolean;
};

/** Shared closing panel for the support and legal pages. */
export const ContactPanel = ({
  title,
  description,
  showHelpCenterLink = true,
}: ContactPanelProps) => (
  <div className="relative mt-16 overflow-hidden rounded-3xl bg-secondary text-white p-8 md:p-12">
    {/* Decorative accents */}
    <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-primary/15" />
    <div className="pointer-events-none absolute top-1/2 right-10 h-28 w-28 -translate-y-1/2 rounded-full bg-primary/10" />
    <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-white/5" />
    <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />

    <div className="relative max-w-xl">
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2">
        {title}
      </h2>
      <p className="text-white/70 leading-relaxed mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={SUPPORT_EMAIL_HREF}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground h-12 px-6 font-semibold shadow-glow-sm hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Mail className="size-4" strokeWidth={2.25} />
          {SUPPORT_EMAIL}
        </a>
        {showHelpCenterLink && (
          <Link
            href="/support"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white h-12 px-6 font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Visit the Help Center
            <ArrowUpRight className="size-4" />
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default ContactPanel;
