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
    tutorialLink: "#",
    image: "/assets/feature-img-1.png",
    alt: "Food delivery on campus",
  },
  {
    category: "Document Delivery",
    title: "Send or receive documents easily",
    details:
      "Whether it’s an assignment, signed form, or notes from a friend, CarryCome helps you move documents securely and quickly across campus.",
    tutorialLink: "#",
    image: "/assets/feature-img-2.png",
    alt: "Document delivery service",
  },
  {
    category: "Parcel Services",
    title: "Deliver and receive parcels on campus",
    details:
      "From gifts to gadgets, CarryCome connects you with nearby riders who can deliver items safely within minutes — easy, reliable, and campus-focused.",
    tutorialLink: "#",
    image: "/assets/feature-img-3.png",
    alt: "Parcel delivery on campus",
  },
  {
    category: "Campus Errands",
    title: "Simplify your daily campus runs",
    details:
      "Need something picked up from the cafeteria or bookstore? Our student couriers handle small errands and drop-offs anywhere around campus.",
    tutorialLink: "#",
    image: "/assets/feature-img-4.png",
    alt: "Student running campus errands",
  },
  {
    category: "Become a Courier",
    title: "Earn rewards while helping others",
    details:
      "Turn your rides or walks across campus into real earnings. Deliver food, parcels, or errands — and get rewarded every time you move with purpose.",
    tutorialLink: "#",
    image: "/assets/feature-img-5.png",
    alt: "Student courier earning rewards",
  },
];


const Features06Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-bold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          Our Services        
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Built for students, powered by community.
          From food cravings to errands and parcels — CarryCome helps you get things done faster around campus.
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
                  <Link href={feature.tutorialLink}>
                    Learn More <ArrowRight />
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
