import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("Displays calculator buttons", () => {
    render(<App />);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });

  it("Handles clicks and get result", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: "2" }));
    await userEvent.click(screen.getByRole("button", { name: "x" }));
    await userEvent.click(screen.getByRole("button", { name: "9" }));

    expect(screen.getByText("18")).toBeInTheDocument();
  });

  it("Set's history", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: "2" }));
    await userEvent.click(screen.getByRole("button", { name: "x" }));
    await userEvent.click(screen.getByRole("button", { name: "9" }));
    await userEvent.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByText("2x9 = 18")).toBeInTheDocument();
  });
});
