"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 w-96 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Admin Login
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 mb-4 text-black placeholder-gray-400 focus:border-black outline-none"
        />

        {/* PASSWORD */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu *"
            className="w-full border border-gray-300 p-3 pr-10 text-black placeholder-gray-400 focus:border-black outline-none"
          />

          {/* ICON MẮT */}
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </div>
        </div>

        {/* BUTTON */}
        <button className="w-full bg-purple-600 text-white py-3 hover:bg-purple-700 transition cursor-pointer">
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
