import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import MainButton from "../components/MainButton";
import Navbar from "../components/Navbar";
import { useStoreContext } from "../Context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../components/Loader";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const { checkoutValues, deliveryFee, token, url, food_items, cart } =
    useStoreContext();

  const cartItems = cart.map((item) => {
    const foodItem = food_items.find((newItem) => newItem._id === item.id);
    return foodItem ? { ...foodItem, quantity: item.quantity } : null;
  });

  const filteredCartItems = cartItems?.filter((item) => item !== null);
  console.log(filteredCartItems);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      let orderData = {
        address: formData,
        items: filteredCartItems,
        amount: checkoutValues.subtotal + 2,
      };

      let response = await axios.post(url + "/api/orders/place", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        window.location.href = response.data.session_url;
        setLoading(false);
      } else {
        toast.error(
          "Something went wrong while placing your order. Please try again later."
        );
        setLoading(false);
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="checkout-page">
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
          <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Checkout
            </h2>

            {loading ? (
              <Loader />
            ) : filteredCartItems?.length === 0 ? (
              <div className="text-center">
                <p>No items in the cart.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Delivery Form */}
                <form onSubmit={placeOrder} className="space-y-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Delivery Details
                  </h3>

                  <div>
                    <label className="block text-gray-600">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Proceed to Payment
                  </button>
                </form>

                {/* Right: Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    {filteredCartItems?.map((item) => (
                      <div key={item._id} className="flex justify-between">
                        <span>
                          {item.name} x{item.quantity}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>$2.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>
                        ${(checkoutValues.subtotal + deliveryFee).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
