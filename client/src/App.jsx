import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Home from "./pages/Home";
import { useRef } from "react";
function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={containerRef}
    >
      <div ref={containerRef} className=" font-main">
        <Home />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
