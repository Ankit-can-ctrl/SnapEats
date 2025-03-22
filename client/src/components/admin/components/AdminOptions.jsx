import { Link, useLocation } from "react-router-dom";

function AdminOptions() {
  const location = useLocation(); // Get current path

  return (
    <div className="bg-primary p-5">
      <ul className="flex items-center justify-between">
        <li className="">
          <Link
            to="/admin"
            className={`p-2 rounded-lg font-semibold ${
              location.pathname === "/admin" ? "bg-secodary text-black" : ""
            }`}
          >
            Add item
          </Link>
        </li>
        <li>
          <Link
            to="/admin/list"
            className={`p-2 rounded-lg font-semibold ${
              location.pathname === "/admin/list"
                ? "bg-secodary text-black"
                : ""
            }`}
          >
            List Items
          </Link>
        </li>
        <li>
          <Link
            to="/admin/orders"
            className={`p-2 rounded-lg font-semibold ${
              location.pathname === "/admin/orders"
                ? "bg-secodary text-black"
                : ""
            }`}
          >
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminOptions;
