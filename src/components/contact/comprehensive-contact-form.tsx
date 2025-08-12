"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ComprehensiveContactForm = () => {
  return (
    <section className="relative mx-2 sm:mx-2.5 lg:mx-4 mt-2 sm:mt-2.5 rounded-t-2xl rounded-b-[36px] bg-muted py-16 sm:py-24 lg:py-32 ring-1 ring-border/50 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="container max-w-none w-full px-4 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mt-10 lg:mt-14 xl:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left: Title + intro + contact info */}
          <div className="w-full rounded-2xl bg-card/70 border border-border/60 p-5 sm:p-6 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.10)] h-full">
            <h1 className="text-left text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight font-display">
              যোগাযোগ করুন
            </h1>
            <p className="mt-3 sm:mt-4 leading-snug font-medium text-muted-foreground text-sm sm:text-base lg:text-lg">
              আপনার প্রয়োজন নিয়ে আলোচনা করতে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-6 sm:gap-8 lg:gap-10">
              <div className="text-center sm:text-left flex-1">
                <h2 className="font-semibold text-sm sm:text-base">ফোন</h2>
                <p className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-base">
                  +৮৮০ ১৬৮০০০৮৮৭৬
                </p>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className="font-semibold text-sm sm:text-base">ইমেইল</h2>
                <div className="mt-2 sm:mt-3">
                  <a
                    href="mailto:info@axonease.com"
                    className="text-muted-foreground hover:text-foreground text-sm sm:text-base transition-colors"
                  >
                    info@axonease.com
                  </a>
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h2 className="font-semibold text-sm sm:text-base">ঠিকানা</h2>
                <p className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-base">
                  ঢাকা, বাংলাদেশ
                </p>
              </div>
            </div>
          </div>
          {/* Right: Inquiry Form */}
          <div className="w-full rounded-2xl bg-card/70 border border-border/60 p-5 sm:p-6 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.10)] h-full flex flex-col">
            <h2 className="text-base sm:text-lg font-semibold">বার্তা পাঠান</h2>
            <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 flex-1 flex flex-col">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">আপনার নাম</Label>
                <Input
                  placeholder="আপনার পূর্ণ নাম"
                  className="text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">ইমেইল ঠিকানা</Label>
                <Input
                  placeholder="you@example.com"
                  type="email"
                  className="text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">বিষয়</Label>
                <Input
                  placeholder="বার্তার বিষয়"
                  className="text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">বার্তা</Label>
                <Textarea
                  placeholder="আপনার বার্তা লিখুন..."
                  className="min-h-[100px] sm:min-h-[120px] resize-none text-sm sm:text-base"
                />
              </div>
              <div className="flex justify-end pt-2 mt-auto">
                <Button
                  size="lg"
                  type="submit"
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
                >
                  বার্তা পাঠান
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
};

export { ComprehensiveContactForm };
