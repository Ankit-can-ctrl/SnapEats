import axios from "axios";
import { useEffect, useState } from "react";
import { useStoreContext } from "../../../Context/StoreContext";
import { toast } from "react-toastify";

const Orders = () => {
  const { url } = useStoreContext();
  const [orders, setOrders] = useState([]);

  let reverseOrder = [...orders].reverse();

  const statusHandler = async (orderId, status) => {
    try {
      const response = await axios.post(url + "/api/orders/status", {
        orderId,
        status,
      });
      if (response.status === 200) {
        await getOrders();
        toast.success("Status Updated Successfully");
      }
    } catch (err) {
      console.log("error", err.message);
    }
  };

  const getOrders = async () => {
    try {
      let response = await axios.get(url + "/api/orders/allorders");
      setOrders(response.data);
    } catch (err) {
      console.log("error", err.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold  mb-6 text-center">Admin Orders</h2>
      {orders &&
        reverseOrder &&
        reverseOrder.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              Order ID: {order._id}
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> {order.address.address}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> {order.address.phone}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Amount:</strong> ${order.amount}
            </p>

            <ul className="space-y-2 mb-4">
              {order.items.map((item, index) => (
                <li
                  key={index}
                  className="bg-yellow-50 p-2 rounded-md text-gray-700 shadow-sm"
                >
                  {item.name} (x{item.quantity})
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center">
              <label className="font-semibold text-gray-700">Status:</label>
              <select
                className="bg-red-500 text-white px-3 py-2 rounded-lg font-medium shadow-md cursor-pointer"
                value={order.status}
                onChange={(e) => statusHandler(order._id, e.target.value)}
              >
                <option className="text-black" value="Processing">
                  Processing
                </option>
                <option className="text-black " value="Out for delivery">
                  Out for delivery
                </option>
                <option className="text-black" value="Delivered">
                  Delivered
                </option>
              </select>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Orders;
