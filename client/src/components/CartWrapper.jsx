import { useLocation } from "react-router-dom";
import Cart from "../pages/Cart";

const CartWrapper = () => {
  const location = useLocation();
  return location.pathname.endsWith("/cart") ? <Cart /> : null;
};

export default CartWrapper;
