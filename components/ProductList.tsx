// "use client";
import Link from "next/link"; // Dùng đường dẫn rút gọn

export default function ProductList() {
  const products = [
    {
      id: "sp1", // Thêm ID vào đây
      name: "Charm Pandora...",
      price: "3,190,000đ",
      image: "/images/sp1.png",
    },
    {
      id: "sp2",
      name: "Charm Pandora...",
      price: "1,990,000đ",
      image: "/images/sp2.png",
    },
   
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-white">
        <div className="bg-[#ff93a0] h-16 flex items-center justify-center mx-6 rounded-lg">
          <h2 className="text-white font-semibold text-lg">KIẾN TẠO KÝ ỨC</h2>
        </div>
      </div>

      {/* Product list */}
      <div className="grid grid-cols-4 gap-6 p-6 bg-gray-100">
        {products.map((item, index) => (
          <Link 
            key={index} 
            href={`/product-detail/${item.id}`} 
            className="bg-white p-4 block hover:shadow-md transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-52 mx-auto object-contain"
            />
            <h3 className="mt-3 text-sm font-semibold text-black line-clamp-2">
              {item.name}
            </h3>
            <p className="font-bold text-black">{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}