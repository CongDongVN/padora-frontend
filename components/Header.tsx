"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  FiSearch,
  FiHeart,
  FiMapPin,
  FiUser,
  FiShoppingBag,
  FiStar,
  FiGift,
  FiLogOut,
  FiClock,
} from "react-icons/fi";

export default function Header() {
  const [openAuth, setOpenAuth] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  // ✅ GIỮ user state (để backend dùng sau này)
  const [user, setUser] = useState<any>(null);

  const userRef = useRef<HTMLDivElement>(null);

  // click ngoài để đóng
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        userRef.current &&
        !userRef.current.contains(e.target as Node)
      ) {
        setOpenAuth(false);
        setOpenUser(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
          <div className="flex items-center w-60 px-4 py-2 bg-white border border-gray-300 
                          focus-within:border-black transition">

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
              <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
            </div>

            {/* Location */}
            <div className="group flex flex-col items-center cursor-pointer">
              <FiMapPin className="transition group-hover:text-[#ff93a0]" />
              <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
            </div>

            {/* USER */}
            <div
              ref={userRef}
              className="relative group flex flex-col items-center cursor-pointer"
            >
              <FiUser
                onClick={() => {
                  if (user) {
                    setOpenUser(!openUser);
                    setOpenAuth(false);
                  } else {
                    setOpenAuth(!openAuth);
                    setOpenUser(false);
                  }
                }}
                className="transition group-hover:text-[#ff93a0]"
              />
              <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>

              {/* 🔓 CHƯA LOGIN */}
              {!user && openAuth && (
                <div className="absolute top-15 right-0 w-70 bg-white shadow-xl rounded-sm overflow-hidden z-50 animate-slideDown">
                  <div className="p-5 flex flex-col gap-4">

                    <Link
                      href="/login"
                      onClick={() => setOpenAuth(false)}
                      className="block text-center w-full bg-black text-white py-3.5 rounded-sm text-[12px] font-semibold tracking-wider hover:bg-gray-800 transition"
                    >
                      ĐĂNG NHẬP
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setOpenAuth(false)}
                      className="block text-center w-full bg-black text-white py-3.5 rounded-sm text-[12px] font-semibold tracking-wider hover:bg-gray-800 transition"
                    >
                      ĐĂNG KÝ
                    </Link>

                    <img
                      src="/img/hinh_log_in.png"
                      className="w-full h-50 object-cover rounded-sm"
                    />

                    <p className="text-center text-xs font-semibold text-black leading-relaxed px-2">
                      Đăng ký thành viên PANDORA ngay
                      <br />
                      để tận hưởng ưu đãi độc quyền online.
                    </p>

                  </div>
                </div>
              )}

              {/* ĐÃ LOGIN */}
              {user && openUser && (
                <div className="absolute top-9 mt-6 right-0 w-65 bg-white shadow-xl rounded-sm z-50 animate-slideDown">

                  <div className="py-2 text-[13px]">
                    <div className="flex flex-col">

                      <div className="flex items-center gap-3 px-4 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer leading-none">
                        <FiUser className="text-[17px] shrink-0 text-gray-800" />
                        <span>THÔNG TIN TÀI KHOẢN</span>
                      </div>

                      <div className="flex items-center gap-3 px-4 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer leading-none">
                        <FiClock className="text-[17px] shrink-0 text-gray-800" />
                        <span>LỊCH SỬ MUA HÀNG</span>
                      </div>

                      <div className="flex items-center gap-3 px-4 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer leading-none">
                        <FiMapPin className="text-[17px] shrink-0 text-gray-800" />
                        <span>ĐỊA CHỈ GIAO HÀNG</span>
                      </div>

                      <div className="flex items-center gap-3 px-4 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer leading-none">
                        <FiStar className="text-[17px] shrink-0 text-gray-800" />
                        <span>HẠNG THÀNH VIÊN</span>
                      </div>

                      <div className="flex items-center gap-3 px-4 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer leading-none">
                        <FiGift className="text-[17px] shrink-0 text-gray-800" />
                        <span>CHƯƠNG TRÌNH KHUYẾN MÃI</span>
                      </div>

                      <div
                        onClick={() => {
                          setUser(null);
                          setOpenUser(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer leading-none"
                      >
                        <FiLogOut className="text-[17px] shrink-0 text-gray-800" />
                        <span>ĐĂNG XUẤT</span>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bag */}
            <div className="group flex flex-col items-center cursor-pointer">
              <FiShoppingBag className="transition group-hover:text-[#ff93a0]" />
              <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
            </div>

          </div>

        </div>

      </div>

      <div className="border-b-4 border-[#ff93a0]"></div>

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

      <div className="w-full h-px bg-gray-300"></div>

    </header>
  );
}