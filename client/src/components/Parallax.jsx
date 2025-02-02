import { useRef, useEffect } from "react";
import pizza from "../assets/parallax/pizza.png";
import image1 from "../assets/parallax/1.png";
import image2 from "../assets/parallax/2.png";
import image3 from "../assets/parallax/3.png";
import image4 from "../assets/parallax/4.png";

const Parallax = () => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4ref = useRef(null);
  const image5ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (
        !image1Ref.current ||
        !image2Ref.current ||
        !image3Ref.current ||
        !image4ref.current ||
        !image5ref.current
      )
        return;

      // Get scroll position
      const scrollPosition = window.scrollY;

      // Different rotation speeds and directions for each image
      const rotation1 = scrollPosition * 0.08;
      const rotation2 = scrollPosition * -0.07;
      const rotation3 = scrollPosition * 0.08;
      const rotation4 = scrollPosition * -0.04;
      const rotation5 = scrollPosition * -0.09;

      // Request animation frame for smoother performance
      requestAnimationFrame(() => {
        image1Ref.current.style.transform = `rotate(${rotation1}deg)`;
        image2Ref.current.style.transform = `rotate(${rotation2}deg)`;
        image3Ref.current.style.transform = `rotate(${rotation3}deg)`;
        image4ref.current.style.transform = `rotate(${rotation4}deg)`;
        image5ref.current.style.transform = `rotate(${rotation5}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="  w-full overflow-hidden">
      <div className="relative mb-20">
        <div className="absolute z-10 -left-5 top-0 sm:top-10">
          <img
            ref={image1Ref}
            src={image1}
            alt="Rotating Image 1"
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] 2xl:w-[270px] object-cover will-change-transform hover:scale-105 transition-all duration-300 ease-out"
            style={{
              transition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
        <div className="absolute z-10 top-10 sm:top-20 right-0 sm:right-5 lg:right:10 2xl:left-1/2 2x:-top-10">
          <img
            ref={image2Ref}
            src={image4}
            alt="Rotating Image 2"
            className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[350px] 2xl:w-[300px] object-cover will-change-transform hover:scale-105 transition-all duration-300 ease-out"
            style={{
              transition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
        <div className="absolute z-10 -bottom-20 sm:right-20 right-0 xl:bottom-10 xl:right-10">
          <img
            ref={image5ref}
            src={image3}
            alt="Rotating Image 3"
            className="w-[150px]  sm:w-[200px] md:w-[250px] xl:w-[260px] object-cover will-change-transform hover:scale-105 transition-all duration-300 ease-out"
            style={{
              transition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        <div className=" absolute z-10 sm:left-20 -bottom-20">
          <img
            ref={image3Ref}
            src={image2}
            alt="Rotating Image 3"
            className="w-[150px] sm:w-[200px] md:w-[250px] xl:w-[300px] object-cover will-change-transform hover:scale-105 transition-all duration-300 ease-out"
            style={{
              transition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
        <div className="block max-w-full h-auto">
          <img ref={image4ref} className=" " src={pizza} alt="Pizza" />
        </div>
      </div>
    </div>
  );
};

export default Parallax;

// src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/6387bf531e6dac0fe00a2589_image-2-hero-pizzaplanet-x-webflow-template.png"
// src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/6381242632fbf933de545c27_pizza-shape-tomato-pizzaplanet-pizzaplanet-x-webflow-template.png"
// src="https://cdn.prod.website-files.com/63456fcaf05b4668dc4c98d6/638806108ffe99d8d277e8b1_image-3-hero-pizzaplanet-x-webflow-template.png"
