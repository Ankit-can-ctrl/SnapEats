import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import Badge from "@mui/material/Badge";
import { TiShoppingCart } from "react-icons/ti";
import MainButton from "./MainButton";
import CustomLink from "./CustomLink";
import AccountMenu from "./AccountMenu";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="w-full h-full bg-primary text-white p-5 lg:px-20 flex justify-between items-center">
      <Link
        to="/"
        className="logo flex items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <img className="h-[50px]" src={logo} alt="logo" />
        <span className="text-3xl font-heavy">SnapEats</span>
      </Link>
      <div className="links flex gap-10">
        <div className=" w-full flex items-center justify-between gap-10 text-xl font-semibold">
          <CustomLink path="/" text="Home" />
          <CustomLink path="/menu" text="Menu" />
          <CustomLink path="/about" text="About Us" />
          <CustomLink path="/contact" text="Contact Us" />

          <Link className=" text-2xl" to="/cart">
            <Badge
              badgeContent={4}
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
        </div>
        {isLoggedIn ? (
          <div className="account-menu flex items-center">
            <AccountMenu />
          </div>
        ) : (
          <div className="flex gap-2">
            <MainButton type="primary" text="Login" />
            <MainButton text="Signup" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
