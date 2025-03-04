import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/Data";

// creating store context and its provider
export const StoreContext = createContext({ food_items: [] });

export const StoreContextProvider = ({ children }) => {
  const url = "http://localhost:5000";
  const [token, setToken] = useState("");
  const food_items = food_list;
  const [cart, setCart] = useState([]);
  const [checkoutValues, setCheckoutValues] = useState({
    subtotal: 0,
  });
  const deliveryFee = 2;
  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
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
  };

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
