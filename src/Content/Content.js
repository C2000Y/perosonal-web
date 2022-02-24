import React, { Component } from 'react';

class Content extends Component {

  // checkAll = (event) => {
  //   this.props.check(event.target.checked);
  // };
  //
  // handleClearDone = () => {
  //   this.props.clearAllDone();
  // };

  render() {
    const {contentType} = this.props;
    return (
      <div>
        {contentType}
      </div>
    );
  }
}
export default Content;