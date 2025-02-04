import DividerBlack from "../components/DividerBlack";
import map from "../assets/map.png";

function Map() {
  return (
    <div className="md:h-[300px] overflow-hidden">
      <div className=" relative">
        <DividerBlack />
      </div>
      <img
        className=" h-[400px] lg:h-auto object-cover object-center"
        src={map}
        alt="Location"
      />
    </div>
  );
}

export default Map;
