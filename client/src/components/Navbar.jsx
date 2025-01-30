import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import Badge from "@mui/material/Badge";
import { TiShoppingCart } from "react-icons/ti";
function Navbar() {
  return (
    <div className="w-full h-full bg-primary text-white p-5">
      <div className="logo flex items-center gap-2">
        <img className="h-[50px]" src={logo} alt="logo" />
        <span className="text-3xl font-heavy">SnapEats</span>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": { backgroundColor: "white", color: "" },
              }}
            >
              <TiShoppingCart />
            </Badge>
          </li>
        </ul>
      </div>
      <div className="auth"></div>
    </div>
  );
}

export default Navbar;
