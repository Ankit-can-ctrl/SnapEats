import { Outlet } from "react-router-dom";
import AdminNav from "./components/AdminNav";
import AdminOptions from "./components/AdminOptions";

function AdminPanel() {
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

export default AdminPanel;
