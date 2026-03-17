"use client";

import { FiSearch, FiHeart, FiMapPin, FiUser, FiShoppingBag } from "react-icons/fi";

export default function Header() {
  return (
    <header className="w-full bg-white">

      {/* top banner */}
      <div className="bg-[#ff93a0] text-center text-[13px] py-2 relative text-black">
        Khắc thông điệp - Chạm cảm xúc
        <span className="font-semibold ml-2 cursor-pointer">
          KHÁM PHÁ NGAY
        </span>

        <span className="absolute right-8 top-0 bottom-0 flex items-center cursor-pointer">
          ✕
        </span>
      </div>

      {/* main header */}
      <div className="w-full px-16 flex items-center justify-between py-5">

        {/* logo */}
        <div className="text-3xl font-bold tracking-widest text-black">
          PANDORA
        </div>

        {/* right */}
        <div className="flex items-center gap-8">

          {/* search */}
          <div className="flex items-center w-[240px] px-4 py-2 bg-white border border-gray-300 
                          focus-within:bg-white focus-within:border-black transition">

            <input
              type="text"
              placeholder="Bạn cần tìm gì?"
              className="flex-1 outline-none bg-transparent text-[14px] font-semibold text-black placeholder-gray-500"
            />

            <FiSearch className="text-black text-lg" />
          </div>

          {/* icons */}
            <div className="flex items-center gap-6 text-xl text-black">

              {/* Heart */}
              <div className="group flex flex-col items-center cursor-pointer">
                <FiHeart className="transition group-hover:text-[#ff93a0]" />
                <span className="w-5 h-[2px] bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
              </div>

              {/* Location */}
              <div className="group flex flex-col items-center cursor-pointer">
                <FiMapPin className="transition group-hover:text-[#ff93a0]" />
                <span className="w-5 h-[2px] bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
              </div>

              {/* User */}
              <div className="group flex flex-col items-center cursor-pointer">
                <FiUser className="transition group-hover:text-[#ff93a0]" />
                <span className="w-5 h-[2px] bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
              </div>

              {/* Bag */}
              <div className="group flex flex-col items-center cursor-pointer">
                <FiShoppingBag className="transition group-hover:text-[#ff93a0]" />
                <span className="w-5 h-[2px] bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
              </div>

</div>

        </div>

      </div>

      {/* pink line */}
      <div className="border-b-[4px] border-[#ff93a0]"></div>

      {/* menu */}
      <nav className="w-full px-16 flex gap-14 py-4 text-[13px] font-semibold text-black tracking-wide">
        <span>BỘ SƯU TẬP MỚI</span>
        <span>TRANG SỨC</span>
        <span>VÒNG TAY</span>
        <span>CHARMS</span>
        <span>DÂY CHUYỀN</span>
        <span>HOA TAI</span>
        <span>NHẪN</span>
        <span>QUÀ TẶNG</span>
        <span className="text-[#ff93a0]">CÂU CHUYỆN CỦA BẠN</span>
      </nav>
      
      <div className="w-full h-[1px] bg-gray-300"></div>

    </header>
  );
}