"use client"
import Link from "next/link";
import AuthGuard from "./guards/authGuard";
import { Calendar,NotebookPen , Car, CheckCircle, ClipboardList, DollarSign, FileText, Info, Printer, Search } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { AuthStore, useAuthStore } from "./store";

export default function Home() {

  const user = useAuthStore((state:AuthStore) => state.user)
  
  return (
    <AuthGuard>
    <div className="min-h-screen bg-white">
     
      <Navbar/>
      {
        user?.role === 'ATENCION' ?
          <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Menú</h1>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
              <Link 
                href="/facturacion"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <DollarSign className="h-6 w-6" />
                <span>Facturación</span>
              </Link>
              
              <Link 
                href="/tarifas"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <FileText className="h-6 w-6" />
                <span>Tarifas</span>
              </Link>
              
              <Link 
                href=""
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <Car className="h-6 w-6" />
                <span>Registrar vehículo</span>
              </Link>
              
              <Link 
                href="/"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <ClipboardList className="h-6 w-6" />
                <span>Reclamos</span>
              </Link>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <Link 
                href="/"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <Search className="h-6 w-6" />
                <span>Consultas</span>
              </Link>
              
              <Link 
                href="/"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <Info className="h-6 w-6" />
                <span>Información de vehículos</span>
              </Link>
              
              <Link 
                href="/"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <Calendar className="h-6 w-6" />
                <span>Gestionar turnos</span>
              </Link>
              
              <Link 
                href="/"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <Printer className="h-6 w-6" />
                <span>Imprimir oblea</span>
              </Link>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="mt-4 flex justify-center">
            <Link 
              href="/"
              className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg hover:bg-blue/90 transition-colors"
            >
              <CheckCircle className="h-6 w-6" />
              <span>RTO finalizadas</span>
            </Link>
          </div>
          </main>
        :
        <main className="container mx-auto px-4 py-8 flex items-center flex-col">
         <h1 className="text-3xl font-bold text-center mb-8">Menú</h1>
        
          
           
            <div className="space-y-4 w-1/3">
              <Link 
                href="/rto"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                <NotebookPen className="h-6 w-6" />
                <span>Rellenar RTO</span>
              </Link>
              
              <Link 
                href="/"
                className="flex items-center gap-2 bg-lgblue text-white p-4 rounded-lg w-full hover:bg-blue/90 transition-colors"
              >
                
                <span>Notificar equipo defectuoso</span>
              </Link>
            
            </div>
           
        </main>
      }
      {/* Main Content */}
      
    </div>
    </AuthGuard>
  );
}
