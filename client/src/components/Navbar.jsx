import { useAuthContext } from "../Context/StoreContext";
import { useStoreContext } from "../Context/StoreContext";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import Badge from "@mui/material/Badge";
import { TiShoppingCart } from "react-icons/ti";
import MainButton from "./MainButton";
import CustomLink from "./CustomLink";
import AccountMenu from "./AccountMenu";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

import { ImCross } from "react-icons/im";

function Navbar({ cart }) {
  const { isLoggedIn, login, logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full bg-primary text-white p-5 lg:px-20 flex justify-between items-center ">
        <Link
          to="/"
          className="logo flex items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <img className="h-[50px]" src={logo} alt="logo" />
          <span className="hidden md:block text-3xl font-heavy">SnapEats</span>
        </Link>
        <div className="links flex items-center justify-center gap-5 lg:gap-10">
          <div className="hidden xl:flex w-full  items-center justify-between gap-10 text-xl font-semibold">
            <CustomLink path="/" text="Home" />
            <CustomLink path="/menu" text="Menu" />
            <CustomLink path="/about" text="About Us" />
            <CustomLink path="/contact" text="Contact Us" />
          </div>

          {isLoggedIn ? (
            <div className="account-menu flex items-center gap-5">
              <Link className=" text-2xl" to="/cart">
                <Badge
                  badgeContent={cart?.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "white",
                      color: "#E93037",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <TiShoppingCart />
                </Badge>
              </Link>
              <AccountMenu />
            </div>
          ) : (
            <div className="xl:flex hidden gap-2">
              <MainButton
                onClickHandler={() => login()}
                type="primary"
                text="Login"
              />
              <MainButton text="Signup" />
            </div>
          )}
          <div className="mobile_menu xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col  justify-center items-center w-10 h-10 focus:outline-none"
            >
              <span
                className={`block w-6  h-1 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-1 bg-white my-1 transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-1 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
            {/* {isOpen ? (
              <ImCross
                onClick={() => setIsOpen(false)}
                className="text-3xl cursor-pointer transform transition-all"
              />
            ) : (
              <MdOutlineMenu
                onClick={() => setIsOpen(true)}
                className="text-3xl cursor-pointer"
              />
            )} */}
          </div>
        </div>
      </div>

      <div
        className={`xl:hidden overflow-hidden transition-all ease-in-out duration-500 flex flex-col gap-5 text-xl font-semibold z-[100] bg-red-500 w-full text-white
          ${isOpen ? "max-h-[400px] " : "max-h-0 "}
        `}
      >
        <div
          className={`transform transition-transform p-5 flex flex-col gap-2 duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <CustomLink path="/" text="Home" />
          <CustomLink path="/menu" text="Menu" />
          <CustomLink path="/about" text="About Us" />
          <CustomLink path="/contact" text="Contact Us" />
          {isLoggedIn ? (
            <MainButton onClickHandler={() => logout()} text={"Logout"} />
          ) : (
            <div className="flex gap-2">
              <MainButton
                onClickHandler={() => login()}
                type="primary"
                text="Login"
              />
              <MainButton text="Signup" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
