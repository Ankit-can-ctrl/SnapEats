import { createContext } from "react";
import { food_list } from "../assets/Data";
import { useContext } from "react";

// create context
const StoreContext = createContext();

// Provider Component
export const StoreContextProvider = ({ children }) => {
  const contextValue = {
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
