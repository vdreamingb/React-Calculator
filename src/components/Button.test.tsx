import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import ThemeContextProvider from "../context/ThemeContextProvider";

describe("Button", () => {
  it("Displays label", () => {
    render(
      <ThemeContextProvider>
        <Button text="Hello world" onClick={() => {}} />
      </ThemeContextProvider>,
    );
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("Handles click events", async () => {
    const handleClick = vi.fn();
    render(
      <ThemeContextProvider>
        <Button text="Hello world" onClick={handleClick} />
      </ThemeContextProvider>,
    );

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
