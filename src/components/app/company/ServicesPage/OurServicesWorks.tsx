import TitleSection from "@/components/common/TitleSection/TitleSection";
import WorksItems from "./WorksItems";

const OurServicesWorks = () => {
  return (
    <section className="py-[120px] ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection
            title="OUR work process"
            subtitle="How Our Services Work"
          />
        </div>
        <WorksItems />
      </div>
    </section>
  );
};

export default OurServicesWorks;
