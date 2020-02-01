import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import UpdateContent from "./components/UpdateContent";
import CreateContent from "./components/CreateContent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "create",
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
  getReadContent() {
    var selected = this.state.selected_content_id;
    var data = this.state.contents[selected];
    return data;
  }
  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      //var selected = this.state.selected_content_id;
      _title = this.getReadContent().title;
      _desc = this.getReadContent().desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function(_title, _desc) {
            var _addContent = this.state.contents.concat({
              id: this.state.contents.length,
              title: _title,
              desc: _desc
            });
            this.setState({
              contents: _addContent
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      _article = (
        <UpdateContent
          data={this.getReadContent()}
          onSubmit={function(_title, _desc) {
            var _addContent = this.state.contents.concat({
              id: this.state.contents.length,
              title: _title,
              desc: _desc
            });
            this.setState({
              contents: _addContent
            });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }
  render() {
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
        {this.getContent()}
      </div>
    );
  }
}

export default App;
