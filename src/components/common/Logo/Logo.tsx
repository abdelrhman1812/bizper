import Image from "next/image";
import logoImg from "../../../../public/Image/Logo/logo.png";
const Logo = () => {
  return (
    <figure>
      <Image
        className="w-20 md:w-full"
        src={logoImg}
        alt="logo"
        width={188}
        height={66}
      />
    </figure>
  );
};

export default Logo;
