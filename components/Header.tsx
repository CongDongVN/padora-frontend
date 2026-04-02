"use client";
import { ChevronDown } from "lucide-react";
import MegaMenu from "./megamenu";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import UserMenu from "@/components/UserMenu";
import {
  FiSearch,
  FiHeart,
  FiMapPin,
  FiUser,
  FiShoppingBag,
  FiStar,
  FiGift,
  FiLogOut,
  FiClock,
} from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(null);
    }, 150);
  };

  const [openAuth, setOpenAuth] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  // GIỮ user state để kiểm tra login/logout
  const [user, setUser] = useState<any>(null);

  const userRef = useRef<HTMLDivElement>(null);

  // click ngoài để đóng
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
    <header className="fixed top-0 z-50 border-b bg-white w-full">
      {/* top banner */}
      <div className="bg-[#ff93a0] text-center text-[13px] py-2 relative text-black">
        Khắc thông điệp - Chạm cảm xúc
        <span className="font-semibold ml-2 cursor-pointer">KHÁM PHÁ NGAY</span>
        <span className="absolute right-8 top-0 bottom-0 flex items-center cursor-pointer">
          ✕
        </span>
      </div>

      {/* main header */}
      <div className="w-full px-16 flex items-center justify-between py-5">
        {/* left - logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="text-3xl font-bold tracking-widest text-black">
            PANDORA
          </div>
        </Link>
        <div className="flex items-center gap-8">
          {/* search */}
          <div
            className="flex items-center w-60 px-4 py-2 bg-white border border-gray-300 
                          focus-within:border-black transition"
          >
            <input
              type="text"
              placeholder="Bạn cần tìm gì?"
              className="flex-1 outline-none bg-transparent text-[14px] font-semibold text-black placeholder-gray-500"
            />

            <FiSearch className="text-black text-lg" />
          </div>

          {/* icons */}
          <div className="flex items-center gap-6 text-xl text-black">
            {/* Heart */}
            <div className="group flex flex-col items-center cursor-pointer">
              <FiHeart className="transition group-hover:text-[#ff93a0]" />
              <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
            </div>

            {/* Location */}
            <div className="group flex flex-col items-center cursor-pointer">
              <FiMapPin className="transition group-hover:text-[#ff93a0]" />
              <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
            </div>

            <UserMenu />

            {/* Bag */}
            <div className="group flex flex-col items-center cursor-pointer">
              <FiShoppingBag className="transition group-hover:text-[#ff93a0]" />
              <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-4 border-[#ff93a0]"></div>

      {/* ===== MENU ===== */}
      <nav className="w-full px-16 flex gap-10 py-4 text-[13px] font-semibold text-black">
        {/* ===== COLLECTION ===== */}
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-[#ff93a0]"
          onMouseEnter={() => handleEnter("collection")}
          onMouseLeave={handleLeave}
        >
          <Link href="/collection" className="flex items-center gap-1">
            <span>BỘ SƯU TẬP MỚI</span>
            <ChevronDown size={14} />
          </Link>

          {open === "collection" && (
            <MegaMenu>
              <div className="flex gap-16">
                <div>
                  <h3 className="font-semibold mb-4">TẤT CẢ SẢN PHẨM</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Vòng tay
                    </li>
                    <li className="hover:text-black cursor-pointer">Charms</li>
                    <li className="hover:text-black cursor-pointer">
                      Dây chuyền
                    </li>
                    <li className="hover:text-black cursor-pointer">Hoa tai</li>
                    <li className="hover:text-black cursor-pointer">Nhẫn</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">MỨC GIÁ</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Dưới 990.000đ
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Dưới 2 Triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 2-4 Triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 4-6 Triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 6-10 Triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Trên 10 Triệu
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">MONO X YOU</h3>
                </div>
              </div>
            </MegaMenu>
          )}
        </div>

        {/* ===== TRANG SỨC ===== */}
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-[#ff93a0]"
          onMouseEnter={() => handleEnter("jewelry")}
          onMouseLeave={handleLeave}
        >
          <Link href="/jewelry" className="flex items-center gap-1">
            <span>TRANG SỨC</span>
            <ChevronDown size={14} />
          </Link>
          {open === "jewelry" && (
            <MegaMenu>
              <div className="flex gap-16">
                <div>
                  <h3 className="font-semibold mb-4">PHÂN LOẠI</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Vòng tay
                    </li>
                    <li className="hover:text-black cursor-pointer">Charms</li>
                    <li className="hover:text-black cursor-pointer">
                      Dây chuyền
                    </li>
                    <li className="hover:text-black cursor-pointer">Hoa tai</li>
                    <li className="hover:text-black cursor-pointer">Nhẫn</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">DÒNG SẢN PHẨM</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Pandora Moment
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Pandora ME
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Pandora Essence
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Pandora Timeless
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Pandora Signature
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">COLLABORATION</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Disney x Pandora
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Marvel x Pandora
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Stranger Things x Pandora
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Game of Thrones x Pandora
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      UNICEF x Pandora
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">TRANG SỨC ĐÔI</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Nhẫn Đôi
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Dây Chuyền Đôi
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm Đôi
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">DỊP ĐẶC BIỆT</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Sinh nhật
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Cung hoàng đạo
                    </li>
                    <li className="hover:text-black cursor-pointer">Chữ cái</li>
                    <li className="hover:text-black cursor-pointer">
                      Tốt nghiệp
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Dịp đặc biệt
                    </li>
                  </ul>
                </div>
              </div>
            </MegaMenu>
          )}
        </div>

        {/* ===== VÒNG TAY ===== */}
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-[#ff93a0]"
          onMouseEnter={() => handleEnter("bracelet")}
          onMouseLeave={handleLeave}
        >
          <Link href="/products/vong-tay" className="flex items-center gap-1">
            <span>VÒNG TAY</span>
            <ChevronDown size={14} />
          </Link>

          {open === "bracelet" && (
            <MegaMenu>
              <div className="flex gap-16">
                <div>
                  <h3 className="font-bold mb-4">THEO PHÂN LOẠI</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Vòng tay mềm
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Vòng tay tennis
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Vòng tay kiềng
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Vòng tay dây da
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Vòng tay kiểu đặc biệt
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO GIÁ</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Dưới 2,5 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 2,5 - 5 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 5 - 7 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Trên 7 triệu
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO CHẤT LIỆU</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">Bạc</li>
                    <li className="hover:text-black cursor-pointer">
                      Vàng 14K
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Mạ vàng hồng 14K
                    </li>
                  </ul>
                </div>
              </div>
            </MegaMenu>
          )}
        </div>

        {/* ===== CHARMS ===== */}
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-[#ff93a0]"
          onMouseEnter={() => handleEnter("charms")}
          onMouseLeave={handleLeave}
        >
          <Link href="/products/charm" className="flex items-center gap-1">
            <span>CHARMS</span>
            <ChevronDown size={14} />
          </Link>

          {open === "charms" && (
            <MegaMenu>
              <div className="flex gap-16">
                <div>
                  <h3 className="font-bold mb-4">KHẮC TÊN RIÊNG</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Charm đôi
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO PHÂN LOẠI</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Charm treo
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm xỏ
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm chặn
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm đính đá
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm thủy tinh
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm xích
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm khắc
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO CHỦ ĐỀ</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Biểu tượng
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Du lịch và sở thích
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Gia đình và bạn bè
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Sinh nhật và dịp đặc biệt
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Thiên nhiên và vũ trụ
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Tình yêu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Vương quyền
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Động vật và thú cưng
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO MỨC GIÁ</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Dưới 1 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 1 - 2,5 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 2,5 - 5 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Trên 5 triệu
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO BỘ SƯU TẬP</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Tự hào Việt Nam
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Talisman & Mini charm
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm Disney & Hoạt hình
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Chữ cái A-Z
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Charm chữ ký Mono
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO CHẤT LIỆU</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">Bạc</li>
                    <li className="hover:text-black cursor-pointer">
                      Vàng 14K
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Mạ vàng hồng 14K
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Two-tone
                    </li>
                    <li className="hover:text-black cursor-pointer">Glass</li>
                  </ul>
                </div>
              </div>
            </MegaMenu>
          )}
        </div>

        {/* ===== DÂY CHUYỀN ===== */}
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-[#ff93a0]"
          onMouseEnter={() => handleEnter("necklace")}
          onMouseLeave={handleLeave}
        >
          <Link href="/products/day-chuyen" className="flex items-center gap-1">
            <span>DÂY CHUYỀN</span>
            <ChevronDown size={14} />
          </Link>

          {open === "necklace" && (
            <MegaMenu>
              <div className="flex gap-16">
                <div>
                  <h3 className="font-bold mb-4">THEO PHÂN LOẠI</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Dây chuyền trơn
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Dây chuyền có mặt
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Mặt dây chuyền
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO CHẤT LIỆU</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">Bạc</li>
                    <li className="hover:text-black cursor-pointer">
                      Vàng 14K
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Mạ vàng hồng 14K
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO MỨC GIÁ</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Dưới 2,5 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 2,5 - 5 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 5 - 7 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Trên 7 triệu
                    </li>
                  </ul>
                </div>
              </div>
            </MegaMenu>
          )}
        </div>

        {/* ===== HOA TAI ===== */}
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-[#ff93a0]"
          onMouseEnter={() => handleEnter("earring")}
          onMouseLeave={handleLeave}
        >
          <Link href="/products/hoa-tai" className="flex items-center gap-1">
            <span>HOA TAI</span>
            <ChevronDown size={14} />
          </Link>

          {open === "earring" && (
            <MegaMenu>
              <div className="flex gap-16">
                <div>
                  <h3 className="font-bold mb-4">THEO PHÂN LOẠI</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Hoa tai kiểu tròn
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Hoa tai sát tai
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Hoa tai kiểu rơi
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Hoa tai ngọc trai
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO CHẤT LIỆU</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">Bạc</li>
                    <li className="hover:text-black cursor-pointer">
                      Vàng 14K
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Mạ vàng hồng 14K
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO MỨC GIÁ</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Dưới 2,5 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Từ 2,5 - 5 triệu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Trên 5 triệu
                    </li>
                  </ul>
                </div>
              </div>
            </MegaMenu>
          )}
        </div>

        {/* ===== NHẪN ===== */}
        <div
          className="flex items-center gap-1 cursor-pointer hover:text-[#ff93a0]"
          onMouseEnter={() => handleEnter("ring")}
          onMouseLeave={handleLeave}
        >
          <Link href="/products/nhan" className="flex items-center gap-1">
            <span>NHẪN</span>
            <ChevronDown size={14} />
          </Link>

          {open === "ring" && (
            <MegaMenu>
              <div className="flex gap-16">
                <div>
                  <h3 className="font-bold mb-4">THEO CHẤT LIỆU</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">Bạc</li>
                    <li className="hover:text-black cursor-pointer">Vàng</li>
                    <li className="hover:text-black cursor-pointer">
                      Mạ vàng hồng
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">THEO CHỦ ĐỀ</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="hover:text-black cursor-pointer">
                      Tình yêu
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Biểu tượng
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Thiên nhiên và vũ trụ
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Vương quyền
                    </li>
                    <li className="hover:text-black cursor-pointer">
                      Disney x Pandora
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">NHẪN ĐÔI</h3>
                  <ul className="space-y-3 text-gray-700"></ul>
                </div>
              </div>
            </MegaMenu>
          )}
        </div>

        <span className="cursor-pointer text-[#ff93a0] hover:underline">
          CÂU CHUYỆN CỦA BẠN
        </span>
      </nav>
      <div className="w-full h-px bg-gray-300"></div>
    </header>
  );
}
