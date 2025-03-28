import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useStoreContext } from "../Context/StoreContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FoodItemCard from "../components/FoodItemCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function MenuItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [loading, setLoading] = useState(true);

  const { food_items, addToCart, removeFromCart, cart, url } =
    useStoreContext();

  const filteredItems = food_items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  // on initial render the page will always scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulating API loading state
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust based on actual API response time
  }, []);

  const categories = [
    "All",
    ...new Set(food_items.map((item) => item.category)),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category });
  };

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
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="">
            {filteredItems.length > 0 ? (
              <div className="items flex flex-wrap gap-5 items-center justify-center">
                {filteredItems.map((item) => (
                  <FoodItemCard
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cart={cart}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    image={url + "/images/" + item.image}
                    key={item._id}
                  />
                ))}
              </div>
            ) : (
              <div className="flex justify-center w-full h-[500px] ">
                <h1>No Items Found!</h1>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default MenuItems;
