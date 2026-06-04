"use client"

import { useState } from "react"
import { useGetDispensers } from "@/hooks/useGetDispensers"
import { useUpdateStatus } from "@/hooks/useUpdateStatus"
import type { Dispenser } from "@/lib/types"
import DispenserBar from "@/components/DispenserBar"
import SelectedDispenser from "@/components/SelectedDispenser"

export default function DispenserPanel() {
  const { cargando, error, dispensers } = useGetDispensers()
  const { updateStatus } = useUpdateStatus()
  const [selected, setSelected] = useState<Dispenser | null>(null)

  function handleOpen(id: string) {
    updateStatus(id, "open")
    setSelected((prev) => (prev ? { ...prev, status: "open" } : prev))
  }

  function handleClose(id: string) {
    updateStatus(id, "close")
    setSelected((prev) => (prev ? { ...prev, status: "close" } : prev))
  }

  if (cargando) return <p className="text-center py-20 text-gray-400">Cargando...</p>
  if (error) return <p className="text-center py-20 text-red-400">{error}</p>

  return (
    <div className="flex flex-col items-center py-10 px-4 gap-10">

      {dispensers.length === 0 ? (
        <p className="text-gray-500 mt-10">No hay dispensadores disponibles</p>
      ) : (
        <>
          <DispenserBar
            dispensers={dispensers}
            selectedId={selected?.id ?? null}
            onSelect={setSelected}
          />
          {selected && (
            <SelectedDispenser
              dispenser={selected}
              onOpen={handleOpen}
              onClose={handleClose}
            />
          )}
        </>
      )}
    </div>
  )
}
