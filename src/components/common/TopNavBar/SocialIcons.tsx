import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type SocialIconType = {
  icon: ReactNode;
  path: string;
};

const SocialIcons: React.FC = () => {
  const socialIcons: SocialIconType[] = [
    { icon: <Facebook size={16} />, path: "/" },
    { icon: <Twitter size={16} />, path: "/" },
    { icon: <Linkedin size={16} />, path: "/" },
  ];

  return (
    <div className="social-icons flex items-center gap-2">
      <span className="text-white text-base">Follow On</span>

      {socialIcons.map((link, index) => (
        <Link key={index} href={link.path} className="text-white">
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
