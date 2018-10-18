import React from "react";
import { connect } from "react-redux";

const Keyboard = ({ keyboardInputValue, handleKeyboardInput }) => {
  console.log(keyboardInputValue);
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

const mapStateToProps = state => {
  return {
    keyboardInputValue: state.keyboardInputValue
  };
};

export default connect(mapStateToProps)(Keyboard);
