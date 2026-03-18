"use client";
import { useState, useRef, useEffect } from "react";

type Category = {
  id: number;
  name: string;
  type: string;
};

const MAIN_TYPES = [
  "Tất cả",
  "Vòng tay",
  "Charm",
  "Dây chuyền",
  "Hoa tai",
  "Nhẫn",
];

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Vòng tay bạc", type: "Vòng tay" },
    { id: 2, name: "Charm hoạt hình", type: "Charm" },
  ]);

  const [name, setName] = useState("");
  const [type, setType] = useState("Vòng tay");
  const [filter, setFilter] = useState("Tất cả");

  // 🔥 dropdown state
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔥 click ngoài để đóng
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAdd = () => {
    if (!name) return;
    setCategories([...categories, { id: Date.now(), name, type }]);
    setName("");
  };

  const filteredCategories =
    filter === "Tất cả"
      ? categories
      : categories.filter((c) => c.type === filter);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Categories
      </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex gap-3">

          {/* INPUT */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category name..."
            className="border border-gray-200 p-2 rounded-lg w-full text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none"
          />

          {/* 🔥 CUSTOM DROPDOWN */}
          <div ref={dropdownRef} className="relative w-48">
            
            {/* BOX */}
            <div
              onClick={() => setOpen(!open)}
              className="border border-gray-200 p-2 rounded-lg bg-white text-gray-700 cursor-pointer flex justify-between items-center hover:border-purple-400 transition"
            >
              {type}
              <span
                className={`transition ${
                  open ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* MENU */}
            {open && (
              <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden animate-fadeIn">

                {MAIN_TYPES.slice(1).map((t) => {
                  const active = type === t;

                  return (
                    <div
                      key={t}
                      onClick={() => {
                        setType(t);
                        setOpen(false);
                      }}
                      className={`px-3 py-2 cursor-pointer transition
                      
                      ${
                        active
                          ? "bg-purple-50 text-purple-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                      
                      `}
                    >
                      {t}
                    </div>
                  );
                })}

              </div>
            )}
          </div>

          {/* BUTTON */}
          <button
            onClick={handleAdd}
            className="bg-linear-to-r from-purple-500 to-purple-400 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>

      {/* FILTER */}
      <div className="mb-4 flex gap-3 flex-wrap">
        {MAIN_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${
              filter === t
                ? "bg-linear-to-r from-purple-500 to-purple-400 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        {filteredCategories.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0"
          >
            <div>
              <p className="font-medium text-gray-800">{c.name}</p>
              <p className="text-sm text-gray-500">{c.type}</p>
            </div>

            <div className="flex gap-2">
              <button className="bg-blue-400 text-white px-3 py-1 rounded-lg">
                Edit
              </button>
              <button className="bg-red-400 text-white px-3 py-1 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}