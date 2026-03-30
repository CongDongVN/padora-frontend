"use client";
import { ChevronDown } from "lucide-react";
import MegaMenu from "./megamenu";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import {
  FiSearch, FiHeart, FiMapPin, FiUser, FiShoppingBag,
  FiStar, FiGift, FiLogOut, FiClock,
} from "react-icons/fi";

// 1. Chuyển hàm xử lý dữ liệu ra ngoài để tránh khởi tạo lại
const buildTree = (list: any[]) => {
  const map: any = {}, tree: any[] = [];
  list.forEach(item => {
    map[item.id] = { ...item, children: [] };
  });
  list.forEach(item => {
    if (item.parentId !== null && map[item.parentId]) {
      map[item.parentId].children.push(map[item.id]);
    } else {
      tree.push(map[item.id]);
    }
  });
  return tree;
};

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]); // State lưu danh mục từ API
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [user, setUser] = useState<any>(null);
  const [openAuth, setOpenAuth] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  // 2. Fetch dữ liệu danh mục khi component mount
  useEffect(() => {
    fetch('https://localhost:7221/api/Categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Lỗi fetch categories:", err));
  }, []);

  // 3. Sử dụng useMemo để tính toán cây danh mục (chỉ tính lại khi categories thay đổi)
  const menuTree = useMemo(() => buildTree(categories), [categories]);

  const handleEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(null), 150);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setOpenAuth(false);
        setOpenUser(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="relative border-b bg-white">
      {/* Top Banner */}
      <div className="bg-[#ff93a0] text-center text-[13px] py-2 relative text-black font-medium">
        Khắc thông điệp - Chạm cảm xúc
        <span className="font-bold ml-2 cursor-pointer underline">KHÁM PHÁ NGAY</span>
        <span className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer">✕</span>
      </div>

      {/* Main Header */}
      <div className="w-full px-16 flex items-center justify-between py-5">
        <div className="text-3xl font-bold tracking-widest text-black">PANDORA</div>

        <div className="flex items-center gap-8">
          {/* Search Bar */}
          <div className="flex items-center w-60 px-4 py-2 bg-white border border-gray-300 focus-within:border-black transition">
            <input
              type="text"
              placeholder="Bạn cần tìm gì?"
              className="flex-1 outline-none bg-transparent text-[14px] font-semibold text-black placeholder-gray-500"
            />
            <FiSearch className="text-black text-lg" />
          </div>

          {/* Icons Bar */}
          <div className="flex items-center gap-6 text-xl text-black">
            <IconWrapper Icon={FiHeart} />
            <IconWrapper Icon={FiMapPin} />
            
            {/* User Dropdown Logic */}
            <div ref={userRef} className="relative group flex flex-col items-center cursor-pointer">
              <FiUser 
                onClick={() => user ? setOpenUser(!openUser) : setOpenAuth(!openAuth)}
                className="transition group-hover:text-[#ff93a0]" 
              />
              <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>

              {/* Popup Login/Register */}
              {!user && openAuth && <AuthPopup setOpenAuth={setOpenAuth} />}
              {/* Popup User Info */}
              {user && openUser && <UserMenu setUser={setUser} setOpenUser={setOpenUser} />}
            </div>

            <IconWrapper Icon={FiShoppingBag} />
          </div>
        </div>
      </div>

      <div className="border-b-4 border-[#ff93a0]"></div>

      {/* ===== MENU NAVIGATION ===== */}
      {/* ===== MENU NAVIGATION ===== */}
<nav className="relative w-full px-16 flex gap-10 py-4 text-[13px] font-semibold text-black z-40">
  {menuTree.map((root: any) => (
    <div
      key={root.id}
      className="relative group flex items-center gap-1 cursor-pointer hover:text-[#ff93a0]"
      onMouseEnter={() => handleEnter(root.slug)}
      onMouseLeave={handleLeave}
    >
      <span className="pb-2 border-b-2 border-transparent group-hover:border-[#ff93a0] transition-all">
        {root.name.toUpperCase()}
      </span>
      {root.children.length > 0 && <ChevronDown size={14} />}

      {/* Mega Menu Wrapper */}
      {open === root.slug && root.children.length  > 0 && ( <div className="fixed top-[100px] left-0 w-full z-[999]">
<MegaMenu>
      <div className="w-full px-16 flex items-start justify-start gap-x-20 py-8"> 
        {/* Thêm py-8 ở đây để tạo khoảng trống bên trong menu thay vì bên ngoài */}
        {root.children.map((sub: any) => (
          <div key={sub.id} className="flex flex-col w-[250px] shrink-0">
            <h3 className="font-bold text-[13px] mb-6 text-black tracking-widest uppercase">
              {sub.name}
            </h3>
            <ul className="flex flex-col gap-y-3.5">
              {sub.children.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={`/category/${item.slug}`}
                    className="text-gray-500 hover:text-[#ff93a0] text-[14px] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MegaMenu>
  </div>
      )}
    </div>
  ))}

  <span className="cursor-pointer text-[#ff93a0] hover:underline whitespace-nowrap">
    CÂU CHUYỆN CỦA BẠN
  </span>
</nav>
      <div className="w-full h-px bg-gray-300"></div>
    </header>
  );
}

// --- Sub-components để code gọn hơn ---

const IconWrapper = ({ Icon }: { Icon: any }) => (
  <div className="group flex flex-col items-center cursor-pointer">
    <Icon className="transition group-hover:text-[#ff93a0]" />
    <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
  </div>
);

const AuthPopup = ({ setOpenAuth }: any) => (
  <div className="absolute top-12 right-0 w-72 bg-white shadow-2xl rounded-md border overflow-hidden z-[60] animate-slideDown">
    <div className="p-5 flex flex-col gap-3">
      <Link href="/login" onClick={() => setOpenAuth(false)} className="bg-black text-white py-3 text-center text-xs font-bold hover:bg-gray-800 transition">ĐĂNG NHẬP</Link>
      <Link href="/register" onClick={() => setOpenAuth(false)} className="bg-white border border-black text-black py-3 text-center text-xs font-bold hover:bg-gray-100 transition">ĐĂNG KÝ</Link>
      <img src="/img/hinh_log_in.png" className="w-full h-40 object-cover mt-2" alt="Promo" />
      <p className="text-center text-[11px] text-gray-500 italic mt-2">Đăng ký thành viên PANDORA ngay để nhận ưu đãi online độc quyền.</p>
    </div>
  </div>
);

const UserMenu = ({ setUser, setOpenUser }: any) => (
  <div className="absolute top-12 right-0 w-60 bg-white shadow-2xl border z-[60] py-2 animate-slideDown">
    {[
      { icon: FiUser, label: "THÔNG TIN TÀI KHOẢN" },
      { icon: FiClock, label: "LỊCH SỬ MUA HÀNG" },
      { icon: FiMapPin, label: "ĐỊA CHỈ GIAO HÀNG" },
      { icon: FiStar, label: "HẠNG THÀNH VIÊN" },
      { icon: FiGift, label: "CHƯƠNG TRÌNH KHUYẾN MÃI" },
    ].map((item, idx) => (
      <div key={idx} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-[12px] font-bold">
        <item.icon className="text-lg" /> <span>{item.label}</span>
      </div>
    ))}
    <div 
      onClick={() => { setUser(null); setOpenUser(false); }}
      className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 border-t mt-1 text-[12px] font-bold"
    >
      <FiLogOut className="text-lg" /> <span>ĐĂNG XUẤT</span>
    </div>
  </div>
);