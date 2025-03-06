import { useState, useRef, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

const AccountMenu = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Profile Button */}

      <button
        onClick={toggleDropdown}
        className="h-12 w-12 rounded-full bg-secodary flex items-center justify-center"
      >
        <span className="text-white font-semibold text-xl">JD</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0  mt-2 min-w-full rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5 z-[100]">
          <div className="px-4 py-2">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-sm text-gray-500">john@example.com</p>
          </div>
          <div className="border-t border-gray-100" />
          <Link
            to="/profile"
            className=" text-black flex px-4 py-2 text-sm items-center gap-2 hover:bg-gray-100"
          >
            <FaRegUser />
            <span>Profile</span>
          </Link>

          <div className="border-t border-gray-100" />

          <Link
            to="/"
            onClick={logout}
            href="#logout"
            className="flex items-center gap-2 px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
          >
            <CiLogout />
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
