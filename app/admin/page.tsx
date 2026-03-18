"use client";

export default function Dashboard() {
  const stats = [
    { title: "Tổng doanh thu", value: "120.000.000đ" },
    { title: "Tổng đơn hàng", value: "320" },
    { title: "Khách hàng", value: "150" },
    { title: "Sản phẩm bán", value: "890" },
  ];

  const topProducts = [
    { name: "Charm bạc", sold: 120 },
    { name: "Vòng tay vàng", sold: 95 },
    { name: "Nhẫn kim cương", sold: 80 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Dashboard
      </h1>

      {/* CARD */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
          >
            <p className="text-gray-400 text-sm">{item.title}</p>
            <h2 className="text-2xl font-semibold mt-2 text-gray-800">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Sản phẩm bán chạy
        </h2>

        <table className="w-full">
          <thead className="border-b border-gray-200 text-gray-400 text-sm">
            <tr>
              <th className="text-left py-2">Tên sản phẩm</th>
              <th className="text-left py-2">Đã bán</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 ">
            {topProducts.map((p, index) => (
              <tr key={index} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
                <td className="py-3">{p.name}</td>
                <td>{p.sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}