import Image, { StaticImageData } from "next/image";

type BrandsType = {
  id: string;
  img: StaticImageData | string;
};

const brandsList: BrandsType[] = [
  {
    id: crypto.randomUUID(),
    img: "/Image/Brands/brand-1.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/Image/Brands/brand-2.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/Image/Brands/brand-3.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/Image/Brands/brand-4.png",
  },
  {
    id: crypto.randomUUID(),
    img: "/Image/Brands/brand-5.png",
  },
];

const Brands = () => {
  return (
    <section className="grid border-t border-t-gray-300 mt-5 pt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center">
      {brandsList.map((brand) => (
        <div key={brand.id}>
          <Image width={150} height={34} src={brand.img} alt="brand" />
        </div>
      ))}
    </section>
  );
};

export default Brands;
