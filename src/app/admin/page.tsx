"use client"

import { useState } from "react"
import CreateDispenserForm from "@/components/CreateDispenserForm"
import { useCreateDispenser } from "@/hooks/useCreateDispenser"

export default function AdminPage() {
  const [showForm, setShowForm] = useState(false)
  const { cargando, error, data, createDispenser } = useCreateDispenser()

  function handleCreate(flowVolume: number, name: string) {
    createDispenser(flowVolume, name)
    setShowForm(false)
  }

  return (
    <div className="flex flex-col items-center py-20 px-4">

      {cargando && <p className="text-yellow-400 mb-4">Creando dispensador...</p>}
      {error && <p className="text-red-400 mb-4">{error}</p>}
      {data && <p className="text-green-400 mb-4">Dispensador creado: {data.id}</p>}

      <button
        onClick={() => setShowForm(true)}
        className="bg-green-500 text-black font-semibold px-6 py-3 rounded-lg text-lg hover:bg-green-400 transition cursor-pointer"
      >
        Crear nuevo dispensador
      </button>

      {showForm && (
        <CreateDispenserForm
          onSubmit={handleCreate}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
