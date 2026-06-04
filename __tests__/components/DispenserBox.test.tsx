import { render, screen } from "@testing-library/react"
import DispenserBox from "@/components/DispenserBox"

const mockDispenser = { id: "abc", flowVolume: 0.064, name: "Test Tap" }

it("renderiza el nombre", () => {
  render(<DispenserBox dispenser={mockDispenser} selected={false} onClick={() => {}} />)
  expect(screen.getByText("Test Tap")).toBeInTheDocument()
})

it("aplica border-green-500 cuando selected", () => {
  const { container } = render(
    <DispenserBox dispenser={mockDispenser} selected={true} onClick={() => {}} />
  )
  expect(container.firstChild).toHaveClass("border-green-500")
})

it("llama onClick al hacer clic", () => {
  const onClick = jest.fn()
  render(<DispenserBox dispenser={mockDispenser} selected={false} onClick={onClick} />)
  screen.getByRole("button").click()
  expect(onClick).toHaveBeenCalledTimes(1)
})
