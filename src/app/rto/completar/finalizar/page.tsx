"use client"

import { useState } from "react"
import { ArrowLeft, ChevronDown } from 'lucide-react'
import Link from "next/link"
import { Navbar } from "@/app/components/Navbar"

interface FormData {
  resultado: string
  descripcion: string
}

export default function RtoFormResultPage() {
  const [formData, setFormData] = useState<FormData>({
    resultado: '',
    descripcion: ''
  })
  const [isOpen, setIsOpen] = useState(false)

  const [handle, setHandle] = useState(false)

  const finalizar = () =>{
    setHandle(!handle)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aquí iría la lógica para enviar los datos
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/rto/completar" className="text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">Rellenar RTO</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-200 p-6 rounded-lg">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block font-medium">
                  Resultado de la revisión técnica
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-3 py-2 bg-white text-left border border-gray-300 rounded-md flex items-center justify-between"
                  >
                    <span className="text-gray-500">
                      {formData.resultado || 'Seleccione una opción'}
                    </span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                      {['Apto', 'Condicional', 'Rechazado'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, resultado: option })
                            setIsOpen(false)
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-gray-100"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium">
                  Ingrese descripción general
                </label>
                <textarea
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  placeholder="Ingrese descripción"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={finalizar}
              type="submit"
              className="w-1/4 bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue transition-colors"
            >
              Finalizar
            </button>
          </div>
          
        </form>
        {
            handle&&
            <div className="flex flex-col items-center m-4">

            <h1 className="font-bold text-xl">RTO Guardada con exito</h1>
            <Link className="text-blue" href="/">Volver</Link>
            </div>

        }
      </main>
    </div>
  )
}

