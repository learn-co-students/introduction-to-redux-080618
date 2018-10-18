import React, { Component } from "react";
import Keyboard from "./Keyboard";
import { ConnectedWordCount } from "./WordCount";
import RbOrJs from "./RbOrJS";
import { connect } from "react-redux";
import { SET_NEW_INPUT_VALUE } from "../actions";

class Typewriter extends Component {
  // state = {
  //   keyboardInputValue: ""
  // };

  // handleKeyboardInput = ({ target: { value: keyboardInputValue } }) =>
  //   this.setState({ keyboardInputValue });

  handleKeyboardInput = event => {
    const action = {
      type: SET_NEW_INPUT_VALUE,
      payload: event.target.value
    };
    //debugger;
    this.props.dispatchKeyboardInputChanges(action);
  };

  render() {
    //debugger;
    return (
      <>
        <Keyboard handleKeyboardInput={this.handleKeyboardInput} />
        <ConnectedWordCount />
        <RbOrJs />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { keyboardInputValue: state.keyboardInputValue };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchKeyboardInputChanges: function(action) {
      dispatch(action);
    }
  };
}

//const connectKeyboardInputValue = connect(mapStateToProps);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Typewriter);
