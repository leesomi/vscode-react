import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 0,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "welcome", desc: "Hello, React!" },
      contents: [
        { id: 0, title: "HTML", desc: "HTML is for information" },
        { id: 1, title: "CSS", desc: "CSS is for design" },
        { id: 2, title: "Javascript", desc: "Javascript is for interactive" }
      ]
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var selected = this.state.selected_content_id;
      _title = this.state.contents[selected].title;
      _desc = this.state.contents[selected].desc;
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({
              mode: "welcome"
            });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function(id) {
            this.setState({
              mode: "read",
              selected_content_id: id
            });
          }.bind(this)}
        ></TOC>
        <Control
          onChangeMode={function(_mode) {
            this.setState({
              mode: _mode
            });
          }.bind(this)}
        ></Control>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
