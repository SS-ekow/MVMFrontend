import Layout from '@/components/home/layout'
import ProductCard, { defaultProduct } from '@/components/ProductCard'
import React from 'react'


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
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                        <ProductCard {...defaultProduct} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Products
