"use client"

import { useState } from "react"
import {EyeIcon, EyeOffIcon} from "lucide-react"
import {  AuthStore, useAuthStore } from "../store"
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const [name, setName] = useState<string>('')
  const [role, setRole] = useState<string>('ATENCION')

  const login = useAuthStore((state:AuthStore) => state.login)
  const user = useAuthStore((state:AuthStore) => state.user)

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    
    login(name, role); 
    
    console.log(user)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray to-lgblue">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            <span>9Xperts</span>
          </div>
          <h2  className="text-xl font-semibold">¡Bienvenido!</h2>
        </div>
        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Rol
            </label>
            <select
              value={role}
              onChange={(e) => {
                
                  setRole(e.target.value)
                
              }}
              id="role"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue"
            >
              
              <option value={"ATENCION"}>Atención al cliente</option>
              <option value={"MECANICO"}>Mecánico</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              placeholder="Ingrese su email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <a href="#" className="text-sm text-blue hover:underline">
                ¿Te olvidaste la contraseña?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Ingrese su contraseña"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-blue"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-lgblue text-white py-2 px-4 rounded-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

