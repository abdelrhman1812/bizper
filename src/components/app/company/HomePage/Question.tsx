import TitleSection from "@/components/common/TitleSection/TitleSection";
import AccordionQuestion from "./AccordionQuestion";
import QuestionImg from "./QuestionImg";

const Question = () => {
  const questionStyle = {
    backgroundImage: "url('/Image/Questions/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section style={questionStyle} className="py-[200px] pb-[120px] ">
      <div className="container pt-[180px]">
        <div className="flex justify-center flex-col items-center">
          <TitleSection
            title="QUESTION AND ANSWERS"
            subtitle="Frequency Asked Questions"
          />
        </div>
        <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <QuestionImg />
          <AccordionQuestion />
        </div>
      </div>
    </section>
  );
};

export default Question;
