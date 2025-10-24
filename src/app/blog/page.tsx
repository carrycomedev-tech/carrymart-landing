import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import React from "react";

const blogs = [
  {
    id: 1,
    category: "Campus Life",
    title: "Earn as a Student on Campus",
    readTime: "4 min read",
    excerpt:
      "Discover how students are turning everyday errands into rewarding opportunities with CarryCome. Deliver, earn, and grow — all within your university.",
    image: "/assets/blog-earn-student.png",
  },
  {
    id: 2,
    category: "Food Delivery",
    title: "The Future of Campus Food Delivery",
    readTime: "5 min read",
    excerpt:
      "From late-night study snacks to quick lunch runs, see how CarryCome riders are redefining food delivery across university campuses with speed and trust.",
    image: "/assets/blog-food-delivery.png",
  },
  {
    id: 3,
    category: "Community",
    title: "Building a Student-Powered Network",
    readTime: "6 min read",
    excerpt:
      "CarryCome isn’t just a service — it’s a community of students helping students. Learn how peer-to-peer delivery is changing campus life for good.",
    image: "/assets/blog-community.png",
  },
];

const Blog02Page = () => {
  return (
    <div id="blogs" className="max-w-(--breakpoint-xl) mx-auto py-16 px-6 xl:px-0">
      {/* Header */}
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-urbanist font-extrabold tracking-tight text-secondary">
          Latest Blogs
        </h2>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Recommended" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Blog Grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="pt-0 shadow-none overflow-hidden rounded-lg transition hover:shadow-md bg-card border-border"
          >
            <CardHeader className="p-0 m-0">
              <div
                className="aspect-video bg-muted w-full border-b bg-cover bg-center"
                style={{
                  backgroundImage: `url(${blog.image})`,
                }}
              />
            </CardHeader>

            <CardContent className="pb-6 pt-4">
              <div className="flex items-center gap-3">
                <Badge
                  variant="secondary"
                  className="shadow-none border border-border"
                >
                  {blog.category}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  {blog.readTime}
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-urbanist font-semibold tracking-tight text-foreground">
                {blog.title}
              </h3>

              <p className="mt-2 font-outfit text-muted-foreground text-sm leading-relaxed">
                {blog.excerpt}
              </p>

              <Button size="sm" className="mt-6 shadow-none">
                Read more <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog02Page;
