import image from "../assets/client.png";
import { RiStarSFill } from "react-icons/ri";
function ClientCard() {
  return (
    <div className=" flex w-full justify-center items-center">
      <div className="bg-secodary w-fit flex flex-col lg:flex-row items-center justify-center gap-5 p-5">
        <div className="client_img">
          <img className=" w-[300px]" src={image} alt="Client" />
        </div>
        <div className="review flex flex-col gap-5 items-center">
          <div className="stars flex text-4xl text-primary">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <div className="flex flex-col w-full items-center gap-2">
            <h1 className="text-3xl text-center font-heavy">
              “The best place to eat your pizza”
            </h1>
            <p className=" text-center md:w-[60%] text-gray-600">
              “Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc
              mauris scelerisque sed quis pharetra arcu pharetra blandit.”
            </p>
            <h2 className="font-bold">Clark Corl</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClientCard;
