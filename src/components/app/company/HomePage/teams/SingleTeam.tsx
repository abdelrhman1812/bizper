"use client";

import { Facebook, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type TeamMember = {
  id: number;
  img: string;
  name: string;
  job: string;
};

type TeamProps = {
  team?: TeamMember;
};

export default function SingleTeam({ team }: TeamProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (!team) {
    return (
      <div className="text-center p-4 bg-gray-100 rounded-lg">
        Team member data not available
      </div>
    );
  }

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Image
        src={team.img}
        width={450}
        height={405}
        alt={team.name}
        className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute left-0 bottom-0 w-full flex justify-between items-end">
        <div className="bg-white clip-path-custom px-4 py-1 w-[200px] transition-all duration-300 ">
          <h2 className="text-lg font-semibold text-gray-800">{team.name}</h2>
          <p className="text-sm text-gray-600">{team.job}</p>
        </div>
        <div className="relative">
          <button
            className="bg-primary p-4 text-white transition-all duration-300 "
            aria-label="Share"
          >
            <Share2
              className="w-6 h-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </button>
          <div
            className={`absolute bottom-full  flex flex-col gap-3 p-3 bg-white transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <button
              className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              aria-label="Share on WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
