import React, { Component } from "react";
import DisplayNumber from "../redux-components/DisplayNumber";
import store from "../store";

export default class extends Component {
  state = { number: store.getState().number };
  constructor(props) {
    super(props);
    store.subscribe(
      function() {
        console.log("store값 변경");
        this.setState({
          number: store.getState().number
        });
      }.bind(this)
    );
  }
  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>;
  }
}
