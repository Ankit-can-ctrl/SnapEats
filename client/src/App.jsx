import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";

function App() {
  return (
    <>
      <div className=" font-main">
        <Header />
        <Navbar />
      </div>
      <div>
        <Parallax />
      </div>
    </>
  );
}

export default App;
