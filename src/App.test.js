import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamleWithSpaces } from "./App";

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

test("mark as gray color when button is disabled and reverted to red", () => {
  //check for button  to Be Enabled
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorbutton = screen.getByRole("button", {
    name: "Change to blue",
  });
  fireEvent.click(checkbox);
  expect(colorbutton).toBeDisabled();
  expect(colorbutton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorbutton).toBeEnabled();
  expect(colorbutton).toHaveStyle({ backgroundColor: "red" });
  //checkbox should be unchecked intially
});

test("mark as gray color when button is disabled and reverted to blue", () => {
  //check for button  to Be Enabled
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorbutton = screen.getByRole("button", {
    name: "Change to blue",
  });
  fireEvent.click(colorbutton);

  fireEvent.click(checkbox);
  expect(colorbutton).toBeDisabled();
  expect(colorbutton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(colorbutton).toBeEnabled();
  expect(colorbutton).toHaveStyle({ backgroundColor: "blue" });
  //checkbox should be unchecked intially
});

describe("space before camel-case capital letters", () => {
  test("work for no inner capital letters", () => {
    expect(replaceCamleWithSpaces("Red")).toBe("Red");
  });

  test("work for one inner capital letters", () => {
    expect(replaceCamleWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("work for multiple inner capital letters", () => {
    expect(replaceCamleWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
