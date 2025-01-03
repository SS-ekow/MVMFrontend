import Layout from "@/components/home/layout";
import React from "react";

interface ProductDetailProps {
  title?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  stock?: number;
  rating?: number; // Optional
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  title = "Sample Product Title",
  image = "https://storage.googleapis.com/a1aa/image/142ADp5l6MYiEtNJkZGlyBZM4lf7AL5S9eJIJ9a05ZfZxVCoA.jpg",
  price = 2800.0,
  originalPrice = 3200.0,
  stock = 8877,
  rating = 4.5,
}) => {
  return (
    <Layout>
      <section className=" md:h-screen bg-gray-100 p-10">
        <div className="container mx-auto bg-white rounded-lg w-full h-full md:grid md:grid-cols-5 p-8 flex flex-col gap-4">
          <div className="col-span-2">
            <div className="w-full h-full rounded-lg bg-blue-300">
              <img src={image} alt={title} className="w-full h-full rounded-lg object-cover" />
            </div>
          </div>
          <div className="col-span-3 p-8 flex flex-col justify-between">
            <h1 className="font-extrabold text-4xl">{title}</h1>

            <div className="rating">{rating ? `Rating: ${rating}/5` : "No ratings yet"}</div>
            <div className="stock text-md text-gray-400">{stock} in stock</div>
            <div className="price">
              <span className="text-3xl text-blue-300">GHS {price.toFixed(2)}</span>
              <span className="text-md text-gray-400 line-through ml-2">
                GHS {originalPrice.toFixed(2)}
              </span>
            </div>

            <div className="quantity flex gap-4 items-center">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="border border-gray-300 rounded-lg p-2 w-12"
              />
            </div>

            <div className="total bg-gray-100 rounded-md flex flex-col gap-4 p-4">
              <span>Total</span>
              <span>GHS {price.toFixed(2)}</span>
            </div>

            <div className="actions flex gap-4">
              <button className="bg-orange-500 text-white rounded-lg p-2">Add to Cart</button>
              <button className="bg-blue-500 text-white rounded-lg p-2">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
