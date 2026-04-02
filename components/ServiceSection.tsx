const services = [
    {
        id: 1,
        title: "Nhập hội PANDORA",
        desc: "Đăng ký thành viên tận hưởng ưu đãi độc quyền.",
        icon: "/img/ServiceIMG/service1.svg",
    },
    {
        id: 2,
        title: "Miễn phí vận chuyển",
        desc: "Miễn phí giao hàng trên toàn quốc với mọi giá trị đơn hàng",
        icon: "/img/ServiceIMG/service2.svg",
    },
    {
        id: 3,
        title: "Giá tốt hơn",
        desc: "Đa dạng ưu đãi độc quyền chỉ áp dụng khi mua tại website.",
        icon: "/img/ServiceIMG/service3.svg",
    },
    {
        id: 4,
        title: "Trả góp",
        desc: "Dễ dàng trả góp bằng thẻ/ví",
        icon: "/img/ServiceIMG/service4.svg",
    },
    {
        id: 5,
        title: "Thiệp viết tay",
        desc: "Hãy để chúng tôi giúp bạn tạo ra chiếc thiệp tay ý nghĩa!",
        icon: "/img/ServiceIMG/service5.svg",
    },
];

import React from 'react';

export default function ServiceSection() {
    return (
        // Section ngoài cùng màu trắng 
        <section className="w-full bg-white py-10 px-6 md:px-20">

            {/* BOX ĐEN:căn lề và bo góc */}
            <div className="max-w-[1400px] mx-auto bg-[#1a1a1a] rounded-sm py-16 px-10 text-white shadow-xl">

                {/* Lưới 5 cột */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col items-center text-center group">

                            {/* Logo/Ảnh icon */}
                            <div className="w-14 h-14 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="max-w-full max-h-full object-contain brightness-0 invert"
                                />
                            </div>

                            {/* Tiêu đề phía trên */}
                            <h4 className="text-[12px] font-medium tracking-widest mb-3 text-gray-400 uppercase">
                                {service.title}
                            </h4>

                            {/* Mô tả phía dưới */}
                            <p className="text-[16px] font-bold leading-snug max-w-[220px] antialiased">
                                {service.desc}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
