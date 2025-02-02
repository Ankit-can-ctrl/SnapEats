import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="w-full bg-secodary h-[50px] flex items-center justify-between  text-md lg:text-xl font-heavy px-6 lg:px-20">
      <p className=" hidden md:block">Call Us: (413) 345 - 9821</p>
      <Link className="md:hidden" to="/contact">
        <FaPhoneAlt className=" text-xl" />
      </Link>
      <p>Order Online : SnapEats</p>
    </div>
  );
}

export default Header;
