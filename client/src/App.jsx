import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuItems from "./pages/MenuItems";
import Login from "./pages/Login";
import Register from "./pages/Register";

import CartWrapper from "./components/CartWrapper";

function App() {
  return (
    <div className=" font-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<CartWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
