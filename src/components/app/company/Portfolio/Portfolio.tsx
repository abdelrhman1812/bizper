import TitleSection from "@/components/common/TitleSection/TitleSection";
import OurPortfolio from "./OurPortfolio";

const portfolioStyle = {
  backgroundImage: "url('/Image/portfolio/bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Portfolio = () => {
  return (
    <section style={portfolioStyle} className="pt-[120px] pb-[120px] relative ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection
            title="OUR PORTFOLIO"
            subtitle="Let's Check Our Best Works"
            textColor="text-white"
          />
        </div>
      </div>
      <OurPortfolio />
    </section>
  );
};

export default Portfolio;
