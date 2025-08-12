"use client";

import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TwoColumnHeroWithImage = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-6">
            <Badge
              variant="outline"
              className="bg-primary text-background border-0 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm"
            >
              <Sparkles className="mr-1 sm:mr-2 size-3 sm:size-3.5 text-background" />
              বাংলাদেশের #১ সফটওয়্যার সমাধান
              <ArrowUpRight className="ml-1 sm:ml-2 size-3 sm:size-4" />
            </Badge>

            <h1 className="text-pretty text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold leading-tight text-foreground">
              আপনার ব্যবসার জন্য{" "}
              <span className="text-primary font-bold">
                আধুনিক সফটওয়্যার সমাধান
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed font-body">
              ChefHub সহ রেস্তোরাঁ ব্যবস্থাপনা থেকে কাস্টম ওয়েবসাইট - আমরা
              আপনার ডিজিটাল স্বপ্ন বাস্তবায়ন করি।
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto group bg-primary hover:bg-primary/90 text-background border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-6 sm:px-8 text-sm sm:text-base"
              >
                <a
                  href="http://223.27.82.38:8002/pos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ChefHub ডেমো দেখুন
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto group bg-card hover:bg-card/80 text-foreground border border-border rounded-full px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <a href="#our-services">
                  আমাদের সেবা
                  <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-xl opacity-30" />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="ChefHub dashboard interface mockup"
              className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] max-h-[600px] lg:max-h-[800px] w-full rounded-2xl sm:rounded-3xl object-cover shadow-2xl ring-1 ring-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { TwoColumnHeroWithImage };
