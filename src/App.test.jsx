import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  test("renders Vite text", () => {
    render(<App />);
    const textElement = screen.getByRole("heading", { name: /vite \+ react/i });
    expect(textElement).toBeInTheDocument();
  });

  test("renders initial count", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("count is 0");
  });

  test("increments count when button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole("button");

    await user.click(button);
    expect(button).toHaveTextContent("count is 1");

    await user.click(button);
    expect(button).toHaveTextContent("count is 2");
  });

  test("renders Vite and React logos", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test("renders links to Vite and React documentation", () => {
    render(<App />);
    const viteLink = screen.getByRole("link", { name: /vite logo/i });
    const reactLink = screen.getByRole("link", { name: /react logo/i });

    expect(viteLink).toHaveAttribute("href", "https://vite.dev");
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
  });
});
