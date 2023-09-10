import Link from "next/link";

const Nagivation = () => {
  return (
    <nav className="container flex px-6 py-8 mx-auto justify-between items-center">
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mx-2 text-red-800"
          fill="#a01514"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
        </svg>
        <div className="pl-5 text-blue-950 font-bold">
          <Link href={{ pathname: "/", hash: "plans-and-prices" }} replace>
            Plans & Prices
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="pl-5">Contact</div>
        <div className="pl-5">About</div>
      </div>
    </nav>
  );
};

export default Nagivation;
