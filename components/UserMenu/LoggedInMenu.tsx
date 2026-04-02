import { FiUser, FiClock, FiMapPin, FiStar, FiGift, FiLogOut } from "react-icons/fi";

export default function LoggedInMenu({ setUser, setOpenUser }: any) {
  const menuItems = [
    { icon: <FiUser />, label: "THÔNG TIN TÀI KHOẢN" },
    { icon: <FiClock />, label: "LỊCH SỬ MUA HÀNG" },
    { icon: <FiMapPin />, label: "ĐỊA CHỈ GIAO HÀNG" },
    { icon: <FiStar />, label: "HẠNG THÀNH VIÊN" },
    { icon: <FiGift />, label: "CHƯƠNG TRÌNH KHUYẾN MÃI" },
  ];

  return (
    <div className="absolute top-9 mt-6 right-0 w-65 bg-white shadow-xl rounded-sm z-50 animate-slideDown">
      <div className="py-2 text-[13px]">
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 px-4 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer leading-none">
              <span className="text-[17px] shrink-0 text-gray-800">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}

          <div
            onClick={() => {
              setUser(null);
              setOpenUser(false);
            }}
            className="flex items-center gap-3 px-4 py-2.5 font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer leading-none"
          >
            <FiLogOut className="text-[17px] shrink-0 text-gray-800" />
            <span>ĐĂNG XUẤT</span>
          </div>
        </div>
      </div>
    </div>
  );
}