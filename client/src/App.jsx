import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

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
