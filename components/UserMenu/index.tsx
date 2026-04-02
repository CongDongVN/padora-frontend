"use client";
import { useState, useRef } from "react";
import { FiUser } from "react-icons/fi";
import LoggedOutMenu from "./LoggedOutMenu";
import LoggedInMenu from "./LoggedInMenu";

export default function UserMenu() {
  const [user, setUser] = useState<any>(null); // State này sau này kết nối Backend
  const [openAuth, setOpenAuth] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const userRef = useRef(null);

  return (
    <div ref={userRef} className="relative group flex flex-col items-center cursor-pointer">
      <FiUser
        onClick={() => {
          if (user) {
            setOpenUser(!openUser);
            setOpenAuth(false);
          } else {
            setOpenAuth(!openAuth);
            setOpenUser(false);
          }
        }}
        className="transition group-hover:text-[#ff93a0]"
      />
      <span className="w-5 h-0.5 bg-transparent group-hover:bg-[#ff93a0] mt-1 transition"></span>

      {/* Gọi 2 trang đã tách */}
      {!user && openAuth && <LoggedOutMenu setOpenAuth={setOpenAuth} />}
      {user && openUser && <LoggedInMenu setUser={setUser} setOpenUser={setOpenUser} />}
    </div>
  );
}