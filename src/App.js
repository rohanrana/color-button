import { useState } from "react";
import "./App.css";

export function replaceCamleWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isDisabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const handleCheckbox = (e) => {
    setDisabled(e.target.checked);
  };
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setButtonColor(newButtonColor);
          }}
          style={{ background: isDisabled ? "gray" : buttonColor }}
          disabled={isDisabled}
        >
          Change to {newButtonColor}
        </button>
        <input
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={isDisabled}
          aria-checked={isDisabled}
          onChange={handleCheckbox}
        />
        <label htmlFor="disable-button-checkbox">Disable Button</label>
      </div>
    </div>
  );
}

export default App;
