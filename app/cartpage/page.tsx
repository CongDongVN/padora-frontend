
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { cartItems } from "@/data/cartdata";
import React from 'react';

export default function CartPage() {
    return (
        <>
            <Header />
        <div className="bg-white text-black min-h-screen antialiased">
            <div className="max-w-[1200px] mx-auto px-4 py-10">
                <h1 className="text-[22px] font-bold uppercase mb-8 tracking-tight">
                    Giỏ hàng ({cartItems.length} sản phẩm)
                </h1>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* BÊN TRÁI: DANH SÁCH SẢN PHẨM */}
                    <div className="w-full lg:w-[68%] space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="border-b border-black pb-8 flex gap-6">
                                {/* Ảnh sản phẩm  */}
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#f4f4f4] flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                </div>

                                {/* Thông tin sản phẩm */}
                                <div className="flex-grow flex flex-col text-black justify-between">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="font-bold text-[15px] leading-snug mb-1">{item.name}</h3>
                                            <p className="text-[13px] text-black">Chất liệu: {item.material}</p>
                                            <p className="text-[13px] text-black">Kích thước: {item.size}</p>
                                            {item.note && <p className="text-[13px] text-black mt-2">• {item.note}</p>}
                                        </div>

                                        {/* Giá tiền */}
                                        <div className="text-right">
                                            {item.discountPrice ? (
                                                <>
                                                    <p className="font-bold text-[16px]">{item.discountPrice.toLocaleString()}₫</p>
                                                    <p className="text-[12px] text-black line-through">{item.price.toLocaleString()}₫</p>
                                                    <p className="text-red-600 text-[12px] font-bold mt-1">{item.status}</p>
                                                </>
                                            ) : (
                                                <p className="font-bold text-[16px]">{item.price.toLocaleString()}₫</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Thanh công cụ: Tăng giảm số lượng, yêu thích, xóa */}
                                    <div className="flex justify-between items-center text-black mt-4">
                                        <div className="flex items-center border border-black">
                                            <button className="px-3 py-1 border-r border-black hover:bg-gray-100 cursor-pointer">-</button>
                                            <span className="px-4 py-1 text-[14px]">{item.quantity}</span>
                                            <button className="px-3 py-1 border-l border-black hover:bg-gray-100 cursor-pointer">+</button>
                                        </div>

                                        <div className="flex gap-4 text-[13px] underline text-black">
                                            <button className="hover:text-black cursor-pointer">Chỉnh sửa</button>
                                            <button className="hover:text-black cursor-pointer">Yêu thích</button>
                                            <button className="hover:text-black cursor-pointer">Xóa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Sản phẩm được yêu thích */}
                        <div className="pt-10 text-black">
                            <h2 className="text-[20px] font-bold mb-6">Sản Phẩm Được Yêu Thích</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/*nơi map sản phẩm */}
                                <div className="group relative cursor-pointer">
                                    <div className="bg-[#f4f4f4] aspect-square mb-2 relative">
                                        <span className="absolute top-0 left-0 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1">MUA 2 TẶNG 1</span>
                                        <img src="/img/Sixa/suggest1.png" className="w-full h-full object-contain p-4" />
                                    </div>
                                    <h4 className="text-[13px] font-bold leading-tight">Charm Bạc Trái Tim Con Yêu Mẹ</h4>
                                    <p className="font-bold mt-1">890,000₫</p>
                                </div>
                                {/* ... Các item khác */}
                            </div>
                        </div>
                    </div>

                    {/* BÊN PHẢI: TỔNG ĐƠN HÀNG (STICKY SIDEBAR) */}
                    <div className="w-full lg:w-[32%] lg:sticky  lg:top-10 space-y-4">
                        <div className="bg-[#f9f9f9] p-6 rounded-sm shadow-sm">
                            <h2 className="text-[18px] font-bold uppercase mb-6 tracking-wide">Đơn hàng</h2>

                            {/* Mã giảm giá */}
                            <div className="mb-6">
                                <p className="text-[13px] font-bold mb-2">Mã giảm giá</p>
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Nhập mã giảm giá" className="flex-grow border border-gray-300 px-3 py-2 text-[14px] focus:outline-none" />
                                    <button className="bg-black text-white px-4 py-2 text-[12px] font-bold uppercase cursor-pointer">Áp dụng</button>
                                </div>
                            </div>

                            {/* Chi tiết giá */}
                            <div className="space-y-3 text-gray-500 text-[14px] border-b border-gray-300 pb-4 mb-4">
                                <div className="flex justify-between">
                                    <span>Tổng tiền hàng ({cartItems.length} sản phẩm)</span>
                                    <span>10,770,000₫</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tổng giảm giá</span>
                                    <span>1,695,000₫</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Giảm giá Voucher</span>
                                    <span>0₫</span>
                                </div>
                            </div>

                            {/* Xuất hóa đơn */}
                            <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-4 mb-4">
                                <input type="checkbox" id="vat" className="w-4 h-4 accent-black" />
                                <label htmlFor="vat" className="text-[12px] font-medium uppercase">Xuất hóa đơn cho đơn hàng</label>
                            </div>

                            {/* Tổng thanh toán */}
                            <div className="flex justify-between items-baseline mb-6">
                                <span className="text-[18px] font-bold uppercase">Tổng thanh toán:</span>
                                <span className="text-[20px] font-bold">5,485,000₫</span>
                            </div>

                            {/* Điều khoản */}
                            <div className="flex gap-3 mb-6">
                                <input type="checkbox" id="terms" className="w-6 h-6 mt-1 accent-black" />
                                <label htmlFor="terms" className="text-[11px] leading-snug">
                                    Khi bấm nút "Thanh toán" đồng nghĩa Khách hàng đã hiểu và đồng ý các <span className="underline">Điều khoản dịch vụ</span> của Pandora Việt Nam.
                                </label>
                            </div>

                            <button className="w-full bg-black text-white py-4 font-bold uppercase text-[14px] mb-4 hover:bg-gray-800 transition-all cursor-pointer">
                                Thanh toán
                            </button>

                            <p className="text-center text-[13px] italic text-black mb-2">hoặc</p>

                            <button className="w-full text-center text-[13px] text-black font-bold underline uppercase tracking-widest cursor-pointer">
                                Tiếp tục mua hàng
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}