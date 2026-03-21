"use client";
import { useState } from "react";

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const orders = [
    {
      id: 1,
      customer: "Nguyễn Văn A",
      total: "1.200.000đ",
      status: "Chờ xác nhận",
      items: [
        { name: "Charm bạc", quantity: 2, price: "500.000đ" },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800  mb-6">
        Orders
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <table className="w-full">
          <thead className="text-gray-400 text-sm border-b border-gray-200">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left"></th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-medium">#{o.id}</td>
                <td className="p-3">{o.customer}</td>
                <td className="p-3">{o.total}</td>
                <td className="p-3">{o.status}</td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedOrder(o)}
                    className="bg-linear-to-r from-purple-500 to-purple-400 text-white px-3 py-1 rounded-lg"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}