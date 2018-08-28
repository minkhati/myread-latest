import React from 'react';
import * as BooksAPI from '../apis/BooksAPI';
import { Route } from 'react-router-dom';

import '../App.css';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({
        books
      })
    );
  }

  handleChangeShelf = (newBook: any, newShelf: string) => {
    BooksAPI.update(newBook, newShelf).then(response => {
      newBook.shelf = newShelf;
      var updatedBooks = this.state.books.filter(
        curBook => curBook.id !== newBook.id
      );

      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks });
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks books={books} onChangeShelf={this.handleChangeShelf} />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBook books={books} onChangeShelf={this.handleChangeShelf} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
