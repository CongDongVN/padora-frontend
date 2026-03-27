const stories = [
    // CỘT 1: Ảnh 1 dài (Hàng 1+2), Ảnh 4 ngắn (Hàng 3)
    { id: 1, title: "KHỞI ĐẦU RỰC RỠ", image: "/img/Sixa/SI1.jpg", className: "md:col-start-1 md:row-start-1 md:row-span-2" },
    { id: 4, title: "MUA CHARM - CHẠM LỘC", image: "/img/Sixa/SI4.jpg", className: "md:col-start-1 md:row-start-3 md:row-span-1" },

    // CỘT 2: Ảnh 2 ngắn (Hàng 1), Ảnh 5 dài (Hàng 2+3)
    { id: 2, title: "MỞ KHOÁ YÊU THƯƠNG", image: "/img/Sixa/SI2.jpg", className: "md:col-start-2 md:row-start-1 md:row-span-1" },
    { id: 5, title: "LƯU GIỮ KHOẢNH KHẮC", image: "/img/Sixa/SI5.jpg", className: "md:col-start-2 md:row-start-2 md:row-span-2" },

    // CỘT 3: Ảnh 3 dài (Hàng 1+2), Ảnh 6 ngắn (Hàng 3)
    { id: 3, title: "TRÂN TRỌNG CHÍNH MÌNH", image: "/img/Sixa/SI3.jpg", className: "md:col-start-3 md:row-start-1 md:row-span-2" },
    { id: 6, title: "GẮN KẾT NGÀY XUÂN", image: "/img/Sixa/SI6.jpg", className: "md:col-start-3 md:row-start-3 md:row-span-1" },
];

export default function StoryGrid() {
    return (
        <section className="w-full bg-white py-10 px-10 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

                {/* TIÊU ĐỀ */}
                <div className="md:w-1/4 pt-6 ">
                    <h1 className="text-5xl md:text-[55px] font-bold text-gray-900 leading-[1.4] 
                    tracking-tight whitespace-pre-line">
                        Dẫn Lối {"\n"} Yêu {"\n"} Thương...
                    </h1>
                </div>

                {/* LƯỚI  */}
                <div className="md:w-3/4 grid grid-cols-3 gap-4 grid-rows-[250px_100px_250px]">
                    {stories.map((s) => (
                        <div key={s.id} className={`relative group overflow-hidden ${s.className}`}>
                            <img
                                src={s.image}
                                className="w-full h-full object-cover transition-transform duration-500 
                                group-hover:scale-105"
                                alt={s.title}
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] 
                            bg-white/95 py-3 px-2 text-center shadow-md">
                                <span className="text-[12px] font-bold tracking-[0.15em] 
                                text-gray-900 uppercase border-b border-black pb-1 ">
                                    {s.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}