"use client"

import { useEffect, useState } from "react"
import { updateStatus as updateStatusService } from "@/services/dispenser"

interface State {
  cargando: boolean
  error: string | null
  success: boolean
  id: string
  status: "open" | "close"
  updatedAt: string
}

const initialState: State = {
  cargando: false,
  error: null,
  success: false,
  id: "",
  status: "close",
  updatedAt: "",
}

export function useUpdateStatus() {
  const [state, setState] = useState<State>(initialState)

  useEffect(() => {
    if (!state.cargando) return
    callUpdate(state.id, state.status, state.updatedAt)
  }, [state.cargando])

  function updateStatus(id: string, status: "open" | "close") {
    setState({ ...initialState, cargando: true, id, status, updatedAt: new Date().toISOString() })
  }

  async function callUpdate(id: string, status: "open" | "close", updatedAt: string) {
    try {
      await updateStatusService(id, status, updatedAt)
      setState({ ...initialState, success: true })
    } catch (e) {
      setState({ ...initialState, error: (e as Error).message })
    }
  }

  return {
    cargando: state.cargando,
    error: state.error,
    success: state.success,
    updateStatus,
  }
}
