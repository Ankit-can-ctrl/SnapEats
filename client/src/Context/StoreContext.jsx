import { createContext, useContext, useState } from "react";

// Define the initial food items
let foodItemsList = [
  // Pizza
  {
    id: 1,
    name: "Margherita Pizza",
    image: "https://example.com/margherita.jpg",
    price: 8.99,
    description:
      "Classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    image: "https://example.com/pepperoni.jpg",
    price: 9.99,
    description: "Cheesy pizza topped with spicy pepperoni slices.",
    category: "Pizza",
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    image: "https://example.com/bbq-chicken.jpg",
    price: 10.99,
    description: "BBQ sauce, grilled chicken, red onions, and mozzarella.",
    category: "Pizza",
  },
  {
    id: 4,
    name: "Veggie Supreme Pizza",
    image: "https://example.com/veggie-supreme.jpg",
    price: 9.49,
    description: "Loaded with bell peppers, olives, onions, and mushrooms.",
    category: "Pizza",
  },

  // Burger
  {
    id: 5,
    name: "Cheeseburger",
    image: "https://example.com/cheeseburger.jpg",
    price: 6.99,
    description:
      "Juicy beef patty with melted cheese, lettuce, and tomato in a soft bun.",
    category: "Burger",
  },
  {
    id: 6,
    name: "Chicken Burger",
    image: "https://example.com/chicken-burger.jpg",
    price: 7.49,
    description: "Crispy fried chicken with lettuce and mayo in a toasted bun.",
    category: "Burger",
  },
  {
    id: 7,
    name: "Veggie Burger",
    image: "https://example.com/veggie-burger.jpg",
    price: 6.99,
    description:
      "Grilled plant-based patty with fresh veggies and special sauce.",
    category: "Burger",
  },
  {
    id: 8,
    name: "Double Beef Burger",
    image: "https://example.com/double-beef.jpg",
    price: 9.99,
    description: "Two juicy beef patties, double cheese, and signature sauce.",
    category: "Burger",
  },

  // Sushi
  {
    id: 9,
    name: "Sushi Platter",
    image: "https://example.com/sushi.jpg",
    price: 15.99,
    description: "An assortment of fresh sushi rolls, nigiri, and sashimi.",
    category: "Japanese",
  },
  {
    id: 10,
    name: "Salmon Nigiri",
    image: "https://example.com/salmon-nigiri.jpg",
    price: 10.49,
    description: "Freshly sliced salmon over seasoned rice.",
    category: "Japanese",
  },
  {
    id: 11,
    name: "California Roll",
    image: "https://example.com/california-roll.jpg",
    price: 8.99,
    description: "Crab, avocado, and cucumber wrapped in seaweed and rice.",
    category: "Japanese",
  },
  {
    id: 12,
    name: "Tuna Sashimi",
    image: "https://example.com/tuna-sashimi.jpg",
    price: 12.99,
    description: "Thinly sliced fresh tuna served with soy sauce and wasabi.",
    category: "Japanese",
  },

  // Salad
  {
    id: 13,
    name: "Grilled Chicken Salad",
    image: "https://example.com/chicken-salad.jpg",
    price: 9.49,
    description:
      "Grilled chicken on fresh greens, cherry tomatoes, and vinaigrette.",
    category: "Salad",
  },
  {
    id: 14,
    name: "Caesar Salad",
    image: "https://example.com/caesar-salad.jpg",
    price: 7.99,
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
    category: "Salad",
  },
  {
    id: 15,
    name: "Greek Salad",
    image: "https://example.com/greek-salad.jpg",
    price: 8.49,
    description:
      "Cucumber, tomatoes, feta cheese, and olives with olive oil dressing.",
    category: "Salad",
  },
  {
    id: 16,
    name: "Tuna Salad",
    image: "https://example.com/tuna-salad.jpg",
    price: 8.99,
    description: "Fresh tuna mixed with greens and a tangy dressing.",
    category: "Salad",
  },

  // Desserts
  {
    id: 17,
    name: "Chocolate Cake",
    image: "https://example.com/chocolate-cake.jpg",
    price: 5.99,
    description:
      "Rich and moist chocolate cake with a layer of fudge frosting.",
    category: "Dessert",
  },
  {
    id: 18,
    name: "Cheesecake",
    image: "https://example.com/cheesecake.jpg",
    price: 6.49,
    description: "Creamy cheesecake with a buttery graham cracker crust.",
    category: "Dessert",
  },
  {
    id: 19,
    name: "Brownie",
    image: "https://example.com/brownie.jpg",
    price: 4.99,
    description: "Fudgy chocolate brownie with a crispy top layer.",
    category: "Dessert",
  },
  {
    id: 20,
    name: "Ice Cream Sundae",
    image: "https://example.com/icecream-sundae.jpg",
    price: 5.49,
    description: "Vanilla ice cream topped with chocolate syrup and nuts.",
    category: "Dessert",
  },

  // Beverages
  {
    id: 21,
    name: "Mango Smoothie",
    image: "https://example.com/mango-smoothie.jpg",
    price: 4.99,
    description:
      "Refreshing mango smoothie made with fresh mangoes and yogurt.",
    category: "Beverage",
  },
  {
    id: 22,
    name: "Iced Coffee",
    image: "https://example.com/iced-coffee.jpg",
    price: 3.99,
    description: "Chilled coffee served with milk and ice.",
    category: "Beverage",
  },
  {
    id: 23,
    name: "Lemonade",
    image: "https://example.com/lemonade.jpg",
    price: 3.49,
    description: "Freshly squeezed lemons mixed with sugar and water.",
    category: "Beverage",
  },
  {
    id: 24,
    name: "Green Tea",
    image: "https://example.com/green-tea.jpg",
    price: 2.99,
    description: "Soothing green tea with a hint of honey.",
    category: "Beverage",
  },
];

// Create the context
const StoreContext = createContext();

// Create the context provider component
export function StoreProvider({ children }) {
  const [foodItems, setFoodItems] = useState(foodItemsList);

  // Add a new food item
  const addFoodItem = (newItem) => {
    setFoodItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: prevItems.length + 1 },
    ]);
  };

  // Remove a food item
  const removeFoodItem = (id) => {
    setFoodItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update a food item
  const updateFoodItem = (id, updatedItem) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  // Toggle stock status
  const toggleStockStatus = (id) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  // Filter items by category
  const getItemsByCategory = (category) => {
    return foodItems.filter((item) => item.category === category);
  };

  const value = {
    foodItems,
    addFoodItem,
    removeFoodItem,
    updateFoodItem,
    toggleStockStatus,
    getItemsByCategory,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

// Custom hook to use the store context
export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
