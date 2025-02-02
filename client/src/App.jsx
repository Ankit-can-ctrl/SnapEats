import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" font-main">
        <Header />
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>

      <Menu />
    </>
  );
}

export default App;
