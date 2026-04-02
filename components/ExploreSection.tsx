const exploreItems = [
    { id: 1, title: "Lấp Lánh Đầu Năm", linkText: "MUA NGAY", image: "/img/ExploreIMG/explore1.jpg" },
    { id: 2, title: "Tháng Của Đoàn Viên", linkText: "XEM NGAY", image: "/img/ExploreIMG/explore2.jpg" },
    { id: 3, title: "Ký Ức Rực Rỡ", linkText: "XEM NGAY", image: "/img/ExploreIMG/explore3.jpg" },
    { id: 4, title: "Khi Tình Yêu Lên Tiếng", linkText: "XEM NGAY", image: "/img/ExploreIMG/explore4.jpg" },
];

import React from 'react';

export default function ExploreSection() {
    return (
        <section className="w-full bg-white py-16 px-10 md:px-20">
            <div className="max-w-[1400px] mx-auto">

                {/* PHẦN TIÊU ĐỀ LOGO */}
                <div className="mb-12">
                    <p className="text-[14px] font-bold tracking-[0.2em] text-gray-800 uppercase mb-2">
                        KHÁM PHÁ
                    </p>
                    <h2 className="text-[60px] md:text-[100px] font-bold text-[#333232] leading-none tracking-tighter font-playfair flex items-center gap-4">
                        PANDORA
                        <span className="text-[40px] md:text-[60px] mb-8"></span> {/* Giả lập vương miện trên chữ O nếu cần */}
                    </h2>
                </div>

                {/* LƯỚI 4 CỘT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {exploreItems.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            {/* Ảnh */}
                            <div className="relative aspect-[3/4] overflow-hidden mb-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Nội dung phía dưới ảnh */}
                            <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>

                            <div className="inline-block">
                                <p className="text-[12px] font-bold tracking-widest text-gray-900 border-b-2 border-black pb-1 transition-colors group-hover:text-gray-600 group-hover:border-gray-600">
                                    {item.linkText}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}