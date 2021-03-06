import React, { Component } from "react";
export default class AddNumber extends Component {
  state = { size: 1 };
  render() {
    return (
      <div>
        AddNumber
        <br></br>
        <input
          type="button"
          value="+"
          onClick={function() {
            console.log("AddNumber onClick");
            this.props.onClick(this.state.size);
          }.bind(this)}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={function(e) {
            this.setState({
              size: Number(e.target.value)
            });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
