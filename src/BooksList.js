import React, { Component } from 'react';

import Book from './Book';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: this.getBooks(),
    }
  }

  getBooks() {
    let books = [];
    for (let i = 0; i < 10; i++) books.push(new Book())
    return books;
  }

  render() {
    return (
      <div className="BooksList">
        <ul>
          {
            this.state.books.map(book => {
              return <li key={book.id}>{book.title}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default BooksList;
