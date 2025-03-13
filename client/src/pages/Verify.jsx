import { useNavigate, useSearchParams } from "react-router-dom";
import { useStoreContext } from "../Context/StoreContext";
import axios from "axios";
import { useEffect } from "react";
import Loader from "../components/Loader";

const Verify = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useStoreContext();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(
        url + "/api/orders/verify",
        {
          orderId,
          success,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        navigate("/myorders");
      } else {
        console.log(response);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <Loader />
    </div>
  );
};

export default Verify;
