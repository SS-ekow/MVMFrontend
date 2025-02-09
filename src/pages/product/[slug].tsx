import Layout from "@/components/home/layout";
import React from "react";

interface ProductDetailProps {
  title?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  stock?: number;
  rating?: number;
  sku?: string;
  category?: string;
  tags?: string[];
  description?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  title = "Sample Product Title",
  image = "https://storage.googleapis.com/a1aa/image/142ADp5l6MYiEtNJkZGlyBZM4lf7AL5S9eJIJ9a05ZfZxVCoA.jpg",
  price = 2800.0,
  originalPrice = 3200.0,
  stock = 8877,
  rating = 4.5,
  sku = "2,51,594",
  category = "Vegetables",
  tags = ["Vegetables", "Healthy", "Organic"],
  description = "This is a high-quality product that meets all your expectations."
}) => {
  return (
    <Layout>
      <section className="md:h-screen bg-gray-100 p-10 flex items-center justify-center">
        <div className="container mx-auto bg-white rounded-lg w-full h-auto grid grid-cols-1 md:grid-cols-2 p-8 gap-8 shadow-lg">
          <div className="flex justify-center items-center">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 border-b pb-4 border-gray-300">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                <span className="px-3 py-1 text-sm rounded-md bg-green-200 text-green-600">
                  {stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="flex flex-row gap-2 text-gray-500 text-sm">
                <span>{rating ? `${rating} stars` : "No ratings yet"}</span>
                
              </div>
              <div className="flex items-center gap-3 text-lg">
                <span className="text-gray-400 line-through">GHS {originalPrice.toFixed(2)}</span>
                <span className="text-3xl text-green-500 font-semibold">GHS {price.toFixed(2)}</span>
                <span className="px-2 py-1 text-sm rounded-lg bg-rose-300 text-red-600">
                  {`${Math.round(((originalPrice - price) / originalPrice) * 100)}% Off`}
                </span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            <button className="w-full p-3 bg-green-500 text-white text-lg font-semibold rounded-full hover:bg-green-600 transition">Add to Cart</button>
            <div className="flex flex-col gap-2 text-gray-700">
              <p><span className="font-semibold">Category:</span> {category}</p>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-semibold">Tags:</span>
                <ul className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <li key={index} className="px-2 py-1 bg-gray-200 rounded-md text-sm hover:bg-gray-300 cursor-pointer">{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
