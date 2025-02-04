import { Link } from "react-router-dom";

import logo from "../assets/icon.png";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className=" bg-black text-white flex flex-col gap-10 py-10 lg:pt-20 px-5">
      <div className="footer_top flex flex-col lg:flex-row lg:items-start lg:justify-start gap-10">
        <div className="Social-Links flex flex-col gap-10 w-fit">
          <div className="Logo flex items-center  gap-3">
            <img className=" w-[60px]" src={logo} alt="Logo" />
            <h1 className=" text-4xl font-heavy">SnapEats</h1>
          </div>
          <p className="text-gray-300 w-[80%] md:w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum.
          </p>
          <div className="links flex gap-10">
            <FaFacebook className=" text-3xl hover:text-secodary cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out" />
            <BsTwitterX className=" text-3xl hover:text-secodary cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out" />
            <RiInstagramFill className=" text-3xl hover:text-secodary cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out" />
            <FaYoutube className=" text-3xl hover:text-secodary cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out" />
          </div>
        </div>
        <div className="pages">
          <h1 className="text-3xl font-heavy">Pages</h1>
          <ul className="flex flex-col gap-2 px-1 pt-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="utility_pages ">
          <h1 className=" font-heavy text-3xl">Utility Pages</h1>
          <ul className="flex flex-col gap-2 px-1 pt-3">
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookie">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/license">License</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom px-10 pt-10 border-t-2 border-gray-500">
        <h1 className=" text-center">© Copyright - Pizzaplanet X 2025</h1>
      </div>
    </div>
  );
}

export default Footer;
