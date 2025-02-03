import DividerWhite from "./DividerWhite";
import { IoLogoInstagram } from "react-icons/io5";

function Socials() {
  return (
    <div className="bg-black">
      <div className=" relative">
        <DividerWhite />
      </div>
      <div className="py-10 md:pt-20 text-white flex flex-col items-center gap-10">
        <h1 className="text-5xl md:text-7xl text-center font-heavy">
          Follow us on Instagram.
        </h1>
        <div className="Posts  flex flex-col gap-5 lg:flex-row">
          <div className=" flex lg:flex-col items-center justify-center gap-5 p-5 overflow-hidden">
            <img
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[200px] lg:h-[200px]"
              src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/6345ffe37e46be8c8747289e_Pizza%202-p-500.jpg"
              alt="Pizza"
            />
            <img
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[200px] lg:h-[200px]"
              src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/6345ffe348d03fda25277671_Pizza%20-%20Cola-p-500.jpg"
              alt="Social post"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-[300px] h-[300px] lg:h-[400px] lg:w-[400px]"
              src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/6346e21a695c1f9bac13892a_Pizza%20delivery.jpg"
              alt="Social Post"
            />
          </div>
          <div className="flex lg:flex-col items-center justify-center gap-5 ">
            <img
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[200px] lg:h-[200px]"
              src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/6345ffe3335b51665e552b00_Pizza%20Box.jpg"
              alt="Social Post"
            />
            <img
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[200px] lg:h-[200px]"
              src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/6345ffe4ef0aab7e889de0e9_Pizza%20Oven.jpg"
              alt="Social post"
            />
          </div>
        </div>
        <div className=" w-full px-5 flex items-center justify-center">
          <button className="bg-primary  w-full sm:w-fit text-3xl font-heavy px-4 py-3 flex gap-2 items-center justify-center hover:bg-secodary hover:text-black transition-all duration-300 ease-in-out">
            Follow <IoLogoInstagram />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Socials;
