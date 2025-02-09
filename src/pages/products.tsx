import Layout from '@/components/home/layout'
import { ProductCard } from "../components/ProductCard";
import React from 'react'

const products = [
  {
    id: 1,
    title: "Library Stool Chair",
    price: 20,
    image:
      "https://images.app.goo.gl/Uyc5B8uVthRaqk4b9",
    isNew: true,
  },
  {
    id: 2,
    title: "Library Stool Chair",
    price: 20,
    originalPrice: 30,
    image:
      "",
    isSale: true,
  },
  {
    id: 3,
    title: "Library Stool Chair",
    price: 20,
    image:
      "",
  },
  {
    id: 4,
    title: "Library Stool Chair",
    price: 20,
    image:
      "",
  },
]

const Products = () => {
    return (
        <Layout>
            <section className="mx-auto py-8 min-h-screen bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-center md:justify-between w-full p-4">
                        <h3 className='font-semibold text-2xl'>Products</h3>

                        <div className="bg-white rounded-lg p-2">
                            Prices
                            <form action="" className='flex md:flex-row flex-col gap-4 items-center'>
                                <label htmlFor="min">Min</label>
                                <input type="number" id="min" name="min" placeholder="Min Price" className="border border-gray-300 rounded-lg p-2" />

                                <label htmlFor="max">Max</label>
                                <input type="number" id="max" name="max" placeholder="Max Price" className="border border-gray-300 rounded-lg p-2" />

                                <button type="submit" className="bg-blue-500 text-white rounded-lg p-2">→</button>
                            </form>
                        </div>
                    </div>
                    <div className='w-full flex justify-around gap-4 flex-wrap'>
                        {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              isNew={product.isNew}
              isSale={product.isSale}
              onAddToCart={() => console.log("Added to cart:", product.id)}
              onAddToWishlist={() => console.log("Added to wishlist:", product.id)}
            />
          ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Products



