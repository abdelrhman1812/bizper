import {
  AlarmClockCheck,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";

import { type QuickLink, type RecentPost, type SocialLink } from "@/lib/types";
import { Newsletter } from "./Newsletter";
import { RecentPosts } from "./RecentPosts";

const quickLinks: QuickLink[] = [
  { title: "About Company", href: "#" },
  { title: "Meet Our Team", href: "#" },
  { title: "Our Services", href: "#" },
  { title: "News & Media", href: "#" },
  { title: "Contact Us", href: "#" },
  { title: "Support", href: "#" },
];

const socialLinks: SocialLink[] = [
  { platform: "Facebook", url: "#" },
  { platform: "LinkedIn", url: "#" },
  { platform: "Twitter", url: "#" },
  { platform: "Instagram", url: "#" },
];

const recentPosts: RecentPost[] = [
  {
    id: "1",
    date: "12 Feb, 2022",
    title: "Day tree hide from hath gathered multy",
    image: "/Image/Footer/small-post.jpg",
  },
  {
    id: "2",
    date: "12 Feb, 2022",
    title: "Saving Time Achieving Success in Business",
    image: "/Image/Footer/small-post-2.jpg",
  },
];

const footerStyle = {
  backgroundImage: "url('/Image/Footer/bg-01 (1).png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Footer = () => {
  return (
    <div>
      <footer style={footerStyle} className="py-[120px] ">
        <div className="container mx-auto px-4">
          <Newsletter />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            {/* Company Info */}
            <div>
              <Image
                src="/Image/Footer/logo-02 (1).svg"
                alt="BIZPER"
                width={150}
                height={50}
                className="mb-6"
              />
              <p className="text-white mb-6">
                Proin Pretium Sem Libero, Nec Aliquet Augue Lobortis In.
                Phasellus Nibh Quam, Molestie Id Est Sit Amet, Luctus Pulvinar
              </p>
              {/* Opening Hours */}
              <div className="flex items-center text-white mb-4">
                <div className="flex items-center gap-3">
                  <AlarmClockCheck className="h-10 w-10" />
                  <div>
                    <p className="font-semibold">Sunday - Friday:</p>
                    <p>9:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
              {/* Social Media */}
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="p-2 bg-slate-800 text-white hover:bg-primary transition-colors rounded-lg"
                  >
                    {link.platform === "Facebook" && (
                      <Facebook className="h-5 w-5" />
                    )}
                    {link.platform === "LinkedIn" && (
                      <Linkedin className="h-5 w-5" />
                    )}
                    {link.platform === "Twitter" && (
                      <Twitter className="h-5 w-5" />
                    )}
                    {link.platform === "Instagram" && (
                      <Instagram className="h-5 w-5" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Link
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <RecentPosts posts={recentPosts} />

            {/* Official Info */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Official Info:
              </h3>
              <p className="text-white mb-6">
                5919 Trussville Crossings Pkwy, new Dusting town, Austria
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-[#1d1e33] p-3 rounded-lg">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">E-mail:</p>
                    <p className="text-white">abdelrhmanali1812@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1d1e33] p-3 rounded-lg">
                  <div className="p-3 bg-red-500 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone:</p>
                    <p className="text-white">0100803461</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className=" bg-[#353950] py-5 text-center text-white">
        <p>
          © Copyright 2024. All Rights Reserved by{" "}
          <a href="#" className="text-red-500 hover:underline">
            Kyanlabs Themes
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
