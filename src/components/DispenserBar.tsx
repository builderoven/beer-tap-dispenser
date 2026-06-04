"use client"

import { useEffect, useRef, useState } from "react"
import type { Dispenser } from "@/lib/types"
import DispenserBox from "./DispenserBox"

interface Props {
  dispensers: Dispenser[]
  selectedId: string | null
  onSelect: (dispenser: Dispenser) => void
}

export default function DispenserBar({ dispensers, selectedId, onSelect }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const dragging = useRef(false)
  const startX = useRef(0)
  const scrollStartX = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener("wheel", (e) => e.preventDefault(), { passive: false })
  }, [])

  function handleMouseDown(e: React.MouseEvent) {
    if (!ref.current) return
    isDown.current = true
    dragging.current = false
    startX.current = e.clientX
    scrollStartX.current = ref.current.scrollLeft
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDown.current || !ref.current) return
    const dx = e.clientX - startX.current
    if (Math.abs(dx) > 5) dragging.current = true
    ref.current.scrollLeft = scrollStartX.current - dx
  }

  function handleMouseUp() {
    isDown.current = false
    setTimeout(() => { dragging.current = false }, 0)
  }

  function handleClick(dispenser: Dispenser) {
    if (dragging.current) return
    onSelect(dispenser)
  }

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="flex gap-4 overflow-x-hidden w-full max-w-4xl px-4 pb-2 select-none cursor-grab active:cursor-grabbing"
    >
      {dispensers.map((d) => (
        <DispenserBox
          key={d.id}
          dispenser={d}
          selected={d.id === selectedId}
          onClick={() => handleClick(d)}
        />
      ))}
    </div>
  )
}
