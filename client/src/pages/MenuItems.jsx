import { useStoreContext } from "../Context/StoreContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FoodItemCard from "../components/FoodItemCard";

function MenuItems() {
  let { food_items } = useStoreContext();

  return (
    <div>
      <Header />
      <Navbar />
      <div className="menu p-10 md:pt-20 flex flex-col items-center gap-10 text-black">
        <h1 className="text-5xl md:text-7xl font-heavy">Our Menu</h1>
        <p className="text-center text-gray-400 md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit egestas
          <br /> eros eu egestas amet nisi lobortis.
        </p>
        <div className="items flex flex-wrap gap-5">
          {food_items?.map((item) => {
            return (
              <FoodItemCard
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
