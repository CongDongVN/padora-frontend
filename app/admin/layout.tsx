"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Layers,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Giả sử bạn lưu role trong localStorage hoặc cookie
    const role = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userRole="))
      ?.split("=")[1];

    if (role !== "Admin") {
      router.push("/login"); // Hoặc trang báo lỗi
    } else {
      setIsLoading(false);
    }
  }, [router]);

  // Trong khi chờ kiểm tra quyền, không hiển thị gì cả hoặc hiện loading
  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Categories", href: "/admin/categories", icon: Layers },
  ];

  return (
    <div className="flex min-h-screen bg-[#f5f6fa]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white p-6 border-r flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8 text-gray-800">
            Dashboard
          </h2>

          <ul className="space-y-2">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
                      ${
                        isActive
                          ? "bg-linear-to-r from-purple-500 to-purple-400 text-white shadow"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    <item.icon size={18} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* user */}
        <div className="flex items-center gap-3 mt-6">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-700">Admin</p>
            <p className="text-xs text-gray-400">Project Manager</p>
          </div>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}