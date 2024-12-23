import Hero from "@/components/common/Header/Hero";
import AboutUs from "../AboutPage/About-us";
import FormContact from "../ContactPage/FormContact";
import Portfolio from "../Portfolio/Portfolio";
import OurServices from "../ServicesPage/OurServices";
import OurServicesWorks from "../ServicesPage/OurServicesWorks";
import HappyCustomers from "./HappyCustomers";
import LatestNews from "./LatestNews";
import Question from "./Question";
import Teams from "./teams/Teams";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <AboutUs />
        <OurServices />
        <OurServicesWorks />
        <Portfolio />
        <Question />
        <HappyCustomers />
        <Teams />
        <Testimonials />
        <FormContact />
        <LatestNews />
      </main>
    </>
  );
};

export default HomePage;
