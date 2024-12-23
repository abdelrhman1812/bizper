import AboutUsLeft from "./About-us-left";
import AboutUsRight from "./About-us-right";

const AboutUs = () => {
  return (
    <section className="py-[120px] ">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-3">
        <AboutUsLeft />
        <AboutUsRight />
      </div>
    </section>
  );
};

export default AboutUs;
