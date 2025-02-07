import { createContext, useContext, useState } from "react";
import { food_list } from "../assets/Data";
import { useEffect } from "react";

// creating store context and its provider
export const StoreContext = createContext({ food_items: [] });

export const StoreContextProvider = ({ children }) => {
  const food_items = food_list;
  const [cart, setCart] = useState([]);

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
  // const addToCart = (item) => {
  //   const existingItemIndex = cart.findIndex(
  //     (e) =>
  //       e.id === item.id &&
  //       JSON.stringify(e.options) === JSON.stringify(item.options)
  //   );
  //   if (existingItemIndex !== -1) {
  //     const updatedCart = [...cart];
  //     updatedCart[existingItemIndex].quantity += 1;
  //     setCart(updatedCart);
  //   } else {
  //     setCart([...cart, { ...item, quantity: 1 }]);
  //   }
  // };

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
  // const removeFromCart = (itemId, options, quantityToRemove = 1) => {
  //   setCart((prevCart) => {
  //     const existingItemIndex = prevCart.findIndex(
  //       (e) =>
  //         e.id === itemId &&
  //         JSON.stringify(e.options) === JSON.stringify(options || {})
  //     );

  //     if (existingItemIndex !== -1) {
  //       const updatedCart = [...prevCart];
  //       const existingItem = updatedCart[existingItemIndex];

  //       if (existingItem.quantity > quantityToRemove) {
  //         existingItem.quantity -= quantityToRemove;
  //         return updatedCart;
  //       } else {
  //         updatedCart.splice(existingItemIndex, 1); // Remove the entire object
  //         return updatedCart;
  //       }
  //     }
  //   });
  // };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);
  };

  useEffect(() => {
    console.log("Cart:", cart);
    console.log(cart.length);
  }, [cart]);

  const contextValue = {
    food_items,
    addToCart,
    removeFromCart,
    cart,
    calculateTotal,
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
