import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Customer = {
  customer: {
    id: number;
    num: number;
    mount: string;
    title: string;
  };
};

const SingleCustomer = ({ customer }: Customer) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="text-center border-dashed border-2 mx-auto group hover:border-primary transition duration-1000 border-gray-300 rounded-full h-[380px] w-[380px] flex items-center justify-center flex-col m-[-25px]"
    >
      <h4 className="text-[52px] font-bold group-hover:scale-110 transition duration-1000">
        <span className="text-primary">
          {inView ? <CountUp start={0} end={customer.num} duration={2.5} /> : 0}
        </span>
        <span className="text-secondary">{customer.mount}</span>
      </h4>
      <p>{customer.title}</p>
    </div>
  );
};

export default SingleCustomer;
