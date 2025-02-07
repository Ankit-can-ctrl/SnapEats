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

  return (
    <StyledCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="154"
        image={image}
        alt={name}
        sx={{
          transition: "transform 0.3s ease-in-out",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
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
        {!cart.find((item) => item.id === id) ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => addToCart(id)}
            sx={{
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Add to Cart
          </Button>
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
