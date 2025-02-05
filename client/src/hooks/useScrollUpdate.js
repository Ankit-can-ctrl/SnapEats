import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const useScrollUpdate = () => {
  const { scroll } = useLocomotiveScroll();
  const location = useLocation();

  useEffect(() => {
    if (scroll) {
      // Scroll to top immediately on route change
      scroll.scrollTo(0, { duration: 0, disableLerp: true });

      // Update scroll container after a small delay to ensure content is rendered
      const timeout = setTimeout(() => {
        scroll.update();
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [scroll, location.pathname]);

  return null;
};

export default useScrollUpdate;
