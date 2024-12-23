"use client";

import { ChevronDown, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../Logo/Logo";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Consulting",
        href: "/services/consulting",
      },
      {
        title: "Development",
        href: "/services/development",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    children: [
      {
        title: "Latest Posts",
        href: "/blog/latest",
      },
      {
        title: "Categories",
        href: "/blog/categories",
      },
    ],
  },
  {
    title: "Pages",
    href: "/pages",
    children: [
      {
        title: "Team",
        href: "/pages/team",
      },
      {
        title: "FAQ",
        href: "/pages/faq",
      },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

function NavItem({ item }: { item: NavItem }) {
  return (
    <div className="border-b z-50 border-gray-200">
      {item.children ? (
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between py-4 text-lg font-medium">
            {item.title}
            <ChevronDown className="h-8 w-8 rounded bg-primary text-white" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 pb-4">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-600 hover:text-destructive"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <Link
          href={item.href}
          className="text-secondary hover:text-primary transition duration-200 block py-4 text-lg font-medium "
        >
          {item.title}
        </Link>
      )}
    </div>
  );
}

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>☰
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs p-0">
        <SheetHeader className="border-b border-gray-200 bg-foreground p-4">
          <div className="flex items-center justify-between">
            <Logo />
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white rounded-full "
              >
                <X className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
          </div>
        </SheetHeader>
        <div className="space-y-0 px-4 pt-5">
          {navigation.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
