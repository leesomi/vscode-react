import React, { Component } from "react";
import AddNumberRoot from "./redux-components/AddNumberRoot";
import DisplayNumberRoot from "./redux-components/DisplayNumberRoot";
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
