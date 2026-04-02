"use client";
import { FiHeart } from "react-icons/fi";

type Product = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: Product) {
  return (
    <div className="group cursor-pointer">

      {/* IMAGE WRAPPER */}
      <div className="relative bg-gray-100 h-[260px] overflow-hidden">

        {/* IMAGE */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* NEW TAG */}
        <span className="absolute top-3 left-3 bg-[#ff93a0] text-white text-xs px-2 py-1">
          NEW
        </span>

        {/* HEART */}
        <FiHeart className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-black" />

        {/* QUICK VIEW BUTTON */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition">
          <button className="w-full bg-black font-bold text-white py-2 text-sm">
            XEM NHANH
          </button>
        </div>

      </div>

      {/* INFO */}
      <div className="mt-3 space-y-1">
        <p className="text-black text-[14px] font-medium">{name}</p>
        <p className="text-gray-500 text-[13px]">
          {price.toLocaleString()}đ
        </p>
      </div>

    </div>
  );
}