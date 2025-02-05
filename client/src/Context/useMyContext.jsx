import { useContext } from "react";
import StoreContext from "./StoreContext";

export const useStoreContext = () => {
  return useContext(StoreContext);
};
