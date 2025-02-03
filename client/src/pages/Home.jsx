import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <Menu />
      <AboutSection />
    </div>
  );
}

export default Home;
