import React, { Component } from 'react';

  class TOC extends Component{
    constructor(props){
      super(props);
      var lists = [];
      var data = this.props.data;
      for(var i = 0; i < data.length; i++){
        lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      }
    }
    render(){
      return(
        <nav>
          <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">Javascript</a></li>
          </ul>
        </nav>
      );
    }
  }

  export default TOC;