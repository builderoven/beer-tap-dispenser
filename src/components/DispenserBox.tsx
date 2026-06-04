"use client"

import type { Dispenser } from "@/lib/types"

interface Props {
  dispenser: Dispenser
  selected: boolean
  onClick: () => void
}

export default function DispenserBox({ dispenser, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        shrink-0 w-28 h-28 rounded-lg border-2 flex flex-col items-center justify-center
        transition font-semibold cursor-pointer
        ${selected ? "bg-zinc-800 border-green-500" : "bg-zinc-900 hover:bg-zinc-800 border-zinc-600"}
      `}
    >
      <span className="text-white text-sm text-center px-1 leading-tight">
        {dispenser.name || dispenser.id.slice(0, 8)}
      </span>
    </button>
  )
}
