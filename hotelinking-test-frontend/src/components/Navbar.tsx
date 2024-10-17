'use client'

import { logoutUser } from "@/services/authService";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const handleLogout = () => {
    logoutUser();
  }

  if (pathname === '/' || pathname === '/login' || pathname === '/register') {
    return null;
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-purple shadow-md">
      <div className="flex items-center">
        <Link href="/promotions" className="text-white text-lg font-semibold hover:text-light-purple transition duration-200">Promociones</Link>
        <Link href="/profile" className="ml-6 text-white text-lg font-semibold hover:text-light-purple transition duration-200">Perfil</Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-cyan text-black py-2 px-4 rounded-md hover:bg-light-gray transition duration-200"
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}
