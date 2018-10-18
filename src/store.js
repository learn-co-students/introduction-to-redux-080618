import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(rootReducer);
//debugger;

// console.log(
//   `The current store state is ${store.getState().keyboardInputValue}`
// );

// setTimeout(() => {
//   const action = {
//     type: "SET_NEW_INPUT_VALUE",
//     payload: "New input value"
//   };
//   store.dispatch(action);
//   console.log(
//     `The new version of the store state is ${
//       store.getState().keyboardInputValue
//     }`
//   );
// }, 2000);
