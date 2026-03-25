"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://localhost:7221/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Đăng nhập thành công");

        // Lưu user vào localStorage
        localStorage.setItem("user", JSON.stringify(data));

        console.log("User:", data);

        // Ví dụ: chuyển trang sau khi login
        // window.location.href = "/";
      } else {
        setMessage(data);
      }
    } catch (error) {
      console.error(error);
      setMessage("Không thể kết nối tới server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-[500px] text-center">
          <h1 className="text-3xl font-bold text-black mb-2">
            TÀI KHOẢN CỦA TÔI
          </h1>

          <p className="text-gray-600 mb-8">
            Đăng nhập ngay để nhận các ưu đãi độc quyền từ Pandora
          </p>

          <div className="flex mb-6 border-b">
            <div className="w-1/2 pr-4">
              <button className="w-full text-center pb-3 border-b-2 border-black font-medium text-black">
                ĐĂNG NHẬP
              </button>
            </div>

            <div className="w-1/2 pl-4">
              <Link href="/register">
              <button className="w-full text-center pb-3 border-b-2 border-gray-300 text-gray-400 font-medium">
                ĐĂNG KÝ
              </button>
            </Link>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 p-8 text-left rounded-2xl shadow">
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-gray-300 p-3 outline-none text-black placeholder:text-gray-500 rounded-xl"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-2 border-gray-300 p-3 w-full outline-none text-black placeholder:text-gray-500 rounded-xl"
                />

                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={18} />
                  ) : (
                    <FaRegEye size={18} />
                  )}
                </span>
              </div>

              <div className="text-right text-sm text-gray-700">
                <a href="#" className="underline">
                  Quên mật khẩu?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white py-3 font-medium rounded-xl hover:opacity-90 transition"
              >
                {loading ? "Đang đăng nhập..." : "ĐĂNG NHẬP"}
              </button>

              {message && (
                <p className="text-center text-sm text-green-600 font-medium">
                  {message}
                </p>
              )}

              <p className="text-center text-gray-700">Hoặc</p>

              <button
                type="button"
                className="bg-pink-200 text-black py-3 flex items-center justify-center relative rounded-xl hover:opacity-90"
              >
                <FcGoogle size={22} className="absolute left-4" />
                ĐĂNG NHẬP GOOGLE
              </button>

              <button
                type="button"
                className="bg-blue-600 text-white py-3 flex items-center justify-center relative rounded-xl hover:opacity-90"
              >
                <FaFacebook
                  size={20}
                  className="absolute left-4 text-white"
                />
                ĐĂNG NHẬP FACEBOOK
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
