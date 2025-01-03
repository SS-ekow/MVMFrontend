import React from 'react';
import { Box, Typography, IconButton, Button, Rating, Chip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export interface ProductProps {
  title: string;
  image: string;
  price: number;
  rating: number;
  onAddToCart?: () => void;
}

export const defaultProduct: ProductProps = {
  title: "Solareye Compressed Air Duster-3-Gear Adjustable Electric Air Duster, Rechargeable Cordless Air Blower with Brushless Moto...",
  image: "https://storage.googleapis.com/a1aa/image/142ADp5l6MYiEtNJkZGlyBZM4lf7AL5S9eJIJ9a05ZfZxVCoA.jpg",
  rating: 4.5,
  price: 49.99,
  

};

const ProductCard: React.FC<ProductProps> = ({ title, image, price, rating, onAddToCart }) => {
  return (
    <a href="/product/a">
    <Box
      sx={{
        backgroundColor: "white",
        border: 1,
        borderColor: "grey.300",
        borderRadius: 2,
        boxShadow: 2,
        padding: 2,
        maxWidth: 300,
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 1, mb: 1 }}
      />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }} noWrap>
        {title}
      </Typography>
      <Rating value={rating} precision={0.5} readOnly sx={{ mb: 1 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        ${price.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": { backgroundColor: "primary.dark" },
          fontSize: "0.875rem",
        }}
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </Box></a>
  );
};



export default ProductCard;
