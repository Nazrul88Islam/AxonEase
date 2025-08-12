import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChefHat,
  Code,
  Globe,
  Smartphone,
  Database,
  ArrowRight,
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: ChefHat,
      title: "ChefHub POS System",
      subtitle: "রেস্টুরেন্ট ম্যানেজমেন্ট",
      description:
        "সম্পূর্ণ রেস্টুরেন্ট ব্যবস্থাপনার জন্য আধুনিক POS সিস্টেম। অর্ডার, ইনভেন্টরি, বিলিং এবং রিপোর্টিং - সবকিছু এক জায়গায়।",
      features: [
        "অর্ডার ম্যানেজমেন্ট",
        "ইনভেন্টরি ট্র্যাকিং",
        "বিক্রয় রিপোর্ট",
        "কাস্টমার ড্যাশবোর্ড",
      ],
    },
    {
      icon: Code,
      title: "Custom Software",
      subtitle: "কাস্টম সফটওয়্যার",
      description:
        "আপনার ব্যবসার প্রয়োজন অনুযায়ী বিশেষভাবে তৈরি সফটওয়্যার সমাধান। স্কেলেবল এবং নিরাপদ অ্যাপ্লিকেশন।",
      features: [
        "বিজনেস অটোমেশন",
        "ওয়ার্কফ্লো ম্যানেজমেন্ট",
        "ডেটা অ্যানালিটিক্স",
        "API ইন্টিগ্রেশন",
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      subtitle: "ওয়েব ডেভেলপমেন্ট",
      description:
        "আধুনিক এবং রেসপন্সিভ ওয়েবসাইট তৈরি। ই-কমার্স থেকে কর্পোরেট ওয়েবসাইট - সব ধরনের সমাধান।",
      features: [
        "রেসপন্সিভ ডিজাইন",
        "ই-কমার্স সাইট",
        "CMS সিস্টেম",
        "SEO অপটিমাইজেশন",
      ],
    },
    {
      icon: Database,
      title: "Database Solutions",
      subtitle: "ডেটাবেস সমাধান",
      description:
        "কার্যকর ডেটাবেস ডিজাইন এবং অপটিমাইজেশন। ডেটা সিকিউরিটি এবং ব্যাকআপ সিস্টেম।",
      features: [
        "ডেটা মডেলিং",
        "পারফরমেন্স টিউনিং",
        "ব্যাকআপ সিস্টেম",
        "সিকিউরিটি অডিট",
      ],
    },
    {
      icon: Smartphone,
      title: "স্কুল ম্যানেজমেন্ট সিস্টেম",
      subtitle: "শিক্ষা প্রতিষ্ঠান ব্যবস্থাপনা",
      description:
        "বিদ্যালয় পরিচালনার জন্য আধুনিক সফটওয়্যার সিস্টেম। ছাত্র-ছাত্রীদের রেকর্ড, উপস্থিতি, ফলাফল এবং অন্যান্য কার্যক্রম পরিচালনা।",
      features: [
        "ছাত্র রেজিস্ট্রেশন",
        "অ্যাটেনডেন্স ট্র্যাকিং",
        "শিক্ষক ও কর্মচারী ডেটাবেস",
        "পরীক্ষার ফলাফল ব্যবস্থাপনা",
      ],
    },
    {
      icon: Smartphone,
      title: "দোকান POS সিস্টেম",
      subtitle: "রিটেল ব্যবসার জন্য পয়েন্ট অফ সেল",
      description:
        "দোকানের বিক্রয় ও ইনভেন্টরি ম্যানেজ করার জন্য সহজ এবং কার্যকর POS সিস্টেম। দ্রুত বিল তৈরি এবং রিপোর্টিং।",
      features: [
        "বিক্রয় হিসাব",
        "স্টক ম্যানেজমেন্ট",
        "ডিসকাউন্ট এবং অফার",
        "বিক্রয় রিপোর্ট",
      ],
    },
    {
      icon: Smartphone,
      title: "ল্যাব ম্যানেজমেন্ট সিস্টেম",
      subtitle: "ল্যাবরেটরি পরিচালনা",
      description:
        "রোগীর তথ্য, পরীক্ষার ফলাফল ও রিপোর্ট পরিচালনার জন্য আধুনিক সফটওয়্যার। দ্রুত ও নির্ভুল ল্যাব সার্ভিস নিশ্চিত করে।",
      features: [
        "রোগী রেজিস্ট্রেশন",
        "টেস্ট রিপোর্ট জেনারেশন",
        "পারফরম্যান্স ট্র্যাকিং",
        "রিপোর্ট প্রিন্টিং",
      ],
    },
    {
      icon: Smartphone,
      title: "হাসপাতাল ম্যানেজমেন্ট সিস্টেম",
      subtitle: "স্বাস্থ্যসেবা প্রতিষ্ঠানের জন্য",
      description:
        "হাসপাতালের রোগী, ডাক্তার, অ্যাপয়েন্টমেন্ট ও মেডিকেল রেকর্ড ব্যবস্থাপনা সিস্টেম। উন্নত স্বাস্থ্যসেবা প্রদানের জন্য ডিজাইন।",
      features: [
        "রোগী তথ্য ব্যবস্থাপনা",
        "ডাক্তার অ্যাপয়েন্টমেন্ট",
        "ঔষধ এবং বিলিং",
        "মেডিকেল রিপোর্টিং",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            আমাদের সেবাসমূহ
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            AxonEase Solutions আপনার ব্যবসায়িক প্রয়োজন মেটাতে সম্পূর্ণ
            প্রযুক্তিগত সমাধান প্রদান করে। আমাদের বিশেষজ্ঞ দল আধুনিক প্রযুক্তি
            ব্যবহার করে কার্যকর এবং নির্ভরযোগ্য সেবা নিশ্চিত করে।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 hover:border-primary/30"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative pb-4">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500 group-hover:scale-110">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </CardTitle>
                      <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 sm:gap-3 font-body text-xs sm:text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-body font-medium shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-sm sm:text-base">
                    বিস্তারিত জানুন
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-2xl sm:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 max-w-full mx-4">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">
                বিশেষ পরামর্শ প্রয়োজন?
              </h3>
              <p className="font-body text-muted-foreground text-sm sm:text-base">
                আমাদের বিশেষজ্ঞদের সাথে কথা বলুন এবং আপনার ব্যবসার জন্য সেরা
                সমাধান খুঁজে নিন।
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-body font-medium shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 whitespace-nowrap flex-shrink-0 text-sm sm:text-base"
            >
              যোগাযোগ করুন
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
