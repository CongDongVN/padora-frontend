export default function LoginPage() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-[500px] text-center">
        <h1 className="text-3xl font-bold mb-2">TÀI KHOẢN CỦA TÔI</h1>

        <p className="text-gray-600 mb-8">
          Đăng nhập ngay để nhận các ưu đãi độc quyền từ Pandora
        </p>

        <div className="flex justify-center gap-10 mb-6 border-b">
          <button className="pb-3 border-b-2 border-black font-medium">
            ĐĂNG NHẬP
          </button>

          <button className="pb-3 text-gray-400 font-medium">
            ĐĂNG KÝ
          </button>
        </div>

        <div className="bg-white border p-8 text-left">
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email *"
              className="border p-3 outline-none"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Mật khẩu *"
                className="border p-3 w-full outline-none"
              />

              <span className="absolute right-3 top-3 cursor-pointer">
                👁
              </span>
            </div>

            <div className="text-right text-sm">
              <a href="#" className="underline">
                Quên mật khẩu?
              </a>
            </div>

            <button className="bg-black text-white py-3 font-medium">
              ĐĂNG NHẬP
            </button>

            <p className="text-center text-gray-500">Hoặc</p>

            <button className="bg-pink-200 py-3 flex items-center justify-center gap-2">
              <span>G</span>
              ĐĂNG NHẬP GOOGLE
            </button>

            <button className="bg-blue-600 text-white py-3 flex items-center justify-center gap-2">
              <span>f</span>
              ĐĂNG NHẬP FACEBOOK
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}