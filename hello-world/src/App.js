import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Dropdown from './Dropdown';
import './App.css';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacrs'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header items={menu} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dropdown />
      </div>
    );
  }
}

export default App;
