import React from "react";

export default ({ keyboardInputValue }) => {
  const { rb, js } = keyboardInputValue.split(" ").reduce(
    (acc, cv) => {
      if (cv.toLowerCase() === "rb") {
        acc.rb++;
      } else if (cv.toLowerCase() === "js") {
        acc.js++;
      }
      return acc;
    },
    {
      rb: 0,
      js: 0
    }
  );

  return (
    <>
      <h2>Rb love karma {rb}</h2>
      <h2>JS love karma {js}</h2>
    </>
  );
};
