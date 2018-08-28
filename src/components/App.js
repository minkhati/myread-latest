import React from 'react';
import * as BooksAPI from '../apis/BooksAPI';

import '../App.css';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => console.log(books.length));
  }

  render() {
    const books = this.state;

    return (
      <div className="app">
        <ListBooks />
      </div>
    );
  }
}

export default BooksApp;
