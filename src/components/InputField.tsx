import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InputField.css";

function InputField() {
  const [placeholder, setPlaceholder] = useState("type here");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center">
      <input
        type="text"
        className="form-control custom-input"
        placeholder={placeholder}
        value={inputValue}
        onFocus={() => setPlaceholder("")}
        onBlur={() => {
          if (inputValue === "") {
            setPlaceholder("type here");
          }
        }}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default InputField;
