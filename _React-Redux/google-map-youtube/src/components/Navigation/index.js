import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  navHandler = (e) => {
    let { index, history } = this.props;
    const historyLength = history.length - 1;
    switch (e.target.name) {
      case 'back':
        index = index <= 0 ? 0 : (index -= 1);
        break;
      case 'forward':
        index = index >= historyLength ? historyLength : (index += 1);
        break;
      default:
        break;
    }
    this.props.selectPosition(index);
  };
  render() {
    const { index, history } = this.props;
    return (
      <div className="navigation">
        <div className="navigation__itm">
          <button
            name="back"
            onClick={this.navHandler}
            className="navigation__btn"
            disabled={index <= 0}
          >
            Back
          </button>
        </div>
        <div className="navigation__itm">
          <button
            name="forward"
            className="navigation__btn"
            onClick={this.navHandler}
            disabled={!history.length || index >= history.length - 1}
          >
            Forward
          </button>
        </div>
      </div>
    );
  }
}

export default Navigation;
