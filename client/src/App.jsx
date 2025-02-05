import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuItems from "./pages/MenuItems";
function App() {
  return (
    <div className=" font-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuItems />} />
      </Routes>
    </div>
  );
}

export default App;
