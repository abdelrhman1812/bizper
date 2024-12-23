import Link from "next/link";
import Logo from "../Logo/Logo";
import MobileSidebar from "./MobileSidebar";
import { SelectLanguage } from "./SelectLanguage";

const NavBar = () => {
  return (
    <div className="relative container  ">
      <nav className="container  z-50 absolute top-0 left-1/2 translate-x-[-50%]  bg-white   py-6 border-l-8 border-r-8 border-primary rounded flex justify-between items-center ">
        <ul className=" gap-5 hidden md:flex">
          <li>
            <Link className="font-bold text-secondary" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-bold text-secondary" href="/">
              About
            </Link>
          </li>
          <li>
            <Link className="font-bold text-secondary" href="/">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-bold text-secondary" href="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="font-bold text-secondary" href="/">
              Contact
            </Link>
          </li>
        </ul>

        <div className="block md:hidden">
          <Logo />
        </div>
        {/* Actions */}
        <div className="flex items-center gap-5">
          <MobileSidebar />

          <SelectLanguage />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
