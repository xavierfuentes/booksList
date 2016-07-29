import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Book from './Book';
import BooksList from './BooksList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialBooks: this.getBooks(),
      books: this.getBooks(),
    }
  }

  getBooks() {
    let books = [];
    for (let i = 0; i < 20; i++) books.push(new Book())
    return books;
  }

  filterBooksBy(key, event) {
    let updatedList = this.state.initialBooks;
    
    updatedList = updatedList.filter(item => {
      return item[key].toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    
    this.setState({books: updatedList});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Casumo Test</h2>
        </div>
        <div className="App-intro">
          <article>
            <label>Filter by genre</label>
            <input type="text" placeholder="Type a genre" onChange={this.filterBooksBy.bind(this, 'genre')}/>
          </article>
          
          <BooksList books={this.state.books}/>
        </div>
      </div>
    );
  }
}

export default App;
