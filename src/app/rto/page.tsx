"use client"

import { useState } from "react"
import { Navbar } from "../components/Navbar"
import { useRouter } from "next/navigation"

interface Vehicle {
  patente: string
  categoria: string
  marca: string
}

export default function RtoForm() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null)
  const router = useRouter();
  const vehicles: Vehicle[] = [
    { patente: "ABC 000", categoria: "L", marca: "Honda" },
    { patente: "DEF 123", categoria: "M", marca: "Ford" },
    { patente: "GHI 456", categoria: "N", marca: "Toyota" },
    { patente: "JKL 789", categoria: "O", marca: "Friviar" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-8">Rellenar RTO</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl text-center mb-4">Vehículos asignados</h2>
            <p className="text-sm mb-4">Seleccione una opción</p>

            <div className="border rounded-lg overflow-hidden">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.patente}
                  onClick={() => setSelectedVehicle(vehicle.patente)}
                  className={`flex cursor-pointer border-b last:border-b-0 ${
                    selectedVehicle === vehicle.patente
                      ? "bg-blue-100 border-l-4 border-l-blue"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex-1 p-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <span className="font-medium">Patente: </span>
                        {vehicle.patente}
                      </div>
                      <div>
                        <span className="font-medium">Categoría: </span>
                        {vehicle.categoria}
                      </div>
                      <div>
                        <span className="font-medium">Marca: </span>
                        {vehicle.marca}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => router.push('/rto/completar')}
            disabled={!selectedVehicle}
            className={`w-full py-2 px-4 rounded-lg transition-colors ${
              selectedVehicle
                ? "bg-blue text-white hover:bg-blue/90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continuar
          </button>
        </div>
      </main>
    </div>
  )
}

