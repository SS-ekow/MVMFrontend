import { useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import WishItem from "../components/wishitem";
import Layout from "@/components/home/layout";

export default function Wishlist() {
  const [wishItems, setWishItems] = useState([
    { id: 1, productName: "Product 1", imageSrc: "", price: 34.9,  },
    { id: 2, productName: "Product 2", imageSrc: "", price: 29.99, },
    { id: 3, productName: "Product 3", imageSrc: "", price: 19.99,  },
    { id: 4, productName: "Product 4", imageSrc: "", price: 49.99,  },
    { id: 5, productName: "Product 5", imageSrc: "", price: 24.99, }
  ]);

  const handleDelete = (id: number) => {
    setWishItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md grid grid-rows-[1fr_7fr_2fr] p-6">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-gray-300 p-4">
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span></span>
        </div>
        <div className="p-4 overflow-auto">
          {wishItems.length > 0 ? (
            wishItems.map((item) => (
              <WishItem
                key={item.id}
                id={item.id}
                productName={item.productName}
                imageSrc={item.imageSrc}
                price={item.price}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Your wishlist is empty.</p>
          )}
        </div>
        
      </div>
    </Layout>
  );
}
