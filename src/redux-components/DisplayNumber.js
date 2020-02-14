import React, { Component } from "react";

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        DisplayNumber
        <br></br>
        <input type="text" value={this.props.number} readOnly></input>
      </div>
    );
  }
}
