"use client";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation"; 

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setError("");
    setLoading(true);

    try {
      
      const response = await fetch("https://localhost:7221/api/Auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Đăng nhập thành công!");
      
        localStorage.setItem("token", data.token);
       
        router.push("/");
      } else {
        setError(data.message || "Email hoặc mật khẩu không đúng");
      }
    } catch (err) {
      setError("Có lỗi kết nối, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex items-center justify-center py-20">
        <div className="w-[520px] text-center">
          <h1 className="text-3xl text-black font-bold mb-2">TÀI KHOẢN CỦA TÔI</h1>
          <p className="text-gray-700 mb-10">Đăng nhập ngay để nhận các ưu đãi độc quyền</p>

          {/* tab login/register */}
          <div className="flex mb-6 border-b text-lg font-semibold">
<<<<<<< HEAD
            <div className="w-1/2 pr-4">
              <button className="w-full text-center cursor-pointer pb-3 
            border-b-2 border-black text-black hover:opacity-70 transition">
                ĐĂNG NHẬP
              </button>
            </div>
            
            <div className="w-1/2 pl-4">
              <Link href="/register">
                <button className="w-full text-center pb-3 
                border-b-2 border-gray-300 text-gray-400 cursor-pointer hover:opacity-70 transition">
                  ĐĂNG KÝ
                </button>
              </Link>
=======
            <div className="w-1/2 pr-4 border-b-2 border-black text-black pb-3">ĐĂNG NHẬP</div>
            <div className="w-1/2 pl-4 text-gray-400 pb-3">
              <Link href="/register">ĐĂNG KÝ</Link>
>>>>>>> 9eeb57755b73dd4817f646c31ed3eee0c28450e0
            </div>
          </div>

          <form onSubmit={handleLogin} className="border border-gray-300 bg-white p-10">
            {/* Hiển thị thông báo lỗi nếu có */}
            {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

            <div className="flex flex-col gap-5">
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 outline-none text-black focus:border-black transition"
                placeholder="Email"
              />

              <div className="flex items-center px-4 py-3 bg-white border border-gray-300 focus-within:border-black transition">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-black"
                  placeholder="Mật khẩu *"
                />
                <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-black">
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="bg-black text-white py-3 mt-2 hover:bg-gray-800 transition disabled:bg-gray-400"
              >
                {loading ? "ĐANG XỬ LÝ..." : "ĐĂNG NHẬP"}
              </button>
            </div>

            <div className="text-center my-6 text-gray-700">Hoặc</div>

            <button type="button" className="flex items-center justify-center gap-3 w-full bg-[#f2b8c6] text-black py-3 mb-4 relative">
              <FcGoogle size={22} className="absolute left-4" />
              ĐĂNG NHẬP GOOGLE
            </button>

            <button type="button" className="flex items-center justify-center gap-3 w-full bg-[#2f6fdb] text-white py-3 relative">
              <FaFacebook size={20} className="absolute left-4" />
              ĐĂNG NHẬP FACEBOOK
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}