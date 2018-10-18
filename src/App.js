import React, { Component } from "react";
import Typewriter from "./Components/Typewriter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          React (and soon) Redux typewriter
        </h1>
        <Typewriter />
      </>
    );
  }
}

export default App;
