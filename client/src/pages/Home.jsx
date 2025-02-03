import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

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
      <Testimonials />
    </div>
  );
}

export default Home;
