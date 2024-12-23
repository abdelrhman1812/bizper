import Link from "next/link";

const OurServicesFoot = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
      <p className="text-lightGray text-center sm:text-left">
        Our success as consultants will depend on the essential rightness of the
        advice.
      </p>
      <Link href={"/"}>
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <span className="text-lightGray">Want to learn more About us?</span>
          <span className="text-primary font-semibold"> Click here</span>
        </div>
      </Link>
    </div>
  );
};

export default OurServicesFoot;
