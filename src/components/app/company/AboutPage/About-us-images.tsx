import Image from "next/image";
import aboutImg1 from "../../../../../public/Image/About/01.png";
import aboutImg2 from "../../../../../public/Image/About/02.png";
import aboutImg3 from "../../../../../public/Image/About/03.png";

const AboutUsImages = () => {
  return (
    <>
      {/* Images */}
      <Image
        src={aboutImg1}
        className="z-10"
        alt="aboutImg1"
        width={360}
        height={500}
      />
      <div className="absolute bg-r top-0 right-0">
        <Image
          src={aboutImg2}
          className="z-10"
          alt="aboutImg1"
          width={170}
          height={280}
        />
      </div>
      <div className="absolute bottom-14  right-0">
        <Image
          src={aboutImg3}
          className="z-10"
          alt="aboutImg1"
          width={390}
          height={200}
        />
      </div>
    </>
  );
};

export default AboutUsImages;
