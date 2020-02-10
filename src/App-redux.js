import React, { Component } from "react";
import AddNumberRoot from "./redux-conponents/AddNumberRoot";
import DisplayNumberRoot from "./redux-conponents/DisplayNumberRoot";
import "./App.css";

class AppRedux extends Component {
  render() {
    return (
      <div>
        Root
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default AppRedux;
