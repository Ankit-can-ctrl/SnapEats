import userModel from "../models/userModel.js";

const addToCart = async (req, res, next) => {
  const itemId = req.body.itemId;
  try {
    let userData = await userModel.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (!itemId) {
      return res.status(403).json({
        message: "Please provide item id",
      });
    }

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({
      message: "Item Added To Cart Successfully!",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Something went wrong while adding to cart!",
    });
  }
};

const removeFromCart = async (req, res, next) => {};

const getCartItems = async (req, res, next) => {};

export { addToCart, removeFromCart, getCartItems };
