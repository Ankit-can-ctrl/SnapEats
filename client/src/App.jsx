import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" font-main">
        <Header />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
