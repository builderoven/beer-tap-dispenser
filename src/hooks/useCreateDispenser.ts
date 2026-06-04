"use client"

import { useEffect, useState } from "react"
import { createDispenser as createDispenserService } from "@/services/dispenser"
import type { Dispenser } from "@/lib/types"

interface State {
  cargando: boolean
  error: string | null
  data: Dispenser | null
  flowVolume: number
  name: string
}

const initialState: State = {
  cargando: false,
  error: null,
  data: null,
  flowVolume: 0,
  name: "",
}

export function useCreateDispenser() {
  const [state, setState] = useState<State>(initialState)

  useEffect(() => {
    if (!state.cargando) return
    callCreate(state.flowVolume, state.name)
  }, [state.cargando])

  function createDispenser(flowVolume: number, name?: string) {
    setState({ ...initialState, cargando: true, flowVolume, name: name ?? "" })
  }

  async function callCreate(flowVolume: number, name: string) {
    try {
      const data = await createDispenserService(flowVolume, name || undefined)
      setState({ ...initialState, data })
    } catch {
      setState({ ...initialState, error: "Error al crear el dispensador" })
    }
  }

  return {
    cargando: state.cargando,
    error: state.error,
    data: state.data,
    createDispenser,
  }
}
