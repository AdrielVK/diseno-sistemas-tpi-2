"use client"

import { useState } from "react"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { Navbar } from "@/app/components/Navbar"

interface FormData {
  direccion: string
  identificacion: string
  suspension: string
  seguridad: string
  chasis: string
  luces: string
  neumaticos: string
  llantas: string
  frenos: string
  contaminacion: string
}

export default function RtoFormDetailsPage() {
  const [formData, setFormData] = useState<FormData>({
    direccion: "",
    identificacion: "",
    suspension: "",
    seguridad: "",
    chasis: "",
    luces: "",
    neumaticos: "",
    llantas: "",
    frenos: "",
    contaminacion: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aquí iría la lógica para enviar los datos del formulario
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      
      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/rto" className="text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">Rellenar RTO</h1>
        </div>

        

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-200 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="direccion" className="block font-medium mb-2">
                    Sistema de dirección y tren delantero
                  </label>
                  <input
                    id="direccion"
                    type="text"
                    value={formData.direccion}
                    onChange={(e) => setFormData({...formData, direccion: e.target.value})}
                    placeholder="Condición, modificaciones, fisuras, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="suspension" className="block font-medium mb-2">
                    Sistema de suspensión
                  </label>
                  <input
                    id="suspension"
                    type="text"
                    value={formData.suspension}
                    onChange={(e) => setFormData({...formData, suspension: e.target.value})}
                    placeholder="Amortiguadores, elásticos, resortes, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="chasis" className="block font-medium mb-2">
                    Chasis
                  </label>
                  <input
                    id="chasis"
                    type="text"
                    value={formData.chasis}
                    onChange={(e) => setFormData({...formData, chasis: e.target.value})}
                    placeholder="Largueros y travesaños, transmisión, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="neumaticos" className="block font-medium mb-2">
                    Neumáticos
                  </label>
                  <input
                    id="neumaticos"
                    type="text"
                    value={formData.neumaticos}
                    onChange={(e) => setFormData({...formData, neumaticos: e.target.value})}
                    placeholder="Profundidad, condición, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="frenos" className="block font-medium mb-2">
                    Sistema de frenos
                  </label>
                  <input
                    id="frenos"
                    type="text"
                    value={formData.frenos}
                    onChange={(e) => setFormData({...formData, frenos: e.target.value})}
                    placeholder="Freno de servicio, estacionamiento, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="identificacion" className="block font-medium mb-2">
                    Identificación
                  </label>
                  <input
                    id="identificacion"
                    type="text"
                    value={formData.identificacion}
                    onChange={(e) => setFormData({...formData, identificacion: e.target.value})}
                    placeholder="Chapa patente, condición, verifi"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="seguridad" className="block font-medium mb-2">
                    Seguridad y emergencia
                  </label>
                  <input
                    id="seguridad"
                    type="text"
                    value={formData.seguridad}
                    onChange={(e) => setFormData({...formData, seguridad: e.target.value})}
                    placeholder="Matafuegos, baliza, estructural, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="luces" className="block font-medium mb-2">
                    Luces reglamentarias
                  </label>
                  <input
                    id="luces"
                    type="text"
                    value={formData.luces}
                    onChange={(e) => setFormData({...formData, luces: e.target.value})}
                    placeholder="Faros frontales, luces bajas y altas, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="llantas" className="block font-medium mb-2">
                    Llantas
                  </label>
                  <input
                    id="llantas"
                    type="text"
                    value={formData.llantas}
                    onChange={(e) => setFormData({...formData, llantas: e.target.value})}
                    placeholder="Fisuras, deformaciones por golpes, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="contaminacion" className="block font-medium mb-2">
                    Contaminación ambiental
                  </label>
                  <input
                    id="contaminacion"
                    type="text"
                    value={formData.contaminacion}
                    onChange={(e) => setFormData({...formData, contaminacion: e.target.value})}
                    placeholder="Cañerías, silenciador, bocina, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">

            <Link
              href='/rto/completar/finalizar'
              className="w-1/4 text-center bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue/90 transition-colors"
              >
              Continuar
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}

