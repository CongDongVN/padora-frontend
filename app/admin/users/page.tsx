import { getConnection } from '@/lib/db'; 

// 1. Cập nhật Interface chỉ với những gì thực tế có trong DB
interface User {
  Id: number;       // Cột định danh (Primary Key)
  FullName: string; // Tên cột trong SQL Server của bạn
  Email: string;    // Tên cột Email
}

async function getUsers(): Promise<User[]> {
  try {
    const pool = await getConnection();
    // 2. Chỉnh sửa câu truy vấn SQL cho đúng với các cột bạn có
    const result = await pool.request().query('SELECT Id, FullName, Email FROM Users');
    return result.recordset;
  } catch (error) {
    console.error("Lỗi truy vấn SQL Server:", error);
    return [];
  }
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Quản lý người dùng
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <table className="w-full">
          <thead className="text-gray-400 border-gray-200 text-sm border-b">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Họ tên</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-right">Thao tác</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.Id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-mono text-sm text-gray-500">{user.Id}</td>
                  <td className="p-3 font-medium">{user.FullName}</td>
                  <td className="p-3">{user.Email}</td>
                  <td className="p-3 text-right">
                    <button className="bg-blue-50 text-blue-600 hover:bg-blue-400 hover:text-white px-3 py-1.5 rounded-lg mr-2 transition-all">
                      Sửa
                    </button>
                    <button className="bg-red-50 text-red-600 hover:bg-red-400 hover:text-white px-3 py-1.5 rounded-lg transition-all">
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-400">
                  Chưa có dữ liệu hiển thị.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}