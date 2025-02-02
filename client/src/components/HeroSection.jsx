import MainButton from "./MainButton";
import Parallax from "./Parallax";

function HeroSection() {
  return (
    <div>
      <div className=" bg-primary flex flex-col 2xl:flex-row gap-10 xl:gap-0 ">
        <div className=" flex flex-col items-center justify-center gap-10 p-5 py-10 xl:pl-10 text-white">
          <h1 className="text-8xl text-center font-heavy">
            The best place to eat in Noida.
          </h1>
          <p className=" font-semibold text-xl text-center w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum eget non vivamus volutpat odio
            cras vestibulum purus aliquam.
          </p>
          <div className="flex gap-5">
            <MainButton type="primary" text="Order Online" />
            <MainButton type="Secondary" text="Book a Table" />
          </div>
        </div>
        <Parallax />
      </div>
    </div>
  );
}

export default HeroSection;
