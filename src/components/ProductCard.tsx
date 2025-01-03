import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Link from 'next/link';
import Image from 'next/image';

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
    <Link href="/product/a" passHref>
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
        <Box sx={{ width: "100%", height: 200, position: 'relative', mb: 1 }}>
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '8px' }}
          />
        </Box>
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
      </Box>
    </Link>
  );
};

export default ProductCard;
