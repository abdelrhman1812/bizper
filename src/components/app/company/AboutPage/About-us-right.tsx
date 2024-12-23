import TitleSection from "@/components/common/TitleSection/TitleSection";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import OtherImg from "../../../../../public/Image/About/about-with-icon.png";
import AboutUsProgress from "./About-us-progress";
const AboutUsRight = () => {
  return (
    <div className="px-5 mt-10 md:m-0">
      <TitleSection
        title={"About Us"}
        subtitle={"Find out more about our business consulting"}
      />
      <p className="my-5 text-base text-lightGray leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        ornare quam. Sed sit amet sem sollicitudin, condimentum diam sed,
        consequat tellus. Quisque ac odio eget ligula gravida efficitur. Nunc
        facilisis sagittis magna, non venenatis mauris luctus quis.
      </p>

      {/* Progress */}
      <AboutUsProgress value={85} title="Consulting Service" />
      <AboutUsProgress value={66} title="Finance Consulting" />

      {/* Other */}

      <div className="flex gap-2 items-center">
        <div className="relative">
          <Image src={OtherImg} height={80} width={80} alt="about" />
          <div className=" absolute top-[8px] left-[8px] right-[8px] bottom-[8px] flex items-center justify-center border border-white rounded-full ">
            <DollarSign className="  text-white" />
          </div>
        </div>

        <p className="text-secondary font-bold text-xl">
          Helping you run a more efficient & profitable business.
        </p>
      </div>
    </div>
  );
};

export default AboutUsRight;
