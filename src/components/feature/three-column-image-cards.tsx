"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const utilities = [
  {
    title: "কাস্টম ওয়েবসাইট",
    description: "আধুনিক, রেসপন্সিভ ও SEO অপ্টিমাইজড ওয়েবসাইট",
    image:
      "https://images.unsplash.com/photo-1751755359997-40f4fb2293cd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E-commerce সমাধান",
    description: "অনলাইন স্টোর ও পেমেন্ট ইন্টিগ্রেশন",
    image:
      "https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "মোবাইল অ্যাপ",
    description: "iOS ও Android অ্যাপ ডেভেলপমেন্ট",
    image:
      "https://images.unsplash.com/photo-1751308759380-03e5abd14510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI-powered design magic",
    description:
      "Orchids's AI crafts layouts, selects colors, and writes content for you. Focus on your ideas, not the details.",
    image:
      "https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Real-time editing, zero code",
    description:
      "Edit your site visually and see changes instantly. Orchids lets you drag, drop, and customize every section with ease.",
    image:
      "https://images.unsplash.com/photo-1751308759380-03e5abd14510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Collaborate and launch together",
    description:
      "Invite your team to build, edit, and launch sites collaboratively. Orchids makes teamwork seamless.",
    image:
      "https://plus.unsplash.com/premium_photo-1676303291138-d44a46bd7c5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Instant publishing",
    description:
      "Go live in seconds. Orchids hosts and optimizes your site automatically, so you can share your creation with the world instantly.",
    image:
      "https://images.unsplash.com/photo-1627686981794-b6505f51024f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Built for growth",
    description:
      "From personal portfolios to business sites, Orchids scales with you. Analytics, SEO, and integrations are just a click away.",
    image:
      "https://images.unsplash.com/photo-1703485393247-b90b4424a1b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ThreeColumnImageCards = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="m-auto mb-16 sm:mb-20 lg:mb-24 max-w-xl text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold font-display text-foreground">
            আমাদের সেবাসমূহ
          </h2>
          <p className="m-auto max-w-3xl text-base sm:text-lg lg:text-xl text-muted-foreground font-body px-4">
            ওয়েবসাইট ডেভেলপমেন্ট থেকে কাস্টম সফটওয়্যার - আপনার প্রয়োজন
            অনুযায়ী সমাধান।
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col items-center space-y-2">
            <Button
              className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base"
              size="lg"
            >
              বিস্তারিত জানুন
            </Button>
          </div>
        </div>
        <div className="mt-8 sm:mt-11 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {utilities.map((utility, index) => (
            <Card
              key={index}
              className="border-0 pt-0 bg-card overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={utility.image}
                  alt={utility.title}
                  className="aspect-video w-full rounded-t-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="mb-1 sm:mb-2 font-medium font-display text-card-foreground text-sm sm:text-base line-clamp-2">
                  {utility.title}
                </p>
                <p className="text-muted-foreground font-body text-xs sm:text-sm line-clamp-3">
                  {utility.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ThreeColumnImageCards };
