import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("Smoke Test", () => {
    const { getByText } = render(<App />);
    expect(getByText("Luke Hedgecox")).toBeInTheDocument();
  });
});
