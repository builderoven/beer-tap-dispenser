"use client"

import type { Dispenser } from "@/lib/types"

interface Props {
  dispenser: Dispenser
  onOpen: (id: string) => void
  onClose: (id: string) => void
}

export default function SelectedDispenser({ dispenser, onOpen, onClose }: Props) {
  const abierto = dispenser.status === "open"

  return (
    <div
      onMouseDown={() => onOpen(dispenser.id)}
      onMouseUp={() => onClose(dispenser.id)}
      className={`
        w-80 h-80 rounded-2xl border-4 flex flex-col items-center justify-center gap-4 cursor-pointer select-none
        ${abierto ? "border-green-500 bg-zinc-900/50" : "border-zinc-600 bg-zinc-900/30"}
      `}
    >
      <span className="text-2xl font-bold text-white">
        {dispenser.name || "Sin nombre"}
      </span>
      <div className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${abierto ? "bg-green-500" : "bg-zinc-500"}`} />
        <span className={abierto ? "text-green-400 font-semibold" : "text-zinc-400"}>
          {abierto ? "Abierto" : "Cerrado"}
        </span>
      </div>
      <p className="text-zinc-400 text-sm">
        Flow volume: <span className="text-white">{dispenser.flowVolume}</span>
      </p>
    </div>
  )
}
