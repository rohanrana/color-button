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

test("intial conditions", () => {
  //check for button  to Be Enabled
  render(<App />);
  const colorbutton = screen.getByRole("button", {
    name: "Change to blue",
    hidden: true,
    exact: true,
  });
  expect(colorbutton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");

  //checkbox should be unchecked intially

  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  //check for button  to Be Enabled
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorbutton = screen.getByRole("button", {
    name: "Change to blue",
  });
  fireEvent.click(checkbox);
  expect(colorbutton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorbutton).toBeEnabled();
  //checkbox should be unchecked intially
});
