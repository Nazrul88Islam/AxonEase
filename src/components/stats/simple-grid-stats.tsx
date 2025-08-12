"use client";

const SimpleGridStats = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold font-display text-foreground mb-8 sm:mb-12 lg:mb-16">
          আমাদের সাফল্যের পরিসংখ্যান
        </h1>
        <div className="grid gap-8 sm:gap-10 lg:gap-16 grid-cols-1 sm:grid-cols-3">
          <div className="text-center">
            <p className="pt-2 sm:pt-4 lg:pt-6 xl:pt-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary">
              ১০০+
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted-foreground font-body mt-2 sm:mt-3 lg:mt-4">
              সন্তুষ্ট ক্লায়েন্ট
            </p>
          </div>
          <div className="text-center">
            <p className="pt-2 sm:pt-4 lg:pt-6 xl:pt-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary">
              ৫০+
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted-foreground font-body mt-2 sm:mt-3 lg:mt-4">
              ChefHub ব্যবহারকারী
            </p>
          </div>
          <div className="text-center">
            <p className="pt-2 sm:pt-4 lg:pt-6 xl:pt-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary">
              ৯৯%
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted-foreground font-body mt-2 sm:mt-3 lg:mt-4">
              আপটাইম গ্যারান্টি
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SimpleGridStats };
