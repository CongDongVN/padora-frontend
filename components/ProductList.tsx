export default function ProductList() {
  const products = [
    {
      name: "Charm Pandora...",
      price: "3,190,000đ",
      image: "/images/sp1.png",
    },
    {
      name: "Charm Pandora...",
      price: "1,990,000đ",
      image: "/images/sp2.png",
    },
    {
      name: "Vòng tay Pandora...",
      price: "3,590,000đ",
      image: "/images/sp3.png",
    },
    {
      name: "Charm Pandora...",
      price: "3,990,000đ",
      image: "/images/sp4.png",
    },
  ];

  return (
    <div>
      {/* Header */}
      {/* <div className="bg-[#ff93a0]">
        <div className="h-16 flex items-center justify-center mx-6">
          <h2 className="text-white font-semibold text-lg">KIẾN TẠO KÝ ỨC</h2>
        </div>
      </div> */}
      <div className="bg-white">
        <div className="bg-[#ff93a0] h-16 flex items-center justify-center mx-6 rounded-lg">
          <h2 className="text-white font-semibold text-lg">KIẾN TẠO KÝ ỨC</h2>
        </div>
      </div>

      {/* Product list */}
      <div className="grid grid-cols-4 gap-6 p-6 bg-gray-100">
        {products.map((item, index) => (
          <div key={index} className="bg-white p-4">
            <img
              src={item.image}
              alt=""
              className="h-52 mx-auto object-contain"
            />

            <h3 className="mt-3 text-sm font-semibold text-black">{item.name}</h3>

            <p className="font-bold text-black">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
