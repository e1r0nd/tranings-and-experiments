import React from "react";

class Li extends React.Component {
  render() {
    const { text } = this.props;
    return <li className="App-link">{text}</li>;
  }
}

export default Li;
