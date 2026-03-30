"use client";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

//   const handleAdminLogin = async (e: React.FormEvent) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post("https://localhost:7221/api/Auth/login", { email, password });
    
//     // Dựa vào Response bạn vừa gửi, tên biến là viết thường (camelCase)
//     const { role, userId } = response.data; 

//     console.log("Role nhận được:", role);

//     if (role === "Admin") {
//       document.cookie = `userRole=${role}; path=/; max-age=86400; SameSite=Lax`;
//       document.cookie = `isLoggedIn=true; path=/; max-age=86400; SameSite=Lax`;
      
//       window.location.href = "/admin"; 
//     } else {
//       setError("Bạn không có quyền Admin.");
//     }
//   } catch (err) {
//     setError("Lỗi kết nối hoặc tài khoản không đúng.");
//   }
// };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleAdminLogin} className="bg-white p-8 w-96 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Admin Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center bg-red-50 p-2 rounded">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email Quản trị"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 mb-4 text-black outline-none focus:border-purple-500"
        />

        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu *"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 pr-10 text-black outline-none focus:border-purple-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>

        <button
          disabled={loading}
          type="submit"
          className={`w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Đang kiểm tra..." : "Đăng nhập hệ thống"}
        </button>
      </form>
    </div>
  );
}