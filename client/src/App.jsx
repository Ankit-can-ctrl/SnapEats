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

function App() {
  return (
    <div className=" font-main">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuItems />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<Cart />} />
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
