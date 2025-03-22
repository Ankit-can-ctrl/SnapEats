import { Outlet, Navigate } from "react-router-dom";
import { useStoreContext } from "../Context/StoreContext";
function PaymentProtectedRoutes() {
  const { cart } = useStoreContext();

  return cart.length > 0 ? <Outlet /> : <Navigate to="/cart" replace />;
}

export default PaymentProtectedRoutes;
