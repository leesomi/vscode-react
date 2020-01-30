import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //컨텐츠가 변경되었을 경우 render()가 실행되게끔.
    //그렇지 않을 경우에는 불필요한 render()가 일어나지 않게끔.
    if (this.props.data === nextProps.data) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log("TOC Render");
    var lists = [];
    var data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
