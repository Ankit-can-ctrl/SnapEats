import { Link } from "react-router-dom";
function MenuItemCard({ img, title }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Link
        to="/menu/drinks"
        className=" bg-secodary lg:h-[300px] lg:w-[300px] rounded-full flex items-center justify-center"
      >
        <img className=" lg:w-[200px]" src={img} alt="Drinks" />
      </Link>
      <h1 className="text-4xl font-heavy capitalize">{title}</h1>
    </div>
  );
}

export default MenuItemCard;
