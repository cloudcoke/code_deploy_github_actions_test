import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders hello element", () => {
  render(<App />)
  const element = screen.getByText("Hello")
  expect(element).toBeInTheDocument()
})
