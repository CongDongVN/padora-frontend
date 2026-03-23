"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link"


export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Header />

      {/* nền trắng */}
      <div className="bg-white min-h-screen flex justify-center py-20">
        <div className="w-[520px]">
          {/* title */}
          <h1 className="text-3xl text-black font-bold text-center mb-2">
            TÀI KHOẢN CỦA TÔI
          </h1>
          <p className="text-center text-gray-700 mb-10">
            Đăng ký ngay để nhận các ưu đãi độc quyền từ Pandora
          </p>

          {/* tab */}
          <div className="flex mb-6 border-b text-lg font-semibold">
            <div className="w-1/2 pr-4">
              <Link href="/login">
                <button className="w-full text-center cursor-pointer pb-3 
            border-b-2 border-gray-300 text-gray-400 hover:opacity-70 transition">
                  ĐĂNG NHẬP
                </button>
              </Link>
            </div>

            <div className="w-1/2 pl-4">

              <button className="w-full text-center pb-3 
            border-b-2 border-black text-black cursor-pointer hover:opacity-70 transition">
                ĐĂNG KÝ
              </button>
            </div>
          </div>

          {/* form box */}
          <div className="border border-gray-300 bg-white p-10">

            <div className="flex flex-col gap-5">

              {/* input */}
              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Họ"
              />

              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Tên"
              />

              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Số điện thoại"
              />

              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Email"
              />

              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Ngày tháng năm sinh"
              />

              {/* password */}
              <div
                className="flex items-center px-4 py-3 bg-gray-100 border border-gray-300
                          focus-within:bg-white focus-within:border-black transition"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none bg-transparent text-black placeholder-gray-600"
                  placeholder="Mật khẩu *"
                />

                {showPassword ? (
                  <FaRegEye
                    className="text-black cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="text-black cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              {/* button */}
              <button className="bg-black text-white py-3 mt-2 hover:bg-gray-800 transition">
                ĐĂNG KÝ TÀI KHOẢN
              </button>

            </div>

            {/* divider */}
            <div className="text-center my-6 text-gray-700">
              Hoặc
            </div>

            {/* google */}
            <button className="flex items-center justify-center gap-3 w-full bg-[#f2b8c6] text-black py-3 mb-4  relative">
              <FcGoogle size={22} className="absolute left-4" />
              ĐĂNG NHẬP GOOGLE
            </button>

            {/* facebook */}
            <button className="flex items-center justify-center gap-3 w-full bg-[#2f6fdb] text-white py-3  relative">
              <FaFacebook size={20} className="absolute left-4" />
              ĐĂNG NHẬP FACEBOOK
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}