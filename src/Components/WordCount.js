import React from "react";
import { connect } from "react-redux";

const Keyboard = ({ keyboardInputValue }) => {
  const wordNumbers = keyboardInputValue.split(" ").filter(s => s !== "")
    .length;

  const message =
    wordNumbers > 10
      ? `Good job! You typed ${wordNumbers} words`
      : `You typed ${wordNumbers} words`;

  return <h2 children={[message]} />;
};

const mapStateToProps = state => {
  return {
    keyboardInputValue: state.keyboardInputValue
  };
};

export const connectKeyboardInputValue = connect(mapStateToProps);

export const ConnectedWordCount = connectKeyboardInputValue(Keyboard);
