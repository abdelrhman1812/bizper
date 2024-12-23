import Image from "next/image";
import HeroText from "./HeroText";

const Hero = () => {
  const heroStyle = {
    height: "100vh",
    backgroundImage: "url('/Image/Hero/01.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={heroStyle} className="relative flex ">
      <div className="container flex justify-between items-center">
        {/* <NavBar /> */}
        <HeroText />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          className="absolute z-10 top-0 left-0 w-full h-full object-cover"
          src="/Image/Hero/01.png"
          alt="Overlay"
          width={500}
          height={300}
        />

        <Image
          className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.5]"
          src="/Image/Hero/02.png"
          alt="Overlay"
          width={500}
          height={300}
        />

        <Image
          className="absolute top-0 left-0 w-full h-full object-cover "
          src="/Image/Hero/03.png"
          alt="Overlay"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Hero;
