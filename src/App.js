import React, { Component } from "react";
import Typewriter from "./Components/Typewriter";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

//console.log(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <h1 style={{ textAlign: "center" }}>
            React (and soon) Redux typewriter
          </h1>
          <Typewriter />
        </>
      </Provider>
    );
  }
}

export default App;
