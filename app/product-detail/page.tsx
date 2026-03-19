import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ProductDetail() {
  const images = [
    "/img/hoatai/test01.png",
    "/img/hoatai/test02.png",
    "/img/hoatai/test03.png",
    "/img/hoatai/test02.png",
  ];
  return (
    <>
      <Header />
      <div className="px-16 py-10 bg-white">
        <div className="grid grid-cols-3 gap-10">

          {/* LEFT - IMAGE */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="bg-gray-200 aspect-square flex items-center justify-center overflow-hidden"
              >
                <img
                  src={src}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>


          {/* RIGHT - INFO */}
          <div className="col-span-1">
            <h1 className="text-2xl font-semibold text-black leading-snug">
              Charm Pandora Mạ Vàng 14K Tulip Hồng Phai, Khởi Đầu Nụ Tầm Xuân
            </h1>

            <p className="text-xl mt-4 text-black font-medium">
              2,590,000₫
            </p>

            {/* BUTTON */}
            <div className="mt-6 space-y-4">
              <button className="w-full bg-black text-white py-3">
                MUA NGAY
              </button>

              <button className="w-full border border-black text-black py-3">
                THÊM VÀO GIỎ
              </button>
            </div>

            {/* EXTRA */}
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <p>💖 Lưu vào danh mục yêu thích</p>
              <p>🎁 Gói quà tặng <span className="underline cursor-pointer">Xem chi tiết</span></p>
            </div>

            {/* ƯU ĐÃI */}
            <div className="mt-6 text-sm text-gray-700">
              <p className="font-semibold mb-2">Ưu đãi cổng thanh toán</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Giảm 10% tặng bạn mới.</li>
                <li>Giảm đến 50K cho đơn từ 3 triệu và 100K cho đơn từ 10 triệu.</li>
                <li>Lưu ý: Không áp dụng cho BST mới</li>
              </ul>
            </div>

            {/* CHI TIẾT */}
            <div className="mt-8">
              <h3 className="font-semibold text-black mb-3">
                CHI TIẾT SẢN PHẨM
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Sản phẩm được thiết kế tinh xảo với phong cách hiện đại,
                mang lại vẻ đẹp thanh lịch và sang trọng. Đây là lựa chọn
                hoàn hảo cho những dịp đặc biệt hoặc làm quà tặng ý nghĩa.
              </p>

              <p className="text-sm text-gray-600 mt-4">
                <span className="font-medium text-black">Mã sản phẩm:</span> 764352C01
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="px-16 pb-16">
        <h2 className="text-center text-lg font-semibold mb-8">
          SẢN PHẨM CÙNG LOẠI
        </h2>

        <div className="flex gap-6 overflow-x-auto">

          {/* ITEM */}
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="min-w-[220px] cursor-pointer group"
            >
              {/* IMAGE */}
              <div className="bg-gray-200 aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src="/img/hoatai/test01.png"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* INFO */}
              <p className="text-sm mt-3 line-clamp-2">
                Charm Bạc Pandora Trái Tim Đính Đá
              </p>

              <p className="text-sm font-medium mt-1">
                2,190,000₫
              </p>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </>
  );
}