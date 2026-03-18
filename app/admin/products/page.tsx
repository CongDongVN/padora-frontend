export default function Products() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Products
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <table className="w-full">
          <thead className="text-gray-400 border-gray-200 text-sm border-b">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left"></th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-3">Charm bạc</td>
              <td className="p-3">500.000đ</td>
              <td className="p-3">
                <button className="bg-blue-400 text-white px-3 py-1 rounded-lg mr-2">
                  Edit
                </button>
                <button className="bg-red-400 text-white px-3 py-1 rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}