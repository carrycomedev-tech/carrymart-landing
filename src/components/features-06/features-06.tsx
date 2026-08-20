"use client";

import {ArrowRight, Check, Clapperboard, Heart, MapPin, MessagesSquare, Play, Send, Store,} from "lucide-react";
import Image from "next/image";
import {ReactNode} from "react";
import Link from "next/link";
import {AnimatedSection} from "@/components/ui/animated-section";
import {useReducedMotion} from "@/lib/use-reduced-motion";
import {cn} from "@/lib/utils";

/* --- Mini app-style visuals. Mostly pure CSS; listings carry product
   photos where we have them, emoji as the stand-in where we do not. --- */

type Listing = { name: string; price: string; emoji?: string; image?: string };

/* Photos are alpha cutouts, so they sit on the same muted tile as the emoji
   and every card keeps one shared placeholder shape. */
const listings: Listing[] = [
    {image: "/assets/sneakers.webp", name: "Pink runners", price: "GHS 250"},
    {image: "/assets/lip-gloss.webp", name: "Gloss set", price: "GHS 45"},
    {image: "/assets/shirt.webp", name: "Striped shirt", price: "GHS 120"},
    {image: "/assets/airpod.webp", name: "Wireless earbuds", price: "GHS 480"},
];

const ListingsVisual = () => (
    <div className="grid grid-cols-2 gap-2.5 w-full max-w-[400px]">
        {listings.map((item) => (
            <div key={item.name} className="bg-white rounded-xl border border-border p-3 shadow-sharp">
                <div
                    className="relative h-10 rounded-lg bg-muted flex items-center justify-center text-lg mb-1.5 overflow-hidden">
                    {item.image ? (
                        <Image src={item.image} alt="" fill sizes="176px" className="object-contain p-0.5"/>
                    ) : item.emoji}
                </div>
                <p className="text-[11px] font-semibold text-secondary leading-tight">{item.name}</p>
                <div className="flex items-center justify-between mt-0.5">
                    <p className="text-[11px] font-bold text-secondary">{item.price}</p>
                    <Heart className="size-3 text-muted-foreground"/>
                </div>
            </div>
        ))}
    </div>
);

type ReelPanelProps = {
    /** Clip filling the panel. Without one the panel keeps its gradient. */
    src?: string;
    poster?: string;
    className?: string;
    children?: ReactNode;
};

/* Panels take a clip or fall back to the gradient. Like the phone mock, the
   clips are decorative and hold on the poster frame under reduced motion. The
   centre reel leads on size and shadow, so the side clips need no dimming. */
