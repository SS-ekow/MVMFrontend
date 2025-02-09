import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";

interface WishItemProps {
  id: number;
  productName: string;
  imageSrc: string;
  price: number;
  
  onDelete: (id: number) => void;
}

export default function WishItem({
  id,
  productName,
  imageSrc,
  price,
  
  onDelete
}: WishItemProps) {
  return (
    <div className="w-full flex flex-row justify-between items-center border-b border-gray-400 py-4">
      <div className="flex flex-row gap-2 items-center">
        <Image src={imageSrc} alt="product" width={70} height={70} className="rounded-md" />
        <span>{productName}</span>
      </div>
      <div className="flex flex-row gap-2">
        <span>GHS {price.toFixed(2)}</span>
        <span className="text-lg line-through text-gray-300">GHS 20.99</span>
      </div>
      

      <div className="flex items-center gap-4 pr-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Add to Cart</button>
        <RiDeleteBin6Line className="text-gray-600 hover:text-rose-500 cursor-pointer" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}

const InStock = () => (
  <div className="p-2 rounded-md bg-green-300 text-green-700">In Stock</div>
);

const OutOfStock = () => (
  <div className="p-2 rounded-md bg-red-300 text-red-700">Out of Stock</div>
);
