import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
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
      <div className="h-screen bg-secodary">helo</div>
    </>
  );
}

export default App;
