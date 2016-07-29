import React, { Component } from 'react';

class BooksList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BooksList">
        <table>
          {
            this.props.books.map(book => {
              return <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author.name}</td>
                <td>{book.author.gender}</td>
                <td>{book.genre}</td>
                <td>{book.publishedAt}</td>
              </tr>
            })
          }
        </table>
      </div>
    );
  }
}

export default BooksList;
