import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Rating,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const PriceTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: "bold",
}));

const FoodItemCard = ({
  id,
  name = "Margherita Pizza",
  description = "Fresh mozzarella, tomato sauce, and basil on a crispy crust",
  price = 12.99,
  rating = 4.5,
  image,
  addToCart,
  removeFromCart,
  cart,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItem = cart.find((item) => item.id === id);

  return (
    <StyledCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt="image"
        className="max-h-[150px] w-full h-full object-cover object-center transform duration-300 ease-in-out hover:scale-105"
      />

      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating value={rating} precision={0.5} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({rating})
          </Typography>
        </Box>
        <PriceTypography variant="h6">${price.toFixed(2)}</PriceTypography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        {!cartItem ? (
          <button
            className=" bg-primary text-white font-semibold hover:bg-secodary hover:text-black px-3 py-2 rounded-lg transition-all duration-300"
            onClick={() => addToCart(id)}
          >
            <AddShoppingCartIcon />
            Add to Cart
          </button>
        ) : (
          <div>
            <button onClick={() => removeFromCart(id)}>-</button>
            <span>{cart.find((item) => item.id === id).quantity}</span>
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        )}
      </CardActions>
    </StyledCard>
  );
};

export default FoodItemCard;
