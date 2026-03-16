export default function Header() {
  return (
    <header className="bg-white text-black">

      <div className="bg-pink-400 text-center text-white text-sm py-2">
        Quyền lợi dành cho khách hàng mớiiiii
        <span className="font-semibold ml-2">ĐĂNG KÝ NGAY</span>
      </div>

      <div className="flex items-center justify-between px-10 py-5">

        <h1 className="text-3xl font-bold tracking-widest">
          PANDORA
        </h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a>BỘ SƯU TẬP MỚI</a>
          <a>TRANG SỨC</a>
          <a>VÒNG TAY</a>
          <a>CHARMS</a>
          <a>DÂY CHUYỀN</a>
          <a>HOA TAI</a>
          <a>NHẪN</a>
          <a>QUÀ TẶNG</a>
        </nav>

        <div className="flex gap-4">
          <span>🔍</span>
          <span>❤</span>
          <span>👤</span>
          <span>👜</span>
        </div>

      </div>

    </header>
  )
}