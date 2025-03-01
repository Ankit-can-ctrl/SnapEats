import { FaRegUser } from "react-icons/fa";
function AdminNav() {
  return (
    <div className=" flex justify-between items-center p-5 bg-secodary">
      <h1>Admin Panel</h1>
      <div className="user_profile">
        <FaRegUser />
      </div>
    </div>
  );
}

export default AdminNav;
