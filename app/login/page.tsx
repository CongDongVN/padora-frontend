import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"

export default function LoginPage() {
  return (
    <>
    <Header />
    <main className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[500px] text-center">
        <h1 className="text-3xl font-bold text-black mb-2">TÀI KHOẢN CỦA TÔI</h1>

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
                <button className="w-full text-center pb-3 border-b-2 border-gray-300 text-gray-400 font-medium">
                 ĐĂNG KÝ
                </button>
            </div>
        </div>

        <div className="bg-white border-2 border-gray-300  p-8 text-left">
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email *"
              className="border-2 border-gray-300  p-3 outline-none text-black placeholder:text-gray-500"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Mật khẩu *"
                className="border-2 border-gray-300  p-3 w-full outline-none text-black placeholder:text-gray-500"
              />

              <span className="absolute right-3 top-3 cursor-pointer text-gray-600">
                👁
              </span>
            </div>

            <div className="text-right text-sm  text-gray-700">
              <a href="#" className="underline">
                Quên mật khẩu?
              </a>
            </div>

            <button className="bg-black text-white py-3 font-medium">
              ĐĂNG NHẬP
            </button>

            <p className="text-center text-gray-700">Hoặc</p>

            <button className="bg-pink-200  text-black py-3 flex items-center justify-center relative">
               <FcGoogle size={22} className="absolute left-4"/>
              ĐĂNG NHẬP GOOGLE
            </button>

            <button className="bg-blue-600 text-white py-3 flex items-center justify-center relative">
              <FaFacebook size={20} className="absolute left-4 text-white" />
              ĐĂNG NHẬP FACEBOOK
            </button>
          </form>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}