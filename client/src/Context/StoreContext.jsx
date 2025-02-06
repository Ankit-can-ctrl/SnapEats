import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/Data";

// creating store context and its provider
export const StoreContext = createContext({ food_items: [] });

export const StoreContextProvider = ({ children }) => {
  const food_items = food_list;
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (e) =>
        e.id === item.id &&
        JSON.stringify(e.options) === JSON.stringify(item.options)
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId, options, quantityToRemove = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (e) =>
          e.id === itemId &&
          JSON.stringify(e.options) === JSON.stringify(options || {})
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];

        if (existingItem.quantity > quantityToRemove) {
          existingItem.quantity -= quantityToRemove;
          return updatedCart;
        } else {
          updatedCart.splice(existingItemIndex, 1); // Remove the entire object
          return updatedCart;
        }
      }
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);
  };

  const getCartLength = () => {
    return cart.length;
  };

  const contextValue = {
    food_items,
    addToCart,
    removeFromCart,
    cart,
    calculateTotal,
    getCartLength,
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
  isLoggedIn: false,
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
