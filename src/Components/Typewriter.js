import React, { Component } from "react";
import Keyboard from "./Keyboard";
import WordCount from "./WordCount";
import RbOrJs from "./RbOrJS";
import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);
//debugger;

console.log(
  `The current store state is ${store.getState().keyboardInputValue}`
);

setTimeout(() => {
  const action = {
    type: "SET_NEW_INPUT_VALUE",
    payload: "New input value"
  };
  store.dispatch(action);
  console.log(
    `The new version of the store state is ${
      store.getState().keyboardInputValue
    }`
  );
}, 2000);

export default class Typewriter extends Component {
  state = {
    keyboardInputValue: ""
  };

  handleKeyboardInput = ({ target: { value: keyboardInputValue } }) =>
    this.setState({ keyboardInputValue });

  render() {
    return (
      <>
        <Keyboard
          keyboardInputValue={this.state.keyboardInputValue}
          handleKeyboardInput={this.handleKeyboardInput}
        />
        <WordCount keyboardInputValue={this.state.keyboardInputValue} />
        <RbOrJs keyboardInputValue={this.state.keyboardInputValue} />
      </>
    );
  }
}
