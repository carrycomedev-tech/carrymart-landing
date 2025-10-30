import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ama K.",
    designation: "3rd Year, Business Administration",
    testimonial:
      "CarryCome saved me during exam week. I ordered food to the library at midnight and it arrived in 15 minutes. Game changer!",
    rating: 5,
  },
  {
    id: 2,
    name: "Kwame D.",
    designation: "CarryCome Courier, 2nd Year Engineering",
    testimonial:
      "I make enough money delivering between my morning and evening classes to cover my data and food for the week. Perfect student job.",
    rating: 5,
  },
  {
    id: 3,
    name: "Yaw M.",
    designation: "4th Year, Computer Science",
    testimonial:
      "Finally a delivery service that actually knows how to find Commonwealth Hall after 9 PM. The student couriers just get it.",
    rating: 5,
  }
];

const Testimonials = () => (
  <div className="min-h-screen flex justify-center items-center py-12 px-6">
    <div>
      <h2 className="mb-14 text-5xl md:text-6xl font-semibold text-center tracking-[-0.03em]">
        What Students Say
      </h2>
      <div className="max-w-(--breakpoint-xl) mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 bg-primary/10 rounded-xl p-6 break-inside-avoid"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="size-10">
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              {/* <Button variant="ghost" size="icon" asChild>
                <Link href="#" target="_blank">
                  <TwitterLogo className="w-4 h-4" />
                </Link>
              </Button> */}
            </div>
            <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
            <div className="mt-4 flex">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i} className="text-yellow-500">⭐</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// const TwitterLogo = (props: ComponentProps<"svg">) => (
//   <svg
//     role="img"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <title>X</title>
//     <path
//       fill="currentColor"
//       d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
//     />
//   </svg>
// );

export default Testimonials;
