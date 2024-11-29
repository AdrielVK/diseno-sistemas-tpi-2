"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";

interface FormData {
  resultado: string;
  descripcion: string;
}

export default function RtoFormResultPage() {
  const [formData, setFormData] = useState<FormData>({
    resultado: "",
    descripcion: "",
  });

  const [handle, setHandle] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHandle(true);
    console.log("Formulario enviado:", formData);
  };

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
                <label className="block font-medium" htmlFor="resultado">
                  Resultado de la revisión técnica <span className="text-red-600">*</span>
                </label>
                <select
                  id="resultado"
                  value={formData.resultado}
                  onChange={(e) =>{
                    setHandle(false)
                    setFormData({ ...formData, resultado: e.target.value })

                    }
                  }
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
                >
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  <option value="Apto">Apto</option>
                  <option value="Condicional">Condicional</option>
                  <option value="Rechazado">Rechazado</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-medium" htmlFor="descripcion">
                  Ingrese descripción general
                </label>
                <textarea
                  id="descripcion"
                  value={formData.descripcion}
                  onChange={(e) =>
                    {
                      setHandle(false)
                      setFormData({ ...formData, descripcion: e.target.value })
                    }
                  }
                  placeholder="Ingrese descripción"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-1/4 bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue transition-colors"
            >
              Finalizar
            </button>
          </div>

          {
            handle&&
            <div className="flex flex-col items-center m-4">

            <h1 className="font-bold text-xl">RTO Guardada con exito</h1>
            <Link className="text-blue" href="/">Volver</Link>
            </div>

        }
        </form>
      </main>
    </div>
  );
}
