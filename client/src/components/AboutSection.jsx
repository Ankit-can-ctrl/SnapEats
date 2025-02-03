import DividerWhite from "./DividerWhite";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import MainButton from "./MainButton";

function AboutSection() {
  return (
    <div className="relative h-fit w-full">
      <div className="absolute z-20 w-full">
        <DividerWhite />
      </div>
      <div className="about_img w-full lg:grid lg:grid-cols-2">
        <div className=" h-[800px] overflow-hidden">
          <img
            className=" object-cover object-center h-full w-full"
            src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg"
            alt="AboutChef"
          />
        </div>
        <div className="about_text w-full pt-10 lg:pt-0 px-5 lg:px-0 lg:pl-20 bg-black text-white flex flex-col gap-5 items-start justify-center">
          <h1 className=" text-6xl lg:text-8xl font-heavy">About SnapEats.</h1>
          <p className=" lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper odio egestas id pulvinar
            consectetur elit tortor.
          </p>
          <div className="links flex flex-col gap-5">
            <div className="mail flex items-center gap-3">
              <MdMailOutline />
              <span>losangeles@pizzaplanet.com</span>
            </div>
            <div className="phone flex items-center gap-3">
              <FaPhone />
              <span>(414) 857 - 0107</span>
            </div>
            <div className="address flex items-center gap-3">
              <IoLocationOutline />
              <span>
                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              </span>
            </div>
          </div>
          <div className="btns flex gap-5">
            <MainButton type={"primary"} text={"Order Now"} />
            <MainButton type={"secondary"} text={"Learn More"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