const ReelPanel = ({src, poster, className, children}: ReelPanelProps) => {
    const reducedMotion = useReducedMotion();

    return (
        <div className={cn("relative rounded-2xl overflow-hidden", className)}>
            {src && (
                <video
                    key={reducedMotion ? "still" : "playing"}
                    src={reducedMotion ? undefined : src}
                    poster={poster}
                    autoPlay={!reducedMotion}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    tabIndex={-1}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
            {children}
        </div>
    );
};

const ReelsVisual = () => (
    <div className="flex items-end gap-3">
        <ReelPanel
            src="/media/reel-left.mp4"
            poster="/media/reel-left-poster.jpg"
            className="w-24 h-40"
        />
        <ReelPanel
            src="/media/reel-centre.mp4"
            poster="/media/reel-centre-poster.jpg"
            className="w-32 h-52 bg-gradient-to-b from-primary to-[#C7004A] shadow-sharp-lg flex items-center justify-center"
        >
            {/* relative so it paints above the absolutely positioned video */}
            <div className="relative w-10 h-10 rounded-full bg-white/40 backdrop-blur flex items-center justify-center -mt-6">
                <Play className="size-4 text-secondary fill-secondary ml-0.5"/>
            </div>
            <div className="absolute bottom-2.5 inset-x-2.5 bg-white/95 rounded-lg px-2.5 py-1.5">
                <p className="text-[11px] font-bold text-secondary leading-snug whitespace-nowrap">Thrift drop 🔥</p>
                <p className="text-[11px] text-muted-foreground font-semibold leading-snug whitespace-nowrap">From GHS 20</p>
            </div>
        </ReelPanel>
        <ReelPanel
            src="/media/reel-right.mp4"
            poster="/media/reel-right-poster.jpg"
            className="w-24 h-40"
        />
    </div>
);
const ChatVisual = () => (
    <div className="w-full max-w-[380px] space-y-2.5">
        <div className="bg-white border border-border rounded-2xl rounded-bl-md px-4 py-2.5 w-fit shadow-sharp">
            <p className="text-sm text-secondary">Is the hoodie still available? 👀</p>
        </div>
        <div className="bg-primary rounded-2xl rounded-br-md px-4 py-2.5 w-fit ml-auto shadow-sharp">
            <p className="text-sm text-primary-foreground font-medium">Yes! GHS 80. Meet at the night market?</p>
        </div>
        <div className="bg-white border border-border rounded-2xl rounded-bl-md px-4 py-2.5 w-fit shadow-sharp">
            <p className="text-sm text-secondary">Deal 🤝 Paying with CarryPay</p>
        </div>
        <div
            className="flex items-center gap-2 bg-white border border-border rounded-full pl-4 pr-1.5 py-1.5 shadow-sharp">
            <p className="text-xs text-muted-foreground flex-1">Message…</p>
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <Send className="size-3.5 text-primary-foreground" strokeWidth={2.25}/>
            </div>
        </div>
    </div>
);

const CampusVisual = () => (
    <div className="w-full max-w-[380px] bg-white rounded-2xl border border-border shadow-sharp overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Choose your campus</p>
        </div>
        {[
            {name: "University of Ghana", active: true},
            {name: "KNUST", active: false},
            {name: "University of Cape Coast", active: false},
            {name: "Ashesi University", active: false},
        ].map((campus) => (
            <div key={campus.name}
                 className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 last:border-0">
                <p className={`text-sm ${campus.active ? "font-semibold text-secondary" : "text-muted-foreground"}`}>
                    {campus.name}
                </p>
                {campus.active && (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="size-3 text-primary-foreground" strokeWidth={3}/>
                    </div>
                )}
            </div>
        ))}
    </div>
);

/* --- Section --- */

const features = [
    {
        category: "Listings",
        title: "Post it in seconds, sell it today",
        details:
            "Snap a photo, set a price, pick one of nine categories, from electronics to food. Your listing is live on your campus feed instantly.",
        link: "Browse listings",
        icon: Store,
        visual: <ListingsVisual/>,
    },
    {
        category: "Reels & Stories",
        title: "Discover deals in every reel",
        details:
            "Sellers show off their stuff in short videos and stories. Scroll, spot something you like, and buy it without leaving the reel.",
        link: "See what's trending",
        icon: Clapperboard,
        visual: <ReelsVisual/>,
    },
    {
        category: "Real-time Chat",
        title: "Chat, haggle, and close the deal",
        details:
            "Message sellers instantly. No exchanging numbers. Agree on price and meetup, then pay right from the conversation.",
        link: "Start a conversation",
        icon: MessagesSquare,
        visual: <ChatVisual/>,
    },
    {
        category: "Every Campus",
        title: "Your campus is the storefront",
        details:
            "CarryMart runs campus by campus, so everything you see is nearby. Switch campuses anytime to shop what students are selling across Ghana.",
        link: "Find your campus",
        icon: MapPin,
        visual: <CampusVisual/>,
    },
];

const Features06Page = () => {
    return (
        <section id="marketplace" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full mx-auto">
                <AnimatedSection className="max-w-2xl mb-12 md:mb-16">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-3">
                        The Marketplace
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-secondary">
                        Everything your campus is selling, in one app
                    </h2>
                    <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                        A social marketplace built for student life: list, discover, chat,
                        and get paid without leaving campus.
                    </p>
                </AnimatedSection>

                <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    {features.map((feature, index) => (
                        <AnimatedSection key={feature.category} delay={index * 0.08} direction="up">
                            <Link
                                href="#download"
                                className="group block bg-muted rounded-3xl overflow-hidden border border-transparent hover:border-border hover:shadow-sharp-lg transition-all duration-300 h-full"
                            >
                                {/* Two alignments doing the work here:
                                    - px-6 md:px-8 matches the copy block below, and justify-start
                                      left-aligns the mock, so the mock, eyebrow, heading and link
                                      all share one left edge.
                                    - items-end sits every mock on a common baseline just above the
                                      copy. The mocks are different heights, so centring them in a
                                      fixed-height box left each one floating at its own offset.
                                    origin-bottom-left keeps that baseline pinned during the hover
                                    scale, so the card grows up and right rather than drifting. */}
                                <div
                                    className="h-60 md:h-64 flex items-end justify-start px-6 md:px-8 pt-6 overflow-hidden">
                                    <div
                                        className="transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1 w-full origin-bottom-left">
                                        {feature.visual}
                                    </div>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <div
                                            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                                            <feature.icon className="size-4 text-primary-foreground"
                                                          strokeWidth={2.25}/>
                                        </div>
                                        <span
                                            className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {feature.category}
                    </span>
                                    </div>

                                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-secondary mb-2.5">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-5">
                                        {feature.details}
                                    </p>

                                    <span className="inline-flex items-center gap-1.5 font-semibold text-secondary">
                    {feature.link}
                                        <ArrowRight
                                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"/>
                  </span>
                                </div>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features06Page;
