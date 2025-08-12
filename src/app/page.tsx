import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { TwoColumnHeroWithImage } from "@/components/heros/two-column-hero-with-image";
import { ServicesSection } from "@/components/feature/services-section";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";
import { ThreeColumnImageCards } from "@/components/feature/three-column-image-cards";
import { HorizontalCarouselGallery } from "@/components/gallery/horizontal-carousel-gallery";
import { CompanyLogoTestimonials } from "@/components/testimonials/company-logo-testimonials";
import { SimpleGridStats } from "@/components/stats/simple-grid-stats";
import { GradientOverlayCta } from "@/components/cta/gradient-overlay-cta";
import { ComprehensiveContactForm } from "@/components/contact/comprehensive-contact-form";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      <div id="home">
        <TwoColumnHeroWithImage />
      </div>
      <ServicesSection />
      <div id="chefhub">
        <NumberedBadgeCards />
        <HorizontalCarouselGallery />
      </div>
      <div id="about">
        <CompanyLogoTestimonials />
      </div>
      <SimpleGridStats />
      <GradientOverlayCta />
      <div id="contact">
        <ComprehensiveContactForm />
      </div>
      <NewsletterFooter />
    </div>
  );
}
