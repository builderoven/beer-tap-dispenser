"use client"

import { useState } from "react"

interface Props {
  onSubmit: (flowVolume: number, name: string) => void
  onCancel: () => void
}

export default function CreateDispenserForm({ onSubmit, onCancel }: Props) {
  const [nombre, setNombre] = useState("")
  const [flowVolume, setFlowVolume] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit(Number(flowVolume), nombre)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-white">Nuevo dispensador</h2>

        <input
          type="text"
          placeholder="Nombre (opcional)"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="bg-black border border-zinc-600 rounded px-3 py-2 text-white placeholder-zinc-500"
        />

        <input
          type="number"
          step="0.0001"
          placeholder="Flow volume (l/s)"
          value={flowVolume}
          onChange={(e) => setFlowVolume(e.target.value)}
          className="bg-black border border-zinc-600 rounded px-3 py-2 text-white placeholder-zinc-500"
          required
        />

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-zinc-400 hover:text-white cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-green-500 text-black font-semibold px-4 py-2 rounded hover:bg-green-400 cursor-pointer"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  )
}
