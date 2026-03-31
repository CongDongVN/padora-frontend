"use client";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Product, allProducts } from "@/data/products";
import { Star } from "lucide-react";

export default function ProductDetail() {
  // Lọc sản phẩm cùng loại (group là related)
  const relatedItems = allProducts.filter(item => item.group === "related");

  // Lọc sản phẩm gợi ý (group là suggested)
  const suggestedItems = allProducts.filter(item => item.group === "suggested");
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
          <div className="col-span-2 grid grid-cols-2 gap-y-10 gap-x-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="bg-gray-200 aspect-square flex items-center justify-center overflow-hidden
                max-w-[95%] mx-auto"
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
              <button className="w-full bg-black text-white py-3 cursor-pointer hover:bg-gray-900 transition">
                MUA NGAY
              </button>

              <button className="w-full border border-black text-black py-3 cursor-pointer hover:bg-white transition">
                THÊM VÀO GIỎ
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-600 space-y-2 font-bold">
              <p>💖 Lưu vào danh mục yêu thích</p>
              <p>🎁 Gói quà tặng <span className="underline cursor-pointer">Xem chi tiết</span></p>
            </div>

            <div className="mt-6 text-sm text-gray-800">
              <p className="font-semibold mb-2">Ưu đãi cổng thanh toán</p>
              <ul className="list-disc ml-5 space-y-1 font-bold">
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

              <p className="text-sm text-gray-800 leading-relaxed font-bold">
                Sản phẩm được thiết kế tinh xảo với phong cách hiện đại,
                mang lại vẻ đẹp thanh lịch và sang trọng. Đây là lựa chọn
                hoàn hảo cho những dịp đặc biệt hoặc làm quà tặng ý nghĩa.
              </p>

              <p className="text-sm text-gray-700 mt-4 font-midium font-bold">
                <span className="text-black font-bold">Mã sản phẩm:</span> 764352C01
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="px-16 pb-16 bg-white">
        <div className="relative flex items-center mb-12">
          <div className="flex-grow border-t border-gray-200"></div>
          <h2 className="flex-shrink mx-8 tracking-widest uppercase text-lg pt-5 font-semibold mb-5 text-black">
            SẢN PHẨM CÙNG LOẠI
          </h2>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="flex gap-6 overflow-x-auto">

          {/* ITEM */}
          {relatedItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[220px] cursor-pointer group"
            >
              {/* IMAGE */}
              <div className="bg-gray-200 aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <p className="text-sm mt-3 line-clamp-2 text-black font-bold">
                {item.name}
              </p>

              <p className="font-bold mt-1 text-black text-[14px]">
                {item.price.toLocaleString('vi-VN')}₫
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SUGGESTED SETS SECTION */}
      <div className="px-16 pb-6 bg-white">
        {/* Dòng kẻ và Tiêu đề */}
        <div className="relative flex items-center mb-12">
          <div className="flex-grow border-t border-gray-200"></div>
          <h2 className="flex-shrink mx-8 text-lg font-bold text-gray-800 tracking-widest uppercase">
            Gợi ý bộ trang sức dành cho bạn
          </h2>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div className="relative group">
          {/* Nút điều hướng (Arrows) */}
          <button className="absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-10 
            border border-gray-200 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition z-10">
            <span className="text-gray-400 text-xl">‹</span>
          </button>
          <button className="absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-10 
            border border-gray-200 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 transition z-10">
            <span className="text-gray-400 text-xl">›</span>
          </button>


          {/* Grid sản phẩm */}
          <div className="grid grid-cols-4 gap-6">
            {suggestedItems.map((item: Product) => (
              <div key={item.id} className="relative flex flex-col group cursor-pointer">

                {/* Heart Icon */}
                <button className="absolute right-10 top-3 z-10 text-gray-400 hover:text-red-500 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>

                {/* Badge Tag */}
                {item.tag && (
                  <div className={`absolute left-0 top-0 z-10 px-2 py-1 text-[10px] font-bold text-black shadow-sm 
              ${item.isExclusive ? 'bg-[#f4a2ad]' : 'bg-[#f8d7da] text-[#721c24]'}`}>
                    {item.tag}
                  </div>
                )}

                {/* Image */}
                <div className="bg-[#f3f3f3] aspect-square max-w-[90%] flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Info */}
                <div className="mt-4 flex flex-col font-bold ">
                  <h3 className="text-[13px] font-bold text-gray-800 uppercase line-clamp-2 min-h-[40px] leading-tight">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[14px] font-bold text-[#c8102e]">
                      {item.price.toLocaleString('vi-VN')}₫
                    </span>
                    {item.oldPrice && (
                      <>
                        <span className="text-[12px] text-gray-600 line-through">
                          {item.oldPrice.toLocaleString('vi-VN')}₫
                        </span>
                        <span className="bg-[#c8102e] text-black text-[10px] font-bold px-1 py-0.5">
                          {item.discount}%
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dòng kẻ dưới cùng */}
        <div className="border-b border-gray-200 mt-12"></div>
      </div>

      <section className="w-full bg-white pt-0 pb-8"> {/* pb-20 để tạo khoảng cách với Footer */}
        <div className="max-w-7xl mx-auto px-16 py-12 bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-tight">
            Đánh giá & Nhận xét
          </h2>

          {/* Main Review Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center border border-gray-100 p-8 rounded-2xl shadow-sm">

            {/* LEFT: Average Score */}
            <div className="md:col-span-3 text-center border-r border-gray-100 pr-10">
              <div className="flex flex-col items-center">
                <Star className="w-16 h-16 text-[#f4a2ad] fill-[#f4a2ad] mb-2" />
                <span className="text-6xl font-bold text-gray-900">0.0</span>
                <p className="text-gray-500 mt-2 text-sm font-medium">0 đánh giá</p>
              </div>
            </div>

            {/* MIDDLE: Progress Bars */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4 group">
                  <div className="flex gap-0.5 w-24">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < star ? "text-[#f4a2ad] fill-[#f4a2ad]" : "text-gray-200"
                          }`}
                      />
                    ))}
                  </div>
                  <div className="flex-grow bg-gray-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#f4a2ad] h-full w-0 transition-all duration-500"></div>
                  </div>
                  <span className="text-sm text-gray-400 w-4 font-mono">0</span>
                </div>
              ))}
            </div>

            {/* RIGHT: Quick Action */}
            <div className="md:col-span-4 flex flex-col items-center gap-6 pl-10">
              <p className="text-lg font-semibold text-gray-700">Đánh giá sản phẩm này</p>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    className="w-14 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-[#f4a2ad] hover:text-[#f4a2ad] transition-all group"
                  >
                    <Star className="w-7 h-7 group-hover:fill-[#f4a2ad]" />
                  </button>
                ))}
              </div>
              <button className="text-[#f4a2ad] text-sm font-medium hover:underline underline-offset-4">
                Hãy là người đầu tiên đánh giá sản phẩm này!
              </button>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}