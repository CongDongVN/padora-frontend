import Link from "next/link";

export default function LoggedOutMenu({
  setOpenAuth,
}: {
  setOpenAuth: (val: boolean) => void;
}) {
  return (
    <div className="absolute top-15 right-0 w-70 bg-white shadow-xl rounded-sm overflow-hidden z-50 animate-slideDown">
      <div className="p-5 flex flex-col gap-4">
        <Link
          href="/login"
          onClick={() => setOpenAuth(false)}
          className="block text-center w-full bg-black text-white py-3.5 rounded-sm text-[12px] font-semibold tracking-wider hover:bg-gray-800 transition"
        >
          ĐĂNG NHẬP
        </Link>

        <Link
          href="/register"
          onClick={() => setOpenAuth(false)}
          className="block text-center w-full bg-black text-white py-3.5 rounded-sm text-[12px] font-semibold tracking-wider hover:bg-gray-800 transition"
        >
          ĐĂNG KÝ
        </Link>

        <img
          src="/img/hinh_log_in.png"
          className="w-full h-50 object-cover rounded-sm"
        />

        <p className="text-center text-xs font-semibold text-black leading-relaxed px-2">
          Đăng ký thành viên PANDORA ngay
          <br />
          để tận hưởng ưu đãi độc quyền online.
        </p>
      </div>
    </div>
  );
}
