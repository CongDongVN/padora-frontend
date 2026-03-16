const products = [
  {
    name: "Charm Pandora Club",
    price: "3,190,000đ",
    img: "/p1.png"
  },
  {
    name: "Charm Pandora Trái Tim",
    price: "1,990,000đ",
    img: "/p2.png"
  },
  {
    name: "Vòng Tay Timeless",
    price: "3,590,000đ",
    img: "/p3.png"
  },
  {
    name: "Charm Khóa Trái Tim",
    price: "3,990,000đ",
    img: "/p4.png"
  }
]

export default function ProductList() {
  return (
    <section className="px-16 py-20">

      <h2 className="text-center text-xl font-semibold mb-10">
        KIẾN TẠO KÝ ỨC
      </h2>

      <div className="grid grid-cols-4 gap-8">

        {products.map((p, index) => (
          <div key={index} className="group">

            <div className="bg-gray-100 p-10 flex justify-center">
              <img
                src={p.img}
                className="h-40 object-contain"
              />
            </div>

            <h3 className="mt-4 text-sm">
              {p.name}
            </h3>

            <p className="font-semibold mt-1">
              {p.price}
            </p>

          </div>
        ))}

      </div>

      <div className="text-center mt-10">
        <button className="bg-black text-white px-10 py-3">
          XEM NGAY
        </button>
      </div>

    </section>
  )
}