import { useState } from "react";
import "./App.css";

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
          style={{ backgroundColor: buttonColor }}
          disabled={isDisabled}
        >
          Change to {newButtonColor}
        </button>
        <input
          type="checkbox"
          id="enable-button-checkbox"
          defaultChecked={isDisabled}
          aria-checked={isDisabled}
          onChange={handleCheckbox}
        />
      </div>
    </div>
  );
}

export default App;
