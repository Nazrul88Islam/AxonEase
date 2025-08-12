import { Handshake } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    logo: {
      src: "https://api.dicebear.com/9.x/initials/svg?seed=চট্টগ্রাম রেস্তোরাঁ&backgroundColor=00D4AA&textColor=0F172A",
      alt: "চট্টগ্রাম রেস্তোরাঁ লোগো",
      width: 80,
      height: 80,
    },
    quote:
      "ChefHub ব্যবহার করে আমাদের রেস্তোরাঁর দক্ষতা অসাধারণভাবে বৃদ্ধি পেয়েছে। অর্ডার প্রসেসিং এখন অনেক দ্রুত এবং নির্ভুল।",
    author: {
      name: "মোহাম্মদ রহিম",
      role: "মালিক, খাবার দাবার রেস্তোরাঁ",
      image:
        "https://api.dicebear.com/9.x/adventurer/svg?seed=Mohammad%20Rahim",
    },
  },
  {
    logo: {
      src: "https://api.dicebear.com/9.x/initials/svg?seed=ঢাকা বিস্ট্রো&backgroundColor=FF6B35&textColor=0F172A",
      alt: "ঢাকা বিস্ট্রো লোগো",
      width: 80,
      height: 80,
    },
    quote:
      "ইনভেন্টরি ম্যানেজমেন্ট এখন খুবই সহজ হয়ে গেছে। ChefHub এর মাধ্যমে আমরা স্টক ট্র্যাক করতে পারি এবং অপচয় কমাতে পেরেছি।",
    author: {
      name: "ফাতিমা খাতুন",
      role: "ম্যানেজার, ঢাকা বিস্ট্রো",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Fatima%20Khatun",
    },
  },
  {
    logo: {
      src: "https://api.dicebear.com/9.x/initials/svg?seed=সিলেট ক্যাফে&backgroundColor=7C3AED&textColor=F8FAFC",
      alt: "সিলেট ক্যাফে লোগো",
      width: 80,
      height: 80,
    },
    quote:
      "বিক্রয় রিপোর্টিং ফিচার অত্যন্ত কার্যকর। আমরা এখন প্রতিদিনের বিক্রয় ট্র্যাক করতে পারি এবং ব্যবসায়িক সিদ্ধান্ত নিতে পারি।",
    author: {
      name: "আহমেদ আলী",
      role: "মালিক, ক্যাফে হাব",
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ahmed%20Ali",
    },
  },
];

const CompanyLogoTestimonials = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="border-y">
        <div className="container flex flex-col gap-4 sm:gap-6 border-x py-6 sm:py-8 lg:py-12 max-lg:border-x px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl leading-tight tracking-tight font-display">
            আমাদের ক্লায়েন্টরা কী বলেন
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground text-sm sm:text-base lg:text-lg">
            বাংলাদেশের শতাধিক ব্যবসা আমাদের সমাধানে সন্তুষ্ট
          </p>
        </div>
      </div>

      <div className="container mt-8 sm:mt-10 lg:mt-14 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex flex-col gap-4 sm:gap-6 rounded-md bg-card p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img
              src={testimonial.logo.src}
              alt={testimonial.logo.alt}
              width={testimonial.logo.width}
              height={testimonial.logo.height}
              className="object-contain rounded-full w-16 h-16 sm:w-20 sm:h-20"
            />

            <blockquote className="text-muted-foreground text-sm sm:text-base lg:text-lg font-normal italic line-clamp-4">{`"${testimonial.quote}"`}</blockquote>

            <div className="mt-auto flex items-center gap-3 sm:gap-4">
              <img
                src={testimonial.author.image}
                alt={`${testimonial.author.name}'s profile picture`}
                width={40}
                height={40}
                className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-base sm:text-lg tracking-[-0.36px] text-foreground font-medium line-clamp-1">
                  {testimonial.author.name}
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-1">
                  {testimonial.author.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 h-6 sm:h-8 lg:h-[112px] w-full border-y">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
};

export { CompanyLogoTestimonials };
