import SingleTeam from "./SingleTeam";

type Teams = {
  id: number;
  img: string;
  name: string;
  job: string;
};

const teams: Teams[] = [
  {
    id: 1,
    img: "/Image/Teams/team-1.png",
    name: "John Doe",
    job: "CEO",
  },
  {
    id: 2,
    img: "/Image/Teams/team-2.png",
    name: "John Doe",
    job: "CEO",
  },
  {
    id: 3,
    img: "/Image/Teams/team-3.png",
    name: "John Doe",
    job: "CEO",
  },
];

const TeamsItems = () => {
  return (
    <section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {teams.map((team) => (
          <SingleTeam key={team.id} team={team} />
        ))}
      </section>
    </section>
  );
};

export default TeamsItems;
