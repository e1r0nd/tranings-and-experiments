import React, { Component } from 'react';
import Map from '../Map';
import YTSearch from '../Youtube';
import Navigation from '../Navigation';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      history: [
        {
          lat: 59.95,
          lng: 30.33,
        },
      ],
    };
  }

  addPosition = (position) => {
    const { history } = this.state;
    history.push(position);
    const index = history.length - 1;
    this.setState({ index, position });
  };

  selectPosition = (index) => {
    this.setState({ index });
  };

  render() {
    const { index, history } = this.state;

    return (
      <div className="app">
        <div className="app__main">
          <Map
            index={index}
            history={history}
            selectPosition={this.selectPosition}
            addPosition={this.addPosition}
          />
          <YTSearch position={history[index]} />
        </div>
        <Navigation
          selectPosition={this.selectPosition}
          index={index}
          history={history}
        />
      </div>
    );
  }
}

export default App;
