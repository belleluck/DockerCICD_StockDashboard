import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Stock Dashboard title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Stock Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});
