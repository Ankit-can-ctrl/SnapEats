import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useStoreContext } from "../Context/StoreContext";

const Verify = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useStoreContext();

  console.log(url, success, orderId);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Order Confirmed!
        </h2>
        <p className="text-gray-600 mt-2">
          Your order has been successfully placed.
        </p>

        {/* Order details */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left text-gray-700">
          <p>
            <span className="font-semibold">Order ID:</span> #123456
          </p>
          <p>
            <span className="font-semibold">Total Amount:</span> $24.99
          </p>
          <p>
            <span className="font-semibold">Estimated Delivery:</span> 30-40
            mins
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Verify;
