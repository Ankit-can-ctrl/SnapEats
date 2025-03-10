import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// creating store context and its provider
export const StoreContext = createContext({ food_items: [] });

export const StoreContextProvider = ({ children }) => {
  const url = "http://localhost:5000";
  const [food_list, setFoodList] = useState([]);
  const [token, setToken] = useState("");
  const food_items = food_list;
  const [cart, setCart] = useState([]);
  const [checkoutValues, setCheckoutValues] = useState({
    subtotal: 0,
  });
  const deliveryFee = 2;

  const addToCart = async (id) => {
    if (token) {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === id);
        if (existing) {
          return prev.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prev, { id, quantity: 1 }];
      });

      await axios.post(
        `${url}/api/cart/add`,
        { itemId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      toast.error("Please Login to add items");
    }
  };

  const removeFromCart = async (id) => {
    if (token) {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === id);
        if (!existing) return prev;

        if (existing.quantity === 1) {
          return prev.filter((item) => item.id !== id);
        }

        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      });

      await axios.delete(`${url}/api/cart/remove`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          itemId: id, //this is how we send the data in delete request
        },
      });
    }
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.FoodList);
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.get(url + "/api/cart/getCart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const cartItems = response.data;

      const cartItemArray = Object.entries(cartItems).map(([id, quantity]) => ({
        id,
        quantity,
      }));
      setCart(cartItemArray);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function loadData() {
      fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_items,
    addToCart,
    removeFromCart,
    cart,
    checkoutValues,
    setCheckoutValues,
    deliveryFee,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error(
      "useStoreContext must be used within a StoreContextProvider"
    );
  }
  return context;
};

// creating auth context
export const AuthContext = createContext({
  isLoggedIn: true,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  const contextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useStoreContext must be used within a StoreContextProvider"
    );
  }
  return context;
};

const contextExports = {
  StoreContext,
  StoreContextProvider,
  AuthContext,
  AuthContextProvider,
  useStoreContext,
  useAuthContext,
};

export default contextExports;
