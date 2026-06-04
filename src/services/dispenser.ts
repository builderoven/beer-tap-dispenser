import type { Dispenser } from "@/lib/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

export async function createDispenser(flowVolume: number, name?: string): Promise<Dispenser> {
  const body: Record<string, unknown> = { flow_volume: flowVolume }
  if (name) body.name = name

  const res = await fetch(`${API_URL}/dispenser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error("Error al crear el dispensador")
  const data = await res.json()
  return { id: data.id, flowVolume: data.flow_volume, name: data.name, status: data.status }
}

export async function updateStatus(id: string, status: "open" | "close", updatedAt: string): Promise<void> {
  const res = await fetch(`${API_URL}/dispenser/${id}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status, updated_at: updatedAt }),
  })
  if (res.status === 409) throw new Error("El dispensador ya está abierto/cerrado")
  if (!res.ok) throw new Error("Error al cambiar el estado")
}

export async function getDispensers(): Promise<Dispenser[]> {
  const res = await fetch(`${API_URL}/dispenser/dispensers`)
  if (!res.ok) throw new Error("Error al obtener dispensadores")
  const data = await res.json()
  return data.map((dispenser: any) => ({
    id: dispenser.id,
    flowVolume: dispenser.flow_volume,
    name: dispenser.name,
    status: dispenser.status,
  }))
}
