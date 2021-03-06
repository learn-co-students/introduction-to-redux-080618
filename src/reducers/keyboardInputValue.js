import { SET_NEW_INPUT_VALUE } from "../actions";

export default function keyboardInputValue(
  state = "This comes from Redux",
  action
) {
  //debugger;
  switch (action.type) {
    case SET_NEW_INPUT_VALUE:
      return action.payload;
    default:
      return state;
  }
}

// export default function todos(
//   state =[],
//   action
// ) {
//   switch (action.type) {
//     case "ADD_NEW_TODO":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

// keyboardInputValueReducer(null, {
//   type: "SET_NEW_INPUT_VALUE",
//   payload: "Ciao"
// }); // => "Ciao"
