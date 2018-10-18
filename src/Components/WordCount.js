import React from "react";

export default ({ keyboardInputValue }) => {
  const wordNumbers = keyboardInputValue.split(" ").filter(s => s !== "")
    .length;

  const message =
    wordNumbers > 10
      ? `Good job! You typed ${wordNumbers} words`
      : `You typed ${wordNumbers} words`;

  return <h2 children={[message]} />;
};
