import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders Vite text", () => {
    render(<App />);
    const textElement = screen.getByRole("heading", { name: /vite \+ react/i });
    expect(textElement).toBeInTheDocument();
  });
});
