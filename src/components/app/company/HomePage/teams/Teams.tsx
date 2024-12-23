import TitleSection from "@/components/common/TitleSection/TitleSection";
import TeamsItems from "./TeamsItems";

const Teams = () => {
  return (
    <section className="py-[120px] ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection
            title="OUR EXPERT TEAM"
            subtitle="Meet Our Expert Team"
          />
          <TeamsItems />
        </div>
      </div>
    </section>
  );
};

export default Teams;
