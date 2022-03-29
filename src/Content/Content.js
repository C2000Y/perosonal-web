import React, {Component} from 'react';
import Home from  './Home.js'

let content = "Home"

class Content extends Component {

  // checkAll = (event) => {
  //   this.props.check(event.target.checked);
  // };
  //
  handleChange = (type) => {
    this.content = type
    switch (this.content) {
      case "Home":
        return <Home/>
      case "Education":
        return <div>{this.content}</div>
      case "Work Experience":
        return <div>{this.content}</div>
      case "Project":
        return <div>{this.content}</div>
    }
  };

  render() {
    const {contentType} = this.props;
    const ctx = this.handleChange(contentType)
    return (
      <div style={{width: "100%", height: "100%"}}>
        {ctx}
      </div>
    );
  }
}

export default Content;