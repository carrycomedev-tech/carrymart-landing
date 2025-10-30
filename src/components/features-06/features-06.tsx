import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    category: "Food Delivery",
    title: "Get meals delivered right to you",
    details:
      "Order from your favorite campus spots and get food delivered fast by fellow students. Save time and satisfy your cravings — no need to leave class or your hostel.",
    featuresLink: "#",
    image: "/assets/feature-img-1.png",
    alt: "Food delivery on campus",
    link: "Order Now"
  },
  {
    category: "Parcel Services",
    title: "Deliver and receive parcels on campus",
    details:
      "From textbooks and online orders to campus shop purchases, we bring your parcels right to your door. No more missed deliveries or long walks to pickup points — we handle it all.",
    featuresLink: "#",
    image: "/assets/feature-img-3.png",
    alt: "Parcel delivery on campus",
    link: "Send a Parcel"
  },
    {
    category: "Document Delivery",
    title: "Urgent papers delivered on time",
    details:
      "Need to send documents between departments, submit assignments, or pick up printed materials? We deliver papers and documents across campus quickly and securely — because deadlines matter.",
    featuresLink: "#",
    image: "/assets/feature-img-2.png",
    alt: "Document delivery service",
    link: "Send Documents"
  },
  {
    category: "Grocery Delivery",
    title: "Essentials brought to your doorstep",
    details:
      "Stock up on snacks, toiletries, drinks, and daily necessities without leaving your room. Order from local campus stores and get everything you need delivered while you focus on what matters most.",
    featuresLink: "#",
    image: "/assets/feature-img-4.png",
    alt: "Student running campus errands",
    link: "Order Groceries"
  },
  // {
  //   category: "Become a Courier",
  //   title: "Earn rewards while helping others",
  //   details:
  //     "Turn your rides or walks across campus into real earnings. Deliver food, parcels, or errands — and get rewarded every time you move with purpose.",
  //   featuresLink: "#",
  //   image: "/assets/feature-img-5.png",
  //   alt: "Student courier earning rewards",
  // },
];


const Features06Page = () => {
  return (
    <div id="services" className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-bold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          What We Deliver
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          From midnight cravings to urgent documents, we&apos;ve got your campus covered. Fast, affordable delivery for everything you need.
        </p>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
            >
              <div className="w-full aspect-[4/3] z-0 bg-muted rounded-xl border border-border/50 basis-1/2 relative overflow-hidden">
                {feature.image && (
                  <Image
                    src={feature.image}
                    alt={feature.alt || feature.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={feature.category === "Food Delivery"}
                  />
                )}
              </div>
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-2xl font-bold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                <Button asChild size="lg" className="mt-6 rounded-full gap-3">
                  <Link href={feature.featuresLink}>
                    {feature.link || "Learn More"} <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features06Page;
