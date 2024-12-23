"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp } from "lucide-react";
import { useState } from "react";

const AccordionQuestion = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const data = [
    {
      id: 1,
      title: "Why is collaborative learning so important?",
      description:
        "Companions shy had solicitude favorable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she.",
    },
    {
      id: 2,
      title: "Do you offer free trials?",
      description:
        "Companions shy had solicitude favorable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she.",
    },
    {
      id: 3,
      title: "Can I share my courses with non-registered users?",
      description:
        "Companions shy had solicitude favorable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she.",
    },
  ];

  return (
    <div className=" px-5">
      <Accordion
        className="bg-white  shadow-sm rounded-sm pt-8 "
        type="single"
        collapsible
        onValueChange={(value) => setActiveIndex(value)}
        defaultValue="item-1"
      >
        {data.map((item) => (
          <AccordionItem
            value={`item-${item.id}`}
            key={item.id}
            className="px-8"
          >
            {/* Accordion Trigger with dynamic class */}
            <AccordionTrigger
              className={` py-6 flex items-center gap-4  font-bold  ${
                activeIndex === `item-${item.id}`
                  ? "text-primary"
                  : "text-black"
              }`}
            >
              <span className="flex items-center gap-2">
                <CircleHelp /> {item.title}
              </span>
            </AccordionTrigger>

            {/* Accordion Content */}
            <AccordionContent className="text-lightGray w-full py-6  opacity-70 leading-relaxed">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
        <div className="bg-secondary px-5 py-8 mt-10">
          <h6 className="text-center text-white">Still Have More Questions?</h6>
          <p className="text-center mt-2 text-white">
            Contact Our{" "}
            <span className="text-primary">Expert Support Team</span>
          </p>
        </div>
      </Accordion>
    </div>
  );
};

export default AccordionQuestion;
