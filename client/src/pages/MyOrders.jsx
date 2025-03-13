import { useStoreContext } from "../Context/StoreContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MyOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const { url } = useStoreContext();

  let reversedOrders = [...orders].reverse();

  const userOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + "/api/orders/userorders", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setOrders(response.data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching data:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    userOrders();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className=" w-full mx-auto p-6 bg-red-100 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
          My Orders
        </h2>
        {loading ? (
          <Loader />
        ) : orders.length === 0 ? (
          <div className="text-center">
            <p>No orders found.</p>
          </div>
        ) : (
          reversedOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white w-full max-w-4xl shadow-lg rounded-lg p-6 mb-6 border border-red-300 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-sm font-semibold text-red-700 mb-4">
                Order id : {order._id} <br />
                Date : {new Date(order.date).toLocaleDateString()}
              </h3>
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-yellow-50 p-3 rounded-md shadow-sm"
                  >
                    <span className="text-red-600">
                      {item.name} (x{item.quantity})
                    </span>
                    <span className="font-semibold text-red-800">
                      ${item.price * item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-red-800">
                  Total: ${order.amount}
                </span>
                <span
                  className={`px-4 py-1 rounded-full text-white text-sm font-medium shadow-md ${
                    order.status === "Delivered"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              {order.status !== "Delivered" && (
                <button className="mt-4 w-full bg-red-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 shadow-md">
                  Track Order
                </button>
              )}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;
