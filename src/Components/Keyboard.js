import React from "react";

export default ({ keyboardInputValue, handleKeyboardInput }) => {
  return (
    <input
      style={{
        width: "100%",
        fontSize: "3rem",
        outline: "none",
        border: "none",
        borderBottom: "1px dotted black"
      }}
      type="text"
      value={keyboardInputValue}
      onChange={handleKeyboardInput}
    />
  );
};
