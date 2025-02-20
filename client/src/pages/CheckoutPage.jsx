import Footer from "../components/Footer";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import Navbar from "../components/Navbar";
import { useStoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { checkoutValues, deliveryFee } = useStoreContext();

  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Navbar />
      <div className="checkout-page">
        <div className="delivery_info w-full p-5 ">
          <form className="flex flex-col" action="">
            <label htmlFor="name">Name</label>
            <input
              required
              className="bg-gray-100 outline-none"
              id="name"
              type="text"
              name="name"
            />
            <label htmlFor="email">Email</label>
            <input
              required
              className="bg-gray-100 outline-none"
              id="email"
              type="text"
              name="email"
            />
            <label htmlFor="address">Address</label>
            <input
              required
              className="bg-gray-100 outline-none"
              id="address"
              type="text"
              name="address"
            />
            <label htmlFor="zip">zip</label>
            <input
              required
              className="bg-gray-100 outline-none"
              id="zip"
              type="text"
              name="zip"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              required
              className="bg-gray-100 outline-none"
              id="phone"
              type="text"
              name="phone"
            />
            <button
              type="submit"
              className=" bg-primary text-white font-heavy p-3 mt-5"
            >
              Pay now
            </button>
          </form>
        </div>

        <div className="cart_info mb-5">
          <div className="checkout pt-10 pr-10 border-t-2 border-gray-100 w-full flex flex-col gap-5 items-end justify-end">
            <p className="text-3xl font-heavy">Cart Total</p>
            <div className="flex w-[300px] md:w-[400px] justify-between border-b-2 border-gray-100">
              <p>SubTotal</p>
              <p>${checkoutValues.subtotal}</p>
            </div>
            <div className="flex w-[300px] md:w-[400px] justify-between border-b-2 border-gray-100">
              <p>Delivery Fee</p>
              <p>${deliveryFee}</p>
            </div>
            <div className="flex w-[300px] md:w-[400px] justify-between border-b-2 border-gray-100">
              <p>Net Total</p>
              <p>{checkoutValues.subtotal + deliveryFee}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
