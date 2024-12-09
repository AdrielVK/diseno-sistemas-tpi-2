"use client"

import { useState } from "react"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { Navbar } from "../components/Navbar"

export default function FacturacionPage() {
  const [patente, setPatente] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [paymentStep, setPaymentStep] = useState<'methods' | 'cash' | 'card'>('methods')
  const [pagoExitoso, setPagoExitoso] = useState(false)
  const [error, setError] = useState<string>('')
  const [isFocused, setIsFocused] = useState(false)

  const [errorDni, setErrorDni] = useState<string>('')
  const [errorTarjeta, setErrorTarjeta] = useState<string>('')
  const [errorSeg, setErrorSeg] = useState<string>('')

  const [isFocusedDni, setIsFocusedDni] = useState(false)
  const [isFocusedTarjeta, setIsFocusedTarjeta] = useState(false)
  const [isFocusedSeg, setIsFocusedSeg] = useState(false)

  const [cardData, setCardData] = useState({
    dni: '',
    cardNumber: '',
    securityCode: ''
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (patente.trim()) {
      setShowResults(true)
    }
  }

  const handlePago = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPagoExitoso(!pagoExitoso)
  }
  const handlePagoNoForm = () => {
    
    setPagoExitoso(!pagoExitoso)
  }

  const handleCashPayment = () => {
    setPaymentStep('cash')
  }

  const handleCardPayment = () => {
    setPaymentStep('card')
  }

  const handleBack = () => {
    setPaymentStep('methods')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setPaymentStep('methods')
  }


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">Facturación</h1>
          
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="space-y-1">
            <input
              required
              type="text"
              value={patente}
              onFocus={() => {setIsFocused(true)}}
              onBlur={() => 
                {

                  setIsFocused(false)
                  setError('')
                }
              }
              onChange={(e) => {
                const inputValue = e.target.value;

                if (inputValue.length <= 6) {
                  setPatente(inputValue);
                  setError('');
                } else {
                  setError('La patente debe ser de hasta 6 caracteres');
                }
              }}
              placeholder="Ingrese la patente del vehículo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
            />
            {isFocused && error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue transition-colors"
          >
            Buscar
          </button>
        </form>

        {showResults && (
          <div className="mt-6 space-y-6">
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="flex justify-between mb-4">
                <div>
                  <span className="font-medium">Categoría:</span>
                  <span className="ml-2">M</span>
                </div>
                <div>
                  <span className="font-medium">Marca:</span>
                  <span className="ml-2">Ford</span>
                </div>
                <div>
                  <span className="font-medium">Modelo:</span>
                  <span className="ml-2">Fiesta</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold">Revisión Técnica Obligatoria</h3>
                
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">Resultado:</span>
                    <span className="ml-2 text-green-600">Aprobado</span>
                  </div>
                  
                  <div>
                    <span className="font-medium">Mecánico:</span>
                    <span className="ml-2">Roberto Lewandowski</span>
                  </div>
                  
                  <div>
                    <span className="font-medium">Descripción de la revisión:</span>
                    <div className="mt-1">Luego de la revision,el vehiculo se encuentra en condiciones aptas para la circulacion</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue/90 transition-colors"
            >
              Realizar pago
            </button>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              {
              paymentStep === 'card'?
              (
                <form onSubmit={handlePago} className="space-y-6">
                  <h2 className="text-2xl font-bold text-center">Pago con tarjeta</h2>
                  <p className="text-xl text-center">Total: $20.000</p>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="block text-sm">DNI del titular {errorDni && isFocusedDni &&<p className="text-red-600">{errorDni}</p>}</label>
                      <input
                        onFocus={() => {setIsFocusedDni(true)}}
                        onBlur={() => 
                          {
          
                            setIsFocusedDni(false)
                            setErrorDni('')
                          }
                        }
                        type="text"
                        placeholder="Ingrese DNI"
                        value={cardData.dni}
                        required
                        onChange={(e) => {
                            const value = e.target.value

                            if (/^\d*$/.test(value)) {
                              if (value.length <= 8) {
                                setErrorDni('');
                                setCardData({ ...cardData, dni: value });
                              } else {
                                setErrorDni('El DNI debe contener hasta 8 cifras.');
                              }
                            } else {
                              setErrorDni('El DNI debe contener solo números.');
                            }
                          }
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="block text-sm">Número de la tarjeta {errorTarjeta && isFocusedTarjeta &&<p className="text-red-600">{errorTarjeta}</p>}</label>
                      <input
                        onFocus={() => {setIsFocusedTarjeta(true)}}
                        onBlur={() => 
                          {
          
                            setIsFocusedTarjeta(false)
                            setErrorTarjeta('')
                          }
                        }
                        required
                        type="text"
                        placeholder="Ingrese número de la tarjeta"
                        value={cardData.cardNumber}
                        onChange={(e) => {
                            const value = e.target.value

                            if (/^\d*$/.test(value)) {
                              if (value.length <= 15) {
                                setErrorTarjeta('');
                                setCardData({ ...cardData, cardNumber: value });
                              } else {
                                setErrorTarjeta('El nro de tarjeta debe contener hasta 16 cifras.');
                              }
                            } else {
                              setErrorTarjeta('El nro de tarjeta debe contener solo números.');
                            }
                        
                          }
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="block text-sm">Código de seguridad{errorSeg && isFocusedSeg &&<p className="text-red-600">{errorSeg}</p>}</label>
                      <input
                        required
                        type="password"
                        placeholder="Ingrese número de la tarjeta"
                        value={cardData.securityCode}
                        onFocus={() => {setIsFocusedSeg(true)}}
                        onBlur={() => 
                          {
          
                            setIsFocusedSeg(false)
                            setErrorSeg('')
                          }
                        }
                        onChange={(e) => {
                          const value = e.target.value
                          if (/^\d*$/.test(value)) {
                            if (value.length <= 3) {
                              setErrorSeg('');
                              setCardData({ ...cardData, securityCode: value });
                            } else {
                              setErrorSeg('El cod. de seguridad debe contener hasta 3 cifras.');
                            }
                          } else {
                            setErrorSeg('El cod. de seguridad debe contener solo números.');
                          }
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                      />
                    </div>
                  </div>

                  {
                    pagoExitoso?
                    <div className="grid justify-items-center">
                      
                      <h1 className="font-bold text-green-800 mb-4">Pago exitoso</h1>
                      <Link href="/" className="w-full text-center bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue transition-colors mb-4">
                        Volver al menu
                      </Link>

                    </div>
                    :
                    <>
                    <button
                      
                      className="w-full bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue/90 transition-colors"
                      >
                      Realizar pago
                    </button>
                    
                    <button
                      onClick={handleBack}
                      className="text-gray-600 hover:text-gray-800 block mx-auto"
                      >
                      Volver
                    </button>
                    </>
                  }
                  
                </form>
              )
              :
              
              paymentStep === 'methods' ? (
                <>
                  <h2 className="text-2xl font-bold text-center mb-6">Conceptos</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="space-y-2">
                      <h3 className="text-lg">Servicio RTO:</h3>
                      <p className="text-xl">$15.000</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg">Recargo:</h3>
                      <p className="text-xl">$5.000</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h3 className="text-xl font-bold">Total: $20.000</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg">Métodos de pago:</h3>
                    <button 
                      onClick={handleCashPayment}
                      className="w-full bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue/90 transition-colors"
                    >
                      Contado
                    </button>
                    <button onClick={handleCardPayment} className="w-full bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue/90 transition-colors">
                      Tarjeta
                    </button>
                    <button 
                      onClick={closeModal}
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-blue transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-6">Pago al contado</h2>
                  <p className="text-xl mb-6">Total: $20.000</p>
                  {
                    pagoExitoso?
                    
                    <div className="grid grid-cols-1 content-between justify-items-center">
                      
                      <h1 className="font-bold text-green-800 mb-4">Pago exitoso</h1>
                      <Link href="/" className="w-full bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue transition-colors mb-4">
                        Volver al menu
                      </Link>

                    </div>
                    
                    :
                    <>
                    <button onClick={handlePagoNoForm} className="w-full bg-lgblue text-white py-2 px-4 rounded-lg hover:bg-blue/90 transition-colors mb-4">
                      Realizar pago
                    </button>
                    <button
                      onClick={handleBack}
                      className="text-gray-600 hover:text-gray-800"
                      >
                      Volver
                    </button>
                    </>

                  }
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

