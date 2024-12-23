import SingleWork from "./SingleWork";

type WorksType = {
  id: number;
  img: string;
  title: string;
  description: string;
};

const ourWorksItems: WorksType[] = [
  {
    id: 1,
    img: "/Image/Services/services-round-1.png",
    title: "Meeting Client",
    description:
      "Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse.",
  },

  {
    id: 2,
    img: "/Image/Services/services-round-2.png",
    title: "Project Strategy",
    description:
      "Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse.",
  },
  {
    id: 3,
    img: "/Image/Services/services-round-3.png",
    title: "Project Strategy",
    description:
      "Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse.",
  },
];

const WorksItems = () => {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {ourWorksItems.map((item) => (
          <SingleWork key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

export default WorksItems;
