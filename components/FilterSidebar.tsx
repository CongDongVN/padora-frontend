"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FilterSidebar() {
  const [open, setOpen] = useState({
    material: true,
    size: true,
    price: true,
  });

  const toggle = (key: keyof typeof open) => {
    setOpen({ ...open, [key]: !open[key] });
  };

  return (
    <div className="w-[340px] shrink-0 pr-8 border-r border-gray-300 text-black">
      {/* ===== CHẤT LIỆU ===== */}
      <div className="py-6 border-b border-gray-300">
        <div
          onClick={() => toggle("material")}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="font-semibold">Chất liệu</h3>
          {open.material ? <FiMinus /> : <FiPlus />}
        </div>

        {open.material && (
          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="w-6 h-6 rounded-full bg-gray-300 border"></span>
              Bạc
            </div>

            <div className="flex items-center gap-3 cursor-pointer">
              <span className="w-6 h-6 rounded-full bg-yellow-400 border"></span>
              Mạ vàng 14k
            </div>

            <div className="flex items-center gap-3 cursor-pointer">
              <span className="w-6 h-6 rounded-full bg-orange-300 border"></span>
              Mạ vàng hồng 14k
            </div>
          </div>
        )}
      </div>

      {/* ===== SIZE ===== */}
      <div className="py-6 border-b border-gray-300">
        <div
          onClick={() => toggle("size")}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="font-semibold">Size</h3>
          {open.size ? <FiMinus /> : <FiPlus />}
        </div>

        {open.size && (
          <div className="mt-5 grid grid-cols-5 gap-3 text-sm">
            {[
              "one size",
              "16",
              "17",
              "18",
              "19",
              "21",
              "23",
              "48",
              "50",
              "52",
              "54",
              "56",
              "45",
              "50",
              "60",
            ].map((size, i) => (
              <button
                key={i}
                className="h-10 border border-gray-300 flex items-center justify-center 
                           hover:bg-black hover:text-white transition cursor-pointer"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ===== MỨC GIÁ ===== */}
      <div className="py-6">
        <div
          onClick={() => toggle("price")}
          className="flex justify-between items-center cursor-pointer"
        >
          <h3 className="font-semibold">Mức giá</h3>
          {open.price ? <FiMinus /> : <FiPlus />}
        </div>

        {open.price && (
          <div className="mt-5 space-y-4 text-sm">
            {[
              "Dưới 1.000.000đ",
              "1.000.001đ - 2.500.000đ",
              "2.500.001đ - 5.000.000đ",
              "5.000.001đ - 7.000.000đ",
              "Trên 7.000.001đ",
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer">
                
                <input
                  type="checkbox"
                  className="w-5 h-5 appearance-none border border-gray-400 
               checked:bg-black checked:border-black 
               relative cursor-pointer
               after:content-[''] after:absolute after:hidden 
               checked:after:block
               after:left-1.5 after:top-0.5
               after:w-1.25 after:h-2.5
               after:border-white after:border-r-2 after:border-b-2
               after:rotate-45"
                />

                {item}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
