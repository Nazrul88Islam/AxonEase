"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_LOGO = {
  url: "https://axoneasebd.com",
  src: "/axonease.png",
  alt: "AxonEase Solutions logo",
  title: "AxonEase Solutions",
};
const NAV_ITEMS = [
  { name: "হোম", link: "#home" },
  { name: "সেবা", link: "#services" },
  { name: "ChefHub", link: "#chefhub" },
  { name: "সম্পর্কে", link: "#about" },
  { name: "যোগাযোগ", link: "#contact" },
];

const AnimatedIndicatorNavbar = () => {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].name);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleNavClick = (item: { name: string; link: string }) => {
    setActiveItem(item.name);
    const element = document.querySelector(item.link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section
      className="py-4 sticky top-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
    >
      <nav className="container flex items-center justify-between">
        {/* Left WordMark */}
        <a href={NAV_LOGO.url} className="flex items-center gap-2">
          <img src={NAV_LOGO.src} className="max-h-8 w-8" alt={NAV_LOGO.alt} />
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tighter font-display text-foreground">
              {NAV_LOGO.title}
            </span>
            <span className="text-xs text-muted-foreground font-body"></span>
          </div>
        </a>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-3 relative"
          >
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.name}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    data-nav-item={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`relative cursor-pointer text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 px-3 py-2 rounded-md font-body ${
                      activeItem === item.name
                        ? "text-foreground bg-primary/10"
                        : "text-muted-foreground hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </React.Fragment>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-primary h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Popover */}
        <MobileNav
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          handleNavClick={handleNavClick}
        />

        <div className="hidden items-center gap-2 lg:flex">
          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              variant="default"
              size="sm"
              className="h-10 py-2.5 text-sm font-medium hover:scale-105 transition-all duration-300 font-body"
            >
              <a
                href="http://223.27.82.38:8002/pos"
                target="_blank"
                rel="noopener noreferrer"
              >
                ডেমো দেখুন
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export { AnimatedIndicatorNavbar };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative h-6 w-6">
      <div className="absolute inset-0">
        <Menu
          className={`text-muted-foreground group-hover:text-primary transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-muted-foreground group-hover:text-primary transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({
  activeItem,
  setActiveItem,
  handleNavClick,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
  handleNavClick: (item: { name: string; link: string }) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <AnimatedHamburger isOpen={isOpen} />
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -left-4 -top-4 block w-screen max-w-md overflow-hidden rounded-xl p-0 lg:hidden"
        >
          <ul className="bg-popover text-popover-foreground w-full py-4">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                <a
                  href={navItem.link}
                  onClick={() => {
                    handleNavClick(navItem);
                    setIsOpen(false);
                  }}
                  className={`flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-300 hover:bg-primary/5 font-body ${
                    activeItem === navItem.name
                      ? "border-primary text-popover-foreground bg-primary/10"
                      : "text-muted-foreground hover:text-popover-foreground border-transparent"
                  }`}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
            <li className="flex flex-col px-7 py-2">
              <Button
                asChild
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-body"
              >
                <a
                  href="http://223.27.82.38:8002/pos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ডেমো দেখুন
                </a>
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};
