"use client"

import { useState } from "react"
import {  ChevronDown } from 'lucide-react'
import Link from "next/link"
import { Navbar } from "../components/Navbar"

export default function TarifasPage() {
  const [showResults, setShowResults] = useState(false)
  const [formData, setFormData] = useState({
    category: '',
    brand: '',
    model: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const handleNewQuery = () => {
    setShowResults(false)
    setFormData({
      category: '',
      brand: '',
      model: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-8">Tarifas</h1>

        <div className="bg-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-center mb-6">
            Información del vehículo
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">
                Seleccione la categoría
              </label>
              <div className="relative">
                <select
                  required
                  value={formData.category}
                  onChange={(e) => {
                    setShowResults(false)
                    setFormData({...formData, category: e.target.value})}}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md appearance-none pr-10"
                >
                  <option value="">Seleccione una opción</option>
                  <option value="L">Categoria L</option>
                  <option value="M">Categoria M</option>
                  <option value="N">Categoria N</option>
                  <option value="O">Categoria O</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm">
                Ingrese la marca del vehículo
              </label>
              <input
                required
                type="text"
                value={formData.brand}
                onChange={(e) => {
                  setShowResults(false)
                  setFormData({...formData, brand: e.target.value})}}
                placeholder="Ingrese la marca"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm">
                Ingrese el modelo
              </label>
              <input
                required
                type="text"
                value={formData.model}
                onChange={(e) => {
                  setShowResults(false)
                  setFormData({...formData, model: e.target.value})}}
                placeholder="Ingrese el modelo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lgblue text-white py-2 px-4 rounded-md hover:bg-blue/90 transition-colors"
            >
              Consultar
            </button>
          </form>
        </div>

        {showResults && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Precio estimativo</h2>
            <p className="text-3xl font-bold mb-6">$35.000</p>
            <div className="space-x-4">
              <button
                onClick={handleNewQuery}
                className="text-lgblue hover:underline"
              >
                Realizar otra consulta
              </button>
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Volver
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

