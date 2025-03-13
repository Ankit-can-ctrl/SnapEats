import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const orders = [
  {
    id: 1,
    items: [
      { name: "Burger", quantity: 2, price: 10 },
      { name: "Fries", quantity: 1, price: 5 },
    ],
    total: 25,
    status: "Shipped",
  },
  {
    id: 2,
    items: [
      { name: "Pizza", quantity: 1, price: 15 },
      { name: "Coke", quantity: 2, price: 4 },
    ],
    total: 23,
    status: "Delivered",
  },
];

const MyOrders = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className=" w-full mx-auto p-6 bg-red-100 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
          My Orders
        </h2>
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white w-full max-w-4xl shadow-lg rounded-lg p-6 mb-6 border border-red-300 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-red-700 mb-4">
              Order #{order.id}
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
                Total: ${order.total}
              </span>
              <span
                className={`px-4 py-1 rounded-full text-white text-sm font-medium shadow-md ${
                  order.status === "Delivered" ? "bg-red-500" : "bg-yellow-500"
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
        ))}
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;
