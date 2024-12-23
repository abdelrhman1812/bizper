import { StaticImageData } from "next/image";
import itemImgNum1 from "../../../../../public/Image/Services/icon-01.png";
import itemImgNum2 from "../../../../../public/Image/Services/icon-02.png";
import itemImgNum3 from "../../../../../public/Image/Services/icon-03.png";
import itemImg1 from "../../../../../public/Image/Services/services-icon-1.png";
import itemImg2 from "../../../../../public/Image/Services/services-icon-2.png";
import itemImg3 from "../../../../../public/Image/Services/services-icon-3.png";
import SingleItemService from "./SingleItemService";

type servicesItem = {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
  num: StaticImageData;
};

const servicesItems: servicesItem[] = [
  {
    id: 1,
    img: itemImg1,
    title: "Investment Advisory",
    description:
      "Dramatically engage top-line web services vis-a-vis cutting-edge proactively envisioned multimer Dramatically top-line web services.",
    num: itemImgNum1,
  },
  {
    id: 2,
    img: itemImg2,
    title: "Investment Advisory",
    description:
      "Dramatically engage top-line web services vis-a-vis cutting-edge proactively envisioned multimer Dramatically top-line web services.",
    num: itemImgNum2,
  },
  {
    id: 3,
    img: itemImg3,
    title: "Investment Advisory",
    description:
      "Dramatically engage top-line web services vis-a-vis cutting-edge proactively envisioned multimer Dramatically top-line web services.",
    num: itemImgNum3,
  },
];

const ServicesItems = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
      {servicesItems.map((item) => (
        <SingleItemService key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ServicesItems;
