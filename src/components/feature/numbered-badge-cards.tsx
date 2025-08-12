"use client";

import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface DataItem {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

const DATA: DataItem[] = [
  {
    id: 1,
    number: "01",
    title: "POS সিস্টেম",
    description: "দ্রুত বিলিং ও পেমেন্ট প্রসেসিং",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    number: "02",
    title: "ইনভেন্টরি ট্র্যাকিং",
    description: "স্টক ব্যবস্থাপনা ও সতর্কতা",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    number: "03",
    title: "রিপোর্ট ও অ্যানালিটিক্স",
    description: "বিক্রয় ও লাভের বিস্তারিত প্রতিবেদন",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const NumberedBadgeCards = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-16 sm:py-24 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pb-4 text-center">
          <div>
            <span className="my-3 mb-4 flex items-center justify-center">
              <Badge
                variant="outline"
                className="bg-white border-emerald-200 px-3 py-1"
              >
                <Sparkles className="mr-2 h-4 w-4 text-emerald-600" />
                <p className="text-xs text-emerald-700">ChefHub বৈশিষ্ট্য</p>
              </Badge>
            </span>
          </div>
          <h1 className="pb-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-800 px-4">
            রেস্তোরাঁ ব্যবস্থাপনার সম্পূর্ণ সমাধান
          </h1>
          <p className="text-gray-600 max-w-md sm:max-w-lg lg:max-w-2xl text-sm sm:text-base lg:text-lg px-4">
            আধুনিক প্রযুক্তির সাহায্যে আপনার রেস্তোরাঁর সম্পূর্ণ ব্যবস্থাপনা সহজ
            করুন
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {DATA.map((feature) => (
            <div
              key={feature.id}
              className="bg-white grid grid-cols-1 rounded-2xl border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <div className="bg-emerald-600 text-white inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold mb-4">
                  {feature.number}
                </div>
                <p className="text-base sm:text-lg my-2 sm:my-4 font-semibold text-gray-800 line-clamp-2">
                  {feature.title}
                </p>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
                  {feature.description}
                </p>
              </div>
              <div className="mt-auto flex min-h-[180px] sm:min-h-[200px] justify-center rounded-b-2xl">
                <div className="h-[180px] sm:h-[200px] w-full">
                  <img
                    src={feature.image}
                    alt="placeholder"
                    className="h-full w-full rounded-b-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { NumberedBadgeCards };
