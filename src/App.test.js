import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct intial color", () => {
  render(<App />);

  // find a button with role button and text change to blue
  const colorbutton = screen.getByRole("button", { name: "Change to blue" });

  //intial button color should be red
  expect(colorbutton).toHaveStyle({ backgroundColor: "red" });

  //Trigger click event

  fireEvent.click(colorbutton);

  //after click button should colored blue
  expect(colorbutton).toHaveStyle({
    backgroundColor: "blue",
  });

  // after click button text should be change to Change to red

  expect(colorbutton.textContent).toBe("Change to red");
});

test("button has correct intial text", () => {});
