"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    fristName: "",
    lastName: "",
    phone: "",
    email: "",
    passwordHash: "",
    address: "",
  });

 const handleRegister = async () => {
  // Kiểm tra tất cả ô
  if (
    !form.fristName.trim() ||
    !form.lastName.trim() ||
    !form.phone.trim() ||
    !form.email.trim() ||
    !form.passwordHash.trim() ||
    !form.address.trim()
  ) {
    alert(
      "Đăng ký không thành công, vui lòng điền đầy đủ thông tin các ô"
    );
    return;
  }

  try {
    const res = await fetch(
      "https://localhost:7221/api/Auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          passwordHash: form.passwordHash,
          fristName: form.fristName,
          lastName: form.lastName,
          phone: form.phone,
          address: form.address,
          role: "User"
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Đăng ký thất bại");
      return;
    }

    alert("Đăng ký thành công");
  } catch (error) {
    console.error(error);
    alert("Không kết nối được backend");
  }
};

  return (
    <>
      <Header />

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

          {/* FORM */}
          <div className="border border-gray-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-5">
              {/* Họ */}
              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Họ"
                 value={form.fristName}
                onChange={(e) => setForm({ ...form, fristName: e.target.value })}
              />

              {/* Tên */}
              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Tên"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}  
              />

              {/* Phone */}
              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}

              />

              {/* Email */}
              <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              {/* <input
                className="w-full px-4 py-3 bg-white border border-gray-300 
                          outline-none text-black placeholder-gray-600
                          focus:bg-white focus:border-black transition"
                placeholder="Ngày tháng năm sinh"
              /> */}

              {/* password */}
              <div
                className="flex items-center px-4 py-3 bg-white border border-gray-300
                          focus-within:bg-white focus-within:border-black transition"
              >

                <input
                  type={showPassword ? "text" : "password"}
                  value={form.passwordHash}
                  onChange={(e) =>
                    setForm({ ...form, passwordHash: e.target.value })
                  }
                  className="w-full outline-none bg-transparent text-black placeholder-gray-400"
                  placeholder="Mật khẩu *"
                />

                {showPassword ? (
                  <FaRegEye
                    className="cursor-pointer text-gray-600 hover:text-black"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="cursor-pointer text-gray-600 hover:text-black"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              <input
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-gray-300 
            outline-none text-black placeholder-gray-600
                           focus:bg-white focus:border-black transition"
                placeholder="Địa chỉ"
              />

              {/* BUTTON */}
              <button
                onClick={handleRegister}
                className="bg-black text-white py-3 mt-2 
              hover:bg-gray-800 transition duration-200 font-semibold"
              >
                ĐĂNG KÝ TÀI KHOẢN
              </button>
            </div>

            {/* DIVIDER */}
            <div className="text-center my-6 text-gray-500">Hoặc</div>

            {/* GOOGLE */}
            <button className="flex items-center justify-center gap-3 w-full bg-[#f2b8c6] text-black py-3 mb-4 relative hover:opacity-90 transition">
              <FcGoogle size={22} className="absolute left-4" />
              ĐĂNG NHẬP GOOGLE
            </button>

            {/* FACEBOOK */}
            <button className="flex items-center justify-center gap-3 w-full bg-[#2f6fdb] text-white py-3 relative hover:opacity-90 transition">
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
