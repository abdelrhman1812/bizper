import TitleSection from "@/components/common/TitleSection/TitleSection";
import OurServicesFoot from "./OurServicesFoot";
import ServicesItems from "./ServicesItems";

const serviceStyle = {
  backgroundImage: "url('/Image/Services/services-bg-image.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const OurServices = () => {
  return (
    <section style={serviceStyle} className="py-[120px] ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection title="Our Services" subtitle="Our Provided Services" />
        </div>
        <ServicesItems />
        <OurServicesFoot />
      </div>
    </section>
  );
};

export default OurServices;
