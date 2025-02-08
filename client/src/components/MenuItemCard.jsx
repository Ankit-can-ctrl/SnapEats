function MenuItemCard({ img, title, handleCategoryClick }) {
  const category = title;
  return (
    <div
      onClick={() => handleCategoryClick(category)}
      className="flex flex-col gap-5 items-center"
    >
      <ul>
        <li className=" bg-secodary lg:h-[300px] lg:w-[300px] rounded-full flex items-center justify-center group">
          <img
            className=" lg:w-[200px] group-hover:scale-110 transition-all duration-300"
            src={img}
            alt="Drinks"
          />
        </li>
      </ul>
      <h1 className="text-4xl font-heavy capitalize">{title}</h1>
    </div>
  );
}

export default MenuItemCard;
