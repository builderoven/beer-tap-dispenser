"use client"

import { useEffect, useState } from "react"
import { getDispensers } from "@/services/dispenser"
import type { Dispenser } from "@/lib/types"

interface State {
  cargando: boolean
  error: string | null
  data: Dispenser[]
}

const initialState: State = {
  cargando: false,
  error: null,
  data: [],
}

export function useGetDispensers() {
  const [state, setState] = useState<State>(initialState)

  useEffect(() => {
    setState({ ...initialState, cargando: true })
  }, [])

  useEffect(() => {
    if (!state.cargando) return
    callGetDispensers()
  }, [state.cargando])

  async function callGetDispensers() {
    try {
      const data = await getDispensers()
      setState({ ...initialState, data })
    } catch {
      setState({ ...initialState, error: "Error al cargar dispensadores" })
    }
  }

  return {
    cargando: state.cargando,
    error: state.error,
    dispensers: state.data,
  }
}
