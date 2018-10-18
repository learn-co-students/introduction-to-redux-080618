function keyboardInputValueReducer(state = "", action) {
  switch (action.type) {
    case "SET_NEW_INPUT_VALUE":
      return action.payload;
    default:
      return state;
  }
}

// keyboardInputValueReducer(null, {
//   type: "SET_NEW_INPUT_VALUE",
//   payload: "Ciao"
// }); // => "Ciao"
