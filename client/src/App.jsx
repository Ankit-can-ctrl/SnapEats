import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuItems from "./pages/MenuItems";
import CheckoutPage from "./pages/CheckoutPage";
import Cart from "./pages/Cart";
import AdminPanel from "./components/admin/AdminPanel";
import AddItems from "./components/admin/adminPages/AddItems";
import Orders from "./components/admin/adminPages/Orders";
import ListItems from "./components/admin/adminPages/ListItems";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PaymentProtectedRoutes from "./components/PaymentProtectedRoutes";

function App() {
  return (
    <div className=" font-main">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuItems />} />

        {/* ===================User Protected Routes====================== */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/verify" element={<Verify />} />

          {/* ====================Payment and Order Related Routes=========================== */}
          <Route element={<PaymentProtectedRoutes />}>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Route>

        {/* ===================Admin Protected Routes===================== */}
        <Route path="/admin" element={<AdminPanel />}>
          <Route index element={<AddItems />} />
          <Route path="list" element={<ListItems />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
