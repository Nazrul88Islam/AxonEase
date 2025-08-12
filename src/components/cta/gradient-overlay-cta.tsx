"use client";

import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

const GradientOverlayCta = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex h-[400px] sm:h-[500px] lg:h-[620px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg')] bg-cover bg-center">
          <div className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-2 sm:mb-4">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full">
                <UtensilsCrossed className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            <h2 className="text-primary-foreground text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-display leading-tight">
              ChefHub দিয়ে আপনার রেস্তোরাঁ এগিয়ে নিন
            </h2>
            <p className="text-primary-foreground text-base sm:text-lg lg:text-xl font-body max-w-3xl mx-auto leading-relaxed">
              আজই ফ্রি ডেমো বুক করুন এবং দেখুন কিভাবে ChefHub আপনার ব্যবসা
              পরিবর্তন করতে পারে।
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
              <Button
                size="lg"
                variant="default"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
              >
                ফ্রি ডেমো বুক করুন
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
              >
                আরো জানুন
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GradientOverlayCta };
