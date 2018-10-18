import React, { Component } from "react";
import Keyboard from "./Keyboard";
import WordCount from "./WordCount";
import RbOrJs from "./RbOrJS";
import { connect } from "react-redux";

class Typewriter extends Component {
  state = {
    keyboardInputValue: ""
  };

  handleKeyboardInput = ({ target: { value: keyboardInputValue } }) =>
    this.setState({ keyboardInputValue });

  render() {
    return (
      <>
        <Keyboard
          keyboardInputValue={this.props.keyboardInputValue}
          handleKeyboardInput={this.handleKeyboardInput}
        />
        <WordCount keyboardInputValue={this.state.keyboardInputValue} />
        <RbOrJs keyboardInputValue={this.state.keyboardInputValue} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { keyboardInputValue: state.keyboardInputValue };
}

export default connect(mapStateToProps)(Typewriter);
