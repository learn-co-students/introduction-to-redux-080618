import React, { Component } from "react";
import Keyboard from "./Keyboard";
import WordCount from "./WordCount";
import RbOrJs from "./RbOrJS";

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
