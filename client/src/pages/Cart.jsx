import Footer from "../components/Footer";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import { RiShoppingCartFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import { useStoreContext } from "../Context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
function Cart() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    cart,
    food_items,
    removeFromCart,
    addToCart,
    setCheckoutValues,
    url,
    deliveryFee,
  } = useStoreContext();

  useEffect(() => {
    // Simulating API loading state
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust based on actual API response time
  }, []);

  let subtotal = 0;
  cart.forEach((item) => {
    const itemId = item.id;
    const foodItem = food_items.find((food) => food._id === itemId); // Find the item by ID

    if (foodItem) {
      subtotal += item.quantity * foodItem.price;
    } else {
      console.log("Food item not found for ID:", itemId);
    }
  });

  const handleCheckout = ({ subtotal }) => {
    setCheckoutValues({ subtotal });
    navigate("/checkout");
  };

  return (
    <div>
      <Header />
      <Navbar />
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="cart p-5">
          <div className="Cart_heading w-full flex items-center justify-center py-5 border-b-2 border-gray-100 mb-5">
            Your Cart ({cart?.length} Items).
          </div>
          <div className="Cart_fields grid grid-cols-4 place-items-center pb-5 border-b-2 border-gray-100">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          <div className="cart_items">
            {cart?.length > 0 &&
              cart.map((cartItem) => {
                const itemDetails = food_items.find(
                  (food) => food._id === cartItem.id
                );
                return itemDetails ? (
                  <div
                    className="cart_item grid grid-cols-4 w-full place-items-center py-4"
                    key={cartItem.id}
                  >
                    <div className="item flex flex-col text-center items-center justify-center">
                      <img
                        className="w-[50px]"
                        src={url + "/images/" + itemDetails.image}
                        alt={itemDetails.name}
                      />
                      <p>{itemDetails.name}</p>
                    </div>
                    <p>${itemDetails.price}</p>
                    <div className="quantity flex items-center justify-center gap-3 bg-gray-200 py-2 px-4 rounded-md">
                      {cartItem.quantity > 0 && (
                        <button
                          className=" text-xl font-semibold"
                          onClick={() => removeFromCart(cartItem.id)}
                        >
                          -
                        </button>
                      )}
                      <p>{cartItem.quantity}</p>
                      <button
                        className=" text-xl font-semibold"
                        onClick={() => addToCart(cartItem.id)}
                      >
                        +
                      </button>
                    </div>
                    <p>${itemDetails.price * cartItem.quantity}</p>
                  </div>
                ) : null;
              })}
          </div>

          {cart.length === 0 ? (
            <div className="w-full h-[60vh] flex flex-wrap gap-5 items-center justify-center">
              Your
              <RiShoppingCartFill className=" text-2xl" />
              is empty.
              <Link to="/menu" className="text-blue-700 underline">
                Go To Menu
              </Link>
            </div>
          ) : (
            <div className="checkout pt-10 pr-10 border-t-2 border-gray-100 w-full flex flex-col gap-5 items-end justify-end">
              <p className="text-3xl font-heavy">Cart Total</p>
              <div className="flex w-[300px] md:w-[400px] justify-between border-b-2 border-gray-100">
                <p>SubTotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex w-[300px] md:w-[400px] justify-between border-b-2 border-gray-100">
                <p>Delivery Fee</p>
                <p>${deliveryFee.toFixed(2)}</p>
              </div>
              <div className="flex w-[300px] md:w-[400px] justify-between border-b-2 border-gray-100">
                <p>Net Total</p>
                <p>${(subtotal + deliveryFee).toFixed(2)}</p>
              </div>
              <div className="checkout_btn">
                <MainButton
                  type="primary"
                  text={"Checkout"}
                  onClickHandler={() => handleCheckout({ subtotal })}
                />
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
