import React, { Component, PropTypes } from 'react';

class Header extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
            return <a href={item.link} key={index}>{item.label}</a>
        })}
      </div>
    );
  }
}

export default Header;
