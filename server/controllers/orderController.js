import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontendUrl = process.env.FRONTEND_URL;
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Fee",
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });

    // creating session for payment
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontendUrl}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(200).json({ session_url: session.url });
  } catch (err) {
    console.log("Error in placing the order", err.message);
    res.status(500).json({ message: "payment failed" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.status(200).json({ message: "Payment Successful" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.status(400).json({ message: "Payment Failed" });
    }
  } catch (error) {
    console.log("error in verifying", error);
    res.status(500).json({
      message:
        "Something went wrong while processing your request. Please try again later.",
    });
  }
};

const userOrders = async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await orderModel.find({ userId: userId });
    return res.json(orders);
  } catch (err) {
    console.log("error in getting user orders", err.message);
    res
      .status(500)
      .json({ message: "something went wrong while fetching orders" });
  }
};

export { placeOrder, verifyOrder, userOrders };
