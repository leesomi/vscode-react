import React, { Component } from "react";

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        DisplayNumber
        <br></br>
        <input type="text" value={0} readonly></input>
      </div>
    );
  }
}
