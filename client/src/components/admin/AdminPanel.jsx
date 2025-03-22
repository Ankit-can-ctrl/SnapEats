import { Outlet, Navigate } from "react-router-dom";
import AdminNav from "./components/AdminNav";
import AdminOptions from "./components/AdminOptions";

function AdminPanel() {
  const userRole = localStorage.getItem("userRole");
  const token = localStorage.getItem("token");

  if (userRole !== "admin") {
    return <Navigate to="/" replace />;
  }
  if (token && userRole === "admin") {
    return (
      <div>
        <AdminNav />
        <AdminOptions />
        <div className="admin_pages">
          <Outlet />
        </div>
      </div>
    );
  }
  // Handle cases where neither condition matches (Optional Fallback)
  return <Navigate to="/" replace />;
}

export default AdminPanel;
