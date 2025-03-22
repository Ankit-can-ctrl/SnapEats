import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function AdminNav() {
  return (
    <div className=" flex justify-between items-center font-semibold text-lg p-5 bg-secodary">
      <h1>Admin Panel</h1>
      <div className="user_profile">
        <Link to="/">
          <RiArrowGoBackFill />
        </Link>
      </div>
    </div>
  );
}

export default AdminNav;
