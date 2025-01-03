import React from 'react';
import ProductCard, { ProductProps } from '../ProductCard';

const dummyProducts: ProductProps[] = [
  {
    title: 'Solareye Compressed Air Duster-3-Gear Adjustable Electric Air Duster, Rechargeable Cordless Air Blower with Brushless Moto...',
    image: 'https://storage.googleapis.com/a1aa/image/142ADp5l6MYiEtNJkZGlyBZM4lf7AL5S9eJIJ9a05ZfZxVCoA.jpg',
    rating: 4.5,
    
    price: 49.99,
    
   
    onAddToCart: () => console.log('Added to cart!')
  },
  {
    title: 'High-Performance Gaming Mouse with RGB Lighting',
    image: 'https://storage.googleapis.com/a1aa/image/gaming-mouse.jpg',
    rating: 4.8,
   
    price: 29.99,
    
   
    onAddToCart: () => console.log('Added to cart!')
  },
  {
    title: 'Wireless Bluetooth Over-Ear Headphones with Noise Cancellation',
    image: 'https://storage.googleapis.com/a1aa/image/headphones.jpg',
    rating: 4.7,
    
    price: 99.99,
    
    onAddToCart: () => console.log('Added to cart!')
  },
  {
    title: 'Ultra-Portable External SSD 1TB - USB 3.2',
    image: 'https://storage.googleapis.com/a1aa/image/external-ssd.jpg',
    rating: 4.9,
    
    price: 119.99,
    
    onAddToCart: () => console.log('Added to cart!')
  }
];

const FlashDeals: React.FC = () => {
  return (
    <section className=" container mx-auto p-8 overflow-x-auto">
        <h3 className='font-semibold text-2xl'>Flash Deals</h3>
        <div className='w-full flex justify-around gap-4'>
            
      {dummyProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
        </div>
    </section>
  );
};

export default FlashDeals;
