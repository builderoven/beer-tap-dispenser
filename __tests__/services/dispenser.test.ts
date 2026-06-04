import { createDispenser } from "@/services/dispenser"

beforeEach(() => {
  global.fetch = jest.fn()
})

it("mapea snake_case a camelCase", async () => {
  ;(global.fetch as jest.Mock).mockResolvedValue({
    ok: true,
    json: async () => ({ id: "abc", flow_volume: 0.064 }),
  })

  const result = await createDispenser(0.064)
  expect(result).toEqual({ id: "abc", flowVolume: 0.064 })
})
