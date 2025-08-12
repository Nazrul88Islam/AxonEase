import { Facebook, Linkedin, MessageCircle } from "lucide-react";

const navigation = [
  {
    title: "পেজসমূহ",
    links: [
      { name: "Home", href: "#" },
      { name: "Services", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "সেবা",
    links: [
      { name: "Website", href: "#" },
      { name: "ChefHub", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "সহায়তা",
    links: [
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "আইনি",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://whatsapp.com" },
];

export const NewsletterFooter = () => {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-8 sm:mb-10 lg:mb-16 flex flex-col items-start justify-between gap-8 sm:gap-10 lg:gap-12 border-b pb-8 sm:pb-10 lg:pb-12 md:flex-row">
          <div className="w-full max-w-full sm:max-w-sm">
            <a href="https://axoneasebd.com">
              <h2 className="mb-2 text-xl sm:text-2xl font-bold text-primary font-display">
                AxonEase Solutions
              </h2>
              <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground font-body">
                আপনার ডিজিটাল পার্টনার
              </p>
            </a>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
              আমরা আধুনিক প্রযুক্তির মাধ্যমে আপনার ব্যবসাকে এগিয়ে নিয়ে যেতে
              সাহায্য করি। আমাদের বিশেষজ্ঞ দল আপনার জন্য সর্বোত্তম ডিজিটাল
              সমাধান প্রদান করে।
            </p>

            {/* Newsletter subscription */}
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                আপডেট পান
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                আমাদের নিউজলেটার সাবস্ক্রাইব করুন
              </p>
            </div>
            <div className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row">
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="flex h-10 sm:h-12 flex-1 rounded-md border border-input bg-background px-3 sm:px-4 py-2 text-sm sm:text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="inline-flex h-10 sm:h-12 items-center justify-center rounded-md bg-primary px-4 sm:px-6 py-2 text-sm sm:text-base font-medium whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                সাবস্ক্রাইব
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t pt-6 sm:pt-8 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:gap-x-12 md:w-auto md:grid-cols-3 lg:grid-cols-4">
              {navigation.map((section) => (
                <div
                  key={section.title}
                  className="min-w-[120px] sm:min-w-[140px]"
                >
                  <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">
                    {section.title}
                  </h2>
                  <ul className="space-y-2 sm:space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 text-sm sm:text-base text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-primary"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-4 sm:mb-6 flex w-full items-center justify-center gap-4 sm:gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page`}
                className="rounded-full p-2 sm:p-3 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground active:bg-accent/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="order-2 text-center text-xs sm:text-sm text-muted-foreground sm:text-left md:order-1">
            © {new Date().getFullYear()} AxonEase Solutions. All rights
            reserved.{" "}
            <a
              href="https://axoneasebd.com"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              AxonEase Solutions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
