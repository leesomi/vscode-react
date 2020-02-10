import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppRedux from "./App-redux";
import * as serviceWorker from "./serviceWorker";

// egoing react
//ReactDOM.render(<App />, document.getElementById("root"));

// egoing react-redux
// https://github.com/egoing/react-redux-tutorial-example
ReactDOM.render(<AppRedux />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
