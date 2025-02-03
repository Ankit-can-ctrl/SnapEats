import { Link } from "react-router-dom";
function CustomLink({ path, text }) {
  return (
    <Link to={path} className="group">
      <h1>{text}</h1>
      <div className=" w-0 h-1 bg-white group-hover:w-full transition-all duration-300 ease-in-out" />
    </Link>
  );
}

export default CustomLink;
