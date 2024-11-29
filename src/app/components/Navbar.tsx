"use client"
import { useState } from "react"
import {  Menu, User } from "lucide-react";
import { AuthStore, useAuthStore } from "../store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar,ServerCrash , Car, NotebookPen, ClipboardList, DollarSign, FileText, Info, Printer, Search } from "lucide-react";


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const user = useAuthStore((state:AuthStore) => state.user)
    const logout = useAuthStore((state:AuthStore) => state.logout)
    const router = useRouter();

    const [modal, setModal] = useState<boolean>(false)

    const openModal = () => {
      setModal(!modal)
    }

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
            <div className="flex flex-col items-center">
                
                <span>{user?.role}</span>
                <span className="cursor-pointer font-semibold" onClick={openModal}>Cerrar sesion</span>
            </div>
            <User className="h-6 w-6" />
          </div>
        </div>

        {
          modal &&
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <p className=" font-bold text-center ">¿Seguro que desea cerrar sesion?</p>
              <button
                onClick={onClickLogout}
                className="w-full my-2 bg-lgblue font-semibold text-white py-2 px-4 rounded-lg hover:bg-blue transition-colors"
                >
                Confirmar
              </button>
              <button
                onClick={openModal}
                className="w-full my-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                Cancelar
              </button>
              
            </div>
          </div>
        }
        
        {/* Dropdown Menu */}
        {isMenuOpen && (
          user?.role == 'ATENCION' ?
          <div className=" absolute top-16 left-4 bg-white shadow-lg rounded-lg p-2 w-48">
            <Link 
                href="/facturacion"
                className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
              >
                <DollarSign className="h-6 w-6" />
                <span>Facturación</span>
              </Link>
              
              <Link 
                href="/tarifas"
                className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
              >
                <FileText className="h-6 w-6" />
                <span>Tarifas</span>
              </Link>
              
              <Link 
                href="#"
                className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
              >
                <Car className="h-6 w-6" />
                <span>Registrar vehículo</span>
              </Link>
              
              <Link 
                href="#"
                className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
              >
                <ClipboardList className="h-6 w-6" />
                <span>Reclamos</span>
              </Link>

              <Link 
                href="#"
                className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
              >
                <Search className="h-6 w-6" />
                <span>Consultas</span>
              </Link>
              
              <Link 
                href="#"
                className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
              >
                <Info className="h-6 w-6" />
                <span>Información de vehículos</span>
              </Link>
              
              <Link 
                href="#"
                className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
              >
                <Calendar className="h-6 w-6" />
                <span>Gestionar turnos</span>
              </Link>
              
              <Link 
                href="#"
                className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
              >
                <Printer className="h-6 w-6" />
                <span>Imprimir oblea</span>
              </Link>
          </div>
          :
          <div className="absolute top-16 left-4 bg-white shadow-lg rounded-lg p-2 w-48">
            <Link 
              href="/rto"
              className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
            >
              <NotebookPen className="h-6 w-6" />
              <span>Rellenar RTO</span>
            </Link>
            
            <Link 
              href="#"
              className="flex items-center gap-2  text-black hover:bg-gray p-4 rounded-lg w-full  transition-colors"
            >
              <ServerCrash className="h-6 w-6" />
              <span>Notificar equipo defectuoso</span>
            </Link>
              
              
          </div>
        )}
      </nav>
    )
}