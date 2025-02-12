import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useStoreContext } from "../Context/StoreContext";
function Cart() {
  const { cart, food_items, removeFromCart, addToCart } = useStoreContext();
  console.log(cart.length);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="cart min-h-screen p-5">
        <div className="Cart_heading w-full flex items-center justify-center py-5 border-b-2 border-gray-100 mb-5">
          Your Cart ({cart.length} Items).
        </div>
        <div className="Cart_fields grid grid-cols-4 place-items-start pb-5 border-b-2 border-gray-100">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="cart_items">
          {cart.length > 0 &&
            cart.map((cartItem) => {
              const itemDetails = food_items.find(
                (food) => food.id === cartItem.id
              );
              return itemDetails ? (
                <div
                  className="cart_item grid grid-cols-4 w-full place-items-start py-4"
                  key={cartItem.id}
                >
                  <div className="item">
                    <img
                      className="w-[50px]"
                      src={itemDetails.image}
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
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
