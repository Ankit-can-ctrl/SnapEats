import { Link, useLocation } from "react-router-dom";

function AdminOptions() {
  const location = useLocation(); // Get current path

  return (
    <div className="bg-gray-200 p-5">
      <ul className="flex items-center justify-between">
        <li>
          <Link
            to="/admin"
            className={`p-2 ${
              location.pathname === "/admin" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Add Item
          </Link>
        </li>
        <li>
          <Link
            to="/admin/list"
            className={`p-2 ${
              location.pathname === "/admin/list"
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            List Items
          </Link>
        </li>
        <li>
          <Link
            to="/admin/orders"
            className={`p-2 ${
              location.pathname === "/admin/orders"
                ? "bg-blue-500 text-white"
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
