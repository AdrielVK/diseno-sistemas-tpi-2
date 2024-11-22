"use client"
import { useState } from "react"
import {  Menu, User } from "lucide-react";
import { AuthStore, useAuthStore } from "../store";
import Link from "next/link";
import { useRouter } from "next/navigation";


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    let user = useAuthStore((state:AuthStore) => state.user)
    let logout = useAuthStore((state:AuthStore) => state.logout)
    const router = useRouter();

    const onClickLogout = () => {
        logout()
        router.push('/auth')
    }
    return (
        <nav className="bg-lgblue p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white hover:bg-blue/50 p-2 rounded-lg"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="text-white text-2xl font-bold">
              9Xperts
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <div className="flex flex-col">
                <span>{user?.role}</span>
                <span className="cursor-pointer font-semibold" onClick={onClickLogout}>Cerrar sesion</span>
            </div>
            <User className="h-6 w-6" />
          </div>
        </div>
        
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-4 bg-white shadow-lg rounded-lg p-2 w-48">
            <Link 
              href="/opcion1" 
              className="block px-4 py-2 hover:bg-gray-100 rounded-md"
            >
              Opción 1
            </Link>
            <Link 
              href="/opcion2" 
              className="block px-4 py-2 hover:bg-gray-100 rounded-md"
            >
              Opción 2
            </Link>
          </div>
        )}
      </nav>
    )
}