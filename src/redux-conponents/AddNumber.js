import React, { Component } from "react";

export default class AddNumber extends Component {
  render() {
    return (
      <div>
        AddNumber
        <br></br>
        <input type="button" value="+"></input>
        <input type="text" value={0}></input>
      </div>
    );
  }
}
