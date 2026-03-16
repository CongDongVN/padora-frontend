"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex justify-center py-20">

      <div className="w-[520px]">

        {/* title */}
        <h1 className="text-3xl text-gray-700 font-bold text-center mb-2">
          TÀI KHOẢN CỦA TÔI
        </h1>

        <p className="text-center text-gray-700 mb-10">
          Đăng ký ngay để nhận các ưu đãi độc quyền từ Pandora
        </p>

        {/* tab */}
        <div className="flex justify-center gap-10 text-lg font-semibold mb-6">
          <span className="text-gray-400 border-b-2 border-gray-400 w-[250px] text-center pb-2">
            ĐĂNG NHẬP
          </span>

          <span className="border-b-2 text-gray-700 border-black w-[250px] text-center pb-2">
            ĐĂNG KÝ
          </span>
        </div>

        {/* form box */}
        <div className="border border-gray-300 bg-white p-10">

          <div className="flex flex-col gap-5">

            <input className="border border-gray-300 p-3 w-full outline-none placeholder-gray-700" placeholder="Họ"/>

            <input className="border border-gray-300 p-3 w-full outline-none placeholder-gray-700" placeholder="Tên"/>

            <input className="border border-gray-300 p-3 w-full outline-none placeholder-gray-700" placeholder="Số điện thoại"/>

            <input className="border border-gray-300 p-3 w-full outline-none placeholder-gray-700" placeholder="Email"/>

            <input className="border border-gray-300 p-3 w-full outline-none placeholder-gray-700" placeholder="Ngày tháng năm sinh"/>
            {/* password */}
            <div className="border text-gray-700 border-gray-300 flex items-center px-3">
              <input
                type="password"
                className="w-full p-3 outline-none"
                placeholder="Mật khẩu *"
              />
              <FaRegEyeSlash className="text-gray-700"/>
            </div>

            {/* button */}
            <button className="bg-black text-white py-3 font-semibold mt-2 hover:bg-gray-800 transition">
              ĐĂNG KÝ TÀI KHOẢN
            </button>

          </div>

          {/* divider */}
          <div className="text-center my-6 text-gray-700">
            Hoặc
          </div>

          {/* google */}
          <button className="flex items-center justify-center gap-3 w-full bg-[#f2b8c6] py-3 mb-4 font-semibold">
            <FcGoogle size={22}/>
            ĐĂNG NHẬP GOOGLE
          </button>

          {/* facebook */}
          <button className="flex items-center justify-center gap-3 w-full bg-[#2f6fdb] text-white py-3 font-semibold">
            <FaFacebook size={20}/>
            ĐĂNG NHẬP FACEBOOK
          </button>

        </div>

      </div>
    </div>
  );
}