import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Book from './Book';

class App extends Component {
  render() {
    const book = new Book();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <pre>{JSON.stringify(book, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
