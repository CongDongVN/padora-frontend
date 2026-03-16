export default function Footer() {
  return (
    <footer className="bg-gray-100 px-16 py-16">

      <div className="grid grid-cols-4 gap-10">

        <div>
          <h4 className="font-semibold mb-4">Khám phá</h4>
          <ul className="space-y-2 text-sm">
            <li>Charms</li>
            <li>Vòng tay</li>
            <li>Dây chuyền</li>
            <li>Hoa tai</li>
            <li>Nhẫn</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            Chăm sóc khách hàng
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Câu hỏi thường gặp</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách thanh toán</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            Dịch vụ giao hàng
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Giao hàng tiết kiệm</li>
            <li>Ahamove</li>
            <li>Kiểm tra đơn hàng</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            Về chúng tôi
          </h4>

          <ul className="space-y-2 text-sm">
            <li>Về Pandora</li>
            <li>Tuyển dụng</li>
            <li>Blogs</li>
          </ul>
        </div>

      </div>

      <p className="text-center text-sm mt-10">
        © Pandora Jewelry, LLC. All rights reserved.
      </p>

    </footer>
  )
}