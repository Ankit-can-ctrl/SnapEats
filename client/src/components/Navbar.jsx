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
import { useEffect } from "react";

function Navbar({ cart }) {
  const { isLoggedIn, login, logout } = useAuthContext();

  return (
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
          <MdOutlineMenu className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
