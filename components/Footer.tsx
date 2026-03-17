import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-16 pt-16 pb-8">
      <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-black tracking-widest">
            PANDORA
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Nhận ưu đãi 10% cho khách hàng mới
          </p>
        </div>

        <div className="flex items-center">
          <button className="bg-black text-white px-8 py-3 text-sm font-medium">
            ĐĂNG KÝ NGAY
          </button>
        </div>
        </div>
      </div>

      <div className="pb-8 border-b border-gray-300 my-6"></div>

      <div className="grid-cols-5 gap-10 flex justify-between px-16 pt-4 pb-8 border-b border-gray-300">

        <div>
          <h4 className="font-semibold mb-4  text-black ">Khám phá</h4>
          <ul className="space-y-2 text-sm  text-gray-500">
            <li>Charms</li>
            <li>Vòng tay</li>
            <li>Dây chuyền</li>
            <li>Hoa tai</li>
            <li>Nhẫn</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4  text-black ">
            Chăm sóc khách hàng
          </h4>

          <ul className="space-y-2 text-sm  text-gray-500">
            <li>Câu hỏi thường gặp</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách giao nhận</li>
            <li>Chính sách đổi hàng</li>
            <li>Chính sách thành viên</li>
            <li>Hướng dẫn làm sạch trang sức</li>
            <li>Hướng dẫn tạo tài khoản login</li>
            <li>Hướng dẫn bảo dưỡng trang sức</li>
            <li>Hướng dẫn đo size trang sức</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4  text-black ">
            Dịch vụ giao hàng
          </h4>

          <ul className="space-y-2 text-sm  text-gray-500">
            <li>Giao hàng tiết kiệm</li>
            <li>Ahamove</li>
            <li>Kiểm tra đơn hàng</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4  text-black ">
            Hệ thống cửa hàng
          </h4>

          <ul className="space-y-2 text-sm  text-gray-500">
            <li>Cửa hàng toàn quốc</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4  text-black ">
            Về chúng tôi
          </h4>

          <ul className="space-y-2 text-sm  text-gray-500">
            <li>Về Pandora</li>
            <li>Tuyển dụng</li>
            <li>Blogs</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 flex items-center justify-between px-16">

      <p className="text-left text-sm text-gray-700">
        © Pandora Jewelry, LLC. All rights reserved.
      </p>

        <div className="flex items-center gap-4 text-black text-lg">
          <FaFacebookF/>
          <FaInstagram/>
        </div>
      </div>
    </footer>
  )
}