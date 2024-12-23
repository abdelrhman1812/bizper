const HelpNeeded = () => {
  return (
    <div className="flex items-center space-x-4">
      <p className="hidden lg:block">
        <span className="text-gray-400">Need Help? </span>
        <span className="text-secondary">Request A Callback</span>
      </p>
      <div className="relative">
        <input
          placeholder="Search..."
          className="input shadow-md bg-gray-50 focus:border-2 focus:border-primary border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
          name="search"
          type="search"
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HelpNeeded;
