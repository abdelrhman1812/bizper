"use client";

import TitleSection from "@/components/common/TitleSection/TitleSection";
import SingleCustomer from "./SingleCustomer";

type HappyCustomersProps = {
  id: number;
  num: number;
  mount: string;
  title: string;
};
const HappyCustomers = () => {
  const customers: HappyCustomersProps[] = [
    {
      id: 1,
      num: 1538,
      mount: "+",
      title: "Happy Clients",
    },
    {
      id: 2,
      num: 575,
      mount: "K",

      title: "Employees",
    },
    {
      id: 3,
      num: 69,
      mount: "+",

      title: "Employees",
    },
    {
      id: 4,
      num: 69,
      mount: "M",
      title: "Useful Programs",
    },
  ];

  return (
    <section className="py-[120PX] ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection title="15000 Trusted" subtitle="Happy customers" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-[100px]">
          {customers.map((customer) => (
            <SingleCustomer key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
