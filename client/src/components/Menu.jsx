import DividerRed from "./DividerRed";
import MenuItemCard from "./MenuItemCard";
import cakes from "../assets/menu/cakes.png";
import chicken from "../assets/menu/chicken.png";
import Desert from "../assets/menu/Desert.png";
import bread from "../assets/menu/bread.png";
import friedRice from "../assets/menu/friedRice.png";
import noodle from "../assets/menu/noodle.png";
import paneer from "../assets/menu/paneer.png";
import pizza from "../assets/menu/pizza.png";
import thali from "../assets/menu/thali.png";
import drinks from "../assets/menu/drinks.png";
import MainButton from "./MainButton";
// this divider has absolute positioning and therfore used inside relative parent
function Menu() {
  const menuTitles = [
    { img: cakes, title: "Cakes" },
    { img: chicken, title: "Chicken" },
    { img: Desert, title: "Desert" },
    { img: bread, title: "Bread" },
    { img: friedRice, title: "Fried Rice" },
    { img: noodle, title: "Noodle" },
    { img: paneer, title: "Paneer" },
    { img: pizza, title: "Pizza" },
    { img: thali, title: "Thali" },
    { img: drinks, title: "Drinks" },
  ];
  return (
    <div>
      <div className=" relative h-fit ">
        <DividerRed />
        <div className="menu px-10 pt-28 flex flex-col items-center gap-10 overflow-hidden">
          <h1 className="pt-20 text-6xl text-center lg:text-8xl font-heavy">
            SnapEats Menu
          </h1>
          <p className=" lg:w-[60%] text-gray-400 text-center">
            Amet consectetur adipiscing elit enim bibendum sed et aliquet
            aliquet risus tempor semper odio egestas id pulvinar consectetur
            elit tortor non hac pellentesque lacus donec accumsan quisque
            ultricies adipiscing mauris tortor cras est eu accumsan mauris.
          </p>
          <div className="menu_item pt-20 w-full flex items-center justify-center gap-20 flex-wrap">
            {menuTitles.map((item) => (
              <MenuItemCard
                key={item.title}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
          <div className="py-20 flex flex-col md:flex-row gap-10">
            <MainButton type="primary" text="Order Online" />
            <MainButton type="secondary" text="Book a Table" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
