"use client"
import React from 'react';

const categories = [
    { id: 1, name: "SẢN PHẨM MỚI", image: "/img/Representative_Image/NewPDlogo.png" },
    { id: 2, name: "CHARMS", image: "/img/Representative_Image/CharmPDlogo.jpg" },
    { id: 3, name: "VÒNG TAY", image: "/img/Representative_Image/VongtayPDlogo.png" },
    { id: 4, name: "NHẪN", image: "/img/Representative_Image/NhanPDlogo.png" },
    { id: 5, name: "HOA TAI", image: "/img/Representative_Image/HoataiPDlogo.png" },
    { id: 6, name: "DÂY CHUYỀN", image: "/img/Representative_Image/DaychuyenPDlogo.jpg" },
];

export default function CategorySection() {
    return (
        <section className="w-full bg-white py-16 px-16">
            <div className="max-w-7xl mx-auto">
                {/* Nút Xem Ngay phía trên */}
                <div className="flex justify-center mb-16">
                    <button className="bg-black text-white px-12 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors cursor-pointer">
                        XEM NGAY
                    </button>
                </div>

                {/* Lưới danh mục */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            {/* Vùng chứa ảnh */}
                            <div className="relative w-full aspect-square mb-6 flex items-center justify-center overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Tên danh mục */}
                            <h3 className="text-[13px] font-bold text-gray-900 tracking-wider text-center uppercase">
                                {category.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}