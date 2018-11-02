import React, { Component } from 'react';
import './Pin.css';

class Pin extends Component {
  static defaultProps = {};

  render() {
    const { pinHandler, active, text } = this.props;
    return (
      <div
        onClick={pinHandler}
        className={`map__pin${active ? ' map__pin--active' : ''}`}
      >
        {text}
      </div>
    );
  }
}

export default Pin;
