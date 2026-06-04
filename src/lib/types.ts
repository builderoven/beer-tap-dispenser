export interface Dispenser {
  id: string
  flowVolume: number
  name?: string
  status?: "open" | "close"
}