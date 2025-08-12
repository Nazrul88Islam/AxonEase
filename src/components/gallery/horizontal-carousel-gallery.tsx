"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface HorizontalCarouselGalleryItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface HorizontalCarouselGalleryProps {
  title?: string;
  description?: string;
  items?: HorizontalCarouselGalleryItem[];
}

const data = [
  {
    id: "chefhub-dashboard",
    title: "ড্যাশবোর্ড ওভারভিউ",
    description:
      "রিয়েল-টাইム বিক্রয়, অর্ডার ট্র্যাকিং এবং পারফরমেন্স অ্যানালিটিক্স দেখুন। আপনার রেস্তোরাঁর সম্পূর্ণ পরিস্থিতি এক নজরে বুঝুন।",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "chefhub-pos",
    title: "POS সিস্টেম",
    description:
      "দ্রুত এবং সহজ অর্ডার প্রসেসিং, বিল জেনারেট এবং পেমেন্ট হ্যান্ডলিং। টাচ-ফ্রেন্ডলি ইন্টারফেস সহ স্মার্ট POS সল্যুশন।",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "chefhub-inventory",
    title: "ইনভেন্টরি ব্যবস্থাপনা",
    description:
      "স্টক লেভেল ট্র্যাক করুন, কাঁচামাল পরিচালনা করুন এবং অটোমেটিক রিঅর্ডার অ্যালার্ট পান। খরচ নিয়ন্ত্রণ এবং দক্ষতা বৃদ্ধি করুন।",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "chefhub-reports",
    title: "রিপোর্ট ও অ্যানালিটিক্স",
    description:
      "বিস্তারিত বিক্রয় রিপোর্ট, লাভ-ক্ষতির হিসাব এবং কাস্টমার ট্রেন্ড বিশ্লেষণ। ডেটা-ড্রিভেন সিদ্ধান্ত নিন।",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "chefhub-customer",
    title: "কাস্টমার ম্যানেজমেন্ট",
    description:
      "কাস্টমার প্রোফাইল, অর্ডার হিস্টরি এবং লয়ালটি প্রোগ্রাম পরিচালনা করুন। গ্রাহক সন্তুষ্টি বৃদ্ধি করুন।",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "chefhub-settings",
    title: "সেটিংস ও কনফিগারেশন",
    description:
      "মেনু কাস্টমাইজেশন, স্টাফ পারমিশন এবং সিস্টেম সেটিংস। আপনার রেস্তোরাঁর প্রয়োজন অনুযায়ী কনফিগার করুন।",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG ninS1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HorizontalCarouselGallery = ({
  title = "ChefHub ইন্টারফেস প্রিভিউ",
  description = "আমাদের রেস্তোরাঁ ব্যবস্থাপনা সিস্টেমের শক্তিশালী ফিচারগুলো দেখুন",
  items = data,
}: HorizontalCarouselGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium font-display text-text-primary">
              {title}
            </h2>
            <p className="max-w-lg text-muted-foreground font-body text-sm sm:text-base lg:text-lg">
              {description}
            </p>
          </div>
          <div className="hidden md:flex shrink-0 gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto hover:bg-primary/10"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto hover:bg-primary/10"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] pl-4 sm:pl-[20px]"
              >
                <div className="group rounded-xl cursor-pointer">
                  <div className="group relative h-full min-h-[20rem] sm:min-h-[24rem] lg:min-h-[27rem] max-w-full overflow-hidden rounded-2xl md:aspect-5/4 lg:aspect-16/9">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--color-primary)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 sm:p-6 lg:p-8 text-primary-foreground">
                      <div className="mb-2 sm:mb-3 pt-2 sm:pt-4 text-lg sm:text-xl font-semibold font-display line-clamp-2">
                        {item.title}
                      </div>
                      <div className="mb-6 sm:mb-8 lg:mb-12 line-clamp-2 sm:line-clamp-3 font-body text-sm sm:text-base">
                        {item.description}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-105 font-body">
                        আরও দেখুন
                        <ArrowRight className="size-3 sm:size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 sm:mt-8 flex justify-center gap-2 px-4">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-6 sm:w-8 bg-primary"
                  : "w-3 sm:w-4 bg-primary/30 hover:bg-primary/50"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6 px-4">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollPrev();
            }}
            disabled={!canScrollPrev}
            className="disabled:pointer-events-auto"
          >
            <ArrowLeft className="size-4 mr-2" />
            পূর্ববর্তী
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollNext();
            }}
            disabled={!canScrollNext}
            className="disabled:pointer-events-auto"
          >
            পরবর্তী
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HorizontalCarouselGallery };
