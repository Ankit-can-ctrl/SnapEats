import { useStoreContext } from "../Context/StoreContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FoodItemCard from "../components/FoodItemCard";
import { useState } from "react";

function MenuItems() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { food_items, addToCart, removeFromCart, cart } = useStoreContext();

  const filteredItems =
    selectedCategory === "All"
      ? food_items
      : food_items.filter((item) => item.category === selectedCategory);

  const categories = [
    "All",
    ...new Set(food_items.map((item) => item.category)),
  ];
  console.log(categories);

  return (
    <div>
      <Header />
      <Navbar cart={cart} />
      <div className="menu p-10 md:pt-20 flex flex-col items-center gap-10 text-black">
        <h1 className="text-5xl md:text-7xl font-heavy">Our Menu</h1>
        <p className="text-center text-gray-400 md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit egestas
          <br /> eros eu egestas amet nisi lobortis.
        </p>
        <div className="categories flex gap-10">
          {categories?.map((category, index) => {
            return (
              <button key={index} onClick={() => setSelectedCategory(category)}>
                {category}
              </button>
            );
          })}
        </div>
        <div className="items flex flex-wrap gap-5">
          {filteredItems?.map((item) => {
            return (
              <FoodItemCard
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
                id={item.id}
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
